/**
 * Test Start Modal Manager
 * Shows professional modal before test starts with continue/start fresh options
 * Integrated with notes/flags from case manager
 */

/**
 * Check if query param says to skip modal
 * ?continue=true -> continue from last
 * ?continue=false -> start fresh
 * Returns: true (continue), false (start fresh), null (show modal)
 */
export function getAutoStartMode() {
  const params = new URLSearchParams(window.location.search);
  const continueParam = params.get("continue");
  if (continueParam === "true") return true;
  if (continueParam === "false") return false;
  return null; // Show modal
}

function normalizeTestKey(name) {
  return String(name || "")
    .trim()
    .toLowerCase();
}

function findMatchingKey(obj, requestedName) {
  if (!obj || typeof obj !== "object") return null;
  const requested = normalizeTestKey(requestedName);
  const keys = Object.keys(obj);
  return keys.find((key) => normalizeTestKey(key) === requested) || null;
}

/**
 * Get last attempt data for a test
 */
export function getLastAttemptData(testName) {
  try {
    const requestedTestKey = normalizeTestKey(testName);
    console.log(
      `\n🔍 getLastAttemptData called for: "${testName}" -> "${requestedTestKey}"`,
    );

    const progressKey = "pulsego_test_progress_v1";
    const raw = localStorage.getItem(progressKey);

    if (!raw) {
      console.log(`  ❌ No progress in localStorage`);
      return null;
    }

    const parsed = JSON.parse(raw);
    let data = null;
    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed) &&
      parsed.testName &&
      parsed.currentIndex !== undefined
    ) {
      data = parsed;
    } else if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      data = parsed[requestedTestKey] || null;
      if (!data) {
        const matchedKey = findMatchingKey(parsed, requestedTestKey);
        data = matchedKey ? parsed[matchedKey] : null;
      }
    }

    if (!data) {
      console.log(`  ❌ No progress bucket for this test`);
      return null;
    }
    console.log(`  ✅ Found progress data:`, {
      testName: data.testName,
      currentIndex: data.currentIndex,
      total: data.total,
      score: data.score,
    });

    // CRITICAL: Check test name with detailed logging
    if (!data.testName) {
      console.log("  ❌ Progress has no testName field");
      return null;
    }

    console.log(`\n  Test Name Comparison:`);
    console.log(`    Requested: "${testName}"`);
    console.log(`    Stored:    "${data.testName}"`);
    console.log(`    Normalized Requested: "${requestedTestKey}"`);
    console.log(
      `    Normalized Stored:    "${normalizeTestKey(data.testName)}"`,
    );
    console.log(`    Lengths:   ${testName.length} vs ${data.testName.length}`);

    // Character-by-character comparison
    for (let i = 0; i < Math.max(testName.length, data.testName.length); i++) {
      if (requestedTestKey[i] !== normalizeTestKey(data.testName)[i]) {
        console.log(
          `    ❌ Mismatch at position ${i}: "${requestedTestKey[i]}" vs "${normalizeTestKey(data.testName)[i]}"`,
        );
        break;
      }
    }

    if (normalizeTestKey(data.testName) !== requestedTestKey) {
      console.log(`  ❌ TEST NAME MISMATCH - Cannot resume`);
      return null;
    }
    console.log(`  ✅ Test names match`);

    const answeredCount = Object.keys(data.examQuestionResults || {}).length;
    const draftCount = Object.keys(data.examDraftSelections || {}).length;
    const hasResumeData =
      data.currentIndex > 0 ||
      answeredCount > 0 ||
      draftCount > 0 ||
      data.hasStarted === true;

    // Check index validity
    console.log(`\n  Index Validation:`);
    console.log(`    currentIndex: ${data.currentIndex} (must be > 0)`);
    console.log(`    total: ${data.total} (must be > currentIndex)`);
    console.log(`    answeredCount: ${answeredCount}`);
    console.log(`    draftCount: ${draftCount}`);
    console.log(`    hasStarted: ${data.hasStarted === true}`);

    if (!hasResumeData) {
      console.log(`  ❌ INVALID: no resume data (index/answers/drafts empty)`);
      return null;
    }

    if (data.currentIndex >= data.total) {
      console.log(`  ❌ INVALID: currentIndex >= total, test finished`);
      return null;
    }

    console.log(`  ✅ Index is valid for resume`);

    console.log(
      `\n✅ SUCCESS: Ready to resume from question ${data.currentIndex + 1}/${data.total}\n`,
    );

    return {
      currentIndex: data.currentIndex || 0,
      score: data.score || 0,
      total: data.total || 0,
      timeLeft: data.timeLeft || 0,
      solved: data.currentIndex + 1, // How many solved (1-indexed)
      examQuestionResults: data.examQuestionResults || {},
      examDraftSelections: data.examDraftSelections || {},
      examFlagged: data.examFlagged || [],
      examNotes: data.examNotes || {},
      hasStarted: data.hasStarted === true,
    };
  } catch (e) {
    console.error("❌ EXCEPTION in getLastAttemptData:", e);
    console.error("Stack:", e.stack);
    return null;
  }
}

/**
 * Get attempt count for a test
 */
export function getAttemptCount(testName) {
  try {
    const resultsKey = "pulsego_test_results_v1";
    const raw = localStorage.getItem(resultsKey);
    if (!raw) {
      console.log("No test results found in localStorage");
      return 0;
    }

    const results = JSON.parse(raw);
    let testResults = results[testName];
    if (!Array.isArray(testResults)) {
      const matchedKey = findMatchingKey(results, testName);
      if (matchedKey) {
        testResults = results[matchedKey];
      }
    }
    if (!Array.isArray(testResults) && Array.isArray(results)) {
      const requested = normalizeTestKey(testName);
      testResults = results.filter(
        (row) => normalizeTestKey(row?.testName) === requested,
      );
    }
    const count = Array.isArray(testResults) ? testResults.length : 0;
    console.log(`Attempt count for ${testName}: ${count}`, testResults);
    return count;
  } catch (e) {
    console.warn("Failed to get attempt count:", e);
    return 0;
  }
}

/**
 * Get pro status of current user
 */
export async function getCurrentUserProStatus() {
  try {
    // Check if caseNotes manager is available with getProStatus
    if (window.caseNotes?.getProStatus) {
      const user = JSON.parse(
        localStorage.getItem("pulsego_user_v1") || "null",
      );
      if (user?.uid) {
        const status = await window.caseNotes.getProStatus(user.uid);
        return status?.isPro || false;
      }
    }

    // Fallback: check pro status cache
    const proStatusKey = "pulsego_pro_status_v2";
    const raw = localStorage.getItem(proStatusKey);
    if (!raw) return false;

    const data = JSON.parse(raw);
    return data.cached?.isPro || false;
  } catch (e) {
    console.warn("Failed to get pro status:", e);
    return false;
  }
}

/**
 * Get notes for a test (if any)
 */
export function getTestNotes(testName) {
  try {
    // First try window.caseNotes
    if (window.caseNotes?.getNoteForCase) {
      const note = window.caseNotes.getNoteForCase(testName);
      console.log(`Notes for ${testName}:`, note);
      return note;
    }

    // Fallback: read directly from localStorage
    const notesKey = "pulsego_case_notes_v2";
    const raw = localStorage.getItem(notesKey);
    if (!raw) return null;

    const notes = JSON.parse(raw);
    const directNote = notes[testName];
    const matchedKey = findMatchingKey(notes, testName);
    const note = directNote || (matchedKey ? notes[matchedKey] : null);
    console.log(`Notes from localStorage for ${testName}:`, note);
    return note;
  } catch (e) {
    console.warn(`Failed to get notes for ${testName}:`, e);
    return null;
  }
}

/**
 * Get flag status for a test
 */
export function isTestFlagged(testName) {
  try {
    // First try window.caseNotes
    if (window.caseNotes?.isCaseFlagged) {
      const flagged = window.caseNotes.isCaseFlagged(testName);
      console.log(`Flag status for ${testName}:`, flagged);
      return flagged;
    }

    // Fallback: read directly from localStorage
    const flagsKey = "pulsego_case_flags_v2";
    const raw = localStorage.getItem(flagsKey);
    if (!raw) return false;

    const flags = JSON.parse(raw);
    const matchedKey = findMatchingKey(flags, testName);
    const bucket = flags[testName] || (matchedKey ? flags[matchedKey] : null);
    const flagged = bucket?.isFlagged === true;
    console.log(`Flag from localStorage for ${testName}:`, flagged);
    return flagged;
  } catch (e) {
    console.warn(`Failed to get flag for ${testName}:`, e);
    return false;
  }
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = String(text);
  return div.innerHTML;
}

/**
 * Show test start modal
 * Returns: { action: 'continue' | 'start', userChoice: boolean }
 */
export async function showTestStartModal(testName, questionCount) {
  return new Promise((resolve) => {
    console.log("=== OPENING TEST MODAL ===");
    console.log(`Test: ${testName}, Questions: ${questionCount}`);

    const lastAttempt = getLastAttemptData(testName);
    const attemptCount = getAttemptCount(testName);
    const isPro = localStorage.getItem("pulsego_pro_status_v2")
      ? JSON.parse(localStorage.getItem("pulsego_pro_status_v2")).cached?.isPro
      : false;
    const notes = getTestNotes(testName);
    const isFlagged = isTestFlagged(testName);

    console.log("Modal data:", {
      lastAttempt,
      attemptCount,
      isPro,
      hasNotes: !!notes,
      notesContent: notes,
      isFlagged,
    });

    // DEBUG: Log the button decision
    console.log("\n=== MODAL BUTTON DECISION ===");
    console.log("lastAttempt object:", lastAttempt);
    if (lastAttempt) {
      console.log(
        "✅ Will show 2 buttons: 'Davom etish' + 'Yangidan boshlash'",
      );
    } else {
      console.log(
        "ℹ️  lastAttempt is null/falsy - showing only 'Boshlash' button",
      );
      console.log("   Reasons this might happen:");
      console.log("     1. First time taking test → CORRECT");
      console.log("     2. Test name mismatch → PROBLEM (see logs above)");
      console.log("     3. currentIndex invalid → PROBLEM (see logs above)");
    }

    // Always destroy old modal instance and remove from DOM to avoid stale state
    const oldModal = document.getElementById("testStartModal");
    if (oldModal) {
      try {
        const oldInstance = bootstrap.Modal.getInstance(oldModal);
        if (oldInstance) oldInstance.dispose();
      } catch (e) {
        console.log("Old modal instance cleanup:", e.message);
      }
      oldModal.remove();
    }

    // Create fresh modal element
    const modal = document.createElement("div");
    modal.id = "testStartModal";
    modal.className = "modal fade";
    modal.setAttribute("tabindex", "-1");
    document.body.appendChild(modal);

    // Build modal HTML
    const lastInfoHtml = lastAttempt
      ? `
      <div class="test-modal-last-attempt">
        <div class="last-attempt-row">
          <span class="label">Oxirgi urinish:</span>
          <span class="value">${lastAttempt.score}/${lastAttempt.total} to'g'ri</span>
        </div>
        <div class="last-attempt-row">
          <span class="label">Qo'yilgan savoldan:</span>
          <span class="value">Savol ${lastAttempt.solved}/${lastAttempt.total}</span>
        </div>
      </div>
      `
      : '<div class="text-muted small">Oldingi urinish yo\'q</div>';

    // Handle notes safely
    let notesHtml = "";
    if (notes) {
      const noteText = notes.text || notes || "";
      const displayText = String(noteText).substring(0, 120);
      notesHtml = `
      <div class="test-modal-notes mt-2">
        <div class="notes-title"><i class="bi bi-pencil-square"></i> Izohlar mavjud</div>
        <div class="notes-preview">${escapeHtml(displayText)}</div>
      </div>
      `;
    }

    const flagHtml = isFlagged
      ? `<div class="test-modal-flag mt-2"><i class="bi bi-flag-fill"></i> Belgilangan</div>`
      : "";

    const proStatusHtml = `
      <div class="test-modal-pro mt-2">
        <i class="bi bi-${isPro ? "gem" : "lock"}"></i>
        ${isPro ? "Pro - Barcha testlar mavjud" : "Bepul - Ba'zi testlar cheklangan"}
      </div>
    `;

    modal.innerHTML = `
<div class="modal-dialog modal-dialog-centered test-modal-size">
  <div class="modal-content test-modal-content">
    <div class="modal-header test-modal-header">
      <div>
        <h5 class="modal-title test-modal-title">${testName}</h5>
        <small class="text-muted">${questionCount} savol</small>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>
    
    <div class="modal-body test-modal-body">
      <div class="test-modal-stats">
        <div class="stat-item">
          <span class="stat-label">Urinishlar:</span>
          <span class="stat-value">${attemptCount}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Savollar:</span>
          <span class="stat-value">${questionCount}</span>
        </div>
      </div>

      <hr class="test-modal-divider">

      ${lastInfoHtml}
      ${notesHtml}
      ${flagHtml}
      ${proStatusHtml}
    </div>

    <div class="modal-footer test-modal-footer">
      ${
        lastAttempt
          ? `
        <button type="button" class="btn btn-primary test-modal-btn-continue">
          <i class="bi bi-play-fill"></i> Davom etish
        </button>
        <button type="button" class="btn btn-outline-secondary test-modal-btn-fresh">
          <i class="bi bi-arrow-clockwise"></i> Yangidan boshlash
        </button>
        `
          : `
        <button type="button" class="btn btn-primary test-modal-btn-continue" style="width: 100%;">
          <i class="bi bi-play-fill"></i> Boshlash
        </button>
        `
      }
    </div>
  </div>
</div>
    `;

    // Initialize Bootstrap modal
    const bsModal = new bootstrap.Modal(modal, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();

    console.log("🔄 Modal shown, waiting for DOM settlement...");

    // Add event listeners with retry logic
    const attachButtons = () => {
      const continueBtn = modal.querySelector(".test-modal-btn-continue");
      const freshBtn = modal.querySelector(".test-modal-btn-fresh");

      console.log("🔍 Looking for buttons...", {
        continueBtn: !!continueBtn,
        freshBtn: !!freshBtn,
      });

      if (!continueBtn) {
        console.warn("⚠️  Continue button not found!");
        return false;
      }

      if (continueBtn) {
        console.log("✅ Attaching continue button listener");
        continueBtn.onclick = () => {
          console.log("👆 User clicked: Davom etish");
          bsModal.hide();
          resolve({ action: "continue", userChoice: true });
        };
      }

      if (freshBtn) {
        console.log("✅ Attaching fresh button listener");
        freshBtn.onclick = () => {
          console.log("👆 User clicked: Yangidan boshlash");
          bsModal.hide();
          resolve({ action: "start", userChoice: false });
        };
      }

      return true;
    };

    if (!attachButtons()) {
      // Retry after a small delay
      setTimeout(() => {
        console.log("🔄 Retrying button attachment...");
        attachButtons();
      }, 100);
    }

    // Handle modal close (ESC key) - default to continue if last attempt exists
    modal.addEventListener("hidden.bs.modal", () => {
      console.log(
        "Modal closed, defaulting to:",
        lastAttempt ? "continue" : "start",
      );
      resolve({ action: lastAttempt ? "continue" : "start", userChoice: null });
    });
  });
}

/**
 * Build URL to auto-start test with continue/fresh mode
 * @param {string} testName
 * @param {boolean} continueMode - true for continue, false for start fresh
 * @returns {string} URL with query params
 */
export function buildTestUrl(testName, continueMode = false) {
  const params = new URLSearchParams(window.location.search);
  params.set("continue", continueMode ? "true" : "false");
  return `${window.location.pathname}?${params.toString()}`;
}

/**
 * Initialize test start modal system
 * Should be called in test pages to enable modal functionality
 */
export function initTestStartModal() {
  if (!window.bootstrap) {
    console.warn("Bootstrap not loaded");
    return;
  }

  // Make functions globally available
  window.showTestStartModal = showTestStartModal;
  window.getAutoStartMode = getAutoStartMode;
  window.buildTestUrl = buildTestUrl;

  console.log("✅ Test Start Modal initialized");
}

export default {
  getAutoStartMode,
  getLastAttemptData,
  getAttemptCount,
  getCurrentUserProStatus,
  getTestNotes,
  isTestFlagged,
  showTestStartModal,
  buildTestUrl,
  initTestStartModal,
};
