(function (global) {
  const MODAL_PATH = "/assets/xatolar/modal.html";
  let modalLoaded = false;

  function loadRawData() {
    if (window.Data && typeof window.Data._getRawData === "function") {
      return window.Data._getRawData();
    }
    try {
      const raw = localStorage.getItem("pulsego_data_v1");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error("Failed to parse raw xatolar data", e);
      return {};
    }
  }

  function saveRawData(obj) {
    if (window.Data && typeof window.Data._saveRawData === "function") {
      return window.Data._saveRawData(obj);
    }
    try {
      localStorage.setItem("pulsego_data_v1", JSON.stringify(obj));
    } catch (e) {
      console.error("Failed to save raw xatolar data", e);
    }
  }

  function getStoredMistakes() {
    const data = loadRawData();
    return data.mistakes || [];
  }

  function getResolvedMistakes() {
    const data = loadRawData();
    return data.resolvedMistakes || [];
  }

  function resolveStoredMistakeById(mistakeId) {
    if (!mistakeId) return false;
    const data = loadRawData();
    data.mistakes = data.mistakes || [];
    data.resolvedMistakes = data.resolvedMistakes || [];

    const normalizedId = String(mistakeId);
    const idx = data.mistakes.findIndex((m) => String(m.id) === normalizedId);
    if (idx === -1) return false;

    const removed = data.mistakes.splice(idx, 1)[0];
    removed.resolvedAt = new Date().toISOString();
    data.resolvedMistakes.push(removed);

    saveRawData(data);
    return true;
  }

  function loadXatolarModal() {
    if (modalLoaded) return Promise.resolve();
    const existing = document.getElementById("xatolarModal");
    if (existing) {
      modalLoaded = true;
      return Promise.resolve();
    }

    return fetch(MODAL_PATH)
      .then((response) => response.text())
      .then((html) => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        document.body.appendChild(wrapper.firstElementChild);
        modalLoaded = true;
      })
      .catch((err) => {
        console.error("Failed to load xatolar modal", err);
        throw err;
      });
  }

  let currentXatolarTab = "pending";

  function formatMistakeCard(m, showResolveButton = true) {
    const correctAnswer = m.a?.[m.correct] || "";
    const selectedAnswer = m.a?.[m.selected] || "";
    return `
      <div class="col-12">
        <div class="card p-3">
          <div class="d-flex justify-content-between align-items-start gap-2 flex-wrap">
            <div>
              <div class="fw-semibold">${m.testName || "Noma'lum test"}</div>
              <div class="text-muted">${m.date ? new Date(m.date).toLocaleString() : "Sana yo'q"}</div>
            </div>
            <div class="text-end">
              <div><strong>To'g'ri:</strong> ${correctAnswer}</div>
              <div><strong>Tanlangan:</strong> ${selectedAnswer}</div>
            </div>
          </div>
          <div class="mt-3">${m.q}</div>
          ${m.photo ? `<div class="mt-3"><img src="${m.photo}" class="img-fluid rounded" alt="xato rasm"></div>` : ""}
          ${showResolveButton ? `<div class="mt-3 text-end"><button type="button" class="btn btn-sm btn-success" onclick="window.markStoredMistakeResolved(${JSON.stringify(String(m.id))})">Tog'rilash</button></div>` : ""}
        </div>
      </div>
    `;
  }

  function formatResolvedCard(m) {
    const correctAnswer = m.a?.[m.correct] || "";
    const selectedAnswer = m.a?.[m.selected] || "";
    return `
      <div class="col-12">
        <div class="card p-3 border-success">
          <div class="d-flex justify-content-between align-items-start gap-2 flex-wrap">
            <div>
              <div class="fw-semibold">${m.testName || "Noma'lum test"}</div>
              <div class="text-muted">${m.resolvedAt ? new Date(m.resolvedAt).toLocaleString() : m.date ? new Date(m.date).toLocaleString() : "Sana yo'q"}</div>
            </div>
            <div class="text-end">
              <div><strong>To'g'ri:</strong> ${correctAnswer}</div>
              <div><strong>Tanlangan:</strong> ${selectedAnswer}</div>
            </div>
          </div>
          <div class="mt-3">${m.q}</div>
          ${m.photo ? `<div class="mt-3"><img src="${m.photo}" class="img-fluid rounded" alt="xato rasm"></div>` : ""}
          <div class="mt-3 text-success"><small>Tog'rilangan xato</small></div>
        </div>
      </div>
    `;
  }

  function updateXatolarTabs() {
    const pendingButton = document.getElementById("xatolarTabPending");
    const resolvedButton = document.getElementById("xatolarTabResolved");
    if (pendingButton && resolvedButton) {
      pendingButton.classList.toggle(
        "btn-primary",
        currentXatolarTab === "pending",
      );
      pendingButton.classList.toggle(
        "btn-outline-primary",
        currentXatolarTab !== "pending",
      );
      resolvedButton.classList.toggle(
        "btn-primary",
        currentXatolarTab === "resolved",
      );
      resolvedButton.classList.toggle(
        "btn-outline-primary",
        currentXatolarTab !== "resolved",
      );
    }
  }

  function renderXatolarList(tab = "pending") {
    currentXatolarTab = tab;
    const items = getStoredMistakes();
    const resolvedItems = getResolvedMistakes();
    const summary = document.getElementById("xatolarSummary");
    const list = document.getElementById("xatolarList");

    updateXatolarTabs();

    if (summary) {
      summary.innerHTML = `<strong>Saqlangan xatolar:</strong> ${items.length} ta | <strong>Tog'rilanganlar:</strong> ${resolvedItems.length} ta`;
    }
    if (!list) return;

    if (tab === "pending") {
      list.innerHTML = items.length
        ? items.map((m) => formatMistakeCard(m, true)).join("")
        : `<div class="col-12"><div class="alert alert-info">Hozircha xatolar mavjud emas.</div></div>`;
    } else {
      list.innerHTML = resolvedItems.length
        ? resolvedItems.map(formatResolvedCard).join("")
        : `<div class="col-12"><div class="alert alert-info">Hech qanday tog'rilangan xato yo'q.</div></div>`;
    }
  }

  function markStoredMistakeResolved(mistakeId) {
    if (!mistakeId) return;
    if (!resolveStoredMistakeById(mistakeId)) {
      alert("Bu xato topilmadi yoki allaqachon tog'rilangan.");
      return;
    }
    renderXatolarList(currentXatolarTab);
  }

  function setXatolarTab(tab) {
    if (tab !== "pending" && tab !== "resolved") return;
    renderXatolarList(tab);
  }

  function openXatolarModal() {
    return loadXatolarModal().then(() => {
      renderXatolarList(currentXatolarTab);
      const modalEl = document.getElementById("xatolarModal");
      if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
      }
    });
  }

  function downloadXatolar() {
    const items = getStoredMistakes();
    if (!items.length) {
      alert("Xatolar topilmadi.");
      return;
    }

    const text = items
      .map((m, index) => {
        const correctAnswer = m.a?.[m.correct] || "";
        const selectedAnswer = m.a?.[m.selected] || "";
        return [
          `Mistake #${index + 1}`,
          `Test: ${m.testName || "unknown"}`,
          `Savol: ${m.q}`,
          `To'g'ri javob: ${correctAnswer}`,
          `Tanlangan javob: ${selectedAnswer}`,
          `Sana: ${m.date || "-"}`,
          "",
        ].join("\n");
      })
      .join("\n");

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "xatolar.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function startXatolarReview() {
    const storedMistakes = getStoredMistakes();
    if (!storedMistakes.length) {
      alert("Xatolar topilmadi.");
      return;
    }

    if (typeof window.currentTest !== "undefined") {
      window.currentTest = storedMistakes.map((m) => ({
        q: m.q,
        photo: m.photo || null,
        a: m.a || [],
        correct: m.correct,
        selected: m.selected,
        id: m.id,
        testName: m.testName,
      }));
    }
    if (typeof window.currentTestName !== "undefined") {
      window.currentTestName = "xatolar";
    }
    if (typeof window.currentIndex !== "undefined") {
      window.currentIndex = 0;
    }
    if (typeof window.score !== "undefined") {
      window.score = 0;
    }
    if (typeof window.mistakes !== "undefined") {
      window.mistakes = [];
    }
    if (typeof window.isReviewingStoredMistakes !== "undefined") {
      window.isReviewingStoredMistakes = true;
    }

    const selection = document.getElementById("test-selection");
    const screen = document.getElementById("test-screen");
    const result = document.getElementById("result");
    if (selection) selection.classList.add("d-none");
    if (screen) screen.classList.remove("d-none");
    if (result) result.classList.add("d-none");

    const activeModal = document.getElementById("xatolarModal");
    if (activeModal) {
      const modal = bootstrap.Modal.getInstance(activeModal);
      modal?.hide();
    }

    if (typeof window.showQuestion === "function") {
      window.showQuestion();
    }
  }

  global.openXatolarModal = openXatolarModal;
  global.startXatolarReview = startXatolarReview;
  global.downloadXatolar = downloadXatolar;
  global.getStoredMistakes = getStoredMistakes;
  global.getResolvedMistakes = getResolvedMistakes;
  global.resolveStoredMistakeById = resolveStoredMistakeById;
  global.markStoredMistakeResolved = markStoredMistakeResolved;
  global.setXatolarTab = setXatolarTab;
})(window);
