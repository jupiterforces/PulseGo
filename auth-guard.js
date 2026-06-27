import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    const currentPage = window.location.pathname;

    window.location.href =
      "/testsauth.html?redirect=" + encodeURIComponent(currentPage);
  }
});
