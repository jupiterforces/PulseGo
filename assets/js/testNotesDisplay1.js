/**
 * Test Notes & Highlights Manager
 * Handles displaying and storing notes, flags, and highlighted text during test
 */

const HIGHLIGHTS_KEY_PREFIX = "pulsego_test_highlights_v1_";

/**
 * Get highlights storage key for a test
 */
export function getHighlightsKey(testName) {
  return HIGHLIGHTS_KEY_PREFIX + (testName || "");
}

/**
 * Save highlighted text in a question
 */
export function saveHighlight(
  testName,
  questionIndex,
  highlightedText,
  selectedOptions = [],
) {
  try {
    const key = getHighlightsKey(testName);
    const highlightsData = JSON.parse(localStorage.getItem(key) || "{}");

    highlightsData[questionIndex] = {
      text: highlightedText,
      selectedOptions: selectedOptions,
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
    return highlightsData[questionIndex] || null;
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
 * Display test notes info box
 * Used to show case notes in test screen
 */
export function displayTestNotesInfo(testName, containerElement) {
  try {
    if (!window.caseNotes) return;

    const note = window.caseNotes.getNoteForCase(testName);
    const isFlagged = window.caseNotes.isCaseFlagged(testName);

    if (!note && !isFlagged) return;

    if (!containerElement) {
      containerElement = document.getElementById("test-notes-info");
      if (!containerElement) {
        containerElement = document.createElement("div");
        containerElement.id = "test-notes-info";
        containerElement.style.marginBottom = "16px";
        const testScreen = document.getElementById("test-screen");
        if (testScreen) {
          testScreen.insertBefore(containerElement, testScreen.firstChild);
        } else {
          return;
        }
      }
    }

    let html = '<div class="test-notes-banner">';

    if (note) {
      html += `
        <div class="notes-section">
          <div class="notes-title"><i class="bi bi-pencil-square"></i> Sizning izohlar:</div>
          <div class="notes-content">${escapeHtml(note.text)}</div>
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
    }
  } catch (e) {
    console.warn("Failed to hide test notes:", e);
  }
}

/**
 * Apply highlights to question text
 */
export function applyHighlightsToQuestion(
  testName,
  questionIndex,
  questionElement,
) {
  try {
    const highlight = getHighlight(testName, questionIndex);
    if (!highlight || !highlight.text) return;

    // Mark highlighted options if they exist
    if (
      Array.isArray(highlight.selectedOptions) &&
      highlight.selectedOptions.length > 0
    ) {
      const buttons = questionElement?.querySelectorAll(".answer-btn");
      if (buttons) {
        buttons.forEach((btn, idx) => {
          if (highlight.selectedOptions.includes(idx)) {
            btn.classList.add("user-selected-highlight");
          }
        });
      }
    }
  } catch (e) {
    console.warn("Failed to apply highlights:", e);
  }
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Handle text selection and highlighting
 */
export function initTextSelectionHandler(testName, questionElement) {
  try {
    if (!questionElement) return;

    // Add click handler to store selections
    const answerButtons = questionElement.querySelectorAll(".answer-btn");
    answerButtons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        // Store which option was selected along with any highlight
        const selectedOptions = [];
        answerButtons.forEach((b, i) => {
          if (b.classList.contains("selected")) {
            selectedOptions.push(i);
          }
        });
        saveHighlight(testName, window.currentIndex, "", selectedOptions);
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
  if (!window.bootstrap) {
    console.warn("Bootstrap not loaded for test notes");
    return;
  }

  // Make functions globally available
  window.displayTestNotesInfo = displayTestNotesInfo;
  window.hideTestNotesInfo = hideTestNotesInfo;
  window.saveHighlight = saveHighlight;
  window.getHighlight = getHighlight;
  window.applyHighlightsToQuestion = applyHighlightsToQuestion;

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
  initTextSelectionHandler,
  initTestNotesDisplay,
};
