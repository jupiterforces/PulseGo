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

/* =========================================
   TEST MODAL — SHARED PROGRESS DATA
========================================= */

const MODAL_STORAGE = {
  sessions: "pulsego_sessions_v1",
  data: "pulsego_data_v1",
  results: "pulsego_test_results_v1",
  notes: "pulsego_notes_v1",
};

function readModalJSON(key, fallback = {}) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}

function getPrettyTestTitle(testName) {
  if (!testName) return "Test";

  const name = String(testName).trim();

  if (window.testTitleMap?.[name]) {
    return window.testTitleMap[name];
  }

  const titleMap = {
    img2: "2-rasm",
    img3: "3-rasm",
    img4: "4-rasm",
    img5: "5-rasm",
    img6: "6-rasm",
    xatolar: "Xatolar tahlili",
    "weak-path": "Zaif yo'l",
  };

  if (titleMap[name]) return titleMap[name];

  if (/^img\d+$/i.test(name)) {
    return name.match(/\d+/)[0] + "-rasm";
  }

  if (name.startsWith("qbank:")) {
    return "QBank · " + name.slice(6);
  }

  return name;
}

function getModalRunKey(run) {
  const timestamp = run.date ? new Date(run.date).getTime() : 0;

  const minute = Number.isFinite(timestamp) ? Math.floor(timestamp / 60000) : 0;

  return [
    normalizeTestKey(run.testName),
    minute,
    run.correct || 0,
    run.solved || 0,
    run.total || 0,
  ].join("|");
}

/**
 * Collect test history from the same stores as Progress.
 * Sessions take priority over duplicate legacy results.
 */
function getTestHistory(testName) {
  const requested = normalizeTestKey(testName);

  if (!requested) return [];

  const sessions = readModalJSON(MODAL_STORAGE.sessions, []);
  const data = readModalJSON(MODAL_STORAGE.data, {});
  const results = readModalJSON(MODAL_STORAGE.results, {});

  const runs = [];
  const seen = new Set();

  // 1. Modern session records
  if (Array.isArray(sessions)) {
    sessions.forEach((session) => {
      if (normalizeTestKey(session.testName) !== requested) return;

      const stats = session.stats || {};
      const solved = Number(stats.solved || 0);
      const correct = Number(stats.correct || 0);
      const total = Number(stats.total || session.total || 0);

      // Ignore empty sessions
      if (session.status === "running" && solved === 0 && correct === 0) return;

      const date = session.updatedAt || session.startedAt;

      const run = {
        testName: session.testName,
        date,
        correct,
        solved,
        total,
        wrong: Number(stats.wrong || 0),
        percent: Number(
          stats.percent ??
            (solved > 0 ? Math.round((correct / solved) * 100) : 0),
        ),
        status: session.status || "completed",
      };

      const key = getModalRunKey(run);

      seen.add(key);

      // Account for small timestamp differences
      const time = date ? new Date(date).getTime() : 0;

      if (Number.isFinite(time) && time > 0) {
        [-1, 1].forEach((offset) => {
          seen.add(
            getModalRunKey({
              ...run,
              date: new Date(time + offset * 60000).toISOString(),
            }),
          );
        });
      }

      runs.push(run);
    });
  }

  // 2. Legacy result records
  const resultLists = [results.tests, data.results, data.testResults];

  if (Array.isArray(data.preparationSessions)) {
    data.preparationSessions.forEach((session) => {
      resultLists.push(session.testResults, session.results);
    });
  }

  resultLists.forEach((list) => {
    if (!Array.isArray(list)) return;

    list.forEach((item) => {
      if (normalizeTestKey(item?.testName) !== requested) return;

      const solved = Number(
        item.solved ?? (item.correct || 0) + (item.wrong || 0),
      );

      const run = {
        testName: item.testName,
        date: item.date,
        correct: Number(item.correct || 0),
        solved,
        total: Number(item.total || 0),
        wrong: Number(item.wrong || 0),
        percent: Number(
          item.percent ??
            (solved > 0 ? Math.round(((item.correct || 0) / solved) * 100) : 0),
        ),
        status: item.partial ? "stopped" : "completed",
      };

      const key = getModalRunKey(run);

      if (seen.has(key)) return;

      seen.add(key);
      runs.push(run);
    });
  });

  return runs.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

/**
 * Aggregate performance for this test only.
 */
function getTestOverallStats(testName) {
  const runs = getTestHistory(testName);

  const stats = runs.reduce(
    (acc, run) => {
      acc.correct += run.correct;
      acc.solved += run.solved;
      acc.wrong += run.wrong;
      acc.total += run.total;
      return acc;
    },
    {
      correct: 0,
      solved: 0,
      wrong: 0,
      total: 0,
    },
  );

  return {
    ...stats,
    attempts: runs.length,
    accuracy:
      stats.solved > 0
        ? Math.round((stats.correct / stats.solved) * 100)
        : null,
    lastFive: runs.slice(0, 5).reverse(),
  };
}

function getModalAccuracyClass(percent) {
  if (percent == null || !Number.isFinite(Number(percent))) {
    return "none";
  }

  if (percent >= 80) return "good";
  if (percent >= 50) return "medium";

  return "poor";
}

function formatModalTime(seconds) {
  const value = Math.max(0, Number(seconds) || 0);

  const minutes = Math.floor(value / 60);
  const remainingSeconds = value % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds,
  ).padStart(2, "0")}`;
}

/**
 * Count notes and flags saved in session records.
 */

function getTestSavedDetails(testName, lastAttempt) {
  const sessions = readModalJSON(MODAL_STORAGE.sessions, []);
  const allNotes = readModalJSON(MODAL_STORAGE.notes, {});
  const requested = normalizeTestKey(testName);

  const matchingSessions = Array.isArray(sessions)
    ? sessions.filter((s) => normalizeTestKey(s.testName) === requested)
    : [];

  // Notes belonging to this particular test
  const noteHashes = new Set();

  matchingSessions.forEach((session) => {
    (session.qHashes || []).forEach((hash) => {
      noteHashes.add(String(hash));
    });
  });

  const globalNoteCount = [...noteHashes].filter((hash) =>
    String(allNotes[hash] || "").trim(),
  ).length;

  // Include active, unsaved-session notes
  const activeNoteCount = Object.keys(lastAttempt?.examNotes || {}).filter(
    (key) => String(lastAttempt.examNotes[key] || "").trim(),
  ).length;

  const session = matchingSessions.sort(
    (a, b) =>
      new Date(b.updatedAt || b.startedAt || 0) -
      new Date(a.updatedAt || a.startedAt || 0),
  )[0];

  const flags = new Set(
    [...(session?.flagged || []), ...(lastAttempt?.examFlagged || [])].map(
      String,
    ),
  );

  return {
    notesCount: Math.max(globalNoteCount, activeNoteCount),
    flagsCount: flags.size,
  };
}

export async function showTestStartModal(testName, questionCount) {
  console.log("=== PULSEGO TEST START MODAL ===", testName);

  const lastAttempt = getLastAttemptData(testName);
  const history = getTestOverallStats(testName);
  const saved = getTestSavedDetails(testName, lastAttempt);

  const isPro = await getCurrentUserProStatus();

  const title = getPrettyTestTitle(testName);
  const accuracyClass = getModalAccuracyClass(history.accuracy);

  // Clean up an old modal
  const oldModal = document.getElementById("testStartModal");

  if (oldModal) {
    const oldInstance = bootstrap.Modal.getInstance(oldModal);
    oldInstance?.dispose();
    oldModal.remove();
  }

  const modal = document.createElement("div");

  modal.id = "testStartModal";
  modal.className = "modal fade";
  modal.tabIndex = -1;
  modal.setAttribute("aria-labelledby", "tmHeading");
  modal.setAttribute("aria-hidden", "true");

  const escape = (value) => escapeHtml(String(value ?? ""));

  // Last five results: oldest on left, newest on right
  const chartHTML = history.lastFive.length
    ? history.lastFive
        .map((run, index) => {
          const pct = Math.max(0, Math.min(100, run.percent));
          const cls = getModalAccuracyClass(pct);

          return `
          <div class="tm-chart-item">
            <div class="tm-chart-value">${pct}%</div>
            <div class="tm-bar-track">
              <div
                class="tm-bar ${cls}"
                data-height="${pct}"
                title="${escape(run.correct)} / ${escape(run.solved)} to'g'ri"
              ></div>
            </div>
            <div class="tm-chart-label">#${index + 1}</div>
          </div>
        `;
        })
        .join("")
    : `
      <div class="tm-empty w-100">
        Hali test natijalari mavjud emas.
      </div>
    `;

  // Resume information
  const resumeHTML = lastAttempt
    ? `
      <div class="tm-resume">
        <strong>
          <i class="bi bi-arrow-repeat me-1"></i>
          Saqlangan test mavjud
        </strong>
        <small>
          Keyingi savol: ${Math.min(
            lastAttempt.currentIndex + 1,
            lastAttempt.total,
          )} / ${lastAttempt.total}
        </small>
        <small>
          Vaqt: ${formatModalTime(lastAttempt.timeLeft)}
          · To'g'ri: ${lastAttempt.score}
        </small>
      </div>
    `
    : "";

  // Additional saved information
  const savedHTML = `
    <div class="tm-info">
      <div class="tm-chip">
        <i class="bi bi-journal-text me-1"></i>
        ${saved.notesCount} ta izoh
      </div>

      <div class="tm-chip">
        <i class="bi bi-flag me-1"></i>
        ${saved.flagsCount} ta belgilangan
      </div>

      <div class="tm-chip">
        <i class="bi bi-${isPro ? "gem" : "lock"} me-1"></i>
        ${isPro ? "Pro" : "Free"}
      </div>
    </div>
  `;

  // Overall performance
  const overallHTML = `
    <div class="tm-section-label">
      Umumiy natija · ${history.attempts} ta urinish
    </div>

    <div class="tm-overview">
      <div class="tm-stat blue">
        <strong>${history.attempts}</strong>
        <span>Jami urinishlar</span>
      </div>

      <div class="tm-stat">
        <strong>${history.solved}</strong>
        <span>Yechilgan savollar</span>
      </div>

      <div class="tm-stat green">
        <strong>${history.correct}</strong>
        <span>To'g'ri javoblar</span>
      </div>

      <div class="tm-stat">
        <strong>${history.wrong}</strong>
        <span>Xato javoblar</span>
      </div>
    </div>

    <div class="tm-accuracy">
      <div class="tm-accuracy-value ${accuracyClass}">
        ${history.accuracy == null ? "—" : history.accuracy + "%"}
      </div>
      <div class="text-muted small fw-semibold">
        Ushbu test bo'yicha umumiy aniqlik
      </div>
    </div>
  `;

  modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        <!-- HEADER -->
        <div class="modal-header">
          <div>
            <h5 class="tm-title" id="tmHeading">
              ${escape(title)}
            </h5>

            <div class="tm-subtitle">
              <i class="bi bi-clipboard2-check me-1"></i>
              ${Number(questionCount) || 0} ta savol
              · PulseGo
            </div>
          </div>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <!-- BODY -->
        <div class="modal-body">

          ${resumeHTML}

          ${overallHTML}

          <hr class="tm-divider">

          <!-- LAST FIVE RESULTS -->
          <div class="tm-section-label">
            So'nggi 5 ta natija
          </div>

          <div class="tm-chart">
            ${chartHTML}
          </div>

          <div class="tm-legend">
            <span>
              <i style="background:#dc2626"></i>
              0–49%
            </span>

            <span>
              <i style="background:#eab308"></i>
              50–79%
            </span>

            <span>
              <i style="background:#16a34a"></i>
              80–100%
            </span>
          </div>

          ${savedHTML}

        </div>

        <!-- FOOTER -->
        <div class="modal-footer">

          ${
            lastAttempt
              ? `
                <button
                  type="button"
                  class="btn btn-primary tm-btn tm-btn-continue"
                >
                  <i class="bi bi-play-fill me-1"></i>
                  Davom etish
                </button>

                <button
                  type="button"
                  class="btn btn-outline-secondary tm-btn tm-btn-fresh"
                >
                  <i class="bi bi-arrow-clockwise me-1"></i>
                  Yangidan
                </button>
              `
              : `
                <button
                  type="button"
                  class="btn btn-primary tm-btn tm-btn-continue w-100"
                >
                  <i class="bi bi-play-fill me-1"></i>
                  Boshlash
                </button>
              `
          }

        </div>

      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const bsModal = new bootstrap.Modal(modal, {
    backdrop: "static",
    keyboard: false,
  });

  return new Promise((resolve) => {
    let settled = false;

    const finish = (result) => {
      if (settled) return;

      settled = true;
      resolve(result);
      bsModal.hide();
    };

    // Continue
    modal.querySelector(".tm-btn-continue")?.addEventListener("click", () => {
      finish({
        action: lastAttempt ? "continue" : "start",
        userChoice: lastAttempt ? true : null,
      });
    });

    // Start fresh
    modal.querySelector(".tm-btn-fresh")?.addEventListener("click", () => {
      finish({
        action: "start",
        userChoice: false,
      });
    });

    // If closed without choosing, preserve previous behavior
    modal.addEventListener(
      "hidden.bs.modal",
      () => {
        if (!settled) {
          settled = true;

          resolve({
            action: lastAttempt ? "continue" : "start",
            userChoice: null,
          });
        }

        bsModal.dispose();
        modal.remove();
      },
      { once: true },
    );

    bsModal.show();

    // Animate graph after modal becomes visible
    modal.addEventListener(
      "shown.bs.modal",
      () => {
        requestAnimationFrame(() => {
          modal.querySelectorAll(".tm-bar").forEach((bar, index) => {
            const height = Number(bar.dataset.height) || 0;

            setTimeout(() => {
              bar.style.height = height + "%";
            }, index * 100);
          });
        });
      },
      { once: true },
    );
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
