// Utilities
function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleString();
  } catch (e) {
    return iso;
  }
}

function parseDateInput(value) {
  if (!value) return null;
  const d = new Date(value + "T00:00:00");
  return isNaN(d) ? null : d;
}

// Filtering and rendering
function getAllTests() {
  return window.Data && Data.getResults ? Data.getResults() : [];
}

function applyFilters(tests) {
  const q = (document.getElementById("filterSearch").value || "")
    .trim()
    .toLowerCase();
  const sort = document.getElementById("filterSort").value;
  const minP =
    parseInt(document.getElementById("filterMinPercent").value || "0", 10) || 0;
  const from = parseDateInput(document.getElementById("filterFrom").value);
  const to = parseDateInput(document.getElementById("filterTo").value);

  let out = tests.slice();

  if (q) out = out.filter((t) => (t.testName || "").toLowerCase().includes(q));
  if (!isNaN(minP) && minP > 0)
    out = out.filter((t) => (t.percent || 0) >= minP);

  if (from) out = out.filter((t) => new Date(t.date) >= from);

  if (to) {
    const end = new Date(to);
    end.setHours(23, 59, 59, 999);
    out = out.filter((t) => new Date(t.date) <= end);
  }

  switch (sort) {
    case "date_asc":
      out.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "date_desc":
      out.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "percent_asc":
      out.sort((a, b) => (a.percent || 0) - (b.percent || 0));
      break;
    case "percent_desc":
      out.sort((a, b) => (b.percent || 0) - (a.percent || 0));
      break;
  }

  return out;
}

function escapeHtml(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

// render tests
function renderTests(tests) {
  const table = document.getElementById("testsTable");
  const body = table.querySelector("tbody");
  body.innerHTML = "";

  if (!tests.length) {
    document.getElementById("noTests").style.display = "";
    table.style.display = "none";
    return;
  }

  document.getElementById("noTests").style.display = "none";
  table.style.display = "";

  tests.forEach((t) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${fmtDate(t.date)}</td>
            <td>${escapeHtml(t.testName || "Unnamed")}</td>
            <td>${t.correct}/${t.total} (${t.percent}%)</td>
            <td>${t.mistakesCount || 0}</td>
        `;

    body.appendChild(tr);
  });
}

// MAIN
function loadAndRender() {
  const user = window.Data && Data.getUser ? Data.getUser() : null;

  document.getElementById("userName").innerText = user?.name || "Guest";
  document.getElementById("userAbout").innerText =
    user?.about || "No profile data";
  document.getElementById("userCreated").innerText = user?.createdAt
    ? "Joined: " + fmtDate(user.createdAt)
    : "";

  const tests = getAllTests();
  const filtered = applyFilters(tests);
  renderTests(filtered);

  const ov =
    window.Data && Data.getOverview
      ? Data.getOverview()
      : { totalTests: 0, totalQuestions: 0, totalCorrect: 0, percent: 0 };

  document.getElementById("overallPercent").innerText = ov.percent + "%";
  document.getElementById("overallDetail").innerText =
    `${ov.totalTests} tests • ${ov.totalCorrect} correct of ${ov.totalQuestions}`;
}

// EVENTS
document.getElementById("applyFilters").onclick = () => loadAndRender();

document.getElementById("clearFilters").onclick = () => {
  document.querySelectorAll(".filters input").forEach((i) => (i.value = ""));
  document.getElementById("filterSort").value = "date_desc";
  loadAndRender();
};

document.getElementById("reloadData").onclick = loadAndRender;

document.getElementById("editProfile").onclick = () => {
  const cur = Data.getUser() || {};
  const name = prompt("Full name:", cur.name || "");
  if (!name) return;

  const about = prompt("About:", cur.about || "");

  Data.setUser({
    name,
    about,
    createdAt: cur.createdAt || new Date().toISOString(),
  });

  loadAndRender();
};

document.getElementById("clearData").onclick = () => {
  if (confirm("Clear all data?")) {
    Data.clearAll();
    loadAndRender();
  }
};

document.getElementById("exportAll").onclick = () => {
  const d = localStorage.getItem("pulsego_data_v1") || "{}";
  const blob = new Blob([d], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = `pulsego_all_${Date.now()}.json`;
  a.click();

  URL.revokeObjectURL(url);
};

document.getElementById("clearMistakes").onclick = () => {
  if (confirm("Clear mistakes?")) {
    Data.clearMistakes();
    loadAndRender();
  }
};

// INIT
loadAndRender();
