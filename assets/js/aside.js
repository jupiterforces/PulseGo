/**
 * PulseGo — Global Sidebar Controller
 * Works with existing sidebar HTML.
 * Does NOT create or replace HTML.
 */

(() => {
  "use strict";

  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  // Stop safely if this page does not contain a sidebar.
  if (!sidebar) return;

  // -----------------------------------
  // 1. OPEN / CLOSE SIDEBAR
  // -----------------------------------

  window.openSidebar = function () {
    sidebar.classList.add("open");
    overlay?.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  window.closeSidebar = function () {
    sidebar.classList.remove("open");
    overlay?.classList.remove("show");
    document.body.style.overflow = "";
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      window.closeSidebar();
    }
  });

  // -----------------------------------
  // 2. READ USER DATA
  // -----------------------------------

  function readStorage(key) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.warn("PulseGo: Could not read", key, error);
      return null;
    }
  }

  function findUserName(data, depth = 0) {
    if (!data || typeof data !== "object" || depth > 4) {
      return "";
    }

    const first = data.firstName || data.first_name || "";
    const last = data.lastName || data.last_name || "";

    if (first || last) {
      return `${first} ${last}`.trim();
    }

    for (const key of ["fullName", "displayName", "name", "username"]) {
      if (typeof data[key] === "string" && data[key].trim()) {
        return data[key].trim();
      }
    }

    // Check nested profile/user objects.
    for (const key of ["user", "profile", "data", "account"]) {
      const result = findUserName(data[key], depth + 1);
      if (result) return result;
    }

    return "";
  }

  // -----------------------------------
  // 3. UPDATE SIDEBAR USER IDENTITY
  // -----------------------------------

  function loadUserIdentity() {
    const storageKeys = [
      "pulsego_profile_v1",
      "pulsego_user_v1",
      "pulsego_data_v1",
    ];

    let userName = "";

    for (const key of storageKeys) {
      const data = readStorage(key);
      userName = findUserName(data);

      if (userName) break;
    }

    if (!userName) {
      userName = "Foydalanuvchi";
    }

    const sidebarName = document.getElementById("sidebarUserName");
    const sidebarAvatar = document.getElementById("sidebarAvatarText");
    const navAvatar = document.getElementById("navAvatarBtn");

    // Display full name.
    if (sidebarName) {
      sidebarName.textContent = userName;
    }

    // Generate initials.
    const initials =
      userName
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part.charAt(0).toUpperCase())
        .join("") || "P";

    if (sidebarAvatar) {
      sidebarAvatar.textContent = initials;
    }

    if (navAvatar) {
      navAvatar.textContent = initials;
    }
  }

  // -----------------------------------
  // 4. ACTIVE NAVIGATION LINK
  // -----------------------------------

  function setActiveLink() {
    const currentPath = location.pathname.replace(/\/+$/, "") || "/";

    sidebar.querySelectorAll(".sidebar-nav a").forEach((link) => {
      const linkPath =
        new URL(link.href, location.origin).pathname.replace(/\/+$/, "") || "/";

      link.classList.toggle("active", linkPath === currentPath);
    });
  }

  // -----------------------------------
  // 5. INITIALIZE
  // -----------------------------------

  function initializeSidebar() {
    loadUserIdentity();
    setActiveLink();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSidebar);
  } else {
    initializeSidebar();
  }

  // Refresh identity if another tab updates localStorage.
  window.addEventListener("storage", (event) => {
    if (
      event.key === "pulsego_profile_v1" ||
      event.key === "pulsego_user_v1" ||
      event.key === "pulsego_data_v1"
    ) {
      loadUserIdentity();
    }
  });

  // Refresh when returning to this page.
  window.addEventListener("pageshow", loadUserIdentity);
})();
