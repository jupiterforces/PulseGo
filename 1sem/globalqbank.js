/* ============================================================================
   GLOBAL QBANK SYSTEM — PulseGo
   ----------------------------------------------------------------------------
   1) GLOBAL_QBANK  — EDIT THIS: subjects → topics → question file links
   2) QBank engine  — loads files, counts questions, filters, builds tests
   ----------------------------------------------------------------------------
   HOW TO LINK A QUESTION FILE:
     Your file (e.g. /anatomy/js/vertebra.js) just needs ONE line at the end:
         QBank.register("anatomy", "vertebra", VERTEBRA_QUESTIONS);
     Or expose a global array named after the topic — auto-registered on load.
   QUESTION FORMAT (same as your app):
     { q: "...", a: ["opt1","opt2",...], correct: 0,
       photo?: "img.png", img?: "exp.png", explanation?: "..." }
============================================================================ */

/* ============================ 1) DATABASE ================================= */
window.GLOBAL_QBANK = {
  anatomy: {
    title: "Anatomy",
    icon: "bi-person-standing",
    topics: {
      vertebra: { title: "vertebra", source: "/1sem/tests.js", count: null },
      overall1: {
        title: "overall1",
        source: "/1sem/tests.js",
        count: null,
      },
      // heart:      { title: "Heart",       source: "/anatomy/js/heart.js",        count: 120 },
    },
  },
  embryology: {
    title: "Embryology",
    icon: "bi-person-standing",
    topics: {
      u1: { title: "Unit 1", source: "/embriology/tests.js", count: null },
      u2: { title: "Unit 2", source: "/embriology/tests.js", count: null },
      u3: { title: "Unit 3", source: "/embriology/tests.js", count: null },
      u4: { title: "Unit 4", source: "/embriology/tests.js", count: null },
      u5: { title: "Unit 5", source: "/embriology/tests.js", count: null },
      u6: { title: "Unit 6", source: "/embriology/tests.js", count: null },
      u7: { title: "Unit 7", source: "/embriology/tests.js", count: null },
      u8: { title: "Unit 8", source: "/embriology/tests.js", count: null },
      u9: { title: "Unit 9", source: "/embriology/tests.js", count: null },
      // heart:      { title: "Heart",       source: "/anatomy/js/heart.js",        count: 120 },
    },
  },
  physiology: {
    title: "Physiology",
    icon: "bi-activity",
    topics: {
      cardiovascular: {
        title: "cardiovascular",
        source: "/physeology/questions.js",
        count: null,
      },
      // neuro:     { title: "Neurophysiology", source: "/physiology/js/neuro.js", count: null },
    },
  },
  biology: {
    title: "Biology",
    icon: "bi-dna",
    topics: {
      // genetics:  { title: "Genetics",    source: "/biology/js/genetics.js",     count: null },
    },
  },
  biochemistry: {
    title: "Biochemistry",
    icon: "bi-eyedropper",
    topics: {
      // enzymes:   { title: "Enzymes",     source: "/biochem/js/enzymes.js",      count: null },
    },
  },
};

const QBANK_CONFIG = {
  MAX_QUESTIONS: 20, // hard cap for "number of questions"
  SEEN_KEY: "pulsego_qbank_seen_v1", // hashes of already-shown questions
  PENDING_KEY: "pulsego_qbank_pending", // selection handed to test page
  SESSIONS_KEY: "pulsego_sessions_v1", // global session ledger
  DATA_KEY: "pulsego_data_v1", // mistakes mirror
  FLAGS_KEY: "pulsego_flagged_v1", // NEW  { qHash: timestamp }
  NOTES_KEY: "pulsego_notes_v1",
};

/* ============================ 2) ENGINE =================================== */
window.QBank = (() => {
  const registry = {}; // subjectId -> topicId -> questions[]
  const scriptPromises = {}; // src -> Promise

  /* ---------- utils ---------- */
  function shuffle(arr) {
    return [...arr]
      .map((v) => ({ v, s: Math.random() }))
      .sort((a, b) => a.s - b.s)
      .map((x) => x.v);
  }
  function normText(s) {
    return String(s || "")
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase();
  }
  /** stable question hash — used for used/unused/mistakes/flagged matching */
  function qh(q) {
    const s = normText(typeof q === "string" ? q : q?.q);
    let h = 5381;
    for (let i = 0; i < s.length; i++)
      h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    return "q" + h.toString(36);
  }
  function normalize(q) {
    return {
      q: q.q,
      a: Array.isArray(q.a) ? [...q.a] : [],
      correct: q.correct,
      photo: q.photo || q.image || q.qImg || null,
      img: q.img || q.explanationImg || q.explainImg || null,
      explanation: q.explanation || null,
    };
  }

  /* ---------- registration ---------- */
  function register(subjectId, topicId, questions) {
    if (!Array.isArray(questions)) return;
    registry[subjectId] = registry[subjectId] || {};
    registry[subjectId][topicId] = questions.map(normalize);
  }
  /** auto-register from a global array named `topicId` (case-insensitive) */
  function autoRegister(subjectId, topicId) {
    for (const g of Object.keys(window)) {
      if (
        g.toLowerCase() === topicId.toLowerCase() &&
        Array.isArray(window[g])
      ) {
        register(subjectId, topicId, window[g]);
        return true;
      }
    }
    return false;
  }

  /* ---------- loading ---------- */
  function loadScript(src) {
    if (scriptPromises[src]) return scriptPromises[src];
    scriptPromises[src] = new Promise((resolve) => {
      if (document.querySelector(`script[data-qbank="${src}"]`))
        return resolve();
      const s = document.createElement("script");
      s.src = src;
      s.dataset.qbank = src;
      s.onload = () => resolve();
      s.onerror = () => {
        console.error("QBank: failed to load", src);
        resolve();
      };
      document.head.appendChild(s);
    });
    return scriptPromises[src];
  }
  async function loadTopic(subjectId, topicId) {
    if (registry[subjectId]?.[topicId]) return registry[subjectId][topicId];
    const def = GLOBAL_QBANK[subjectId]?.topics?.[topicId];
    if (!def) return null;
    if (def.source) await loadScript(def.source);
    if (!registry[subjectId]?.[topicId]) autoRegister(subjectId, topicId);
    return registry[subjectId]?.[topicId] || null;
  }
  async function loadSubject(subjectId) {
    const topics = GLOBAL_QBANK[subjectId]?.topics || {};
    await Promise.all(Object.keys(topics).map((t) => loadTopic(subjectId, t)));
    return allSubjectQuestions(subjectId);
  }
  function allSubjectQuestions(subjectId) {
    const topics = registry[subjectId] || {};
    return Object.values(topics).flat();
  }

  /* ---------- counts ---------- */
  function topicCount(subjectId, topicId) {
    return (
      registry[subjectId]?.[topicId]?.length ??
      GLOBAL_QBANK[subjectId]?.topics?.[topicId]?.count ??
      null
    );
  }
  function subjectCount(subjectId) {
    const t = registry[subjectId];
    if (t) return Object.values(t).flat().length;
    const manual = Object.values(GLOBAL_QBANK[subjectId]?.topics || {}).reduce(
      (a, x) => a + (x.count || 0),
      0,
    );
    return manual || null;
  }

  /* ---------- history pools (used / mistakes / flagged) ---------- */
  function getSeenSet() {
    try {
      return new Set(
        JSON.parse(localStorage.getItem(QBANK_CONFIG.SEEN_KEY) || "[]"),
      );
    } catch {
      return new Set();
    }
  }
  function markSeen(questions) {
    const set = getSeenSet();
    questions.forEach((q) => set.add(qh(q)));
    try {
      localStorage.setItem(
        QBANK_CONFIG.SEEN_KEY,
        JSON.stringify([...set].slice(-20000)),
      );
    } catch {}
  }
  function getMistakeSet() {
    const set = new Set();
    try {
      const d = JSON.parse(localStorage.getItem(QBANK_CONFIG.DATA_KEY) || "{}");
      (d.mistakes || []).forEach((m) => set.add(m.qHash || qh(m.q || m)));
    } catch {}
    return set;
  }
  function getFlaggedSet() {
    try {
      return new Set(
        Object.keys(
          JSON.parse(localStorage.getItem(QBANK_CONFIG.FLAGS_KEY) || "{}"),
        ),
      );
    } catch {
      return new Set();
    }
  }

  function getSkippedSet() {
    const set = new Set();
    try {
      const o = JSON.parse(localStorage.getItem("pulsego_unsolved_v1") || "{}");
      (o.sessions || []).forEach((s) =>
        (s.questions || []).forEach((u) => set.add(qh(u.q))),
      );
    } catch {}
    getSeenSet().forEach((h) => set.delete(h));
    return set;
  }

  function filterCounts(questions) {
    const seen = getSeenSet(),
      mis = getMistakeSet(),
      flg = getFlaggedSet(),
      skp = getSkippedSet();
    const c = {
      all: questions.length,
      unused: 0,
      used: 0,
      mistakes: 0,
      flagged: 0,
      skipped: 0,
      correct: 0,
    };
    questions.forEach((q) => {
      const h = qh(q),
        s = seen.has(h);
      if (s) c.used++;
      else c.unused++;
      if (mis.has(h)) c.mistakes++;
      if (flg.has(h)) c.flagged++;
      if (skp.has(h)) c.skipped++;
      if (s && !mis.has(h)) c.correct++;
    });
    return c;
  }

  /* ---------- THE BUILDER (multi subject/topic) ---------- */
  /**
   * @param {object} sel
   *   - Legacy: { subjectId, topicId|null, mode, count }
   *   - Multi:  { items: [{ subjectId, topicId|null }, ...], mode, count }
   * @returns { questions, available, mode, testName }
   */
  async function buildTest(sel) {
    const mode = sel.mode || "all";
    const items =
      Array.isArray(sel.items) && sel.items.length
        ? sel.items
        : sel.subjectId
          ? [{ subjectId: sel.subjectId, topicId: sel.topicId ?? null }]
          : [];

    if (!items.length) {
      return { questions: [], available: 0, mode, testName: "qbank" };
    }

    // Load all selected pools and merge (dedupe by question hash)
    const seenHash = new Set();
    let questions = [];
    const labels = [];

    for (const it of items) {
      const qs = it.topicId
        ? (await loadTopic(it.subjectId, it.topicId)) || []
        : await loadSubject(it.subjectId);
      const subjTitle = GLOBAL_QBANK[it.subjectId]?.title || it.subjectId;
      const topicTitle = it.topicId
        ? GLOBAL_QBANK[it.subjectId]?.topics?.[it.topicId]?.title || it.topicId
        : "butun fan";
      labels.push(`${subjTitle}/${topicTitle}`);
      qs.forEach((q) => {
        const h = qh(q);
        if (seenHash.has(h)) return;
        seenHash.add(h);
        questions.push(q);
      });
    }

    const seenS = getSeenSet(),
      misS = getMistakeSet(),
      flgS = getFlaggedSet(),
      skpS = getSkippedSet();
    const filters = {
      all: () => true,
      unused: (h) => !seenS.has(h),
      used: (h) => seenS.has(h),
      mistakes: (h) => misS.has(h),
      flagged: (h) => flgS.has(h),
      skipped: (h) => skpS.has(h),
      correct: (h) => seenS.has(h) && !misS.has(h),
    };
    const keep = filters[mode] || filters.all;
    let pool = questions.filter((q) => keep(qh(q)));

    const available = pool.length;
    const n = Math.max(
      1,
      Math.min(
        Number(sel.count) || QBANK_CONFIG.MAX_QUESTIONS,
        QBANK_CONFIG.MAX_QUESTIONS,
        available,
      ),
    );
    const picked = shuffle(pool)
      .slice(0, n)
      .map((q) => ({ ...q }));

    const testName = sel.name
      ? `qbank:${sel.name}`
      : labels.length === 1
        ? `qbank:${labels[0]}`
        : `qbank:${labels.length} pools`;

    return { questions: picked, available, mode, testName };
  }

  return {
    register,
    loadTopic,
    loadSubject,
    topicCount,
    subjectCount,
    filterCounts,
    buildTest,
    markSeen,
    qh,
    config: QBANK_CONFIG,
  };
})();
