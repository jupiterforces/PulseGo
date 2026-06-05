// Utilities
function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleString();
  } catch (e) {
    return iso;
  }
}

function escapeHtml(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
}

// MAIN
function loadAndRender() {
  const user = window.Data?.getUser?.() || null;

  // USER
  document.getElementById("userName").innerText = user?.name || "Guest";

  document.getElementById("userAbout").innerText =
    user?.about || "No profile data";

  document.getElementById("userCreated").innerText = user?.createdAt
    ? "Joined: " + fmtDate(user.createdAt)
    : "";

  // OVERVIEW
  const ov = window.Data?.getOverview?.() || {
    totalTests: 0,
    totalQuestions: 0,
    totalCorrect: 0,
    percent: 0,
  };

  document.getElementById("overallPercent").innerText = ov.percent + "%";

  document.getElementById("overallDetail").innerText =
    `${ov.totalTests} tests • ${ov.totalCorrect} correct of ${ov.totalQuestions}`;
}

// EVENTS
document.getElementById("reloadData").onclick = loadAndRender;

document.getElementById("editProfile").onclick = () => {
  const cur = window.Data?.getUser?.() || {};

  const name = prompt("Full name:", cur.name || "");
  if (!name) return;

  const about = prompt("About:", cur.about || "");

  window.Data?.setUser?.({
    name,
    about,
    createdAt: cur.createdAt || new Date().toISOString(),
  });

  loadAndRender();
};

// INIT
loadAndRender();
