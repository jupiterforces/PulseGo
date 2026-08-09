function formatDate(iso) {
  if (!iso) return "-";
  try {
    return new Date(iso).toLocaleDateString("uz-UZ", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch (e) {
    return iso;
  }
}

function escapeHtml(v) {
  return String(v || "").replace(/[&<>"']/g, function (char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char];
  });
}

function getRawStore() {
  try {
    var raw = localStorage.getItem("pulsego_data_v1");
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function buildGroupedMistakes(items) {
  var grouped = {};
  items.forEach(function (m) {
    var key = m.testName || "Noma'lum test";
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(m);
  });
  return grouped;
}

function renderMistakes() {
  var listEl = document.getElementById("mistakesList");
  if (!listEl) return;

  var mistakes =
    window.Data && window.Data.getMistakes ? window.Data.getMistakes() : [];
  if (!mistakes.length) {
    listEl.innerHTML =
      '<div class="empty-state"><i class="bi bi-check2-circle me-1 text-success"></i>Aktiv xatolar topilmadi.</div>';
    return;
  }

  var grouped = buildGroupedMistakes(mistakes);
  var html = "";

  Object.keys(grouped).forEach(function (testName, idx) {
    var arr = grouped[testName];
    var bodyId = "mistakeBody_" + idx;

    html += '<div class="mistake-test">';
    html +=
      '<div class="mistake-head" onclick="toggleMistakeGroup(\'' +
      bodyId +
      "')\">";
    html += '<i class="bi bi-folder2-open text-primary"></i>';
    html += "<h6>" + escapeHtml(testName) + "</h6>";
    html += '<span class="mistake-count">' + arr.length + " ta</span>";
    html += "</div>";

    html += '<div class="mistake-body" id="' + bodyId + '">';
    arr.forEach(function (m) {
      html += '<div class="mistake-item">';
      html += '<div class="mi-q">' + escapeHtml(m.q || "Savol yo'q") + "</div>";
      html +=
        '<div class="mi-row user"><b>Sizning javob:</b> ' +
        escapeHtml(m.selected || "-") +
        "</div>";
      html +=
        "<div class=\"mi-row correct\"><b>To'g'ri javob:</b> " +
        escapeHtml(m.correct || "-") +
        "</div>";
      html +=
        '<div class="d-flex align-items-center justify-content-between mt-2">';
      html +=
        '<small class="text-muted">' +
        formatDate(m.date || m.createdAt) +
        "</small>";
      html +=
        '<button class="btn btn-sm btn-outline-success rounded-pill" onclick="resolveOneMistake(event, \'' +
        String(m.id) +
        "')\">";
      html += '<i class="bi bi-check2 me-1"></i>Hal qilindi';
      html += "</button>";
      html += "</div>";
      html += "</div>";
    });
    html += "</div>";
    html += "</div>";
  });

  listEl.innerHTML = html;
}

function toggleMistakeGroup(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle("open");
}

function resolveOneMistake(event, mistakeId) {
  if (event) event.stopPropagation();
  if (!window.Data || !window.Data.resolveMistake) return;
  window.Data.resolveMistake(mistakeId);
  loadAndRender();
}

function setRing(percent) {
  var ring = document.getElementById("accuracyRing");
  var text = document.getElementById("accuracyText");
  if (!ring || !text) return;
  var p = Math.max(0, Math.min(100, Number(percent) || 0));
  var circumference = 245;
  var offset = circumference - (circumference * p) / 100;
  ring.style.strokeDashoffset = String(offset);
  text.textContent = p + "%";

  if (p >= 80) ring.style.stroke = "#16a34a";
  else if (p >= 56) ring.style.stroke = "#d97706";
  else ring.style.stroke = "#dc2626";
}

function loadAndRender() {
  var user = window.Data && window.Data.getUser ? window.Data.getUser() : null;
  var overview =
    window.Data && window.Data.getOverview
      ? window.Data.getOverview()
      : {
          totalTests: 0,
          totalQuestions: 0,
          totalCorrect: 0,
          percent: 0,
        };

  var store = getRawStore();
  var sessions = Array.isArray(store.preparationSessions)
    ? store.preparationSessions
    : [];
  var mistakes =
    window.Data && window.Data.getMistakes ? window.Data.getMistakes() : [];

  var name = user && user.name ? user.name : "Foydalanuvchi";
  var about =
    user && user.about ? user.about : "Profil ma'lumotlari mavjud emas.";

  var nameEl = document.getElementById("profileName");
  var joinedEl = document.getElementById("profileJoined");
  var aboutEl = document.getElementById("profileAbout");
  var avatarEl = document.getElementById("profileAvatar");

  if (nameEl) nameEl.textContent = name;
  if (joinedEl)
    joinedEl.textContent =
      "Qo'shilgan sana: " +
      formatDate(user && user.createdAt ? user.createdAt : null);
  if (aboutEl) aboutEl.textContent = about;
  if (avatarEl) avatarEl.textContent = name.charAt(0).toUpperCase();

  var stTests = document.getElementById("stTests");
  var stCorrect = document.getElementById("stCorrect");
  var stSessions = document.getElementById("stSessions");
  var stMistakes = document.getElementById("stMistakes");
  var accDetail = document.getElementById("accuracyDetail");

  if (stTests) stTests.textContent = String(overview.totalTests || 0);
  if (stCorrect) stCorrect.textContent = String(overview.totalCorrect || 0);
  if (stSessions) stSessions.textContent = String(sessions.length);
  if (stMistakes) stMistakes.textContent = String(mistakes.length);
  if (accDetail)
    accDetail.textContent =
      String(overview.totalCorrect || 0) +
      " / " +
      String(overview.totalQuestions || 0) +
      " to'g'ri javob";

  setRing(overview.percent || 0);
  renderMistakes();
}

function editProfile() {
  var current = window.Data && window.Data.getUser ? window.Data.getUser() : {};
  var name = prompt("Ism:", current && current.name ? current.name : "");
  if (!name) return;
  var about = prompt("Bio:", current && current.about ? current.about : "");

  if (!window.Data || !window.Data.setUser) return;
  window.Data.setUser({
    name: name,
    about: about || "",
    createdAt:
      current && current.createdAt
        ? current.createdAt
        : new Date().toISOString(),
  });

  loadAndRender();
}

var editBtn = document.getElementById("editProfileBtn");
var refreshBtn = document.getElementById("refreshBtn");

if (editBtn) editBtn.onclick = editProfile;
if (refreshBtn) refreshBtn.onclick = loadAndRender;

loadAndRender();
