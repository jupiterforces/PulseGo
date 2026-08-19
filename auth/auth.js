import { auth, provider, db } from "../firebase.js";

import {
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/* =========================================
   LOCAL DATA HELPERS
========================================= */
function getLocalAnonymousData() {
  try {
    const raw = localStorage.getItem("pulsego_data_v1");
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn("Failed to parse pulsego_data_v1", e);
    return null;
  }
}

function getLocalUserCache() {
  try {
    const raw = localStorage.getItem("pulsego_user_v1");
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

/* =========================================
   ELEMENTS
========================================= */
const loginView = document.getElementById("loginView");
const profileView = document.getElementById("profileView");
const googleLoginBtn = document.getElementById("googleLoginBtn");
const googleButtonText = document.getElementById("googleButtonText");
const errorBox = document.getElementById("errorBox");
const profileErrorBox = document.getElementById("profileErrorBox");
const profileForm = document.getElementById("profileForm");
const profilePhoto = document.getElementById("profilePhoto");
const profileGoogleName = document.getElementById("profileGoogleName");
const profileGoogleEmail = document.getElementById("profileGoogleEmail");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const course = document.getElementById("course");
const saveProfileBtn = document.getElementById("saveProfileBtn");

/* =========================================
   REDIRECT
========================================= */
const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect") || "/";

/* =========================================
   CURRENT USER
========================================= */
let currentUser = null;

/* =========================================
   ERROR HELPERS
========================================= */
function showLoginError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove("d-none");
}

function hideLoginError() {
  errorBox.classList.add("d-none");
  errorBox.textContent = "";
}

function showProfileError(message) {
  profileErrorBox.textContent = message;
  profileErrorBox.classList.remove("d-none");
}

function hideProfileError() {
  profileErrorBox.classList.add("d-none");
  profileErrorBox.textContent = "";
}

/* =========================================
   GET USER DOCUMENT
========================================= */
async function getUserDocument(uid) {
  const userRef = doc(db, "user", uid);
  return await getDoc(userRef);
}

/* =========================================
   MIGRATE ANONYMOUS DATA → AUTH USER
========================================= */
async function migrateAnonymousDataToAuthUser(newUid) {
  console.log("🔄 Starting migration of anonymous data to uid:", newUid);

  if (!window.Data || typeof window.Data._getRawData !== "function") {
    console.warn("Data layer not available – skipping migration");
    return;
  }

  const local = window.Data._getRawData();
  console.log("Local data found:", {
    hasUser: !!local?.user,
    testsCount: local?.tests?.length || 0,
    mistakesCount: local?.mistakes?.length || 0,
  });

  if (!local || (!local.tests?.length && !local.mistakes?.length)) {
    console.log("No anonymous tests/mistakes to migrate");
    return;
  }

  try {
    // --- Migrate test results ---
    for (const test of local.tests || []) {
      const testRef = doc(db, "user", newUid, "testResults", String(test.id));
      await setDoc(
        testRef,
        {
          ...test,
          migratedFromAnonymous: true,
          originalAnonymousUid: local.user?.uid || null,
          syncedAt: new Date().toISOString(),
        },
        { merge: true },
      );
      console.log("Migrated test:", test.id);
    }

    // --- Migrate mistakes ---
    for (const mistake of local.mistakes || []) {
      const mistakeRef = doc(
        db,
        "user",
        newUid,
        "mistakes",
        String(mistake.id),
      );
      await setDoc(
        mistakeRef,
        {
          ...mistake,
          migratedFromAnonymous: true,
          originalAnonymousUid: local.user?.uid || null,
          syncedAt: new Date().toISOString(),
        },
        { merge: true },
      );
    }

    // Mark on main user document
    await setDoc(
      doc(db, "user", newUid),
      {
        hasMigratedAnonymousData: true,
        migratedAt: new Date().toISOString(),
        previousAnonymousUid: local.user?.uid || null,
      },
      { merge: true },
    );

    console.log("✅ Anonymous data successfully migrated to", newUid);
  } catch (err) {
    console.error("❌ Migration failed:", err);
  }
}

/* =========================================
   UPDATE LOCAL USER (Data layer + localStorage)
========================================= */
function updateLocalUser(firebaseUser, first, last, selectedCourse) {
  const fullName = `${first} ${last}`;

  // 1. Update pulsego_user_v1
  const finalUser = {
    uid: firebaseUser.uid,
    firstName: first,
    lastName: last,
    fullName: fullName,
    course: selectedCourse,
    photoURL: firebaseUser.photoURL || "",
    email: firebaseUser.email || "",
  };
  localStorage.setItem("pulsego_user_v1", JSON.stringify(finalUser));
  console.log("💾 Updated pulsego_user_v1:", finalUser);

  // 2. Update Data layer (this is the most important part)
  if (window.Data && typeof window.Data.setUser === "function") {
    window.Data.setUser({
      uid: firebaseUser.uid,
      name: fullName,
      about: "",
      email: firebaseUser.email || "",
      photoURL: firebaseUser.photoURL || "",
    });
    console.log("💾 Updated window.Data.user →", window.Data.getUser());
  } else {
    console.warn("window.Data.setUser not available");
  }
}

/* =========================================
   CHECK USER PROFILE
========================================= */
async function checkUserAndContinue(user) {
  try {
    console.log("🔍 Checking user document for:", user.uid);
    const snapshot = await getUserDocument(user.uid);

    // === EXISTING USER ===
    if (snapshot.exists()) {
      const userData = snapshot.data();
      console.log("✅ Existing Pulse Go user:", userData);

      if (userData.firstName && userData.lastName && userData.course) {
        // Update local cache
        localStorage.setItem(
          "pulsego_user_v1",
          JSON.stringify({
            uid: user.uid,
            firstName: userData.firstName,
            lastName: userData.lastName,
            fullName:
              userData.fullName || `${userData.firstName} ${userData.lastName}`,
            course: userData.course,
            photoURL: userData.photoURL || user.photoURL || "",
            email: userData.email || user.email || "",
          }),
        );

        // Also update Data layer
        if (window.Data) {
          window.Data.setUser({
            uid: user.uid,
            name:
              userData.fullName || `${userData.firstName} ${userData.lastName}`,
            about: userData.about || "",
            email: userData.email || user.email || "",
            photoURL: userData.photoURL || user.photoURL || "",
          });
        }

        // Migrate any remaining anonymous data (just in case)
        await migrateAnonymousDataToAuthUser(user.uid);

        // Force sync
        if (window.Data?.smartSync) {
          await window.Data.smartSync();
        }

        console.log("→ Redirecting existing complete user");
        window.location.href = redirect;
        return;
      }

      // Profile incomplete → open form
      openProfileView(user);
      return;
    }

    // === NEW USER ===
    console.log("🆕 New Pulse Go user");
    openProfileView(user);
  } catch (error) {
    console.error("❌ User check failed:", error);
    showLoginError("Profilni tekshirishda xatolik yuz berdi.");
  }
}

/* =========================================
   OPEN PROFILE VIEW + PREFILL
========================================= */
function openProfileView(user) {
  currentUser = user;

  // Google info
  profilePhoto.src = user.photoURL || "/assets/img/PulseGo.jpg";
  profileGoogleName.textContent = user.displayName || "Google User";
  profileGoogleEmail.textContent = user.email || "";

  // Prefill priority:
  // 1. Anonymous local data (pulsego_data_v1)
  // 2. pulsego_user_v1 cache
  // 3. Google displayName
  const localData = getLocalAnonymousData();
  const localUser = localData?.user;
  const cached = getLocalUserCache();

  console.log("Prefill sources:", {
    localUserName: localUser?.name,
    cachedFirstName: cached?.firstName,
    googleName: user.displayName,
  });

  if (localUser?.name) {
    const parts = localUser.name.trim().split(/\s+/);
    firstName.value = parts[0] || "";
    lastName.value = parts.slice(1).join(" ") || "";
    console.log("→ Prefilling from anonymous local data");
  } else if (cached?.firstName) {
    firstName.value = cached.firstName || "";
    lastName.value = cached.lastName || "";
    if (cached.course) course.value = cached.course;
    console.log("→ Prefilling from pulsego_user_v1 cache");
  } else if (user.displayName) {
    const parts = user.displayName.trim().split(/\s+/);
    firstName.value = parts[0] || "";
    lastName.value = parts.slice(1).join(" ") || "";
    console.log("→ Prefilling from Google displayName");
  }

  loginView.classList.add("d-none");
  profileView.classList.remove("d-none");
}

/* =========================================
   GOOGLE LOGIN
========================================= */
googleLoginBtn.addEventListener("click", async () => {
  try {
    hideLoginError();
    googleLoginBtn.disabled = true;
    googleButtonText.textContent = "Google hisob tekshirilmoqda...";

    console.log("🔐 Starting Google authentication...");
    const result = await signInWithPopup(auth, provider);
    currentUser = result.user;
    console.log("✅ Google authenticated:", currentUser.uid);

    await checkUserAndContinue(currentUser);
  } catch (error) {
    console.error("❌ Google authentication error:", error);

    let message = "Google orqali kirishda xatolik yuz berdi.";
    if (error.code === "auth/popup-closed-by-user") {
      message = "Google oynasi yopildi.";
    } else if (error.code === "auth/popup-blocked") {
      message = "Browser Google oynasini blokladi.";
    } else if (error.code === "auth/cancelled-popup-request") {
      message = "Google login bekor qilindi.";
    }

    showLoginError(message);
    googleLoginBtn.disabled = false;
    googleButtonText.textContent = "Google bilan davom etish";
  }
});

/* =========================================
   PROFILE SUBMIT
========================================= */
profileForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  hideProfileError();

  if (!currentUser) {
    showProfileError("Google hisobingiz topilmadi. Qaytadan kiring.");
    return;
  }

  const first = firstName.value.trim();
  const last = lastName.value.trim();
  const selectedCourse = course.value;

  // Validation
  if (!first) {
    showProfileError("Iltimos, ismingizni kiriting.");
    firstName.focus();
    return;
  }
  if (!last) {
    showProfileError("Iltimos, familiyangizni kiriting.");
    lastName.focus();
    return;
  }
  if (!selectedCourse) {
    showProfileError("Iltimos, kursingizni tanlang.");
    course.focus();
    return;
  }

  try {
    saveProfileBtn.disabled = true;
    saveProfileBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm" role="status"></span>
      Saqlanmoqda...
    `;

    console.log("📤 Saving profile for:", currentUser.uid);

    // 1. Save to Firestore (collection "user")
    const userRef = doc(db, "user", currentUser.uid);
    await setDoc(
      userRef,
      {
        uid: currentUser.uid,
        email: currentUser.email || "",
        firstName: first,
        lastName: last,
        fullName: `${first} ${last}`,
        course: selectedCourse,
        photoURL: currentUser.photoURL || "",
        provider: "google",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );
    console.log("✅ Firestore profile saved");

    // 2. Update localStorage + Data layer with the FINAL name
    updateLocalUser(currentUser, first, last, selectedCourse);

    // 3. Migrate old anonymous tests & mistakes
    await migrateAnonymousDataToAuthUser(currentUser.uid);

    // 4. Force sync (so scores go under the real uid)
    if (window.Data && typeof window.Data.smartSync === "function") {
      console.log("🔄 Running smartSync...");
      await window.Data.smartSync();
    }

    console.log("✅ Profile created + data migrated successfully");

    // Success UI
    saveProfileBtn.innerHTML = `
      <i class="bi bi-check-circle-fill"></i>
      Profil yaratildi!
    `;

    setTimeout(() => {
      window.location.href = redirect;
    }, 800);
  } catch (error) {
    console.error("❌ Profile save error:", error);
    showProfileError("Profilni saqlashda xatolik: " + error.message);

    saveProfileBtn.disabled = false;
    saveProfileBtn.innerHTML = `
      <span>Profilni yaratish</span>
      <i class="bi bi-arrow-right"></i>
    `;
  }
});

/* =========================================
   AUTH STATE LISTENER
========================================= */
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    console.log("👤 No authenticated user");
    return;
  }

  console.log("🔐 Auth session found:", user.uid);

  if (!currentUser) {
    currentUser = user;
    await checkUserAndContinue(user);
  }
});
