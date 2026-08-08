// ============================================================
//  PULSE GO — PREPARATION SECTION DATA
//  Edit this file to add / remove exam types, subjects, tests
//  All JS configuration lives here for easy maintenance.
// ============================================================

const PREP_CONFIG = {
  // ── Exam Types ──────────────────────────────────────────
  // id         : unique string key
  // label      : display name (Uzbek)
  // icon       : Bootstrap Icon class
  // color      : Bootstrap color name (danger / warning / success / primary)
  // gradient   : CSS gradient for card header background
  // desc       : short subtitle shown in creation wizard
  // ──────────────────────────────────────────────────────
  examTypes: [
    {
      id: "yakuniy",
      label: "Yakuniy test",
      icon: "bi-mortarboard-fill",
      color: "danger",
      gradient: "linear-gradient(135deg,#dc2626,#991b1b)",
      bgLight: "#fef2f2",
      textColor: "#dc2626",
      desc: "Yakuniy imtihonga kompleks tayyorlanish",
    },
    {
      id: "oraliq",
      label: "Oraliq nazorat",
      icon: "bi-clipboard2-check-fill",
      color: "warning",
      gradient: "linear-gradient(135deg,#d97706,#92400e)",
      bgLight: "#fffbeb",
      textColor: "#d97706",
      desc: "Oraliq nazoratga mavzular bo'yicha tayyorlanish",
    },
    {
      id: "grant",
      label: "Grant",
      icon: "bi-trophy-fill",
      color: "success",
      gradient: "linear-gradient(135deg,#16a34a,#14532d)",
      bgLight: "#f0fdf4",
      textColor: "#16a34a",
      desc: "Grant imtihoniga keng qamrovli tayyorlanish",
    },
  ],

  // ── Subjects ─────────────────────────────────────────────
  // id            : unique string key (must match URL paths)
  // label         : display name
  // icon          : Bootstrap Icon class
  // color         : Bootstrap color name
  // bgColor       : solid hex for icon backgrounds
  // examTypes     : array of examType IDs this subject belongs to
  // questionsFile : absolute URL to the tests.js questions file
  // tests         : array of { key, title, count }
  //   key   → key inside window.TEST_QUESTIONS in the questions file
  //   title → display name shown on test card
  //   count → number of questions to pick randomly (or 'all')
  // ──────────────────────────────────────────────────────
  subjects: [
    {
      id: "anatomy",
      label: "Anatomiya",
      icon: "bi-heart-pulse",
      color: "danger",
      bgColor: "#dc2626",
      examTypes: ["yakuniy", "grant"],
      questionsFile: "/anatomy/tests.js",
      tests: [
        { key: "mock1", title: "Peritoneum", count: 20 },
        { key: "mock2", title: "Oshqozon | Ichak", count: 20 },
        { key: "mock3", title: "Qo'shimcha GI", count: 20 },
        { key: "mock4", title: "Celiac & Mesenteric", count: 20 },
        { key: "mock5", title: "Portal vena", count: 10 },
        { key: "mock6", title: "Buyrak 1", count: 20 },
        { key: "mock7", title: "Buyrak 2", count: 20 },
        { key: "mock8", title: "Orqa qorin devori", count: 20 },
        { key: "L22", title: "Yuqori oyoq", count: 20 },
        { key: "mockUpperLimb2", title: "Yuqori oyoq 2", count: 10 },
        {
          key: "mockLowerLimbArteries",
          title: "Pastki oyoq arteriyalari",
          count: 20,
        },
      ],
    },
    {
      id: "physiology",
      label: "Fiziologiya",
      icon: "bi-heart-pulse",
      color: "danger",
      bgColor: "#b1b1b1",
      examTypes: ["oraliq"],
    },
    {
      id: "cellbiology",
      label: "Hujayra biologiyasi",
      icon: "bi-virus",
      color: "success",
      bgColor: "#16a34a",
      examTypes: ["yakuniy", "oraliq", "grant"],
      questionsFile: "/cellbiology/tests.js",
      tests: [
        { key: "cellb1", title: "Hujayra bio 1", count: 20 },
        { key: "cellb2", title: "Hujayra bio 2", count: 20 },
        { key: "cellb3", title: "Hujayra bio 3", count: 20 },
        { key: "cellb4", title: "Hujayra bio 4", count: 20 },
        { key: "cellb5", title: "Hujayra bio 5", count: 20 },
        { key: "cellb6", title: "Hujayra bio 6", count: 20 },
        { key: "cellb7", title: "Hujayra bio 7", count: 20 },
        { key: "cellb8", title: "Hujayra bio 8", count: 20 },
        { key: "cellb9", title: "Hujayra bio 9", count: 20 },
        { key: "cellb10", title: "Hujayra bio 10", count: 20 },
      ],
    },
    {
      id: "embriology",
      label: "Embriologiya",
      icon: "bi-baby",
      color: "warning",
      bgColor: "#d97706",
      examTypes: ["yakuniy", "oraliq", "grant"],
      questionsFile: "/embriology/tests.js",
      tests: [
        { key: "u1", title: "Embriologiya 1", count: 20 },
        { key: "u2", title: "Embriologiya 2", count: 20 },
        { key: "u3", title: "Embriologiya 3", count: 20 },
        { key: "u4", title: "Embriologiya 4", count: 20 },
        { key: "u5", title: "Embriologiya 5", count: 20 },
        { key: "u6", title: "Embriologiya 6", count: 20 },
        { key: "u7", title: "Embriologiya 7", count: 20 },
        { key: "u8", title: "Embriologiya 8", count: 20 },
        { key: "u9", title: "Embriologiya 9", count: 20 },
      ],
    },
    {
      id: "chemistry",
      label: "Biokimyo",
      icon: "bi-flask",
      color: "info",
      bgColor: "#0891b2",
      examTypes: ["yakuniy", "oraliq", "grant"],
      questionsFile: "/chemistry/tests.js",
      tests: [
        { key: "aminoacids", title: "Aminokislotalar", count: 20 },
        { key: "vitamins", title: "Vitaminlar", count: 20 },
        { key: "enzymes", title: "Fermentlar", count: 20 },
        { key: "nucleicAcids", title: "Nuklein kislotalar", count: 20 },
        { key: "lipids", title: "Lipidlar", count: 20 },
        {
          key: "peptidesAndProteins",
          title: "Peptidlar va Oqsillar",
          count: 20,
        },
        { key: "carbohydrates", title: "Uglevodorodlar", count: 20 },
      ],
    },
    {
      id: "cases",
      label: "Klinik caselar",
      icon: "bi-journal-text",
      color: "primary",
      bgColor: "#2563eb",
      examTypes: ["yakuniy", "grant"],
      questionsFile: "/cases/tests.js",
      tests: [
        { key: "cases", title: "Cases 1", count: 20 },
        { key: "chapter2", title: "Cases 2", count: 20 },
        { key: "chapter3", title: "Cases 3", count: 20 },
        { key: "chapter4", title: "Cases 4", count: 20 },
        { key: "cases1", title: "Cases set 1", count: 20 },
        { key: "cases2", title: "Cases set 2", count: 20 },
        { key: "case_bio", title: "Cases Bio", count: 20 },
        { key: "embryo", title: "Cases Embryo", count: 20 },
        { key: "anatomy1", title: "Cases Anatomy", count: 20 },
      ],
    },
  ],
};

// ── Helper: get exam type config by id ─────────────────────
function getExamType(id) {
  return PREP_CONFIG.examTypes.find((e) => e.id === id) || null;
}

// ── Helper: get subject config by id ───────────────────────
function getSubject(id) {
  return PREP_CONFIG.subjects.find((s) => s.id === id) || null;
}

// ── Helper: get subjects filtered by exam type ─────────────
function getSubjectsForExamType(examTypeId) {
  return PREP_CONFIG.subjects.filter((s) => s.examTypes.includes(examTypeId));
}

// ── Helper: get test config within a subject ───────────────
function getTestConfig(subjectId, testKey) {
  const sub = getSubject(subjectId);
  return sub ? sub.tests.find((t) => t.key === testKey) : null;
}
