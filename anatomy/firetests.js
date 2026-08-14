import { db } from "../firebase.js";
import { doc, getDoc } from "../firebase.js";

// ============================================================
// SETTINGS
// ============================================================

const FIRESTORE_COLLECTION = "testSets";
const FIRESTORE_DOCUMENT = "anatomy_tests";

// ============================================================
// FIRESTORE'DAN BIR TESTNI OLISH
// FAQAT startTest() chaqirganda ishlatiladi
// ============================================================

async function getProTestFromFirestore(testName) {
  try {
    console.log(`☁️ PRO test yuklanmoqda: ${testName}`);

    const testRef = doc(db, FIRESTORE_COLLECTION, FIRESTORE_DOCUMENT);

    const snapshot = await getDoc(testRef);

    if (!snapshot.exists()) {
      console.error("❌ Firestore document topilmadi:", FIRESTORE_DOCUMENT);

      return null;
    }

    const firestoreData = snapshot.data();

    if (!firestoreData || typeof firestoreData !== "object") {
      console.error("❌ Firestore data noto‘g‘ri");

      return null;
    }

    const testData = firestoreData[testName];

    if (!testData) {
      console.error(`❌ Firestore'da "${testName}" topilmadi`);

      return null;
    }

    console.log(`🔥 PRO test Firestore'dan olindi: ${testName}`);

    return testData;
  } catch (error) {
    console.error(`❌ ${testName} Firestore'dan yuklanmadi:`, error);

    return null;
  }
}

// ============================================================
// FIRESTORE FORMAT → ESKI TEST FORMAT
// ============================================================

function convertFirestoreTest(testData) {
  // Firestore'da to'g'ridan-to'g'ri array
  if (Array.isArray(testData)) {
    return testData;
  }

  // { questions: [...] }
  if (testData && Array.isArray(testData.questions)) {
    return testData.questions;
  }

  // { data: [...] }
  if (testData && Array.isArray(testData.data)) {
    return testData.data;
  }

  console.error("❌ Test formatini convert qilib bo‘lmadi:", testData);

  return null;
}

// ============================================================
// GLOBAL QILAMIZ
// ============================================================
// startTest() oddiy test.js ichida ishlashi uchun
// import kerak bo'lmaydi.

window.getProTestFromFirestore = getProTestFromFirestore;

window.convertFirestoreTest = convertFirestoreTest;

// ============================================================
// BARCHA TESTLARNI YUKLASH
// ============================================================

async function loadTests() {
  console.log("🚀 Tests loading started...");

  // --------------------------------------------------------
  // 1. anatomyoldtests.js yuklanganmi?
  // --------------------------------------------------------

  const oldTests = window.TEST_QUESTIONS || {};

  if (!oldTests || typeof oldTests !== "object") {
    console.error("❌ window.TEST_QUESTIONS topilmadi.");

    window.TEST_QUESTIONS = {};

    window.dispatchEvent(new Event("testsLoaded"));

    return;
  }

  // --------------------------------------------------------
  // 2. FINAL TESTS
  // --------------------------------------------------------

  const finalTests = {};

  // --------------------------------------------------------
  // 3. TESTLARNI RO‘YXATGA OLISH
  // --------------------------------------------------------

  for (const testName of Object.keys(oldTests)) {
    const localTest = oldTests[testName];

    // ====================================================
    // PRO TEST
    // ====================================================

    if (localTest && typeof localTest === "object" && localTest.pro === true) {
      console.log(`🔐 ${testName} = PRO`);

      // MUHIM:
      // Faqat metadata saqlanadi.
      //
      // ❌ Firestore request YO‘Q
      //
      // Firestore faqat startTest()
      // bosilganda chaqiriladi.

      finalTests[testName] = localTest;

      continue;
    }

    // ====================================================
    // FREE TEST
    // ====================================================

    console.log(`🟢 ${testName} = FREE → local`);

    finalTests[testName] = localTest;
  }

  // --------------------------------------------------------
  // 4. WORKER UCHUN FINAL TEST_QUESTIONS
  // --------------------------------------------------------

  window.TEST_QUESTIONS = finalTests;

  window.tests = finalTests;

  // --------------------------------------------------------
  // 5. WORKER'GA SIGNAL
  // --------------------------------------------------------

  console.log("✅ All tests ready:", Object.keys(window.TEST_QUESTIONS));

  window.dispatchEvent(new Event("testsLoaded"));
}

// ============================================================
// START
// ============================================================

loadTests();
