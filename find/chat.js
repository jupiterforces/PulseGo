import { auth, db } from "../firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  increment,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const byId = (id) => document.getElementById(id);

const navAvatarBtn = byId("navAvatarBtn");
const backBtn = byId("backBtn");
const chatAvatar = byId("chatAvatar");
const chatTitle = byId("chatTitle");
const chatMeta = byId("chatMeta");
const contactTelegramBtn = byId("contactTelegramBtn");
const contactPhoneBtn = byId("contactPhoneBtn");
const deleteChatBtn = byId("deleteChatBtn");

const messagesWrap = byId("messagesWrap");
const messagesEmpty = byId("messagesEmpty");
const chatForm = byId("chatForm");
const messageInput = byId("messageInput");
const sendBtn = byId("sendBtn");

const replyPreview = byId("replyPreview");
const replyTitle = byId("replyTitle");
const replyText = byId("replyText");
const clearReplyBtn = byId("clearReplyBtn");
const actionSheet = byId("actionSheet");
const actionReplyBtn = byId("actionReplyBtn");
const actionDeleteBtn = byId("actionDeleteBtn");
const actionCancelBtn = byId("actionCancelBtn");

let currentUser = null;
let myProfile = null;
let partnerProfile = null;
let chatId = null;
let messagesUnsub = null;
let replyState = null;
let isMutual = false;
let longPressTimer = null;
let actionMessage = null;
let actionMessageMine = false;

// ============ LocalStorage Message Cache ============
const CACHE_KEY_CHAT_MSGS = "pulsego_chat_msgs_v1";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function cacheMessages(cid, messages) {
  try {
    let cache = JSON.parse(localStorage.getItem(CACHE_KEY_CHAT_MSGS) || "{}");
    cache[cid] = {
      messages: messages.map((m) => ({
        id: m.id,
        text: m.text,
        deleted: m.deleted,
        senderUid: m.senderUid,
        createdAtMs: m.createdAtMs || m.createdAt?.toMillis?.() || Date.now(),
        replyTo: m.replyTo,
        senderName: m.senderName || "",
      })),
      cachedAt: Date.now(),
    };
    localStorage.setItem(CACHE_KEY_CHAT_MSGS, JSON.stringify(cache));
  } catch {}
}

function getCachedMessages(cid) {
  try {
    const cache = JSON.parse(localStorage.getItem(CACHE_KEY_CHAT_MSGS) || "{}");
    if (!cache[cid]) return [];
    const { messages, cachedAt } = cache[cid];
    if (Date.now() - cachedAt > CACHE_TTL) return [];
    return messages || [];
  } catch {
    return [];
  }
}

function normalizeText(value) {
  return (value || "").toString().trim();
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getChatId(uid1, uid2) {
  return [uid1, uid2].sort().join("__");
}

function formatTimeFromMs(ms) {
  if (!ms) return "";
  const d = new Date(ms);
  return d.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" });
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

function checkMutual(me, other) {
  if (!me || !other) return false;
  return matchesOneWay(other, me, me) && matchesOneWay(me, other, other);
}

function setCompose(enabled) {
  messageInput.disabled = !enabled;
  sendBtn.disabled = !enabled;
}

function setReplyPreview(data) {
  replyState = data;
  if (!data) {
    replyPreview.classList.remove("show");
    return;
  }

  replyTitle.textContent =
    data.senderUid === currentUser.uid
      ? "Sizga javob"
      : `${data.senderName || "Partner"}ga javob`;
  replyText.textContent = data.text || "(bo'sh xabar)";
  replyPreview.classList.add("show");
}

function wireSuggestionButtons() {
  messagesEmpty.querySelectorAll("[data-q]").forEach((btn) => {
    btn.addEventListener("click", () => {
      messageInput.value = btn.getAttribute("data-q") || "";
      messageInput.focus();
    });
  });
}

function renderMessages(messages) {
  messagesWrap.innerHTML = "";

  if (!messages.length) {
    messagesWrap.appendChild(messagesEmpty);
    messagesEmpty.classList.remove("hidden");
    wireSuggestionButtons();
    // Scroll to top for empty state
    messagesWrap.scrollTop = 0;
    return;
  }

  messages.forEach((msg) => {
    const mine = msg.senderUid === currentUser.uid;
    const ts = msg.createdAt?.toMillis
      ? msg.createdAt.toMillis()
      : msg.createdAtMs || Date.now();
    const senderName = mine ? "Siz" : partnerProfile?.name || "Partner";

    const replyBlock =
      msg.replyTo && msg.replyTo.text
        ? `<div class="msg-reply"><strong>${escapeHtml(msg.replyTo.senderName || "Xabar")}</strong><br>${escapeHtml(msg.replyTo.text)}</div>`
        : "";

    const text = msg.deleted ? "Xabar o'chirildi" : msg.text || "";

    const row = document.createElement("div");
    row.className = `msg-row ${mine ? "me" : "other"}`;
    row.innerHTML = `
      <div class="msg-bubble">
        ${replyBlock}
        <div>${escapeHtml(text)}</div>
        <div class="msg-time">${escapeHtml(formatTimeFromMs(ts))}</div>
      </div>
    `;

    messagesWrap.appendChild(row);

    const bubble = row.querySelector(".msg-bubble");
    if (bubble && !msg.deleted) {
      attachLongPress(bubble, msg, mine);
    }
  });

  // Scroll to bottom with delay to ensure DOM is updated
  requestAnimationFrame(() => {
    messagesWrap.scrollTop = messagesWrap.scrollHeight;
  });
}

function hideActionSheet() {
  actionSheet.classList.add("hidden");
  actionMessage = null;
  actionMessageMine = false;
}

function showActionSheet(msg, mine) {
  actionMessage = msg;
  actionMessageMine = mine;
  actionDeleteBtn.classList.toggle("hidden", !mine);
  actionSheet.classList.remove("hidden");
}

function attachLongPress(element, msg, mine) {
  const start = (event) => {
    if (event.type === "contextmenu") {
      event.preventDefault();
      showActionSheet(msg, mine);
      return;
    }

    longPressTimer = window.setTimeout(() => {
      showActionSheet(msg, mine);
    }, 460);
  };

  const cancel = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
    }
  };

  element.addEventListener("mousedown", start);
  element.addEventListener("touchstart", start, { passive: true });
  element.addEventListener("contextmenu", start);
  element.addEventListener("mouseup", cancel);
  element.addEventListener("mouseleave", cancel);
  element.addEventListener("touchend", cancel);
  element.addEventListener("touchcancel", cancel);
}

async function softDeleteMessage(messageId) {
  await updateDoc(doc(db, "chats", chatId, "messages", messageId), {
    deleted: true,
    text: "",
    replyTo: null,
    deletedAtMs: Date.now(),
    deletedBy: currentUser.uid,
  });
}

function applyHeader() {
  const displayName = partnerProfile?.name || "Partner";
  chatTitle.textContent = displayName;
  chatAvatar.textContent = displayName.charAt(0).toUpperCase();

  if (isMutual) {
    chatMeta.textContent = "O'zaro moslik tasdiqlandi";
  } else {
    chatMeta.textContent = "O'zaro moslik yo'q. Chat yuborish yopiq.";
  }

  if (isMutual && partnerProfile?.telegramUsername) {
    contactTelegramBtn.classList.remove("disabled");
    contactTelegramBtn.href = `https://t.me/${encodeURIComponent(partnerProfile.telegramUsername)}`;
    contactTelegramBtn.target = "_blank";
    contactTelegramBtn.rel = "noopener noreferrer";
  } else {
    contactTelegramBtn.classList.add("disabled");
    contactTelegramBtn.href = "#";
  }

  if (isMutual && partnerProfile?.phone) {
    contactPhoneBtn.classList.remove("disabled");
    contactPhoneBtn.href = `tel:${encodeURIComponent(partnerProfile.phone)}`;
  } else {
    contactPhoneBtn.classList.add("disabled");
    contactPhoneBtn.href = "#";
  }

  setCompose(isMutual);
}

async function markRead() {
  await setDoc(
    doc(db, "chats", chatId),
    {
      [`unreadMap.${currentUser.uid}`]: 0,
      updatedAtMs: Date.now(),
    },
    { merge: true },
  );
}

function subscribeMessages() {
  if (messagesUnsub) messagesUnsub();

  // Show cached messages immediately for faster UX
  const cached = getCachedMessages(chatId);
  if (cached.length > 0) {
    renderMessages(cached);
  }

  const q = query(
    collection(db, "chats", chatId, "messages"),
    orderBy("createdAt", "asc"),
  );
  messagesUnsub = onSnapshot(q, async (snap) => {
    const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    cacheMessages(chatId, list);
    renderMessages(list);
    await markRead();
  });
}

async function sendMessage() {
  const text = normalizeText(messageInput.value);
  if (!text || !isMutual) return;

  await addDoc(collection(db, "chats", chatId, "messages"), {
    chatId,
    text,
    deleted: false,
    senderUid: currentUser.uid,
    receiverUid: partnerProfile.uid,
    createdAt: serverTimestamp(),
    createdAtMs: Date.now(),
    replyTo: replyState
      ? {
          messageId: replyState.messageId,
          senderUid: replyState.senderUid,
          senderName: replyState.senderName,
          text: replyState.text,
        }
      : null,
  });

  await setDoc(
    doc(db, "chats", chatId),
    {
      participants: [currentUser.uid, partnerProfile.uid],
      participantMap: {
        [currentUser.uid]: true,
        [partnerProfile.uid]: true,
      },
      lastMessageText: text,
      lastMessageSenderUid: currentUser.uid,
      lastMessageAtMs: Date.now(),
      [`deletedFor.${currentUser.uid}`]: false,
      [`deletedFor.${partnerProfile.uid}`]: false,
      [`unreadMap.${currentUser.uid}`]: 0,
      [`unreadMap.${partnerProfile.uid}`]: increment(1),
      updatedAt: serverTimestamp(),
      updatedAtMs: Date.now(),
    },
    { merge: true },
  );

  messageInput.value = "";
  setReplyPreview(null);
}

async function deleteChatForMe() {
  showConfirm(
    "Chat o'chirilsinmi?",
    "Chat ro'yxatdan o'chiriladi. Xabarlar Firestoreda saqlanadi.",
    async (confirmed) => {
      if (!confirmed) return;

      await setDoc(
        doc(db, "chats", chatId),
        {
          [`deletedFor.${currentUser.uid}`]: true,
          [`unreadMap.${currentUser.uid}`]: 0,
          updatedAt: serverTimestamp(),
          updatedAtMs: Date.now(),
        },
        { merge: true },
      );

      window.location.href = "/find/";
    },
  );
}

async function bootChat(user) {
  const params = new URLSearchParams(window.location.search);
  const partnerUid = params.get("uid");
  if (!partnerUid || partnerUid === user.uid) {
    window.location.href = "/find/";
    return;
  }

  const [meSnap, partnerSnap] = await Promise.all([
    getDoc(doc(db, "partners", user.uid)),
    getDoc(doc(db, "partners", partnerUid)),
  ]);

  if (!partnerSnap.exists()) {
    window.location.href = "/find/";
    return;
  }

  partnerProfile = { uid: partnerSnap.id, ...partnerSnap.data() };
  myProfile = meSnap.exists() ? { uid: meSnap.id, ...meSnap.data() } : null;
  isMutual = checkMutual(myProfile, partnerProfile);
  chatId = getChatId(user.uid, partnerUid);

  const initial = (user.displayName || "F").charAt(0).toUpperCase();
  navAvatarBtn.textContent = initial;

  applyHeader();
  subscribeMessages();
}

function setupActions() {
  backBtn.addEventListener("click", () => {
    window.location.href = "/find/";
  });

  clearReplyBtn.addEventListener("click", () => setReplyPreview(null));

  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!currentUser || !partnerProfile) return;
    if (!isMutual) {
      showAlert("Xatolik", "Chat faqat o'zaro moslikda ishlaydi.");
      return;
    }
    await sendMessage();
  });

  deleteChatBtn.addEventListener("click", async () => {
    if (!chatId) return;
    await deleteChatForMe();
  });

  actionCancelBtn.addEventListener("click", hideActionSheet);

  actionReplyBtn.addEventListener("click", () => {
    if (!actionMessage) return;
    setReplyPreview({
      messageId: actionMessage.id,
      senderUid: actionMessage.senderUid,
      senderName:
        actionMessage.senderUid === currentUser.uid
          ? "Siz"
          : partnerProfile?.name || "Partner",
      text: actionMessage.deleted
        ? "Xabar o'chirilgan"
        : actionMessage.text || "",
    });
    hideActionSheet();
    messageInput.focus();
  });

  actionDeleteBtn.addEventListener("click", async () => {
    if (!actionMessage || !actionMessageMine) return;
    showConfirm(
      "Xabar o'chirilsinmi?",
      "Bu ishni qaytarib bo'lmaydi.",
      async (confirmed) => {
        if (!confirmed) return;
        await softDeleteMessage(actionMessage.id);
        hideActionSheet();
      },
    );
  });

  actionSheet.addEventListener("click", (event) => {
    if (event.target === actionSheet) {
      hideActionSheet();
    }
  });

  // Mobile keyboard handling
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    let windowHeight = window.innerHeight;
    let isKeyboardOpen = false;

    window.addEventListener("resize", () => {
      const newHeight = window.innerHeight;
      const heightDifference = windowHeight - newHeight;

      if (heightDifference > 150) {
        // Keyboard opened
        isKeyboardOpen = true;
        requestAnimationFrame(() => {
          messagesWrap.scrollTop = messagesWrap.scrollHeight;
        });
      } else if (heightDifference < -150) {
        // Keyboard closed
        isKeyboardOpen = false;
      }
      windowHeight = newHeight;
    });

    messageInput.addEventListener("focus", () => {
      setTimeout(() => {
        messagesWrap.scrollTop = messagesWrap.scrollHeight;
      }, 300);
    });
  }
}

onAuthStateChanged(auth, async (user) => {
  if (!user) return;
  currentUser = user;
  setupActions();
  await bootChat(user);
});

window.addEventListener("beforeunload", () => {
  if (messagesUnsub) messagesUnsub();
});

// ============ Professional Modal System ============
let modalCallback = null;

window.showAlert = function (title, message) {
  const modal = byId("modal");
  const backdrop = byId("modalBackdrop");
  if (!modal || !backdrop) return;

  byId("modalTitle").textContent = title;
  byId("modalMessage").textContent = message;
  byId("modalActions").innerHTML =
    '<button class="btn btn-primary" style="width: 100%;" onclick="closeModal()">OK</button>';
  modal.style.display = "block";
  backdrop.style.display = "block";
  setTimeout(() => {
    const btn = byId("modalActions").querySelector("button");
    if (btn) btn.focus();
  }, 100);
};

window.showConfirm = function (title, message, callback) {
  const modal = byId("modal");
  const backdrop = byId("modalBackdrop");
  if (!modal || !backdrop) return;

  modalCallback = callback;
  byId("modalTitle").textContent = title;
  byId("modalMessage").textContent = message;
  byId("modalActions").innerHTML = `
        <button class="btn btn-secondary" onclick="closeModal()">Bekor qilish</button>
        <button class="btn btn-danger" id="modalConfirmBtn" onclick="confirmModal()">Tasdiqlash</button>
    `;
  modal.style.display = "block";
  backdrop.style.display = "block";
  setTimeout(() => {
    const btn = byId("modalConfirmBtn");
    if (btn) btn.focus();
  }, 100);
};

window.closeModal = function () {
  const modal = byId("modal");
  const backdrop = byId("modalBackdrop");
  if (modal) modal.style.display = "none";
  if (backdrop) backdrop.style.display = "none";
  modalCallback = null;
};

window.confirmModal = function () {
  if (modalCallback) modalCallback(true);
  closeModal();
};
