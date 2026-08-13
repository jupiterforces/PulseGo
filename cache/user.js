// ============================================
// PulseGo User Cache
// /cache/user.js
// ============================================

const USER_KEY = "pulsego_user_v1";
const DATA_KEY = "pulsego_data_v1";
const QBANK_KEY = "pulsego_qbank_v1";

// ============================================
// SAFE JSON READER
// ============================================

function readJSON(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);

    if (!raw) {
      return fallback;
    }

    return JSON.parse(raw);
  } catch (error) {
    console.warn(`⚠️ Cache read failed: ${key}`, error);

    return fallback;
  }
}

// ============================================
// GET CACHED USER
// ============================================

export function getCachedUser() {
  const user = readJSON(USER_KEY, {});

  return {
    uid: user.uid || "",

    firstName: user.firstName || "",

    lastName: user.lastName || "",

    fullName:
      user.fullName ||
      [user.firstName, user.lastName].filter(Boolean).join(" ") ||
      "Foydalanuvchi",

    course: user.course || "",

    photoURL: user.photoURL || "",

    email: user.email || "",
  };
}

// ============================================
// USER NAME
// ============================================

export function getUserName() {
  const user = getCachedUser();

  return user.fullName;
}

// ============================================
// USER FIRST NAME
// ============================================

export function getFirstName() {
  const user = getCachedUser();

  return user.firstName;
}

// ============================================
// USER LAST NAME
// ============================================

export function getLastName() {
  const user = getCachedUser();

  return user.lastName;
}

// ============================================
// USER COURSE
// ============================================

export function getUserCourse() {
  const user = getCachedUser();

  return user.course;
}

// ============================================
// USER PHOTO
// ============================================

export function getUserPhoto() {
  const user = getCachedUser();

  return user.photoURL;
}

// ============================================
// USER EMAIL
// ============================================

export function getUserEmail() {
  const user = getCachedUser();

  return user.email;
}

// ============================================
// USER UID
// ============================================

export function getUserUID() {
  const user = getCachedUser();

  return user.uid;
}

// ============================================
// GET PULSEGO DATA
// ============================================

export function getUserData() {
  return readJSON(DATA_KEY, {});
}

// ============================================
// TEST STATISTICS
// ============================================

export function getTestStats() {
  const data = getUserData();

  const tests = Array.isArray(data.tests) ? data.tests : [];

  let totalQuestions = 0;
  let totalCorrect = 0;

  tests.forEach((test) => {
    // eski structure
    totalQuestions += Number(test.total || test.totalQuestions || 0);

    totalCorrect += Number(test.correct || test.correctAnswers || 0);
  });

  const accuracy =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return {
    totalTests: tests.length,

    totalQuestions,

    totalCorrect,

    accuracy,
  };
}

// ============================================
// PREPARATION SESSIONS
// ============================================

export function getPreparationSessions() {
  const data = getUserData();

  return Array.isArray(data.preparationSessions)
    ? data.preparationSessions
    : [];
}

// ============================================
// MISTAKES
// ============================================

export function getMistakes() {
  const data = getUserData();

  return Array.isArray(data.mistakes) ? data.mistakes : [];
}

// ============================================
// RESOLVED MISTAKES
// ============================================

export function getResolvedMistakes() {
  const data = getUserData();

  return Array.isArray(data.resolvedMistakes) ? data.resolvedMistakes : [];
}

// ============================================
// ACTIVE MISTAKES
// ============================================

export function getActiveMistakesCount() {
  const mistakes = getMistakes();

  const resolved = getResolvedMistakes();

  return Math.max(0, mistakes.length - resolved.length);
}

// ============================================
// COMPLETE USER STATISTICS
// ============================================

export function getUserStats() {
  const testStats = getTestStats();

  const sessions = getPreparationSessions();

  const mistakes = getMistakes();

  const resolved = getResolvedMistakes();

  return {
    // Tests
    totalTests: testStats.totalTests,

    totalQuestions: testStats.totalQuestions,

    totalCorrect: testStats.totalCorrect,

    accuracy: testStats.accuracy,

    // Preparation
    totalSessions: sessions.length,

    // Mistakes
    totalMistakes: mistakes.length,

    resolvedMistakes: resolved.length,

    activeMistakes: Math.max(0, mistakes.length - resolved.length),
  };
}

// ============================================
// GET QBANK
// ============================================

export function getQBank() {
  return readJSON(QBANK_KEY, {
    subjects: {},
  });
}

// ============================================
// GET EVERYTHING
// ============================================

export function getUserContext() {
  return {
    user: getCachedUser(),

    stats: getUserStats(),

    sessions: getPreparationSessions(),

    mistakes: getMistakes(),

    resolvedMistakes: getResolvedMistakes(),

    qbank: getQBank(),

    data: getUserData(),
  };
}
