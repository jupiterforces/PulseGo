// ============================================
// PulseGo PRO CHECK
// /procheck/procheck.js
// ============================================

import { auth, db } from "../firebase.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ============================================
// WAIT FOR AUTH STATE
// ============================================

function getCurrentUser() {
  return new Promise((resolve) => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        try {
          unsubscribe();
        } catch (error) {
          console.error("❌ AUTH unsubscribe error:", error);
        }

        resolve(user || null);
      });
    } catch (error) {
      console.error("❌ onAuthStateChanged error:", error);
      resolve(null);
    }
  });
}

// ============================================
// SHOW PRO MODAL
// ============================================

async function showProModal(reason = "pro") {
  try {
    console.log("🪟 PRO modal opening. Reason:", reason);

    // Modal already exists
    if (document.getElementById("pulseProModal")) {
      console.log("ℹ️ PRO modal already exists");
      return;
    }

    console.log("📄 Loading /procheck/modal.html...");

    const modalUrl = new URL("/procheck/modal.html", import.meta.url);

    const response = await fetch(modalUrl);

    if (!response.ok) {
      throw new Error(`modal.html yuklanmadi: ${response.status}`);
    }

    const html = await response.text();

    console.log("✅ modal.html loaded");

    // ====================================================
    // MODAL HTML + STYLE NI TO'G'RI QO'SHISH
    // ====================================================

    const wrapper = document.createElement("div");
    wrapper.innerHTML = html.trim();

    // <style> elementlarini ham qo'shamiz
    wrapper.querySelectorAll("style").forEach((style) => {
      document.head.appendChild(style);
    });

    // Haqiqiy modalni topamiz
    const modalElement = wrapper.querySelector("#pulseProModal");

    if (!modalElement) {
      throw new Error("modal.html ichidan #pulseProModal topilmadi");
    }

    document.body.appendChild(modalElement);

    console.log("✅ PRO modal DOM'ga qo‘shildi");

    // ====================================================
    // REASON
    // ====================================================

    const title = document.getElementById("pulseProTitle");
    const description = document.getElementById("pulseProDescription");

    if (reason === "auth") {
      if (title) {
        title.textContent = "Kirish talab qilinadi";
      }

      if (description) {
        description.innerHTML =
          "Pro testni ishlash uchun avval " +
          "<strong>akkauntingizga kiring</strong>.";
      }
    } else if (reason === "no-profile") {
      if (title) {
        title.textContent = "Profil topilmadi";
      }

      if (description) {
        description.innerHTML =
          "Pro testni ishlash uchun " +
          "<strong>PulseGo profilingiz</strong> " +
          "bo‘lishi kerak.";
      }
    } else if (reason === "no-pro") {
      if (title) {
        title.textContent = "Bu test Pro uchun";
      }

      if (description) {
        description.innerHTML =
          "Ushbu testni ishlash uchun " +
          "<strong>Pro tarifiga</strong> " +
          "o‘tishingiz kerak.";
      }
    } else if (reason === "expired") {
      if (title) {
        title.textContent = "Pro muddati tugagan";
      }

      if (description) {
        description.innerHTML =
          "Sizning <strong>Pro obunangiz</strong> " +
          "muddati tugagan. Testni davom ettirish uchun " +
          "Pro tarifini yangilang.";
      }
    } else if (reason === "error") {
      if (title) {
        title.textContent = "Pro tekshiruvida xatolik";
      }

      if (description) {
        description.innerHTML =
          "Pro access tekshirilayotganda xatolik yuz berdi. " +
          "Iltimos, keyinroq qayta urinib ko‘ring.";
      }
    }

    // ====================================================
    // CLOSE
    // ====================================================

    const closeModal = () => {
      const modal = document.getElementById("pulseProModal");

      if (modal) {
        modal.remove();
        console.log("❎ PRO modal yopildi");
      }
    };

    document
      .getElementById("pulseProClose")
      ?.addEventListener("click", closeModal);

    document
      .getElementById("pulseProCloseBtn")
      ?.addEventListener("click", closeModal);

    // ====================================================
    // PLANS
    // ====================================================

    document.getElementById("pulseProPlans")?.addEventListener("click", () => {
      console.log("💎 Pro plans clicked");

      // TODO: pricing page / modal
    });
  } catch (error) {
    console.error("❌❌❌ PRO MODAL ERROR:", error);
    console.error("📌 Modal error message:", error?.message);
    console.error("📌 Modal error stack:", error?.stack);
  }
}
// ============================================
// CHECK PRO ACCESS
// ============================================
//
// MUHIM:
//
// Bu function O'ZI ISHLAMAYDI.
//
// Faqat:
//
// startTest()
//      ↓
// checkProAccess()
//
// orqali chaqiriladi.
//
// ============================================

export async function checkProAccess() {
  console.log("============================================");
  console.log("🔐 PRO CHECK STARTED");
  console.log("============================================");

  try {
    // ========================================
    // 1. AUTH CHECK
    // ========================================

    console.log("🔎 [PRO CHECK 1/6] Checking authentication...");

    const currentUser = await getCurrentUser();

    if (!currentUser) {
      console.error("❌ [PRO CHECK 1/6] User is NOT authenticated");

      await showProModal("auth");

      return false;
    }

    console.log("✅ [PRO CHECK 1/6] Authenticated");
    console.log("👤 UID:", currentUser.uid);

    // ========================================
    // 2. FIRESTORE USER
    // ========================================

    console.log("🔎 [PRO CHECK 2/6] Loading Firestore user...");

    const userRef = doc(db, "user", currentUser.uid);

    console.log("☁️ Firestore path:");
    console.log(`user/${currentUser.uid}`);

    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      console.error("❌ [PRO CHECK 2/6] Firestore user document NOT FOUND");

      await showProModal("no-profile");

      return false;
    }

    const userData = snapshot.data();

    console.log("✅ [PRO CHECK 2/6] Firestore user found");
    console.log("👤 PulseGo user data:", userData);

    // ========================================
    // 3. STATUS
    // ========================================

    console.log("🔎 [PRO CHECK 3/6] Checking status...");

    const status = userData.status;

    console.log("📌 Raw status:", status);

    if (!status || (Array.isArray(status) && status.length === 0)) {
      console.error("❌ [PRO CHECK 3/6] User has NO status");

      await showProModal("no-pro");

      return false;
    }

    // ========================================
    // 4. STATUS NORMALIZATION
    // ========================================

    console.log("🔎 [PRO CHECK 4/6] Normalizing Pro status...");

    let isPro = false;
    let expirationDate = null;

    // ----------------------------------------
    // status: "Pro"
    // ----------------------------------------

    if (typeof status === "string") {
      console.log("📌 Status format: string");

      isPro = status.toLowerCase() === "pro";

      expirationDate = userData.expirationDate || null;
    }

    // ----------------------------------------
    // status: { plan: "Pro" }
    // ----------------------------------------

    if (typeof status === "object" && !Array.isArray(status)) {
      console.log("📌 Status format: object");

      isPro =
        String(
          status.plan || status.name || status.type || "",
        ).toLowerCase() === "pro";

      expirationDate = status.expirationDate || userData.expirationDate || null;
    }

    // ----------------------------------------
    // status: ["Pro"]
    // ----------------------------------------

    if (Array.isArray(status)) {
      console.log("📌 Status format: array");

      isPro = status.some((value) => String(value).toLowerCase() === "pro");

      expirationDate = userData.expirationDate || null;
    }

    console.log("💎 Is Pro:", isPro);
    console.log("📅 Expiration:", expirationDate);

    // ========================================
    // 5. PRO STATUS
    // ========================================

    if (!isPro) {
      console.error("❌ [PRO CHECK 5/6] User is NOT Pro");

      await showProModal("no-pro");

      return false;
    }

    console.log("✅ [PRO CHECK 5/6] User IS Pro");

    // ========================================
    // 6. EXPIRATION
    // ========================================

    console.log("🔎 [PRO CHECK 6/6] Checking expiration...");

    if (!expirationDate) {
      console.error("❌ [PRO CHECK 6/6] Pro expiration date is MISSING");

      await showProModal("expired");

      return false;
    }

    const expiresAt = expirationDate?.toDate
      ? expirationDate.toDate()
      : new Date(expirationDate);

    const now = new Date();

    console.log("📅 Pro expires:", expiresAt);
    console.log("🕐 Current time:", now);

    // ----------------------------------------
    // INVALID DATE
    // ----------------------------------------

    if (Number.isNaN(expiresAt.getTime())) {
      console.error("❌ [PRO CHECK 6/6] Invalid expiration date");

      console.error("📌 Received expirationDate:", expirationDate);

      await showProModal("expired");

      return false;
    }

    // ----------------------------------------
    // EXPIRED
    // ----------------------------------------

    if (expiresAt <= now) {
      console.error("❌ [PRO CHECK 6/6] Pro subscription EXPIRED");

      await showProModal("expired");

      return false;
    }

    // ========================================
    // ACCESS GRANTED
    // ========================================

    console.log("============================================");
    console.log("💎💎💎 PRO ACCESS GRANTED 💎💎💎");
    console.log("============================================");

    return true;
  } catch (error) {
    console.error("============================================");
    console.error("❌❌❌ PRO CHECK FAILED");
    console.error("============================================");

    console.error("📌 Error:", error);
    console.error("📌 Error message:", error?.message);
    console.error("📌 Error name:", error?.name);
    console.error("📌 Error stack:", error?.stack);

    await showProModal("error");

    return false;
  }
}
