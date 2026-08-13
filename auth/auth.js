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
   ERROR
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
   CHECK USER PROFILE
========================================= */

async function checkUserAndContinue(user) {
  try {
    const snapshot = await getUserDocument(user.uid);

    /* =====================================
           USER ALREADY EXISTS
        ===================================== */

    if (snapshot.exists()) {
      const userData = snapshot.data();

      console.log("✅ Existing Pulse Go user:", userData);

      /*
       * Profil to'liq bo'lsa →
       * localStorage cache →
       * redirect.
       */

      if (userData.firstName && userData.lastName && userData.course) {
        // =========================================
        // LOCAL USER CACHE
        // =========================================

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

        console.log("💾 Existing user cached locally");

        window.location.href = redirect;

        return;
      }

      /*
       * Document bor, lekin profil
       * to'liq emas.
       */

      openProfileView(user);

      return;
    }

    /* =====================================
           NEW USER
        ===================================== */

    console.log("🆕 New Pulse Go user");

    openProfileView(user);
  } catch (error) {
    console.error("❌ User check failed:", error);

    showLoginError("Profilni tekshirishda xatolik yuz berdi.");
  }
}

/* =========================================
   OPEN PROFILE
========================================= */

function openProfileView(user) {
  currentUser = user;

  /* ================================
       Google information
    ================================= */

  profilePhoto.src = user.photoURL || "/assets/img/PulseGo.jpg";

  profileGoogleName.textContent = user.displayName || "Google User";

  profileGoogleEmail.textContent = user.email || "";

  /* ================================
       Autofill Google name
    ================================= */

  if (user.displayName) {
    const parts = user.displayName.trim().split(/\s+/);

    if (parts.length >= 2) {
      firstName.value = parts[0];

      lastName.value = parts.slice(1).join(" ");
    } else {
      firstName.value = parts[0];
    }
  }

  /* ================================
       Change view
    ================================= */

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
    }

    if (error.code === "auth/popup-blocked") {
      message = "Browser Google oynasini blokladi.";
    }

    if (error.code === "auth/cancelled-popup-request") {
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

  /* =====================================
           VALIDATION
        ===================================== */

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

                <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                ></span>

                Saqlanmoqda...

            `;

    /* =================================
               FIRESTORE USER
            ================================= */

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
      {
        merge: true,
      },
    );

    // =========================================
    // LOCAL USER CACHE
    // =========================================

    localStorage.setItem(
      "pulsego_user_v1",
      JSON.stringify({
        uid: currentUser.uid,
        firstName: first,
        lastName: last,
        fullName: `${first} ${last}`,
        course: selectedCourse,
        photoURL: currentUser.photoURL || "",
        email: currentUser.email || "",
      }),
    );

    console.log("💾 User profile cached locally");

    console.log("✅ Pulse Go profile created");

    saveProfileBtn.innerHTML = `

                <i class="bi bi-check-circle-fill"></i>

                Profil yaratildi!

            `;

    /* =================================
               REDIRECT
            ================================= */

    setTimeout(() => {
      window.location.href = redirect;
    }, 700);
  } catch (error) {
    console.error("❌ Firestore profile error:", error);

    showProfileError("Profilni saqlashda xatolik: " + error.message);

    saveProfileBtn.disabled = false;

    saveProfileBtn.innerHTML = `

                <span>
                    Profilni yaratish
                </span>

                <i class="bi bi-arrow-right"></i>

            `;
  }
});

/* =========================================
   AUTH STATE
========================================= */

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    console.log("👤 No authenticated user");

    return;
  }

  /*
   * Agar user allaqachon Firebase
   * Auth'da login bo'lgan bo'lsa,
   * registration page'ga qayta kirganda
   * Firestore'dan tekshiramiz.
   */

  console.log("🔐 Auth session found:", user.uid);

  /*
   * Agar aynan shu page yangi ochilgan
   * bo'lsa, userni tekshiramiz.
   */

  if (!currentUser) {
    currentUser = user;

    await checkUserAndContinue(user);
  }
});
