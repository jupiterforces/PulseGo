// ----------------------
// Pulse Go – test utils + registry
// ----------------------
// Merge mode: files can still do window.TEST_QUESTIONS = { KEY: [...] }
(function () {
  let store =
    window.TEST_QUESTIONS && typeof window.TEST_QUESTIONS === "object"
      ? window.TEST_QUESTIONS
      : {};

  Object.defineProperty(window, "TEST_QUESTIONS", {
    configurable: true,
    enumerable: true,
    get() {
      return store;
    },
    set(v) {
      if (!v || typeof v !== "object") return;
      Object.keys(v).forEach((k) => {
        store[k] = v[k];
      });
    },
  });
})();

function shuffle(array) {
  return [...array]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

/**
 * Shuffle questions + answers.
 * Compatible with the simple question shape used on this page.
 * (testcases.js may overwrite window.getRandomTest with a richer version – that's fine)
 */
function getRandomTest(questions, n = "all") {
  if (!Array.isArray(questions) || !questions.length) return [];

  const shuffledQuestions =
    n === "all" ? shuffle(questions) : shuffle(questions).slice(0, n);

  return shuffledQuestions.map((q) => {
    const answers = Array.isArray(q.a) ? q.a : [];
    const correctIndex = typeof q.correct === "number" ? q.correct : 0;
    const correctAnswer = answers[correctIndex];

    const shuffledAnswers = shuffle(answers);
    const newCorrect = shuffledAnswers.indexOf(correctAnswer);

    return {
      q: q.q,
      photo: q.photo || q.image || null,
      img: q.img || q.explanationImg || null,
      a: shuffledAnswers,
      correct: newCorrect >= 0 ? newCorrect : 0,
      explanation: q.explanation || null,
      uz: q.uz || null,
    };
  });
}

window.getRandomTest = getRandomTest;
window.shuffle = shuffle;

// ----------------------
// Central registry – each question JS file registers itself
// ----------------------
window.PulseTestRegistry = window.PulseTestRegistry || {
  tests: {}, // id → raw questions array
  titles: {}, // id → display title
  meta: {},

  /**
   * @param {string} id          unique key e.g. "anatcase1"
   * @param {Array}  questions   raw question objects
   * @param {string} title       UI title
   * @param {object} meta        optional { page: "clinic-cases", ... }
   */
  register(id, questions, title, meta = {}) {
    if (!id || !Array.isArray(questions)) {
      console.warn("[PulseTestRegistry] invalid register:", id);
      return;
    }
    this.tests[id] = questions;
    this.titles[id] = title || id;
    this.meta[id] = meta || {};

    // Keep global maps in sync for startTest / stats
    window.tests = window.tests || {};
    window.testTitleMap = window.testTitleMap || {};

    // Store RAW bank (do NOT pre-shuffle – startTest does that)
    window.tests[id] = questions;
    window.testTitleMap[id] = title || id;

    // Notify pages that a new test appeared
    try {
      window.dispatchEvent(
        new CustomEvent("pulse:tests-updated", { detail: { id } }),
      );
    } catch (e) {}
  },

  list(filterFn) {
    const all = Object.keys(this.tests).map((id) => ({
      testName: id,
      title: this.titles[id] || id,
      count: this.tests[id]?.length || 0,
      ...(this.meta[id] || {}),
    }));
    return typeof filterFn === "function" ? all.filter(filterFn) : all;
  },

  get(id) {
    return this.tests[id] || null;
  },
};

/** Optional helper used by older pages */
function renderTestCards(containerSelector, tests) {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error("❌ Test cards container topilmadi:", containerSelector);
    return;
  }
  container.innerHTML = "";
  tests.forEach(({ testName, title }) => {
    const card = document.createElement("div");
    card.className = "col-6 col-md-3";
    card.innerHTML = `
      <div class="test-card" onclick="startTest('${testName}')">
        <div class="test-icon bg-success-subtle text-success">
          <i class="bi bi-journal-medical fs-3"></i>
        </div>
        <div class="test-title fw-semibold">${title}</div>
        <div class="question-footer">
          ${window.tests?.[testName]?.length || 0} ta savol
        </div>
      </div>`;
    container.appendChild(card);
  });
}
window.renderTestCards = renderTestCards;
