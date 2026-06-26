const user = window.Data.getUser();
document.getElementById("userName").textContent = user.name;

// Configuration
const CONFIG = {
  modalsPath: "/assets/modals/modals.html",
  testScreenId: "test-screen",
  loadTimeout: 5000,
};

/**
 * Load test layout modal dynamically
 * @returns {Promise<void>}
 */
async function loadTestLayout() {
  // Prevent duplicate loading
  if (document.getElementById(CONFIG.testScreenId)) {
    return;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CONFIG.loadTimeout);

    const response = await fetch(CONFIG.modalsPath, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    document.body.insertAdjacentHTML("beforeend", html);
  } catch (error) {
    console.error("Failed to load test layout:", error);
    showErrorNotification("Layout yuklanishda xato. Qaytadan urinib ko'ring.");
  }
}

/**
 * Show error notification to user
 * @param {string} message - Error message to display
 */
function showErrorNotification(message) {
  const alertDiv = document.createElement("div");
  alertDiv.className = "alert alert-danger alert-dismissible fade show";
  alertDiv.role = "alert";
  alertDiv.innerHTML = `
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;
  document.body.insertAdjacentElement("afterbegin", alertDiv);
}

/**
 * Initialize event listeners
 */
function initializeEventListeners() {
  const seeMistakesBtn = document.getElementById("seeMistakesBtn");
  const resolveMistakesBtn = document.getElementById("resolveMistakesBtn");

  if (seeMistakesBtn) {
    seeMistakesBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      await loadTestLayout();
      if (typeof openXatolarModal === "function") {
        openXatolarModal();
      }
    });
  }

  if (resolveMistakesBtn) {
    resolveMistakesBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      await loadTestLayout();
      if (typeof startXatolarReview === "function") {
        startXatolarReview();
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initializeEventListeners);
