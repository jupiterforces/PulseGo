// Data helper for PulseGo — stores user info, test results, and mistakes in localStorage
(function (global) {
  const KEY = "pulsego_data_v1";

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error("Failed to parse stored data", e);
      return {};
    }
  }

  function save(obj) {
    try {
      localStorage.setItem(KEY, JSON.stringify(obj));
    } catch (e) {
      console.error("Failed to save data", e);
    }
  }

  function getUser() {
    const d = load();
    return d.user || null;
  }

  function setUser(user) {
    const d = load();
    d.user = user;
    save(d);
  }

  function ensureUser() {
    const user = getUser();
    if (user && user.name) return user;

    // Simple prompts to collect minimal welcome info on first run
    const name = window.prompt("To'liq ism va familiyangizni kiriting:", "");
    if (!name) return null;
    const about = window.prompt("Guruhingizni kiriting:", "");

    const newUser = {
      name: name.trim(),
      about: about ? about.trim() : "",
      createdAt: new Date().toISOString(),
    };

    setUser(newUser);
    return newUser;
  }

  function recordTestResult({
    testName,
    total = 0,
    correct = 0,
    mistakes = [],
  } = {}) {
    const d = load();
    d.tests = d.tests || [];
    d.mistakes = d.mistakes || [];

    const percent = total === 0 ? 0 : Math.round((correct / total) * 100);
    const entry = {
      id: Date.now(),
      testName: testName || "unknown",
      total,
      correct,
      percent,
      date: new Date().toISOString(),
      mistakesCount: mistakes ? mistakes.length : 0,
      mistakes: [],
    };

    if (mistakes && mistakes.length) {
      entry.mistakes = mistakes.map((m, i) => ({
        id: Date.now() + i,
        q: m.q,
        photo: m.photo || null,
        a: m.a || [],
        correct: m.correct,
        selected: m.selected,
      }));

      // Also store flattened mistakes list for quick review (with IDs)
      entry.mistakes.forEach((m) => {
        d.mistakes.push(
          Object.assign(
            { id: m.id, testName: entry.testName, date: entry.date },
            m,
          ),
        );
      });
    }

    d.tests.push(entry);
    save(d);
    return entry;
  }

  function getResults() {
    const d = load();
    return d.tests || [];
  }

  function getMistakes() {
    const d = load();
    return d.mistakes || [];
  }

  function resolveMistake(mistakeId) {
    const d = load();
    if (!d.mistakes) return false;

    const idx = d.mistakes.findIndex((m) => m.id === mistakeId);
    if (idx === -1) return false;

    const removed = d.mistakes.splice(idx, 1)[0];

    // find the original test entry and remove the mistake there too
    if (d.tests && d.tests.length) {
      const test = d.tests.find(
        (t) => t.id === removed.id || t.testName === removed.testName,
      );
      if (test && test.mistakes && test.mistakes.length) {
        const mi = test.mistakes.findIndex(
          (m) =>
            m.id === mistakeId ||
            (m.q === removed.q && m.selected === removed.selected),
        );
        if (mi !== -1) {
          test.mistakes.splice(mi, 1);
          test.mistakesCount = Math.max(0, (test.mistakesCount || 0) - 1);
        }
      }
    }

    save(d);
    return true;
  }

  function getOverview() {
    const d = load();
    const tests = d.tests || [];
    const totalTests = tests.length;
    const totalQuestions = tests.reduce((s, t) => s + (t.total || 0), 0);
    const totalCorrect = tests.reduce((s, t) => s + (t.correct || 0), 0);
    const percent =
      totalQuestions === 0
        ? 0
        : Math.round((totalCorrect / totalQuestions) * 100);
    return { totalTests, totalQuestions, totalCorrect, percent };
  }

  function clearMistakes() {
    const d = load();
    if (d.mistakes) d.mistakes = [];
    if (d.tests && d.tests.length) {
      d.tests.forEach((t) => {
        t.mistakes = [];
        t.mistakesCount = 0;
      });
    }
    save(d);
  }

  function clearAll() {
    localStorage.removeItem(KEY);
  }

  global.Data = {
    getUser,
    setUser,
    ensureUser,
    recordTestResult,
    getResults,
    getMistakes,
    resolveMistake,
    getOverview,
    clearMistakes,
    clearAll,
  };
})(window);
