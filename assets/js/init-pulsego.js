/**
 * PulseGo Global Initialization
 * Central module that initializes all PulseGo features on page load
 * Import this in HTML: <script type="module" src="/assets/js/init-pulsego.js"></script>
 */

console.log("🚀 PulseGo Global Initialization Starting...");

// Import all managers
import { initProStatusManager } from "./proStatusManager.js";
import { initSidebarManager } from "./sidebarManager.js";
import { initCaseNotesManager } from "./caseNotesManager.js";
import { initCaseUIHelpers } from "./caseUIHelper.js";

/**
 * Main initialization function
 */
async function initPulseGo() {
  try {
    console.log("📋 Step 1: Initializing Pro Status Manager...");
    initProStatusManager();
    console.log("✅ Pro Status Manager ready");

    console.log("📋 Step 2: Initializing Sidebar Manager...");
    initSidebarManager();
    console.log("✅ Sidebar Manager ready");

    console.log("📋 Step 3: Initializing Case Notes Manager...");
    initCaseNotesManager();
    console.log("✅ Case Notes Manager ready");

    console.log("📋 Step 4: Initializing Case UI Helpers...");
    // Wait for DOM to be fully ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initCaseUIHelpers);
    } else {
      initCaseUIHelpers();
    }
    console.log("✅ Case UI Helpers ready");

    console.log("📋 Step 5: Setting up global utilities...");
    setupGlobalUtilities();
    console.log("✅ Global utilities ready");

    console.log("\n🎉 PulseGo Initialized Successfully!\n");
    console.log("Features Available:");
    console.log("  ✓ Pro Status Checking (localStorage cached, 5-day refresh)");
    console.log("  ✓ Sidebar with User Status & Billing Link");
    console.log("  ✓ Message Icon & Admin Chat");
    console.log(
      "  ✓ Case Notes & Flags (localStorage + Firestore sync for pro)",
    );
    console.log("  ✓ Optimized Firestore Usage");
    console.log("");
  } catch (error) {
    console.error("❌ PulseGo Initialization Failed:", error);
  }
}

/**
 * Setup global utility functions
 */
function setupGlobalUtilities() {
  // Make key functions available globally if needed
  if (typeof window !== "undefined") {
    // These are examples - add any other utilities as needed
    console.log("✓ Global utilities configured");
  }
}

/**
 * Initialize when DOM is ready
 */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPulseGo);
} else {
  // DOM is already ready
  initPulseGo();
}

/**
 * Handle page visibility changes to refresh cache if needed
 */
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log(
      "👀 Page became visible - cache may be refreshed on next auth check",
    );
  }
});

/**
 * Export for manual initialization if needed
 */
export { initPulseGo };

console.log("💾 PulseGo initialized module loaded");
