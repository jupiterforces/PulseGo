/**
 * PulseGo Sidebar Status Manager
 * Updates sidebar with user pro/free status and expiration date
 * Syncs across all pages
 */

import {
  getProStatus,
  formatExpirationDate,
  getDaysRemaining,
  initProStatusManager,
} from "./proStatusManager.js";
import { auth } from "../../firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

let currentUser = null;

// ============================================================================
// UPDATE SIDEBAR USER INFO
// ============================================================================

/**
 * Update sidebar with user name and pro status
 */
export async function updateSidebarUserInfo(user) {
  try {
    const sidebarUserName = document.getElementById("sidebarUserName");
    const sidebarUserSub = document.querySelector(".sidebar-user-sub");
    const sidebarAvatarText = document.getElementById("sidebarAvatarText");

    if (!sidebarUserName || !sidebarUserSub) {
      console.warn("Sidebar user elements not found");
      return;
    }

    if (!user) {
      sidebarUserName.textContent = "Foydalanuvchi";
      sidebarUserSub.textContent = "Pulse Go Member";
      if (sidebarAvatarText) sidebarAvatarText.textContent = "P";
      return;
    }

    // Get user name from localStorage cache
    const cached = localStorage.getItem("pulsego_user_v1");
    const cachedUser = cached ? JSON.parse(cached) : null;
    const fullName =
      cachedUser?.fullName ||
      cachedUser?.firstName ||
      user.displayName ||
      "Foydalanuvchi";

    // Update name
    sidebarUserName.textContent = fullName;

    // Get first letter for avatar
    const initial = fullName.charAt(0).toUpperCase();
    if (sidebarAvatarText) sidebarAvatarText.textContent = initial;

    // Get pro status
    const proStatus = await getProStatus(user.uid);

    // Update sub text based on status
    if (proStatus.isPro && proStatus.expirationDate) {
      const formattedDate = formatExpirationDate(proStatus.expirationDate);
      const daysLeft = getDaysRemaining(proStatus.expirationDate);

      let statusText = `💎 Pro - hangacha ${formattedDate}`;
      if (daysLeft !== null && daysLeft <= 7) {
        statusText += ` (${daysLeft} kun)`;
      }

      sidebarUserSub.textContent = statusText;
      sidebarUserSub.style.color = "#8b5cf6"; // Purple for pro
    } else if (proStatus.status === "pro") {
      // Pro but no expiration (shouldn't happen)
      sidebarUserSub.textContent = "💎 Pro ta'rigifa o'tish";
      sidebarUserSub.style.color = "#8b5cf6";
    } else {
      // Free user
      sidebarUserSub.textContent = "Pro ta'rigifa o'tish";
      sidebarUserSub.style.color = "#3b82f6"; // Blue for free
    }

    // Apply click handler to go to billing
    const sidebarUserElement = document.querySelector(".sidebar-user");
    if (sidebarUserElement) {
      sidebarUserElement.style.cursor = "pointer";
      sidebarUserElement.onclick = (e) => {
        e.preventDefault();
        window.location.href = "/billing/";
      };
    }

    console.log("✅ Sidebar user info updated");
  } catch (error) {
    console.error("Failed to update sidebar user info:", error);
  }
}

/**
 * Add message icon to sidebar
 */
export function addMessageIconToSidebar() {
  try {
    const sidebar = document.querySelector(".sidebar-nav");
    if (!sidebar) return;

    // Check if already added
    if (document.getElementById("sidebar-message-btn")) return;

    // Find the "Asosiy" section
    const asosiyLabel = Array.from(
      sidebar.querySelectorAll(".sidebar-section-label"),
    ).find((el) => el.textContent === "Asosiy");

    if (!asosiyLabel) return;

    // Insert message button before Find Partner in Asosiy section
    const findLink = Array.from(
      sidebar.querySelectorAll("a.sidebar-link"),
    ).find((el) => el.textContent.includes("Find Partner"));

    if (!findLink) return;

    const messageBtn = document.createElement("a");
    messageBtn.id = "sidebar-message-btn";
    messageBtn.href = "/find/";
    messageBtn.className = "sidebar-link";
    messageBtn.innerHTML = `<i class="bi bi-chat-dots-fill"></i> Xabarlar`;
    messageBtn.onclick = (e) => {
      e.preventDefault();
      closeSidebar();
      window.location.href = "/find/";
    };

    findLink.parentNode.insertBefore(messageBtn, findLink);
    console.log("✅ Message icon added to sidebar");
  } catch (error) {
    console.error("Failed to add message icon:", error);
  }
}

/**
 * Add admin chat option to sidebar
 */
export function addAdminChatOption() {
  try {
    const sidebar = document.querySelector(".sidebar-nav");
    if (!sidebar) return;

    // Check if already added
    if (document.getElementById("sidebar-admin-chat")) return;

    // Find or create "Boshqa" section
    let otherSection = Array.from(
      sidebar.querySelectorAll(".sidebar-section-label"),
    ).find((el) => el.textContent === "Boshqa" || el.textContent === "Other");

    if (!otherSection) {
      // Create new section
      const newSection = document.createElement("div");
      newSection.className = "sidebar-section-label";
      newSection.textContent = "Yordam";
      sidebar.appendChild(newSection);
      otherSection = newSection;
    }

    const adminBtn = document.createElement("a");
    adminBtn.id = "sidebar-admin-chat";
    adminBtn.href = "#";
    adminBtn.className = "sidebar-link";
    adminBtn.innerHTML = `<i class="bi bi-telephone-fill"></i> Admin bilan suhbat`;
    adminBtn.onclick = (e) => {
      e.preventDefault();
      closeSidebar();
      openAdminChatModal();
    };

    otherSection.insertAdjacentElement("afterend", adminBtn);
    console.log("✅ Admin chat option added to sidebar");
  } catch (error) {
    console.error("Failed to add admin chat option:", error);
  }
}

/**
 * Open admin chat modal (placeholder for now)
 */
function openAdminChatModal() {
  // This will be a modal for contacting admin
  // For now, open Telegram or email form
  const telegramUsername = "broinibek"; // Replace with your admin username
  const message = encodeURIComponent(
    "Assalamu alaykum! PulseGo dan savol bor.",
  );
  window.open(`https://t.me/${telegramUsername}?text=${message}`, "_blank");
}

/**
 * Close sidebar (global function can be called from HTML)
 */
window.closeSidebar = function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  if (sidebar) sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("show");
  document.body.style.overflow = "";
};

// ============================================================================
// INIT SIDEBAR MANAGER
// ============================================================================

export function initSidebarManager() {
  console.log("📌 Initializing sidebar manager...");

  // Initialize pro status manager first
  initProStatusManager();

  // Listen to auth changes
  onAuthStateChanged(auth, (user) => {
    currentUser = user;
    if (user) {
      console.log("👤 User authenticated, updating sidebar:", user.uid);
      updateSidebarUserInfo(user).then(() => {
        addMessageIconToSidebar();
        addAdminChatOption();
      });
    } else {
      console.log("👤 No user, resetting sidebar");
      updateSidebarUserInfo(null);
    }
  });
}

export default {
  updateSidebarUserInfo,
  addMessageIconToSidebar,
  addAdminChatOption,
  initSidebarManager,
};
