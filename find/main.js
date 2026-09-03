import { auth, db } from "../firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  limit,
  onSnapshot,
  where,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const byId = (id) => document.getElementById(id);

const promoCard = byId("promoCard");
const openOnboardingBtn = byId("openOnboardingBtn");
const onboardingCard = byId("onboardingCard");
const findShell = byId("findShell");
const editProfileBtn = byId("editProfileBtn");

const wizardForm = byId("wizardForm");
const wizardBackBtn = byId("wizardBackBtn");
const wizardNextBtn = byId("wizardNextBtn");
const wizardSaveBtn = byId("wizardSaveBtn");
const wizardCloseBtn = byId("wizardCloseBtn");
const customPurposeWrap = byId("customPurposeWrap");
const customPurposeInput = byId("customPurpose");
const purposeChips = byId("purposeChips");

const partnersList = byId("partnersList");
const searchInput = byId("searchInput");
const showMatchesBtn = byId("showMatchesBtn");
const showAllBtn = byId("showAllBtn");

let currentUser = null;
let currentStep = 1;
let selectedPurpose = "imtihonlarga tayyorgarlik";
let viewMode = "matches";
let myProfile = null;
let allPartners = [];
let searchText = "";
let partnersUnsubscribe = null;
let chatsUnsubscribe = null;
const chatMetaByPartnerUid = new Map();

// ============ LocalStorage Cache Config ============
const CACHE_KEY_PARTNERS = "pulsego_partners_cache_v1";
const CACHE_KEY_CHAT_META = "pulsego_chat_meta_cache_v1";
const CACHE_KEY_CHAT_MSGS = "pulsego_chat_msgs_cache_v1";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

function getCacheOrEmpty(key) {
  try {
    const cached = JSON.parse(localStorage.getItem(key) || "{}");
    if (cached.atMs && Date.now() - cached.atMs > CACHE_TTL) {
      return null;
    }
    return cached.data || null;
  } catch {
    return null;
  }
}

function setCache(key, data) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify({
        data,
        atMs: Date.now(),
      }),
    );
  } catch {}
}

function loadPartnersFromCache() {
  const cached = getCacheOrEmpty(CACHE_KEY_PARTNERS);
  if (cached && Array.isArray(cached)) {
    allPartners = cached;
    renderPartnerList();
    return true;
  }
  return false;
}

function parseNumber(value) {
  if (value === "" || value === null || value === undefined) return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function normalizeText(value) {
  return (value || "").toString().trim();
}

function normalizeTelegram(value) {
  return normalizeText(value).replace(/^@/, "");
}

function normalizePhone(value) {
  return normalizeText(value);
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setIdentityUI(name) {
  const finalName = name || "Foydalanuvchi";
  const initial = finalName.charAt(0).toUpperCase();
  byId("sidebarUserName").textContent = finalName;
  byId("sidebarAvatarText").textContent = initial;
  byId("navAvatarBtn").textContent = initial;
}

function formatTimeFromMs(ms) {
  if (!ms) return "";
  const d = new Date(ms);
  return d.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" });
}

function formatRelative(ms) {
  if (!ms) return "hozir";
  const diff = Date.now() - ms;
  if (diff < 60_000) return "hozir";
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)} daq`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)} soat`;
  return `${Math.floor(diff / 86_400_000)} kun`;
}

function computeOverallScoreFromLocal() {
  try {
    const raw = localStorage.getItem("pulsego_data_v1");
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    const tests = Array.isArray(parsed.tests) ? parsed.tests : [];
    let totalQ = 0;
    let totalCorrect = 0;

    tests.forEach((test) => {
      totalQ += Number((test && (test.totalQuestions ?? test.total)) || 0);
      totalCorrect += Number(
        (test && (test.correctAnswers ?? test.correct)) || 0,
      );
    });

    if (totalQ <= 0) return 0;
    return Math.round((totalCorrect / totalQ) * 100);
  } catch {
    return 0;
  }
}

function setPurposeUI(value) {
  purposeChips.querySelectorAll(".chip-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.purpose === value);
  });
  customPurposeWrap.classList.toggle("hidden", value !== "custom");
}

function setStep(nextStep) {
  currentStep = Math.max(1, Math.min(3, nextStep));

  document.querySelectorAll(".step-pane").forEach((pane) => {
    pane.classList.toggle("active", Number(pane.dataset.step) === currentStep);
  });

  byId("stepDot1").classList.toggle("active", currentStep >= 1);
  byId("stepDot2").classList.toggle("active", currentStep >= 2);
  byId("stepDot3").classList.toggle("active", currentStep >= 3);
  byId("stepLine1").classList.toggle("active", currentStep >= 2);
  byId("stepLine2").classList.toggle("active", currentStep >= 3);

  wizardBackBtn.classList.toggle("hidden", currentStep === 1);
  wizardNextBtn.classList.toggle("hidden", currentStep === 3);
  wizardSaveBtn.classList.toggle("hidden", currentStep !== 3);
}

function validateStep(step) {
  if (step === 1) {
    const name = normalizeText(byId("name").value);
    const gender = byId("gender").value;
    const age = parseNumber(byId("age").value);
    const tg = normalizeTelegram(byId("telegram").value);
    const phone = normalizePhone(byId("phone").value);

    if (!name) throw new Error("Ismni kiriting.");
    if (!gender) throw new Error("Jinsni tanlang.");
    if (!age) throw new Error("Yoshni kiriting.");
    if (!tg && !phone)
      throw new Error("Telegram username yoki telefon kiriting.");
  }

  if (step === 2) {
    const minAge = parseNumber(byId("prefAgeMin").value);
    const maxAge = parseNumber(byId("prefAgeMax").value);
    const minScore = parseNumber(byId("prefScoreMin").value);
    const maxScore = parseNumber(byId("prefScoreMax").value);

    if (minAge !== null && maxAge !== null && minAge > maxAge) {
      throw new Error("Yosh oralig'ini tekshiring.");
    }
    if (minScore !== null && maxScore !== null && minScore > maxScore) {
      throw new Error("Score oralig'ini tekshiring.");
    }
  }

  if (step === 3) {
    if (
      selectedPurpose === "custom" &&
      !normalizeText(customPurposeInput.value)
    ) {
      throw new Error("Custom maqsadni kiriting.");
    }
  }
}

function collectProfilePayload() {
  const purposeCustom = normalizeText(customPurposeInput.value);
  const purposeValue =
    selectedPurpose === "custom" ? purposeCustom : selectedPurpose;

  return {
    uid: currentUser.uid,
    name: normalizeText(byId("name").value),
    nameLower: normalizeText(byId("name").value).toLowerCase(),
    group: normalizeText(byId("group").value),
    gender: byId("gender").value,
    age: parseNumber(byId("age").value),
    gpa: parseNumber(byId("gpa").value),
    overallScore: parseNumber(byId("overallScore").value) ?? 0,
    telegramUsername: normalizeTelegram(byId("telegram").value),
    phone: normalizePhone(byId("phone").value),
    purpose: selectedPurpose,
    purposeCustom: selectedPurpose === "custom" ? purposeCustom : "",
    purposeValue,
    photoURL: currentUser.photoURL || "",
    email: currentUser.email || "",
    isActive: true,
    profileCompleted: true,
    updatedAtMs: Date.now(),
    preferences: {
      gender: byId("prefGender").value || "any",
      ageMin: parseNumber(byId("prefAgeMin").value),
      ageMax: parseNumber(byId("prefAgeMax").value),
      scoreMin: parseNumber(byId("prefScoreMin").value),
      scoreMax: parseNumber(byId("prefScoreMax").value),
      sameGroup: !!byId("prefSameGroup").checked,
    },
  };
}

function applyProfileToForm(profile, fallbackScore) {
  byId("name").value = profile.name || "";
  byId("group").value = profile.group || "";
  byId("gender").value = profile.gender || "";
  byId("age").value = profile.age ?? "";
  byId("gpa").value = profile.gpa ?? "";
  byId("overallScore").value = profile.overallScore ?? fallbackScore ?? 0;
  byId("telegram").value = profile.telegramUsername || "";
  byId("phone").value = profile.phone || "";

  const pref = profile.preferences || {};
  byId("prefGender").value = pref.gender || "any";
  byId("prefAgeMin").value = pref.ageMin ?? "";
  byId("prefAgeMax").value = pref.ageMax ?? "";
  byId("prefScoreMin").value = pref.scoreMin ?? "";
  byId("prefScoreMax").value = pref.scoreMax ?? "";
  byId("prefSameGroup").checked = !!pref.sameGroup;

  selectedPurpose = profile.purpose || "imtihonlarga tayyorgarlik";
  setPurposeUI(selectedPurpose);
  customPurposeInput.value = profile.purposeCustom || "";
}

function withinRange(value, min, max) {
  if (value === null || value === undefined) return false;
  if (min !== null && min !== undefined && value < min) return false;
  if (max !== null && max !== undefined && value > max) return false;
  return true;
}

function matchesOneWay(person, requiredBy, viewer) {
  const pref = requiredBy?.preferences || {};

  if (pref.gender && pref.gender !== "any" && person.gender !== pref.gender)
    return false;
  if (!withinRange(person.age, pref.ageMin ?? null, pref.ageMax ?? null)) {
    if (pref.ageMin !== null || pref.ageMax !== null) return false;
  }
  if (
    !withinRange(
      person.overallScore,
      pref.scoreMin ?? null,
      pref.scoreMax ?? null,
    )
  ) {
    if (pref.scoreMin !== null || pref.scoreMax !== null) return false;
  }
  if (pref.sameGroup) {
    const left = normalizeText(person.group).toLowerCase();
    const right = normalizeText(viewer.group).toLowerCase();
    if (!left || !right || left !== right) return false;
  }

  return true;
}

function isMutualMatch(me, other) {
  if (!me) return false;
  return matchesOneWay(other, me, me) && matchesOneWay(me, other, other);
}

function compatibilityScore(me, other) {
  if (!me) return 0;
  let score = 0;
  let max = 0;

  max += 25;
  if (
    me.preferences?.gender === "any" ||
    me.preferences?.gender === other.gender
  )
    score += 25;
  max += 25;
  if (
    withinRange(
      other.age,
      me.preferences?.ageMin ?? null,
      me.preferences?.ageMax ?? null,
    )
  )
    score += 25;
  max += 25;
  if (
    withinRange(
      other.overallScore,
      me.preferences?.scoreMin ?? null,
      me.preferences?.scoreMax ?? null,
    )
  )
    score += 25;
  max += 25;
  if (
    !me.preferences?.sameGroup ||
    normalizeText(me.group).toLowerCase() ===
      normalizeText(other.group).toLowerCase()
  )
    score += 25;

  return Math.round((score / max) * 100);
}

function renderPartnerList() {
  const rows = allPartners
    .filter((p) => p.uid !== currentUser.uid)
    .filter((p) => {
      if (!searchText) return true;
      return `${p.name || ""} ${p.group || ""}`
        .toLowerCase()
        .includes(searchText);
    })
    .map((person) => {
      const mutual = isMutualMatch(myProfile, person);
      const compat = compatibilityScore(myProfile, person);
      const meta = chatMetaByPartnerUid.get(person.uid);
      const unread = Number(meta?.unread || 0);
      return { person, mutual, compat, unread, meta };
    });

  const filtered =
    viewMode === "matches" && myProfile ? rows.filter((r) => r.mutual) : rows;

  if (!filtered.length) {
    partnersList.innerHTML =
      '<div class="empty-box">Hozircha foydalanuvchilar topilmadi.</div>';
    return;
  }

  // Sort by unread first, then by recent activity
  filtered.sort((a, b) => {
    if (a.unread !== b.unread) return b.unread - a.unread;
    if (a.mutual !== b.mutual) return a.mutual ? -1 : 1;
    const at = Number(a.meta?.lastMessageAtMs || a.person.updatedAtMs || 0);
    const bt = Number(b.meta?.lastMessageAtMs || b.person.updatedAtMs || 0);
    return bt - at;
  });

  partnersList.innerHTML = filtered
    .map(({ person, mutual, compat, unread, meta }) => {
      const initial = (person.name || "P").charAt(0).toUpperCase();
      const subtitle = meta?.lastMessageText
        ? meta.lastMessageSenderUid === currentUser.uid
          ? `Siz: ${meta.lastMessageText}`
          : meta.lastMessageText
        : mutual
          ? `${person.group || "Guruh yo'q"} • ${person.purposeValue || "Maqsad"}`
          : "Moslik yo'q";
      const timeText = meta?.lastMessageAtMs
        ? formatTimeFromMs(meta.lastMessageAtMs)
        : formatRelative(person.updatedAtMs);
      const isVerified = person.overallScore >= 75;

      return `
        <div class="chat-user" data-uid="${person.uid}" onclick="showProfileModal(event, '${escapeHtml(person.uid)}')">
          <div class="avatar-dot ${isVerified ? "verified" : ""}">${escapeHtml(initial)}</div>
          <div class="user-main">
            <div class="user-top">
              <div class="user-name">
                ${escapeHtml(person.name || "Partner")}
                ${isVerified ? '<span class="badge-verified" title="Verified user">✓</span>' : ""}
              </div>
              <div class="user-time">${escapeHtml(timeText)}</div>
            </div>
            <div class="user-sub">${escapeHtml(subtitle)}</div>
          </div>
          <div class="d-flex flex-column align-items-end gap-1">
            ${unread > 0 ? `<span class="new-badge">1</span>` : `<span class="status-pill ${mutual ? "status-match" : "status-lock"}">${mutual ? `${compat}%` : "LOCK"}</span>`}
          </div>
        </div>
      `;
    })
    .join("");
}

function calcProfileCompletion(profile) {
  let filled = 0;
  const total = 10;
  if (profile.name) filled++;
  if (profile.gender) filled++;
  if (profile.age) filled++;
  if (profile.telegramUsername || profile.phone) filled++;
  if (profile.group) filled++;
  if (profile.gpa) filled++;
  if (profile.overallScore) filled++;
  if (profile.purposeValue) filled++;
  if (profile.preferences && Object.keys(profile.preferences).length > 0)
    filled += 2;
  return Math.round((filled / total) * 100);
}

async function loadPartnersAndPreview() {
  if (partnersUnsubscribe) partnersUnsubscribe();
  if (chatsUnsubscribe) chatsUnsubscribe();

  // Load from cache first for super fast initial render
  if (loadPartnersFromCache()) {
    // Cache loaded successfully, now sync with Firestore in background
  }

  // Subscribe to partners collection
  partnersUnsubscribe = onSnapshot(collection(db, "partners"), (snap) => {
    allPartners = snap.docs
      .map((d) => ({ uid: d.id, ...d.data() }))
      .filter(
        (p) =>
          p && p.isActive !== false && p.profileCompleted !== false && p.name,
      );

    // Cache the partners
    setCache(CACHE_KEY_PARTNERS, allPartners);

    renderPartnerList();
  });

  // Subscribe to chat metadata
  const chatsQ = query(
    collection(db, "chats"),
    where(`participantMap.${currentUser.uid}`, "==", true),
    limit(200),
  );
  chatsUnsubscribe = onSnapshot(chatsQ, (snap) => {
    chatMetaByPartnerUid.clear();
    const chatMeta = {};

    snap.docs.forEach((docSnap) => {
      const data = docSnap.data() || {};
      const participants = Array.isArray(data.participants)
        ? data.participants
        : [];
      const partnerUid = participants.find((uid) => uid !== currentUser.uid);
      if (!partnerUid) return;

      if (data.deletedFor && data.deletedFor[currentUser.uid] === true) {
        return;
      }

      const unreadMap = data.unreadMap || {};
      chatMetaByPartnerUid.set(partnerUid, {
        lastMessageText: data.lastMessageText || "",
        lastMessageAtMs: Number(data.lastMessageAtMs || 0) || 0,
        lastMessageSenderUid: data.lastMessageSenderUid || "",
        unread: Number(unreadMap[currentUser.uid] || 0),
      });

      chatMeta[partnerUid] = chatMetaByPartnerUid.get(partnerUid);
    });

    // Cache the chat metadata
    setCache(CACHE_KEY_CHAT_META, chatMeta);

    renderPartnerList();
  });
}

async function saveProfile() {
  validateStep(1);
  validateStep(2);
  validateStep(3);
  const payload = collectProfilePayload();
  await setDoc(doc(db, "partners", currentUser.uid), payload, { merge: true });
  myProfile = payload;

  onboardingCard.classList.add("hidden");
  promoCard.classList.add("hidden");
  editProfileBtn.classList.remove("hidden");
  wizardCloseBtn.classList.add("hidden");
  renderPartnerList();
}

function openWizard() {
  onboardingCard.classList.remove("hidden");
  wizardCloseBtn.classList.toggle("hidden", !myProfile);
  setStep(1);
}

function closeWizard() {
  if (!myProfile) return;
  onboardingCard.classList.add("hidden");
  wizardCloseBtn.classList.add("hidden");
}

function setupWizardActions() {
  purposeChips.addEventListener("click", (event) => {
    const button = event.target.closest(".chip-option");
    if (!button) return;
    selectedPurpose = button.dataset.purpose;
    setPurposeUI(selectedPurpose);
  });

  wizardBackBtn.addEventListener("click", () => setStep(currentStep - 1));
  wizardNextBtn.addEventListener("click", () => {
    try {
      validateStep(currentStep);
      setStep(currentStep + 1);
    } catch (e) {
      showAlert("Xatolik", e.message || "Maydonlarni tekshiring.");
    }
  });

  wizardForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      await saveProfile();
      closeWizard();
    } catch (e) {
      showAlert("Xatolik", e.message || "Saqlashda xatolik yuz berdi.");
    }
  });

  wizardCloseBtn.addEventListener("click", closeWizard);
  openOnboardingBtn.addEventListener("click", openWizard);
  editProfileBtn.addEventListener("click", openWizard);
}

function setupFiltersAndSearch() {
  const showMatchesBtn = byId("showMatchesBtn");
  const showAllBtn = byId("showAllBtn");
  const searchInput = byId("searchInput");

  showMatchesBtn.addEventListener("click", () => {
    viewMode = "matches";
    showMatchesBtn.classList.remove("btn-outline-primary");
    showMatchesBtn.classList.add("btn-primary");
    showAllBtn.classList.remove("btn-secondary");
    showAllBtn.classList.add("btn-outline-secondary");
    renderPartnerList();
  });

  showAllBtn.addEventListener("click", () => {
    viewMode = "all";
    showAllBtn.classList.remove("btn-outline-secondary");
    showAllBtn.classList.add("btn-secondary");
    showMatchesBtn.classList.remove("btn-primary");
    showMatchesBtn.classList.add("btn-outline-primary");
    renderPartnerList();
  });

  searchInput.addEventListener("input", () => {
    searchText = normalizeText(searchInput.value).toLowerCase();
    renderPartnerList();
  });
}

function showProfileModal(event, uid) {
  event.stopPropagation();
  const profile = allPartners.find((p) => p.uid === uid);
  if (!profile) return;

  const percent = calcProfileCompletion(profile);
  const isVerified = profile.overallScore >= 75;
  const compat = compatibilityScore(myProfile, profile);

  const html = `
    <div class="profile-modal-overlay" onclick="closeProfileModal()">
      <div class="profile-modal-content" onclick="event.stopPropagation()">
        <button onclick="closeProfileModal()" class="btn-close" style="position:absolute;top:10px;right:10px;"></button>
        
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div class="avatar-dot" style="width:56px;height:56px;font-size:20px;">${escapeHtml(profile.name.charAt(0).toUpperCase())}</div>
          <div>
            <h3 style="margin:0;display:flex;gap:6px;align-items:center;">
              ${escapeHtml(profile.name || "Partner")}
              ${isVerified ? '<span class="badge-verified">✓ Verified</span>' : ""}
            </h3>
            <p style="margin:2px 0 0;font-size:12px;color:#94a3b8;">${escapeHtml(profile.group || "Guruh yo'q")}</p>
          </div>
        </div>

        <div class="profile-stat-grid">
          <div class="stat-box">
            <div class="stat-label">Yosh</div>
            <div class="stat-value">${profile.age || "-"}</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Jins</div>
            <div class="stat-value">${profile.gender === "male" ? "Erkak" : profile.gender === "female" ? "Ayol" : "-"}</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Score</div>
            <div class="stat-value">${profile.overallScore || 0}%</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Moslik</div>
            <div class="stat-value">${compat}%</div>
          </div>
        </div>

        <div style="margin:14px 0;">
          <label style="font-size:12px;font-weight:700;color:#64748b;display:block;margin-bottom:6px;">Profil To'liqsizligi</label>
          <div style="background:#e2e8f0;border-radius:8px;height:8px;overflow:hidden;">
            <div style="background:#3b82f6;height:100%;width:${percent}%;transition:width .3s;"></div>
          </div>
          <p style="font-size:11px;color:#94a3b8;margin:4px 0 0;">${percent}% to'ld</p>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px;">
          <div style="padding:12px;background:#f8fafc;border-radius:10px;">
            <div style="color:#64748b;font-weight:600;">Maqsad</div>
            <div>${escapeHtml(profile.purposeValue || "Belgilanmagan")}</div>
          </div>
          <div style="padding:12px;background:#f8fafc;border-radius:10px;">
            <div style="color:#64748b;font-weight:600;">GPA</div>
            <div>${profile.gpa ? profile.gpa.toFixed(2) : "Belgilanmagan"}</div>
          </div>
        </div>

        <div style="margin-top:16px;">
          <a href="/find/chat.html?uid=${encodeURIComponent(uid)}" class="btn btn-primary w-100">
            <i class="bi bi-chat-dots"></i> Chat
          </a>
        </div>
      </div>
    </div>
  `;

  const container =
    byId("profileModalContainer") || document.createElement("div");
  container.id = "profileModalContainer";
  container.innerHTML = html;
  document.body.appendChild(container);
}

function closeProfileModal() {
  const el = byId("profileModalContainer");
  if (el) el.remove();
}

async function prefillAndHydrate(user) {
  let fullName = user.displayName || "";
  let group = "";
  const score = computeOverallScoreFromLocal();

  // Load from localStorage cache immediately (no blocking)
  try {
    const raw = localStorage.getItem("pulsego_user_v1");
    if (raw) {
      const cached = JSON.parse(raw);
      fullName = cached.fullName || fullName;
      group = cached.course || "";
    }
  } catch {}

  // Set UI immediately from cache
  byId("name").value = fullName || "";
  byId("group").value = group || "";
  byId("overallScore").value = score;
  setIdentityUI(fullName || "Foydalanuvchi");

  // Load partner list from cache immediately (super fast, no Firestore wait)
  loadPartnersAndPreview();

  // Sync user profile in background (non-blocking)
  try {
    const userSnap = await getDoc(doc(db, "user", user.uid));
    if (userSnap.exists()) {
      const d = userSnap.data();
      fullName =
        d.fullName ||
        `${d.firstName || ""} ${d.lastName || ""}`.trim() ||
        fullName;
      group = d.course || group;
      byId("name").value = fullName || "";
      byId("group").value = group || "";
    }
  } catch {}

  // Sync user's partner profile in background (non-blocking)
  try {
    const profileSnap = await getDoc(doc(db, "partners", user.uid));
    if (profileSnap.exists()) {
      myProfile = profileSnap.data();
      applyProfileToForm(myProfile, score);
      onboardingCard.classList.add("hidden");
      promoCard.classList.add("hidden");
      editProfileBtn.classList.remove("hidden");
    } else {
      myProfile = null;
      promoCard.classList.remove("hidden");
      onboardingCard.classList.add("hidden");
      editProfileBtn.classList.add("hidden");
      viewMode = "all";
      showAllBtn.classList.remove("btn-outline-secondary");
      showAllBtn.classList.add("btn-secondary");
      showMatchesBtn.classList.remove("btn-primary");
      showMatchesBtn.classList.add("btn-outline-primary");
    }
  } catch {}
}

onAuthStateChanged(auth, async (user) => {
  if (!user) return;
  currentUser = user;

  setupWizardActions();
  setupFiltersAndSearch();
  setStep(1);
  setPurposeUI(selectedPurpose);
  await prefillAndHydrate(user);

  findShell.classList.add("ready");
});

window.addEventListener("beforeunload", () => {
  if (partnersUnsubscribe) partnersUnsubscribe();
  if (chatsUnsubscribe) chatsUnsubscribe();
});

// ============ Expose functions to global window for inline onclick handlers ============
window.showProfileModal = showProfileModal;
window.closeProfileModal = closeProfileModal;
window.renderPartnerList = renderPartnerList;

// ============ Professional Modal System ============
let modalCallback = null;

window.showAlert = function (title, message) {
  byId("modalTitle").textContent = title;
  byId("modalMessage").textContent = message;
  byId("modalActions").innerHTML =
    '<button class="btn btn-primary" style="width: 100%;" onclick="closeModal()">OK</button>';
  byId("modal").style.display = "block";
  byId("modalBackdrop").style.display = "block";
  // Auto-focus button for accessibility
  setTimeout(() => {
    const btn = byId("modalActions").querySelector("button");
    if (btn) btn.focus();
  }, 100);
};

window.showConfirm = function (title, message, callback) {
  modalCallback = callback;
  byId("modalTitle").textContent = title;
  byId("modalMessage").textContent = message;
  byId("modalActions").innerHTML = `
        <button class="btn btn-secondary" onclick="closeModal()">Bekor qilish</button>
        <button class="btn btn-danger" id="modalConfirmBtn" onclick="confirmModal()">Tasdiqlash</button>
    `;
  byId("modal").style.display = "block";
  byId("modalBackdrop").style.display = "block";
  // Auto-focus confirm button
  setTimeout(() => {
    const btn = byId("modalConfirmBtn");
    if (btn) btn.focus();
  }, 100);
};

window.closeModal = function () {
  byId("modal").style.display = "none";
  byId("modalBackdrop").style.display = "none";
  modalCallback = null;
};

window.confirmModal = function () {
  if (modalCallback) modalCallback(true);
  closeModal();
};
