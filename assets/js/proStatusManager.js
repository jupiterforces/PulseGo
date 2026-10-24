/**
 * PulseGo Pro Status Manager
 * Centralized module for managing user pro/free status
 * - localStorage caching with 5-day refresh
 * - Firestore sync
 * - Expiration date handling
 * - Free user tracking
 */

import {
  auth,
  db,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "../../firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const STORAGE_KEY_PRO_STATUS = "pulsego_pro_status_v2";
const STORAGE_KEY_FREE_STATUS = "pulsego_free_status_v2";
const CACHE_REFRESH_DAYS = 5;
const CACHE_REFRESH_MS = CACHE_REFRESH_DAYS * 24 * 60 * 60 * 1000;

/**
 * Pro Status Object Structure:
 * {
 *   isPro: boolean,
 *   expirationDate: ISO date string or null,
 *   status: "pro" | "free",
 *   syncedAt: ISO date string,
 *   cacheExpires: ISO date string
 * }
 */

// ============================================================================
// CACHE MANAGEMENT
// ============================================================================

function getCachedProStatus() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PRO_STATUS);
    if (!raw) return null;

    const cached = JSON.parse(raw);
    if (!cached.cacheExpires) return null;

    const now = new Date();
    const expires = new Date(cached.cacheExpires);

    if (now > expires) {
      console.log("🔄 Pro status cache expired, will refresh from Firestore");
      localStorage.removeItem(STORAGE_KEY_PRO_STATUS);
      return null;
    }

    console.log("📦 Using cached pro status:", cached);
    return cached;
  } catch (e) {
    console.error("Failed to parse pro status cache", e);
    return null;
  }
}

function setCachedProStatus(statusObj) {
  try {
    const cacheExpires = new Date(Date.now() + CACHE_REFRESH_MS).toISOString();
    const toStore = {
      ...statusObj,
      cacheExpires,
      syncedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY_PRO_STATUS, JSON.stringify(toStore));
    console.log("💾 Cached pro status:", toStore);
  } catch (e) {
    console.error("Failed to cache pro status", e);
  }
}

function getCachedFreeStatus() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FREE_STATUS);
    if (!raw) return null;

    const cached = JSON.parse(raw);
    if (!cached.cacheExpires) return null;

    const now = new Date();
    const expires = new Date(cached.cacheExpires);

    if (now > expires) {
      console.log("🔄 Free status cache expired");
      localStorage.removeItem(STORAGE_KEY_FREE_STATUS);
      return null;
    }

    return cached;
  } catch (e) {
    return null;
  }
}

function setCachedFreeStatus(uid) {
  try {
    const cacheExpires = new Date(Date.now() + CACHE_REFRESH_MS).toISOString();
    const toStore = {
      uid,
      isFree: true,
      status: "free",
      cacheExpires,
      syncedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY_FREE_STATUS, JSON.stringify(toStore));
    console.log("💾 Cached free status for uid:", uid);
  } catch (e) {
    console.error("Failed to cache free status", e);
  }
}

// ============================================================================
// FIRESTORE OPERATIONS
// ============================================================================

/**
 * Check user pro status from Firestore
 * Returns { isPro, expirationDate, status }
 */
async function checkProStatusFromFirestore(uid) {
  try {
    if (!uid) {
      console.log("❌ No UID provided for pro check");
      return { isPro: false, status: "free", expirationDate: null };
    }

    const userRef = doc(db, "user", uid);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      console.log("❌ User document not found in Firestore");
      return { isPro: false, status: "free", expirationDate: null };
    }

    const userData = snapshot.data();
    const rawStatus = userData?.status;
    const expirationDate = userData?.expirationDate;

    // Normalize status from various formats
    let isPro = false;
    let normalizedStatus = "free";

    if (typeof rawStatus === "string") {
      isPro = rawStatus.toLowerCase() === "pro";
    } else if (typeof rawStatus === "object" && !Array.isArray(rawStatus)) {
      isPro =
        String(rawStatus.plan || rawStatus.name || "").toLowerCase() === "pro";
    } else if (Array.isArray(rawStatus)) {
      isPro = rawStatus.some((s) => String(s).toLowerCase() === "pro");
    }

    if (isPro) normalizedStatus = "pro";

    // Check expiration if pro
    if (isPro && expirationDate) {
      const expiresAt = expirationDate?.toDate
        ? expirationDate.toDate()
        : new Date(expirationDate);
      if (Number.isNaN(expiresAt.getTime()) || expiresAt <= new Date()) {
        console.log("⏰ Pro subscription expired");
        isPro = false;
        normalizedStatus = "free";
      }
    }

    return {
      isPro,
      status: normalizedStatus,
      expirationDate: expirationDate
        ? expirationDate?.toDate
          ? expirationDate.toDate().toISOString()
          : new Date(expirationDate).toISOString()
        : null,
    };
  } catch (error) {
    console.error("❌ Error checking pro status from Firestore:", error);
    return { isPro: false, status: "free", expirationDate: null };
  }
}

/**
 * Write pro status to Firestore for consistency
 */
async function writeProStatusToFirestore(uid, isPro, expirationDate) {
  try {
    if (!uid) return;

    const userRef = doc(db, "user", uid);
    const updateData = {
      status: isPro ? "pro" : "free",
      updatedAt: serverTimestamp(),
    };

    if (isPro && expirationDate) {
      updateData.expirationDate = new Date(expirationDate);
    }

    await setDoc(userRef, updateData, { merge: true });
    console.log("✅ Pro status written to Firestore:", updateData);
  } catch (error) {
    console.error("❌ Failed to write pro status to Firestore:", error);
  }
}

// ============================================================================
// MAIN FUNCTIONS: GET USER PRO STATUS
// ============================================================================

/**
 * Get user pro status with smart caching
 * Priority: localStorage cache → Firestore → default free
 * Returns { isPro, status: "pro"|"free", expirationDate, cached: boolean }
 */
export async function getProStatus(uid) {
  console.log("🔍 Getting pro status for uid:", uid);

  if (!uid) {
    console.log("❌ No UID provided");
    return {
      isPro: false,
      status: "free",
      expirationDate: null,
      cached: false,
    };
  }

  // 1. Check localStorage cache first
  const cached = getCachedProStatus();
  if (cached) {
    console.log("✅ Using cached pro status");
    return { ...cached, cached: true };
  }

  // 2. Fetch from Firestore
  console.log("📡 Fetching pro status from Firestore...");
  const fsStatus = await checkProStatusFromFirestore(uid);

  // 3. Cache the result
  setCachedProStatus(fsStatus);

  // 4. If free, also cache free status metadata
  if (!fsStatus.isPro) {
    setCachedFreeStatus(uid);
  }

  return { ...fsStatus, cached: false };
}

/**
 * Get user status with all details
 * Returns: { uid, firstName, lastName, fullName, status, isPro, expirationDate, email, photoURL }
 */
export async function getUserFullStatus(uid) {
  try {
    if (!uid) {
      return { status: "free", isPro: false, expirationDate: null };
    }

    const userRef = doc(db, "user", uid);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      return { status: "free", isPro: false, expirationDate: null };
    }

    const userData = snapshot.data();
    const proStatus = await getProStatus(uid);

    return {
      uid: userData.uid || uid,
      firstName: userData.firstName || "",
      lastName: userData.lastName || "",
      fullName:
        userData.fullName ||
        `${userData.firstName || ""} ${userData.lastName || ""}`.trim(),
      email: userData.email || "",
      photoURL: userData.photoURL || "",
      status: proStatus.status,
      isPro: proStatus.isPro,
      expirationDate: proStatus.expirationDate,
    };
  } catch (error) {
    console.error("Error getting full user status:", error);
    return { status: "free", isPro: false, expirationDate: null };
  }
}

/**
 * Check if user is pro (simple boolean)
 */
export async function isUserPro(uid) {
  const status = await getProStatus(uid);
  return status.isPro === true;
}

/**
 * Format expiration date for display
 */
export function formatExpirationDate(expirationDate) {
  if (!expirationDate) return null;

  try {
    const date = new Date(expirationDate);
    return date.toLocaleDateString("uz-UZ", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch (e) {
    return null;
  }
}

/**
 * Get days remaining for pro subscription
 */
export function getDaysRemaining(expirationDate) {
  if (!expirationDate) return null;

  try {
    const expires = new Date(expirationDate);
    const now = new Date();
    const diffTime = expires - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  } catch (e) {
    return null;
  }
}

/**
 * Clear all cached pro status
 */
export function clearProStatusCache() {
  try {
    localStorage.removeItem(STORAGE_KEY_PRO_STATUS);
    localStorage.removeItem(STORAGE_KEY_FREE_STATUS);
    console.log("✅ Pro status cache cleared");
  } catch (e) {
    console.error("Failed to clear cache", e);
  }
}

/**
 * Force refresh pro status from Firestore
 */
export async function refreshProStatus(uid) {
  console.log("🔄 Force refreshing pro status for uid:", uid);
  clearProStatusCache();
  return await getProStatus(uid);
}

// ============================================================================
// AUTH STATE LISTENER
// ============================================================================

let currentAuthUser = null;

/**
 * Initialize pro status manager with auth listener
 */
export function initProStatusManager() {
  onAuthStateChanged(auth, (user) => {
    currentAuthUser = user;
    if (user) {
      console.log("👤 Auth user detected:", user.uid);
      // Pre-load pro status when auth changes
      getProStatus(user.uid).catch((e) =>
        console.error("Failed to pre-load pro status:", e),
      );
    } else {
      console.log("👤 Auth user logged out");
      clearProStatusCache();
    }
  });
}

export function getCurrentAuthUser() {
  return currentAuthUser;
}

// ============================================================================
// EXPORT ALL FUNCTIONS
// ============================================================================

export default {
  getProStatus,
  getUserFullStatus,
  isUserPro,
  formatExpirationDate,
  getDaysRemaining,
  clearProStatusCache,
  refreshProStatus,
  initProStatusManager,
  getCurrentAuthUser,
  writeProStatusToFirestore,
  checkProStatusFromFirestore,
};
