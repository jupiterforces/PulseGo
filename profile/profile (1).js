/**
 * Pulse Go — Profile page
 * Professional identity view (no test stats / mistakes on this page).
 * Reads from Data API + pulsego_user_v1 + pulsego_data_v1.
 */

(function () {
  "use strict";

  // ——— helpers ———

  function formatDate(iso) {
    if (!iso) return "—";
    try {
      return new Date(iso).toLocaleDateString("uz-UZ", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } catch (e) {
      return String(iso);
    }
  }

  function escapeHtml(v) {
    return String(v || "").replace(/[&<>"']/g, function (ch) {
      return (
        {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[ch] || ch
      );
    });
  }

  function showToast(msg) {
    var el = document.getElementById("pgToast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      el.classList.remove("show");
    }, 2200);
  }

  function readPulseUserV1() {
    try {
      var raw = localStorage.getItem("pulsego_user_v1");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function readPulseDataV1() {
    try {
      var raw = localStorage.getItem("pulsego_data_v1");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  /**
   * Merge identity from Data.getUser(), pulsego_user_v1, pulsego_data_v1.user
   * Auth users (email / photoURL / firstName) win over anonymous local user.
   */
  function resolveUserProfile() {
    var dataUser =
      window.Data && typeof window.Data.getUser === "function"
        ? window.Data.getUser()
        : null;
    var cached = readPulseUserV1();
    var store = readPulseDataV1();
    var storeUser = store.user || null;

    // Prefer authenticated cache
    if (
      cached &&
      cached.uid &&
      (cached.email || cached.photoURL || cached.firstName || cached.fullName)
    ) {
      var nameFromCache =
        cached.fullName ||
        [cached.firstName, cached.lastName].filter(Boolean).join(" ").trim() ||
        (dataUser && dataUser.name) ||
        "User";
      return {
        uid: cached.uid,
        name: nameFromCache,
        about:
          (dataUser && dataUser.about) ||
          (storeUser && storeUser.about) ||
          "",
        email: cached.email || (dataUser && dataUser.email) || "",
        photoURL: cached.photoURL || (dataUser && dataUser.photoURL) || "",
        createdAt:
          (dataUser && dataUser.createdAt) ||
          (storeUser && storeUser.createdAt) ||
          cached.createdAt ||
          null,
        firstName: cached.firstName || "",
        lastName: cached.lastName || "",
        fullName: cached.fullName || nameFromCache,
        isAuth: true,
        source: "pulsego_user_v1",
      };
    }

    var base = dataUser || storeUser || null;
    if (base && (base.uid || base.name)) {
      var isAuth = !!(base.email || base.photoURL);
      return {
        uid: base.uid || "",
        name: base.name || base.fullName || "Foydalanuvchi",
        about: base.about || "",
        email: base.email || "",
        photoURL: base.photoURL || "",
        createdAt: base.createdAt || null,
        firstName: base.firstName || "",
        lastName: base.lastName || "",
        fullName: base.fullName || base.name || "",
        isAuth: isAuth,
        source: dataUser ? "Data" : "pulsego_data_v1",
      };
    }

    return {
      uid: "",
      name: "Foydalanuvchi",
      about: "",
      email: "",
      photoURL: "",
      createdAt: null,
      firstName: "",
      lastName: "",
      fullName: "",
      isAuth: false,
      source: "none",
    };
  }

  /** Subscription: keep "Obuna: 0" unless you later wire a real plan */
  function getSubscriptionLabel(user) {
    try {
      var store = readPulseDataV1();
      var sub = store.subscription || store.obuna || null;
      if (sub && typeof sub === "object") {
        if (sub.active || sub.plan) {
          return "Obuna: " + (sub.plan || sub.name || "Faol");
        }
        if (typeof sub.level === "number") return "Obuna: " + sub.level;
      }
      if (typeof store.subscriptionLevel === "number") {
        return "Obuna: " + store.subscriptionLevel;
      }
    } catch (e) {}
    return "Obuna: 0";
  }

  function isProfileComplete(user) {
    if (!user) return false;
    var hasName =
      user.name &&
      String(user.name).trim().length > 1 &&
      String(user.name).trim().toLowerCase() !== "foydalanuvchi" &&
      String(user.name).trim().toLowerCase() !== "user";
    var hasAbout = user.about && String(user.about).trim().length >= 3;
    // Auth users with photo + name are considered complete enough without bio
    if (user.isAuth && hasName && user.photoURL) return true;
    return !!(hasName && hasAbout);
  }

  function missingFields(user) {
    var miss = [];
    var nameOk =
      user.name &&
      String(user.name).trim().length > 1 &&
      !/^(foydalanuvchi|user)$/i.test(String(user.name).trim());
    if (!nameOk) miss.push("ism");
    if (!user.about || String(user.about).trim().length < 3) miss.push("bio");
    if (!user.photoURL && !user.isAuth) miss.push("rasm (ixtiyoriy)");
    return miss;
  }

  function handleFromUser(user) {
    if (user.email) {
      var local = String(user.email).split("@")[0];
      return "@" + local.replace(/[^a-zA-Z0-9._]/g, "").slice(0, 24);
    }
    if (user.uid) return "@" + String(user.uid).replace(/-/g, "").slice(0, 10);
    return "@guest";
  }

  // ——— render ———

  function setAvatar(user) {
    var img = document.getElementById("avatarImg");
    var fb = document.getElementById("avatarFallback");
    if (!img || !fb) return;

    var initial = (user.name || "P").charAt(0).toUpperCase();
    fb.textContent = initial;

    if (user.photoURL) {
      img.onload = function () {
        img.style.display = "block";
        fb.style.display = "none";
      };
      img.onerror = function () {
        img.style.display = "none";
        fb.style.display = "flex";
      };
      img.src = user.photoURL;
      img.alt = user.name || "Avatar";
    } else {
      img.style.display = "none";
      fb.style.display = "flex";
    }
  }

  function renderBadges(user) {
    var row = document.getElementById("badgeRow");
    if (!row) return;

    var subLabel = getSubscriptionLabel(user);
    var subActive = !/^Obuna:\s*0$/i.test(subLabel);

    var html = "";
    if (user.isAuth) {
      html +=
        '<span class="pg-badge auth"><i class="bi bi-patch-check-fill"></i> Autentifikatsiya</span>';
    } else {
      html +=
        '<span class="pg-badge guest"><i class="bi bi-person"></i> Mehmon</span>';
    }
    html +=
      '<span class="pg-badge sub' +
      (subActive ? " active" : "") +
      '"><i class="bi bi-star' +
      (subActive ? "-fill" : "") +
      '"></i> ' +
      escapeHtml(subLabel) +
      "</span>";

    row.innerHTML = html;
  }

  function renderMeta(user) {
    var row = document.getElementById("metaRow");
    if (!row) return;
    var parts = [];
    if (user.createdAt) {
      parts.push(
        '<span><i class="bi bi-calendar3"></i> ' +
          escapeHtml(formatDate(user.createdAt)) +
          "</span>"
      );
    }
    if (user.isAuth) {
      parts.push(
        '<span><i class="bi bi-shield-lock"></i> Hisob himoyalangan</span>'
      );
    } else {
      parts.push(
        '<span><i class="bi bi-phone"></i> Mahalliy hisob</span>'
      );
    }
    row.innerHTML = parts.join("");
  }

  function renderInfoCard(user) {
    var emailEl = document.getElementById("infoEmail");
    var uidEl = document.getElementById("infoUid");
    var authEl = document.getElementById("infoAuthStatus");
    var joinedEl = document.getElementById("infoJoined");
    var subEl = document.getElementById("infoSub");

    if (emailEl) {
      if (user.email) {
        emailEl.textContent = user.email;
        emailEl.classList.remove("muted");
      } else {
        emailEl.textContent = "Ko‘rsatilmagan";
        emailEl.classList.add("muted");
      }
    }

    if (uidEl) {
      uidEl.textContent = user.uid || "—";
      if (!user.uid) uidEl.classList.add("muted");
      else uidEl.classList.remove("muted");
    }

    if (authEl) {
      authEl.textContent = user.isAuth
        ? "Autentifikatsiya qilingan"
        : "Mehmon (mahalliy)";
    }

    if (joinedEl) {
      joinedEl.textContent = formatDate(user.createdAt);
    }

    if (subEl) {
      subEl.textContent = getSubscriptionLabel(user);
    }
  }

  function renderCompleteBanner(user) {
    var banner = document.getElementById("completeBanner");
    var hint = document.getElementById("completeHint");
    if (!banner) return;

    if (isProfileComplete(user)) {
      banner.style.display = "none";
      return;
    }

    var miss = missingFields(user);
    if (hint) {
      hint.textContent =
        miss.length > 0
          ? "Yetishmayotgan: " + miss.join(", ") + "."
          : "Ism va bio qo‘shing — profilingiz to‘liq ko‘rinadi.";
    }
    banner.style.display = "block";
  }

  function loadAndRender() {
    var user = resolveUserProfile();

    var nameEl = document.getElementById("profileName");
    var handleEl = document.getElementById("profileHandle");
    var bioEl = document.getElementById("profileBio");

    if (nameEl) nameEl.textContent = user.name || "Foydalanuvchi";
    if (handleEl) handleEl.textContent = handleFromUser(user);

    if (bioEl) {
      var about = (user.about || "").trim();
      if (about) {
        bioEl.textContent = about;
        bioEl.classList.remove("empty");
      } else {
        bioEl.textContent = "Bio hali yozilmagan.";
        bioEl.classList.add("empty");
      }
    }

    setAvatar(user);
    renderBadges(user);
    renderMeta(user);
    renderInfoCard(user);
    renderCompleteBanner(user);

    // Keep edit form in sync if modal open later
    window.__pulseProfile = user;
  }

  // ——— edit modal ———

  function openEditModal() {
    var user = resolveUserProfile();
    var nameInput = document.getElementById("editName");
    var aboutInput = document.getElementById("editAbout");
    var emailInput = document.getElementById("editEmail");
    var photoInput = document.getElementById("editPhotoURL");
    var preview = document.getElementById("editPhotoPreview");
    var bioCount = document.getElementById("bioCount");

    if (nameInput) nameInput.value = user.name || "";
    if (aboutInput) aboutInput.value = user.about || "";
    if (emailInput) {
      emailInput.value = user.email || "";
      // Auth email usually locked visually
      emailInput.readOnly = !!user.isAuth && !!user.email;
    }
    if (photoInput) photoInput.value = user.photoURL || "";
    if (bioCount) bioCount.textContent = String((user.about || "").length);

    updateEditPreview(user.name, user.photoURL);

    var modalEl = document.getElementById("editProfileModal");
    if (modalEl && window.bootstrap) {
      bootstrap.Modal.getOrCreateInstance(modalEl).show();
    }
  }

  function updateEditPreview(name, photoURL) {
    var preview = document.getElementById("editPhotoPreview");
    if (!preview) return;
    var initial = (name || "P").charAt(0).toUpperCase();
    if (photoURL) {
      preview.innerHTML =
        '<img src="' +
        escapeHtml(photoURL) +
        '" alt="" onerror="this.parentNode.textContent=\'' +
        initial +
        "'\" />";
    } else {
      preview.textContent = initial;
    }
  }

  function saveProfile() {
    var nameInput = document.getElementById("editName");
    var aboutInput = document.getElementById("editAbout");
    var emailInput = document.getElementById("editEmail");
    var photoInput = document.getElementById("editPhotoURL");

    var name = (nameInput && nameInput.value ? nameInput.value : "").trim();
    if (!name) {
      showToast("Ism majburiy");
      if (nameInput) nameInput.focus();
      return;
    }

    var about = (aboutInput && aboutInput.value ? aboutInput.value : "").trim();
    var email = (emailInput && emailInput.value ? emailInput.value : "").trim();
    var photoURL = (
      photoInput && photoInput.value ? photoInput.value : ""
    ).trim();

    var current = resolveUserProfile();
    var next = {
      uid: current.uid || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())),
      name: name,
      about: about,
      email: email || current.email || "",
      photoURL: photoURL || current.photoURL || "",
      createdAt: current.createdAt || new Date().toISOString(),
    };

    // Data layer
    if (window.Data && typeof window.Data.setUser === "function") {
      window.Data.setUser(next);
    } else {
      try {
        var store = readPulseDataV1();
        store.user = next;
        store.syncedToFirebase = false;
        localStorage.setItem("pulsego_data_v1", JSON.stringify(store));
      } catch (e) {
        console.error(e);
      }
    }

    // If auth cache exists, soft-update display name fields only (don't wipe auth)
    try {
      var cached = readPulseUserV1();
      if (cached && cached.uid) {
        cached.fullName = name;
        if (!cached.firstName) cached.firstName = name.split(" ")[0] || name;
        localStorage.setItem("pulsego_user_v1", JSON.stringify(cached));
      }
    } catch (e) {}

    var modalEl = document.getElementById("editProfileModal");
    if (modalEl && window.bootstrap) {
      var inst = bootstrap.Modal.getInstance(modalEl);
      if (inst) inst.hide();
    }

    loadAndRender();
    showToast("Profil saqlandi");
  }

  // ——— wire events ———

  function bind() {
    var editBtn = document.getElementById("editProfileBtn");
    var avatarBtn = document.getElementById("openEditFromAvatar");
    var refreshBtn = document.getElementById("refreshBtn");
    var completeBtn = document.getElementById("completeBannerBtn");
    var saveBtn = document.getElementById("saveProfileBtn");
    var aboutInput = document.getElementById("editAbout");
    var photoInput = document.getElementById("editPhotoURL");
    var nameInput = document.getElementById("editName");

    if (editBtn) editBtn.addEventListener("click", openEditModal);
    if (avatarBtn) avatarBtn.addEventListener("click", openEditModal);
    if (completeBtn) completeBtn.addEventListener("click", openEditModal);
    if (refreshBtn)
      refreshBtn.addEventListener("click", function () {
        loadAndRender();
        showToast("Yangilandi");
      });
    if (saveBtn) saveBtn.addEventListener("click", saveProfile);

    if (aboutInput) {
      aboutInput.addEventListener("input", function () {
        var c = document.getElementById("bioCount");
        if (c) c.textContent = String(aboutInput.value.length);
      });
    }

    if (photoInput || nameInput) {
      var syncPreview = function () {
        updateEditPreview(
          nameInput ? nameInput.value : "",
          photoInput ? photoInput.value : ""
        );
      };
      if (photoInput) photoInput.addEventListener("input", syncPreview);
      if (nameInput) nameInput.addEventListener("input", syncPreview);
    }
  }

  // Boot
  function boot() {
    bind();
    // Prefer ensureUser so auth cache is applied once, without blocking UI
    if (window.Data && typeof window.Data.ensureUser === "function") {
      try {
        var p = window.Data.ensureUser();
        if (p && typeof p.then === "function") {
          p.then(function () {
            loadAndRender();
          }).catch(function () {
            loadAndRender();
          });
        } else {
          loadAndRender();
        }
      } catch (e) {
        loadAndRender();
      }
    } else {
      loadAndRender();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  // Public hooks
  window.loadAndRender = loadAndRender;
  window.openEditProfile = openEditModal;
})();
