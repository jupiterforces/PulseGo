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
      // 1. Prefer authenticated user from pulsego_user_v1
      try {
        const cachedRaw = localStorage.getItem("pulsego_user_v1");
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);

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

            setUser(authUser);

            pullFromFirestoreIfEmpty().then(() => {
              resolve(authUser);
            });

            return;
          }
        }
      } catch (e) {
        console.warn("Failed to read pulsego_user_v1", e);
      }

      // 2. Fallback to existing local anonymous user
      const user = getUser();
      if (user && user.name) {
        console.log("Using existing local user:", user.uid);
        return resolve(user);
      }

      // 3. Create new anonymous user (modal)
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

  /**
   * Local-only record. Does NOT trigger multi-doc smartSync anymore.
   * Engine already writes one Firestore "runs/{id}" doc after each test stop.
   */
  function recordTestResult({
    testName,
    total = 0,
    correct = 0,
    solved = null,
    wrong = null,
    unsolved = null,
    percent = null,
    mistakes = [],
    partial = false,
  } = {}) {
    const d = load();
    d.tests = d.tests || [];
    d.mistakes = d.mistakes || [];
    d.resolvedMistakes = d.resolvedMistakes || [];

    const solvedN =
      solved != null ? solved : correct + (Array.isArray(mistakes) ? mistakes.length : wrong || 0);
    const wrongN =
      wrong != null
        ? wrong
        : Array.isArray(mistakes)
          ? mistakes.length
          : Math.max(0, solvedN - correct);
    const unsolvedN =
      unsolved != null ? unsolved : Math.max(0, total - solvedN);
    const percentN =
      percent != null
        ? percent
        : solvedN === 0
          ? 0
          : Math.round((correct / solvedN) * 100);

    const entry = {
      id: Date.now(),
      testName: testName || "unknown",
      total,
      correct,
      solved: solvedN,
      wrong: wrongN,
      unsolved: unsolvedN,
      percent: percentN,
      date: new Date().toISOString(),
      mistakesCount: mistakes ? mistakes.length : wrongN || 0,
      partial: !!partial,
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
        qHash: m.qHash || null,
      }));

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
    // Keep local dirty flag for optional rare full backup — do NOT auto multi-write
    d.syncedToFirebase = false;
    save(d);

    // Prefer engine's single-write path if available; otherwise one-run write here
    // (engine calls writeTestRunToFirestoreOnce itself — this is a fallback only)
    return entry;
  }

  /** Called by engine after successful 1-write so full sync can skip this run */
  function markRunSynced(runId, payload) {
    try {
      const d = load();
      d.lastRunSyncedId = String(runId);
      d.lastRunSyncedAt = new Date().toISOString();
      // Overview is local; do not fan-out writes
      if (payload && typeof payload === "object") {
        d.lastRunSummary = {
          id: String(runId),
          testName: payload.testName,
          percent: payload.percent,
          correct: payload.correct,
          total: payload.total,
          timeSpentSec: payload.timeSpentSec,
        };
      }
      save(d);
    } catch (e) {
      console.warn("markRunSynced failed", e);
    }
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
    d.syncedToFirebase = false;
    save(d);
  }

  function clearAll() {
    localStorage.removeItem(KEY);
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
      throw e;
    }

    markFeedbackSubmitted();
    return true;
  }

  global.Data = {
    getUser,
    setUser,
    ensureUser,
    recordTestResult,
    markRunSynced,
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

    _getRawData: load,
    _saveRawData: save,
  };
})(window);

/* =========================
   🔥 FIRESTORE SYNC LAYER
   Per-test path = 1 write (runs/{id}) via engine.
   Full multi-doc sync is OPT-IN / rare backup only.
========================= */

const SYNC_KEY = "pulsego_sync_v1";

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
    const mod = await import("../../firebase.js");

    if (
      typeof mod.collection !== "function" ||
      typeof mod.getDocs !== "function"
    ) {
      console.error("firebase.js is missing collection or getDocs exports");
      return;
    }

    const { db, collection, getDocs } = mod;
    const uid = data.user.uid;

    // Prefer new runs collection; fall back to legacy testResults
    let tests = [];
    try {
      const runsSnap = await getDocs(collection(db, "user", uid, "runs"));
      runsSnap.forEach((docSnap) => {
        const r = docSnap.data();
        tests.push({
          id: r.id || docSnap.id,
          testName: r.testName,
          total: r.total,
          correct: r.correct,
          solved: r.solved,
          wrong: r.wrong,
          unsolved: r.unsolved,
          percent: r.percent,
          date: r.finishedAt || r.syncedAt || r.startedAt,
          mistakesCount: r.mistakesCount || 0,
          partial: !!r.partial,
          timeSpentSec: r.timeSpentSec,
        });
      });
    } catch (e) {
      console.warn("runs pull failed, trying testResults", e);
    }

    if (!tests.length) {
      const testsSnap = await getDocs(
        collection(db, "user", uid, "testResults"),
      );
      testsSnap.forEach((docSnap) => {
        tests.push(docSnap.data());
      });
    }

    const mistakesSnap = await getDocs(collection(db, "user", uid, "mistakes"));
    const mistakes = [];
    mistakesSnap.forEach((docSnap) => {
      mistakes.push(docSnap.data());
    });

    if (tests.length === 0 && mistakes.length === 0) {
      console.log("No remote data found for this user");
      return;
    }

    data.tests = tests;
    data.mistakes = mistakes;
    data.syncedToFirebase = true;
    window.Data._saveRawData(data);

    console.log(
      `✅ Successfully pulled ${tests.length} runs/tests and ${mistakes.length} mistakes`,
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

/**
 * ONE write: latest run summary only.
 * Used as fallback if engine write is unavailable.
 */
async function writeLatestRunOnce(runPayload) {
  const data = window.Data._getRawData();
  if (!data || !data.user || !data.user.uid) return null;

  const isAuthUser = !!(data.user.email || data.user.photoURL);
  const collectionName = isAuthUser ? "user" : "users";
  const uid = data.user.uid;
  const runId = String(runPayload.id || Date.now());

  try {
    const mod = await import("../../firebase.js");
    const { db, setDoc, doc } = mod;

    const docPayload = {
      id: runId,
      testName: runPayload.testName || "unknown",
      testTitle: runPayload.testTitle || runPayload.testName || "unknown",
      mode: runPayload.mode || "study",
      status: runPayload.status || "completed",
      partial: !!runPayload.partial,
      total: runPayload.total || 0,
      solved: runPayload.solved || 0,
      correct: runPayload.correct || 0,
      wrong: runPayload.wrong || 0,
      unsolved: runPayload.unsolved || 0,
      percent: runPayload.percent || 0,
      timeSpentSec: runPayload.timeSpentSec || 0,
      totalTestTime: runPayload.totalTestTime || 0,
      flaggedCount: runPayload.flaggedCount || 0,
      notesCount: runPayload.notesCount || 0,
      mistakesCount: runPayload.mistakesCount || 0,
      uid,
      userName: data.user.name || "",
      userEmail: data.user.email || "",
      startedAt: runPayload.startedAt || null,
      finishedAt: runPayload.finishedAt || new Date().toISOString(),
      syncedAt: new Date().toISOString(),
    };

    await setDoc(doc(db, collectionName, uid, "runs", runId), docPayload, {
      merge: true,
    });
    console.log(`☁️ Data.writeLatestRunOnce → ${collectionName}/${uid}/runs/${runId}`);
    markRunSynced(runId, docPayload);
    return docPayload;
  } catch (e) {
    console.error("writeLatestRunOnce failed:", e);
    return null;
  }
}

/**
 * Rare full backup (profile + all local tests + mistakes).
 * NOT called after every test anymore — only via explicit smartSync
 * when you really need a full mirror (e.g. account migration).
 */
async function syncToFirestore() {
  const data = window.Data._getRawData();
  if (!data || !data.user || !data.user.uid) {
    console.log("No user to sync");
    return;
  }

  const isAuthUser = !!(data.user.email || data.user.photoURL);
  const collectionName = isAuthUser ? "user" : "users";

  console.log(`🔄 Full backup sync → ${collectionName}/${data.user.uid}`);

  try {
    const mod = await import("../../firebase.js");
    const { db, setDoc, doc } = mod;
    const uid = data.user.uid;

    // 1. Profile + overview (1 write)
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

    // 2. Prefer compact runs if present; else legacy testResults
    // Cap fan-out: only newest 20 to stay within practical limits
    const tests = (data.tests || []).slice(-20);
    for (const test of tests) {
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

    // 3. Mistakes — newest 50 only
    const mistakes = (data.mistakes || []).slice(-50);
    for (const mistake of mistakes) {
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

    console.log(`✅ Full backup completed → ${collectionName}/${uid}`);
  } catch (e) {
    console.error("Firestore sync failed:", e);
  }
}

/**
 * smartSync: NO longer re-uploads every test/mistake after each run.
 * - Auth users: only full backup if never synced at all (first time)
 * - Anonymous: once per day max, and only profile+overview style if needed
 * Day-to-day per-test cloud write = engine writeTestRunToFirestoreOnce (1 write)
 */
async function smartSync() {
  console.log("SMART SYNC RUNNING (lightweight)");

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
  const state = getSyncState();

  // First-ever sync for this device/user → one full backup
  if (!state.synced) {
    console.log("First sync ever → full backup once");
    await syncToFirestore();
    return;
  }

  // Auth: skip routine multi-write (engine already did 1-write per test)
  if (isAuthUser) {
    console.log("🔐 Auth user – routine smartSync skipped (per-test 1-write handles cloud)");
    return;
  }

  // Anonymous: at most once a day, and only if still dirty
  const last = state.lastSync;
  const diff = Date.now() - new Date(last || 0).getTime();
  const ONE_DAY = 24 * 60 * 60 * 1000;

  if (data.syncedToFirebase === false && diff > ONE_DAY) {
    console.log("Anonymous – daily backup");
    await syncToFirestore();
  } else {
    console.log("Anonymous – smartSync skip");
  }
}

function markRunSynced(runId, payload) {
  if (window.Data && typeof window.Data.markRunSynced === "function") {
    // already on Data
  }
  try {
    const d = window.Data._getRawData();
    d.lastRunSyncedId = String(runId);
    d.lastRunSyncedAt = new Date().toISOString();
    if (payload) d.lastRunSummary = payload;
    // Do not force full re-sync
    window.Data._saveRawData(d);
  } catch (e) {}
}

try {
  if (window.Data) {
    window.Data.syncToFirestore = syncToFirestore;
    window.Data.smartSync = smartSync;
    window.Data.pullFromFirestoreIfEmpty = pullFromFirestoreIfEmpty;
    window.Data.writeLatestRunOnce = writeLatestRunOnce;
    window.Data.getSyncState = getSyncState;
    window.Data.setSyncState = setSyncState;
    // ensure markRunSynced is the Data one
    if (!window.Data.markRunSynced) {
      window.Data.markRunSynced = markRunSynced;
    }
  }
} catch (e) {
  console.error("Failed to attach sync methods", e);
}
