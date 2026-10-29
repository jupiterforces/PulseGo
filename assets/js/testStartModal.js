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
 * Get last attempt / in-progress data for a test (progress store only).
 * Completed tests must not leave progress (see examSessionEnded in testcases.js).
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

    // Legacy single-object shape
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

    if (!data.testName) {
      console.log("  ❌ Progress has no testName field");
      return null;
    }

    if (normalizeTestKey(data.testName) !== requestedTestKey) {
      console.log(`  ❌ TEST NAME MISMATCH - Cannot resume`);
      return null;
    }

    const total = Number(data.total) || 0;
    const currentIndex = Number(data.currentIndex) || 0;
    const answeredCount = Object.keys(data.examQuestionResults || {}).length;
    const draftCount = Object.keys(data.examDraftSelections || {}).length;

    const hasResumeData =
      currentIndex > 0 ||
      answeredCount > 0 ||
      draftCount > 0 ||
      data.hasStarted === true;

    console.log(`\n  Index Validation:`);
    console.log(`    currentIndex: ${currentIndex}`);
    console.log(`    total: ${total}`);
    console.log(`    answeredCount: ${answeredCount}`);
    console.log(`    draftCount: ${draftCount}`);
    console.log(`    hasStarted: ${data.hasStarted === true}`);

    if (!hasResumeData) {
      console.log(`  ❌ INVALID: no resume data`);
      return null;
    }

    // Finished session left in store — do not offer resume
    if (total > 0 && currentIndex >= total) {
      console.log(`  ❌ INVALID: currentIndex >= total, test finished`);
      return null;
    }
    if (total > 0 && answeredCount >= total && draftCount === 0) {
      console.log(`  ❌ INVALID: all questions answered, treat as finished`);
      return null;
    }

    console.log(
      `\n✅ SUCCESS: Resume Q${currentIndex + 1}/${total || "?"}, answered=${answeredCount}\n`,
    );

    return {
      currentIndex,
      score: data.score || 0,
      total,
      timeLeft: data.timeLeft || 0,
      // Real answered count (NOT currentIndex + 1)
      solved: answeredCount,
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
 * Get attempt count for a test (completed runs from results store)
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
    const requested = normalizeTestKey(testName);

    // Canonical shape from saveTestResult: { tests: [ { testName, ... }, ... ] }
    if (Array.isArray(results.tests)) {
      const count = results.tests.filter(
        (row) => normalizeTestKey(row?.testName) === requested,
      ).length;
      console.log(`Attempt count for ${testName}: ${count}`);
      return count;
    }

    // Fallback: map keyed by test name
    let testResults = results[testName];
    if (!Array.isArray(testResults)) {
      const matchedKey = findMatchingKey(results, testName);
      if (matchedKey) testResults = results[matchedKey];
    }
    if (Array.isArray(testResults)) {
      console.log(`Attempt count for ${testName}: ${testResults.length}`);
      return testResults.length;
    }

    // Fallback: top-level array
    if (Array.isArray(results)) {
      const count = results.filter(
        (row) => normalizeTestKey(row?.testName) === requested,
      ).length;
      console.log(`Attempt count for ${testName}: ${count}`);
      return count;
    }

    return 0;
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
    if (window.caseNotes?.getProStatus) {
      const user = JSON.parse(
        localStorage.getItem("pulsego_user_v1") || "null",
      );
      if (user?.uid) {
        const status = await window.caseNotes.getProStatus(user.uid);
        return status?.isPro || false;
      }
    }

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
    if (window.caseNotes?.getNoteForCase) {
      const note = window.caseNotes.getNoteForCase(testName);
      console.log(`Notes for ${testName}:`, note);
      return note;
    }

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
    if (window.caseNotes?.isCaseFlagged) {
      const flagged = window.caseNotes.isCaseFlagged(testName);
      console.log(`Flag status for ${testName}:`, flagged);
      return flagged;
    }

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
 * Returns: { action: 'continue' | 'start', userChoice: boolean|null }
 */
export async function showTestStartModal(testName, questionCount) {
  return new Promise((resolve) => {
    console.log("=== OPENING TEST MODAL ===");
    console.log(`Test: ${testName}, Questions: ${questionCount}`);

    const lastAttempt = getLastAttemptData(testName);
    const attemptCount = getAttemptCount(testName);

    let isPro = false;
    try {
      const proRaw = localStorage.getItem("pulsego_pro_status_v2");
      if (proRaw) {
        isPro = !!JSON.parse(proRaw).cached?.isPro;
      }
    } catch (e) {}

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

    console.log("\n=== MODAL BUTTON DECISION ===");
    if (lastAttempt) {
      console.log(
        "✅ Will show 2 buttons: 'Davom etish' + 'Yangidan boshlash'",
      );
    } else {
      console.log(
        "ℹ️  lastAttempt is null/falsy - showing only 'Boshlash' button",
      );
    }

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

    const modal = document.createElement("div");
    modal.id = "testStartModal";
    modal.className = "modal fade";
    modal.setAttribute("tabindex", "-1");
    document.body.appendChild(modal);

    const resumeQ =
      lastAttempt != null
        ? Math.min(
            (lastAttempt.currentIndex || 0) + 1,
            lastAttempt.total || questionCount || 1,
          )
        : 0;
    const resumeTotal = lastAttempt?.total || questionCount || 0;

    const lastInfoHtml = lastAttempt
      ? `
      <div class="test-modal-last-attempt">
        <div class="last-attempt-row">
          <span class="label">Joriy sessiya:</span>
          <span class="value">${lastAttempt.score}/${resumeTotal} to'g'ri · ${lastAttempt.solved} ta yechilgan</span>
        </div>
        <div class="last-attempt-row">
          <span class="label">Davom etish:</span>
          <span class="value">Savol ${resumeQ}/${resumeTotal}</span>
        </div>
      </div>
      `
      : `<div class="text-muted small">Oldingi tugallanmagan sessiya yo'q</div>`;

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
        ${isPro ? "Pro - Barcha testlar mavjud" : "Version: 0.1.0"}
      </div>
    `;

    modal.innerHTML = `
<div class="modal-dialog modal-dialog-centered test-modal-size">
  <div class="modal-content test-modal-content">
    <div class="modal-header test-modal-header">
      <div>
        <h5 class="modal-title test-modal-title">${escapeHtml(testName)}</h5>
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

    const bsModal = new bootstrap.Modal(modal, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();

    console.log("🔄 Modal shown, waiting for DOM settlement...");

    let resolved = false;
    const finish = (payload) => {
      if (resolved) return;
      resolved = true;
      try {
        bsModal.hide();
      } catch (e) {}
      resolve(payload);
    };

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

      continueBtn.onclick = () => {
        console.log("👆 User clicked: continue/start primary");
        // Only "Boshlash" when no lastAttempt → action start
        finish({
          action: lastAttempt ? "continue" : "start",
          userChoice: true,
        });
      };

      if (freshBtn) {
        freshBtn.onclick = () => {
          console.log("👆 User clicked: Yangidan boshlash");
          finish({ action: "start", userChoice: false });
        };
      }

      return true;
    };

    if (!attachButtons()) {
      setTimeout(() => {
        console.log("🔄 Retrying button attachment...");
        attachButtons();
      }, 100);
    }

    // Closed without button (backdrop is static; still guard double resolve)
    modal.addEventListener("hidden.bs.modal", () => {
      console.log(
        "Modal closed, defaulting to:",
        lastAttempt ? "continue" : "start",
      );
      finish({
        action: lastAttempt ? "continue" : "start",
        userChoice: null,
      });
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

  window.showTestStartModal = showTestStartModal;
  window.getAutoStartMode = getAutoStartMode;
  window.buildTestUrl = buildTestUrl;
  window.getLastAttemptData = getLastAttemptData;
  window.getAttemptCount = getAttemptCount;

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
