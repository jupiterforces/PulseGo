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
    // mark as dirty (needs sync)
    d.syncedToFirebase = false;
    save(d);
  }

  function ensureUser() {
    const user = getUser();
    if (user && user.name) return Promise.resolve(user);

    return new Promise((resolve) => {
      const modal = document.getElementById("userModal");
      const form = document.getElementById("pg-form");

      modal.classList.remove("hidden");

      const handler = (e) => {
        e.preventDefault();

        const name = document.getElementById("pg-name").value.trim();
        const about = document.getElementById("pg-about").value.trim();

        if (!name) return;

        const newUser = {
          uid: crypto.randomUUID(),
          name,
          about,
          createdAt: new Date().toISOString(),
        };

        setUser(newUser);

        modal.classList.add("hidden");

        form.removeEventListener("submit", handler); // 🔥 MUHIM FIX

        resolve(newUser);

        // setTimeout(() => {
        //   window.location.href = "../../profile/";
        // }, 300);
      };

      form.addEventListener("submit", handler);
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const user = await Data.ensureUser();

    console.log(user);
  });

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
    // mark as dirty (needs sync)
    d.syncedToFirebase = false;
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
    // mark as dirty
    d.syncedToFirebase = false;
    save(d);
  }

  function clearAll() {
    localStorage.removeItem(KEY);
    // also clear sync state (use literal to avoid referencing outer var)
    try {
      localStorage.removeItem("pulsego_sync_v1");
    } catch (e) {}
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
    // expose raw accessors for the sync layer
    _getRawData: load,
    _saveRawData: save,
  };
})(window);

/* =========================
   🔥 FIRESTORE SYNC LAYER (non-module friendly)
   Uses dynamic import() to load the module `../../firebase.js` so
   this file can remain a plain script while still using ES module exports.
   ========================= */

const SYNC_KEY = "pulsego_sync_v1";

function getSyncState() {
  try {
    return JSON.parse(localStorage.getItem(SYNC_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function setSyncState(state) {
  try {
    localStorage.setItem(SYNC_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save sync state", e);
  }
}

console.log(Data.getUser());

async function syncToFirestore() {
  const data =
    window.Data && typeof window.Data._getRawData === "function"
      ? window.Data._getRawData()
      : (function () {
          try {
            return JSON.parse(localStorage.getItem("pulsego_data_v1") || "{}");
          } catch (e) {
            return {};
          }
        })();

  // nothing to sync
  if (!data || !data.user || !data.user.uid) return;

  try {
    // dynamic import of the firebase module (ES module) from project root
    const mod = await import("../../firebase.js");
    const db = mod.db;
    const setDoc = mod.setDoc;
    const doc = mod.doc;
    const overview = window.Data.getOverview();

    if (!db || typeof setDoc !== "function" || typeof doc !== "function") {
      console.error("Firebase module missing required exports");
      return;
    }

    console.log("Sync: uploading data to Firestore for user", data.user.uid);
    await setDoc(doc(db, "users", data.user.uid), {
      uid: data.user.uid,
      name: data.user.name,
      about: data.user.about || "",
      overview: overview,
    });
    console.log("AFTER SETDOC");

    // mark synced in our local data object and separate sync key
    data.syncedToFirebase = true;
    if (window.Data && typeof window.Data._saveRawData === "function") {
      window.Data._saveRawData(data);
    } else {
      try {
        localStorage.setItem("pulsego_data_v1", JSON.stringify(data));
      } catch (e) {}
    }

    setSyncState({ synced: true, lastSync: new Date().toISOString() });
    console.log("Sync: success");
  } catch (e) {
    console.error("Sync failed:", e);
  }
}

async function smartSync() {
  console.log("SMART SYNC RUNNING");
  const data =
    window.Data && typeof window.Data._getRawData === "function"
      ? window.Data._getRawData()
      : (function () {
          try {
            return JSON.parse(localStorage.getItem("pulsego_data_v1") || "{}");
          } catch (e) {
            return {};
          }
        })();
  if (!data || !data.user || !data.user.uid) return; // nothing to do

  const state = getSyncState();
  if (!state.synced) {
    await syncToFirestore();
    return;
  }

  const last = state.lastSync;
  const diff = Date.now() - new Date(last || 0).getTime();
  const THREE_DAYS = 2 * 24 * 60 * 60 * 1000;
  if (diff > THREE_DAYS) {
    await syncToFirestore();
  }
}

// Expose sync helpers on Data for convenience
try {
  if (window.Data) {
    window.Data.syncToFirestore = syncToFirestore;
    window.Data.smartSync = smartSync;
    window.Data.getSyncState = getSyncState;
    window.Data.setSyncState = setSyncState;
  }
} catch (e) {
  console.error("Failed to attach sync methods to Data", e);
}

// Auto-run when page loads
window.addEventListener("DOMContentLoaded", () => {
  // run in background (no await here)
  smartSync();
});
