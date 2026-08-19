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
    d.syncedToFirebase = false;
    save(d);
    console.log("💾 Data.setUser →", user);
  }

  function ensureUser() {
    return new Promise((resolve) => {
      // ========================================
      // 1. Prefer authenticated user from pulsego_user_v1
      // ========================================
      try {
        const cachedRaw = localStorage.getItem("pulsego_user_v1");
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);

          // If this cache has a real Firebase-looking user (has email or photoURL)
          if (
            cached.uid &&
            (cached.email || cached.photoURL || cached.firstName)
          ) {
            console.log(
              "🔐 Found authenticated user in pulsego_user_v1:",
              cached.uid,
            );

            const authUser = {
              uid: cached.uid,
              name:
                cached.fullName ||
                `${cached.firstName || ""} ${cached.lastName || ""}`.trim() ||
                "User",
              about: "",
              email: cached.email || "",
              photoURL: cached.photoURL || "",
              createdAt: new Date().toISOString(),
            };

            // Force overwrite the old anonymous user
            setUser(authUser);

            // === NEW: Pull remote data if local is empty ===
            pullFromFirestoreIfEmpty().then(() => {
              resolve(authUser);
            });

            return; // important: don't resolve immediately
          }
        }
      } catch (e) {
        console.warn("Failed to read pulsego_user_v1", e);
      }

      // ========================================
      // 2. Fallback to existing local anonymous user
      // ========================================
      const user = getUser();
      if (user && user.name) {
        console.log("Using existing local user:", user.uid);
        return resolve(user);
      }

      // ========================================
      // 3. Create new anonymous user (modal)
      // ========================================
      const modal = document.getElementById("userModal");
      const form = document.getElementById("pg-form");

      if (!modal || !form) {
        console.error("userModal or pg-form not found");
        return resolve(null);
      }

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
        form.removeEventListener("submit", handler);
        resolve(newUser);
      };

      form.addEventListener("submit", handler);
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const user = await Data.ensureUser();

    console.log(user);
  });

  function isSameMistake(a, b) {
    return (
      a.q === b.q &&
      a.correct === b.correct &&
      a.selected === b.selected &&
      a.testName === b.testName
    );
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
    d.resolvedMistakes = d.resolvedMistakes || [];

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
        const stored = Object.assign(
          { id: m.id, testName: entry.testName, date: entry.date },
          m,
        );
        if (!d.mistakes.some((existing) => isSameMistake(existing, stored))) {
          d.mistakes.push(stored);
        }
      });
    }

    d.tests.push(entry);
    // mark as dirty (needs sync)
    d.syncedToFirebase = false;
    save(d);

    // === NEW: Force immediate sync for authenticated users ===
    const isAuthUser = !!(d.user?.email || d.user?.photoURL);
    if (isAuthUser && window.Data?.smartSync) {
      // run in background so it doesn't slow down the UI
      window.Data.smartSync().catch((err) => {
        console.error("Background sync after test failed:", err);
      });
    }

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

  function getResolvedMistakes() {
    const d = load();
    return d.resolvedMistakes || [];
  }

  function getPendingMistakes() {
    return getMistakes();
  }

  function resolveMistake(mistakeId) {
    const d = load();
    d.mistakes = d.mistakes || [];
    d.resolvedMistakes = d.resolvedMistakes || [];

    const normalizedId = String(mistakeId);
    const idx = d.mistakes.findIndex((m) => String(m.id) === normalizedId);
    if (idx === -1) return false;

    const removed = d.mistakes.splice(idx, 1)[0];
    removed.resolvedAt = new Date().toISOString();
    d.resolvedMistakes.push(removed);

    // find the original test entry and remove the mistake there too
    if (d.tests && d.tests.length) {
      const test = d.tests.find(
        (t) => t.id === removed.id || t.testName === removed.testName,
      );
      if (test && test.mistakes && test.mistakes.length) {
        const mi = test.mistakes.findIndex(
          (m) =>
            String(m.id) === normalizedId ||
            (m.q === removed.q && m.selected === removed.selected),
        );
        if (mi !== -1) {
          test.mistakes.splice(mi, 1);
          test.mistakesCount = Math.max(0, (test.mistakesCount || 0) - 1);
        }
      }
    }

    d.syncedToFirebase = false;
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

  function hasSubmittedFeedback() {
    const d = load();
    return d.feedbackSubmitted === true;
  }

  function markFeedbackSubmitted() {
    const d = load();
    d.feedbackSubmitted = true;
    d.syncedToFirebase = false;
    save(d);
  }

  async function submitFeedback({ liked, advantages, disadvantages }) {
    const data = load();
    // Allow anonymous submissions if no stored user
    const user = data.user || { uid: null, name: "Anonymous", about: "" };

    const mod = await import("../../firebase.js");

    try {
      if (user && user.uid) {
        await mod.setDoc(
          mod.doc(mod.db, "users", user.uid, "feedbacks", "first_feedback"),
          {
            liked,
            advantages,
            disadvantages,
            createdAt: new Date().toISOString(),
          },
        );
      } else {
        // write to a top-level feedbacks collection for anonymous users
        const id = String(Date.now());
        await mod.setDoc(mod.doc(mod.db, "feedbacks", id), {
          liked,
          advantages,
          disadvantages,
          user: { uid: "anonymous", name: "Anonymous" },
          createdAt: new Date().toISOString(),
        });
      }
    } catch (e) {
      // rethrow so callers can handle / show errors
      throw e;
    }

    // mark locally that feedback was submitted to avoid repeated prompts
    markFeedbackSubmitted();

    return true;
  }

  global.Data = {
    getUser,
    setUser,
    ensureUser,
    recordTestResult,
    getResults,
    getMistakes,
    getResolvedMistakes,
    getPendingMistakes,
    resolveMistake,
    getOverview,
    clearMistakes,
    clearAll,

    hasSubmittedFeedback,
    markFeedbackSubmitted,
    submitFeedback,

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

/* =========================
   🔥 FIRESTORE SYNC LAYER
========================= */

const SYNC_KEY = "pulsego_sync_v1";

/**
 * If the user is authenticated and local data is empty,
 * download their previous tests + mistakes from Firestore once.
 */
async function pullFromFirestoreIfEmpty() {
  const data = window.Data._getRawData();
  if (!data || !data.user || !data.user.uid) return;

  const isAuthUser = !!(data.user.email || data.user.photoURL);
  if (!isAuthUser) return;

  const hasLocalTests = Array.isArray(data.tests) && data.tests.length > 0;
  const hasLocalMistakes =
    Array.isArray(data.mistakes) && data.mistakes.length > 0;

  if (hasLocalTests || hasLocalMistakes) {
    console.log("Local data already exists → skip pull");
    return;
  }

  console.log("🔽 Local data is empty → trying to pull from Firestore...");

  try {
    const mod = await import("../../firebase.js"); // adjust path if needed

    // Check that the needed functions exist
    if (
      typeof mod.collection !== "function" ||
      typeof mod.getDocs !== "function"
    ) {
      console.error("firebase.js is missing collection or getDocs exports");
      return;
    }

    const { db, collection, getDocs } = mod;
    const uid = data.user.uid;

    // 1. Pull testResults
    const testsSnap = await getDocs(collection(db, "user", uid, "testResults"));
    const tests = [];
    testsSnap.forEach((docSnap) => {
      tests.push(docSnap.data());
    });

    // 2. Pull mistakes
    const mistakesSnap = await getDocs(collection(db, "user", uid, "mistakes"));
    const mistakes = [];
    mistakesSnap.forEach((docSnap) => {
      mistakes.push(docSnap.data());
    });

    if (tests.length === 0 && mistakes.length === 0) {
      console.log("No remote data found for this user");
      return;
    }

    // 3. Save into localStorage
    data.tests = tests;
    data.mistakes = mistakes;
    data.syncedToFirebase = true;
    window.Data._saveRawData(data);

    console.log(
      `✅ Successfully pulled ${tests.length} tests and ${mistakes.length} mistakes`,
    );
  } catch (err) {
    console.error("Failed to pull data from Firestore:", err);
  }
}

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

async function syncToFirestore() {
  const data = window.Data._getRawData();
  if (!data || !data.user || !data.user.uid) {
    console.log("No user to sync");
    return;
  }

  const isAuthUser = !!(data.user.email || data.user.photoURL);
  const collectionName = isAuthUser ? "user" : "users";

  console.log(`🔄 Syncing to → ${collectionName}/${data.user.uid}`);

  try {
    const mod = await import("../../firebase.js"); // adjust path if needed
    const { db, setDoc, doc } = mod;
    const uid = data.user.uid;

    // 1. Profile + overview
    const overview = window.Data.getOverview();
    await setDoc(
      doc(db, collectionName, uid),
      {
        uid,
        name: data.user.name,
        about: data.user.about || "",
        email: data.user.email || "",
        photoURL: data.user.photoURL || "",
        overview,
        updatedAt: new Date().toISOString(),
      },
      { merge: true },
    );

    // 2. Test results
    for (const test of data.tests || []) {
      const testRef = doc(
        db,
        collectionName,
        uid,
        "testResults",
        String(test.id),
      );
      await setDoc(
        testRef,
        { ...test, syncedAt: new Date().toISOString() },
        { merge: true },
      );
    }

    // 3. Mistakes
    for (const mistake of data.mistakes || []) {
      const mistakeRef = doc(
        db,
        collectionName,
        uid,
        "mistakes",
        String(mistake.id),
      );
      await setDoc(
        mistakeRef,
        { ...mistake, syncedAt: new Date().toISOString() },
        { merge: true },
      );
    }

    data.syncedToFirebase = true;
    window.Data._saveRawData(data);
    setSyncState({
      synced: true,
      lastSync: new Date().toISOString(),
      isAuthUser,
    });

    console.log(`✅ Full sync completed → ${collectionName}/${uid}`);
  } catch (e) {
    console.error("Firestore sync failed:", e);
  }
}

async function smartSync() {
  console.log("SMART SYNC RUNNING");

  const data =
    window.Data && typeof window.Data._getRawData === "function"
      ? window.Data._getRawData()
      : (() => {
          try {
            return JSON.parse(localStorage.getItem("pulsego_data_v1") || "{}");
          } catch (e) {
            return {};
          }
        })();

  if (!data || !data.user || !data.user.uid) return;

  const isAuthUser = !!(data.user.email || data.user.photoURL);

  // ========================================
  // AUTHENTICATED USERS → only sync when dirty
  // ========================================
  if (isAuthUser) {
    if (data.syncedToFirebase === false) {
      console.log("🔐 Auth user – data is dirty → syncing now");
      await syncToFirestore();
    } else {
      console.log("🔐 Auth user – already synced, skipping");
    }
    return;
  }

  // ========================================
  // ANONYMOUS USERS → once a day
  // ========================================
  const state = getSyncState();

  if (!state.synced) {
    console.log("Anonymous – never synced → syncing");
    await syncToFirestore();
    return;
  }

  const last = state.lastSync;
  const diff = Date.now() - new Date(last || 0).getTime();
  const ONE_DAY = 24 * 60 * 60 * 1000;

  if (diff > ONE_DAY) {
    console.log("Anonymous – last sync > 1 day → syncing");
    await syncToFirestore();
  }
}

// Expose methods
try {
  if (window.Data) {
    window.Data.syncToFirestore = syncToFirestore;
    window.Data.smartSync = smartSync;
    window.Data.pullFromFirestoreIfEmpty = pullFromFirestoreIfEmpty; // ← add this
    window.Data.getSyncState = getSyncState;
    window.Data.setSyncState = setSyncState;
  }
} catch (e) {
  console.error("Failed to attach sync methods", e);
}

// ❌ REMOVED: No more automatic sync on every page load
// window.addEventListener("DOMContentLoaded", () => {
//   smartSync();
// });
