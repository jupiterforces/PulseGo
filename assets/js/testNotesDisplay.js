/**
 * Test Notes & Highlights Manager
 * Handles displaying and storing notes, flags, and highlighted text during test
 */

const HIGHLIGHTS_KEY_PREFIX = "pulsego_test_highlights_v1_";
const NOTES_KEY = "pulsego_case_notes_v2";
const FLAGS_KEY = "pulsego_case_flags_v2";

function normalizeTestKey(name) {
  return String(name || "")
    .trim()
    .toLowerCase();
}

function findMatchingKey(obj, requestedName) {
  if (!obj || typeof obj !== "object") return null;
  const requested = normalizeTestKey(requestedName);
  return (
    Object.keys(obj).find((key) => normalizeTestKey(key) === requested) || null
  );
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
  if (text == null) return "";
  const div = document.createElement("div");
  div.textContent = String(text);
  return div.innerHTML;
}

/**
 * Get highlights storage key for a test
 */
export function getHighlightsKey(testName) {
  return HIGHLIGHTS_KEY_PREFIX + normalizeTestKey(testName || "");
}

/**
 * Save highlighted text / spans for a question
 * @param {string} testName
 * @param {number|string} questionIndex
 * @param {string|string[]} highlightedText - plain text or list of mark snippets
 * @param {number[]} selectedOptions
 * @param {object} [extra] - optional { marksHtml, spans }
 */
export function saveHighlight(
  testName,
  questionIndex,
  highlightedText,
  selectedOptions = [],
  extra = {},
) {
  try {
    if (!testName && testName !== 0) return false;
    const key = getHighlightsKey(testName);
    const highlightsData = JSON.parse(localStorage.getItem(key) || "{}");

    const textValue = Array.isArray(highlightedText)
      ? highlightedText.filter(Boolean).join("\n")
      : String(highlightedText || "");

    highlightsData[String(questionIndex)] = {
      text: textValue,
      selectedOptions: Array.isArray(selectedOptions) ? selectedOptions : [],
      marks: Array.isArray(highlightedText)
        ? highlightedText.filter(Boolean)
        : textValue
          ? [textValue]
          : [],
      marksHtml: extra.marksHtml || null,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(key, JSON.stringify(highlightsData));
    return true;
  } catch (e) {
    console.warn("Failed to save highlight:", e);
    return false;
  }
}

/**
 * Get highlights for a question
 */
export function getHighlight(testName, questionIndex) {
  try {
    const key = getHighlightsKey(testName);
    const highlightsData = JSON.parse(localStorage.getItem(key) || "{}");
    return (
      highlightsData[String(questionIndex)] ||
      highlightsData[questionIndex] ||
      null
    );
  } catch (e) {
    console.warn("Failed to get highlight:", e);
    return null;
  }
}

/**
 * Get all highlights for a test
 */
export function getAllHighlights(testName) {
  try {
    const key = getHighlightsKey(testName);
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch (e) {
    return {};
  }
}

/**
 * Clear all highlights for a test
 */
export function clearHighlights(testName) {
  try {
    const key = getHighlightsKey(testName);
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Read case note from caseNotes API or localStorage fallback
 */
export function readCaseNote(testName) {
  try {
    if (window.caseNotes?.getNoteForCase) {
      const note = window.caseNotes.getNoteForCase(testName);
      if (note) return note;
    }

    const raw = localStorage.getItem(NOTES_KEY);
    if (!raw) return null;
    const notes = JSON.parse(raw);
    if (!notes || typeof notes !== "object") return null;

    if (notes[testName]) return notes[testName];
    const matched = findMatchingKey(notes, testName);
    return matched ? notes[matched] : null;
  } catch (e) {
    console.warn("readCaseNote failed:", e);
    return null;
  }
}

/**
 * Read flag from caseNotes API or localStorage fallback
 */
export function readCaseFlagged(testName) {
  try {
    if (window.caseNotes?.isCaseFlagged) {
      return !!window.caseNotes.isCaseFlagged(testName);
    }

    const raw = localStorage.getItem(FLAGS_KEY);
    if (!raw) return false;
    const flags = JSON.parse(raw);
    if (!flags || typeof flags !== "object") return false;

    const bucket =
      flags[testName] ||
      (findMatchingKey(flags, testName)
        ? flags[findMatchingKey(flags, testName)]
        : null);
    return bucket?.isFlagged === true;
  } catch (e) {
    console.warn("readCaseFlagged failed:", e);
    return false;
  }
}

/**
 * Display test notes info box on test screen
 * Works even when window.caseNotes is missing (localStorage fallback)
 */
export function displayTestNotesInfo(testName, containerElement) {
  try {
    const note = readCaseNote(testName);
    const isFlagged = readCaseFlagged(testName);

    if (!note && !isFlagged) {
      hideTestNotesInfo();
      return;
    }

    if (!containerElement) {
      containerElement = document.getElementById("test-notes-info");
      if (!containerElement) {
        containerElement = document.createElement("div");
        containerElement.id = "test-notes-info";
        containerElement.style.marginBottom = "16px";
        const testScreen = document.getElementById("test-screen");
        const questionContainer = document.getElementById("question-container");
        if (testScreen && questionContainer) {
          testScreen.insertBefore(containerElement, questionContainer);
        } else if (testScreen) {
          testScreen.insertBefore(containerElement, testScreen.firstChild);
        } else {
          return;
        }
      }
    }

    const noteText =
      typeof note === "string"
        ? note
        : note?.text != null
          ? String(note.text)
          : note
            ? String(note)
            : "";

    let html = '<div class="test-notes-banner">';

    if (noteText) {
      html += `
        <div class="notes-section">
          <div class="notes-title"><i class="bi bi-pencil-square"></i> Sizning izohlar:</div>
          <div class="notes-content">${escapeHtml(noteText)}</div>
        </div>
      `;
    }

    if (isFlagged) {
      html += `
        <div class="flag-section">
          <i class="bi bi-flag-fill"></i> Bu test belgilangan - qayta tekshirishni tavsiya qilamiz
        </div>
      `;
    }

    html += "</div>";

    containerElement.innerHTML = html;
    containerElement.style.display = "block";
  } catch (e) {
    console.warn("Failed to display test notes:", e);
  }
}

/**
 * Hide test notes info box
 */
export function hideTestNotesInfo() {
  try {
    const container = document.getElementById("test-notes-info");
    if (container) {
      container.style.display = "none";
      container.innerHTML = "";
    }
  } catch (e) {
    console.warn("Failed to hide test notes:", e);
  }
}

/**
 * Wrap first occurrence of plain text in a mark.exam-hl inside root
 */
function highlightPlainSnippet(root, snippet) {
  if (!root || !snippet || !String(snippet).trim()) return false;
  const needle = String(snippet);

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.includes(needle)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (node.parentElement?.closest("mark.exam-hl")) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const node = walker.nextNode();
  if (!node) return false;

  const full = node.nodeValue;
  const start = full.indexOf(needle);
  if (start < 0) return false;
  const end = start + needle.length;

  const before = full.slice(0, start);
  const mid = full.slice(start, end);
  const after = full.slice(end);

  const mark = document.createElement("mark");
  mark.className = "exam-hl";
  mark.textContent = mid;

  const parent = node.parentNode;
  if (before) parent.insertBefore(document.createTextNode(before), node);
  parent.insertBefore(mark, node);
  if (after) parent.insertBefore(document.createTextNode(after), node);
  parent.removeChild(node);
  return true;
}

/**
 * Apply saved highlights to question DOM (exam UI)
 */
export function applyHighlightsToQuestion(
  testName,
  questionIndex,
  questionElement,
) {
  try {
    const root =
      questionElement ||
      document.getElementById("question-container") ||
      document.querySelector(".mcq-question")?.parentElement;
    if (!root) return;

    const highlight = getHighlight(testName, questionIndex);
    if (!highlight) return;

    // Re-apply text marks
    const snippets = Array.isArray(highlight.marks)
      ? highlight.marks
      : highlight.text
        ? String(highlight.text)
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean)
        : [];

    const questionEl = root.querySelector(".mcq-question") || root;
    snippets.forEach((snip) => {
      try {
        highlightPlainSnippet(questionEl, snip);
      } catch (err) {
        /* ignore single snippet failure */
      }
    });

    // Option highlights (legacy .answer-btn + current .mcq-option)
    if (
      Array.isArray(highlight.selectedOptions) &&
      highlight.selectedOptions.length > 0
    ) {
      const buttons = root.querySelectorAll(
        ".answer-btn, .mcq-option, #answer-buttons .mcq-option",
      );
      buttons.forEach((btn, idx) => {
        if (highlight.selectedOptions.includes(idx)) {
          btn.classList.add("user-selected-highlight", "exam-highlight");
        }
      });
    }
  } catch (e) {
    console.warn("Failed to apply highlights:", e);
  }
}

/**
 * Collect current <mark.exam-hl> texts from question container and persist
 * Call this from exam toolbar after Highlight / Unhighlight
 */
export function persistExamHighlightsFromDom(testName, questionIndex) {
  try {
    const container = document.getElementById("question-container");
    if (!container || testName == null) return false;

    const marks = Array.from(container.querySelectorAll("mark.exam-hl"))
      .map((m) => (m.textContent || "").trim())
      .filter(Boolean);

    const selectedOptions = [];
    container
      .querySelectorAll(".mcq-option.exam-highlight, .mcq-option.active")
      .forEach((btn, idx, list) => {
        // index among all options
      });
    container.querySelectorAll(".mcq-option").forEach((btn, idx) => {
      if (
        btn.classList.contains("exam-highlight") ||
        btn.classList.contains("user-selected-highlight")
      ) {
        selectedOptions.push(idx);
      }
    });

    return saveHighlight(testName, questionIndex, marks, selectedOptions);
  } catch (e) {
    console.warn("persistExamHighlightsFromDom failed:", e);
    return false;
  }
}

/**
 * Handle text selection and highlighting (legacy option click storage)
 */
export function initTextSelectionHandler(testName, questionElement) {
  try {
    if (!questionElement) return;

    const answerButtons = questionElement.querySelectorAll(
      ".answer-btn, .mcq-option",
    );
    answerButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedOptions = [];
        answerButtons.forEach((b, i) => {
          if (
            b.classList.contains("selected") ||
            b.classList.contains("active")
          ) {
            selectedOptions.push(i);
          }
        });
        const idx =
          typeof window.currentIndex === "number" ? window.currentIndex : 0;
        saveHighlight(testName, idx, "", selectedOptions);
      });
    });
  } catch (e) {
    console.warn("Failed to init text selection handler:", e);
  }
}

/**
 * Initialize test notes & highlights system
 */
export function initTestNotesDisplay() {
  // Bootstrap optional — notes still work without it
  window.displayTestNotesInfo = displayTestNotesInfo;
  window.hideTestNotesInfo = hideTestNotesInfo;
  window.saveHighlight = saveHighlight;
  window.getHighlight = getHighlight;
  window.applyHighlightsToQuestion = applyHighlightsToQuestion;
  window.persistExamHighlightsFromDom = persistExamHighlightsFromDom;
  window.clearHighlights = clearHighlights;
  window.readCaseNote = readCaseNote;
  window.readCaseFlagged = readCaseFlagged;

  console.log("✅ Test Notes Display initialized");
}

export default {
  getHighlightsKey,
  saveHighlight,
  getHighlight,
  getAllHighlights,
  clearHighlights,
  displayTestNotesInfo,
  hideTestNotesInfo,
  applyHighlightsToQuestion,
  persistExamHighlightsFromDom,
  initTextSelectionHandler,
  initTestNotesDisplay,
  readCaseNote,
  readCaseFlagged,
};
