// ----------------------
// Common utility functions
// ----------------------

// Arrayni aralashtirish
function shuffle(array) {
  return [...array]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// Random test yaratish
function getRandomTest(questions, n = "all") {
  const shuffledQuestions =
    n === "all" ? shuffle(questions) : shuffle(questions).slice(0, n);

  return shuffledQuestions.map((q) => {
    const shuffledAnswers = shuffle(q.a);
    return {
      q: q.q,
      photo: q.photo || null,
      a: shuffledAnswers,
      correct: shuffledAnswers.indexOf(q.a[q.correct]),
    };
  });
}

function loadFallbackResults() {
  try {
    const raw = localStorage.getItem("pulsego_test_results_v1");
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed.tests || [];
  } catch (e) {
    console.error("Failed to load fallback results", e);
    return [];
  }
}

function saveTestResult(resultData) {
  if (window.Data?.recordTestResult) {
    try {
      return Data.recordTestResult(resultData);
    } catch (e) {
      console.error("Data.recordTestResult failed", e);
    }
  }

  try {
    const raw = localStorage.getItem("pulsego_test_results_v1");
    const obj = raw ? JSON.parse(raw) : { tests: [] };
    const total = resultData.total || 0;
    const correct = resultData.correct || 0;
    const percent = total === 0 ? 0 : Math.round((correct / total) * 100);
    const entry = {
      id: Date.now(),
      testName: resultData.testName || "unknown",
      total,
      correct,
      percent,
      date: new Date().toISOString(),
      mistakesCount: resultData.mistakes?.length || 0,
    };
    obj.tests.push(entry);
    localStorage.setItem("pulsego_test_results_v1", JSON.stringify(obj));
    return entry;
  } catch (e) {
    console.error("Failed to save fallback test result", e);
    return null;
  }
}

function getTestResults() {
  if (window.Data?.getResults) {
    try {
      return Data.getResults();
    } catch (e) {
      console.error("Data.getResults failed", e);
    }
  }
  return loadFallbackResults();
}

function getStoredMistakes() {
  if (window.Data?.getPendingMistakes) {
    try {
      return Data.getPendingMistakes();
    } catch (e) {
      console.error("Data.getPendingMistakes failed", e);
    }
  }

  try {
    const raw = localStorage.getItem("pulsego_data_v1");
    const data = raw ? JSON.parse(raw) : {};
    return data.mistakes || [];
  } catch (e) {
    console.error("Failed to read stored mistakes", e);
    return [];
  }
}

function getResolvedMistakes() {
  if (window.Data?.getResolvedMistakes) {
    try {
      return Data.getResolvedMistakes();
    } catch (e) {
      console.error("Data.getResolvedMistakes failed", e);
    }
  }

  try {
    const raw = localStorage.getItem("pulsego_data_v1");
    const data = raw ? JSON.parse(raw) : {};
    return data.resolvedMistakes || [];
  } catch (e) {
    console.error("Failed to read resolved mistakes", e);
    return [];
  }
}

function resolveStoredMistakeById(mistakeId) {
  if (!mistakeId) return false;
  if (window.Data?.resolveMistake) {
    try {
      return Data.resolveMistake(mistakeId);
    } catch (e) {
      console.error("Data.resolveMistake failed", e);
    }
  }

  try {
    const raw = localStorage.getItem("pulsego_data_v1");
    const data = raw ? JSON.parse(raw) : {};
    data.mistakes = data.mistakes || [];
    data.resolvedMistakes = data.resolvedMistakes || [];
    const idx = data.mistakes.findIndex((m) => m.id === mistakeId);
    if (idx === -1) {
      localStorage.setItem("pulsego_data_v1", JSON.stringify(data));
      return false;
    }
    const removed = data.mistakes.splice(idx, 1)[0];
    removed.resolvedAt = new Date().toISOString();
    data.resolvedMistakes.push(removed);
    localStorage.setItem("pulsego_data_v1", JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Failed to resolve fallback stored mistake", e);
    return false;
  }
}

function downloadXatolar() {
  const items = getStoredMistakes();
  if (!items.length) {
    alert("Xatolar topilmadi.");
    return;
  }

  const text = items
    .map((m, index) => {
      const correctAnswer = m.a?.[m.correct] ?? "";
      const selectedAnswer = m.a?.[m.selected] ?? "";
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

function createXatolarModal() {
  if (document.getElementById("xatolarModal")) return;

  const modalHtml = `
<div class="modal fade" id="xatolarModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Xatolar ro'yxati</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <div id="xatolarSummary" class="mb-3"></div>
        <div id="xatolarList" class="row g-3"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Yopish</button>
        <button type="button" class="btn btn-primary" onclick="downloadXatolar()">Yuklab olish</button>
        <button type="button" class="btn btn-success" onclick="startXatolarReview()">Xatolarni yechish</button>
      </div>
    </div>
  </div>
</div>`;

  const container = document.createElement("div");
  container.innerHTML = modalHtml;
  document.body.appendChild(container.firstElementChild);
}

function openXatolarModal() {
  createXatolarModal();

  const list = document.getElementById("xatolarList");
  const summary = document.getElementById("xatolarSummary");
  const items = getStoredMistakes();

  if (summary) {
    summary.innerHTML = `
      <strong>Saqlangan xatolar:</strong> ${items.length} ta |
      <strong>Tog'rilanganlar:</strong> ${getResolvedMistakes().length} ta
    `;
  }

  if (list) {
    if (!items.length) {
      list.innerHTML = `
        <div class="col-12">
          <div class="alert alert-info">
            Hozircha xatolar mavjud emas.
          </div>
        </div>
      `;
    } else {
      // testName bo'yicha guruhlash
      const groups = {};

      items.forEach((item) => {
        const name = item.testName || "Noma'lum test";

        if (!groups[name]) {
          groups[name] = [];
        }

        groups[name].push(item);
      });
      // Bir marta qo'shiladi
      if (!document.getElementById("mistake-card-style")) {
        const style = document.createElement("style");
        style.id = "mistake-card-style";
        style.textContent = `
        .mistake-card{
            border:none;
            border-radius:20px;
            overflow:hidden;
            transition:.25s ease;
            box-shadow:0 6px 18px rgba(0,0,0,.08);
            background:#fff;
        }

        .mistake-card:hover{
            transform:translateY(-5px);
            box-shadow:0 12px 28px rgba(0,0,0,.15);
        }

        .mistake-icon{
            width:60px;
            height:60px;
            border-radius:50%;
            background:#e8f5e9;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#198754;
            font-size:28px;
            flex-shrink:0;
        }

        .mistake-badge{
            background:#ffe5e5;
            color:#dc3545;
            padding:6px 14px;
            border-radius:999px;
            font-size:13px;
            font-weight:600;
        }

        .mistake-btn{
            border-radius:50px;
            padding:10px 24px;
            font-weight:600;
            transition:.2s;
        }

        .mistake-btn:hover{
            transform:scale(1.05);
        }
    `;
        document.head.appendChild(style);
      }
      list.innerHTML = Object.entries(groups)
        .map(([testName, mistakes]) => {
          const lastDate = mistakes[0].date
            ? new Date(mistakes[0].date).toLocaleString("uz-UZ")
            : "Sana yo'q";

          return `
        <div class="col-12 mb-3">

            <div class="card mistake-card">

                <div class="card-body">

                    <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">

                        <div class="d-flex align-items-center">

                            <div class="mistake-icon">
                                <i class="bi bi-journal-medical"></i>
                            </div>

                            <div class="ms-3">

                                <h5 class="fw-bold mb-1">
                                    ${testName}
                                </h5>

                                <span class="mistake-badge">
                                    ${mistakes.length} ta xato
                                </span>

                                <div class="text-muted mt-2">
                                    <i class="bi bi-clock-history"></i>
                                    ${lastDate}
                                </div>

                            </div>

                        </div>

                        <button
                            class="btn btn-success mistake-btn"
                            onclick="startXatolarReview('${testName}')">

                            <i class="bi bi-play-fill"></i>
                            Boshlash

                        </button>

                    </div>

                </div>

            </div>

        </div>
    `;
        })
        .join("");
    }
  }

  const modalEl = document.getElementById("xatolarModal");

  if (modalEl) {
    bootstrap.Modal.getOrCreateInstance(modalEl).show();
  }
}
function startXatolarReview(testName = null) {
  const storedMistakes = getStoredMistakes();
  let filteredMistakes = storedMistakes;

  if (testName) {
    filteredMistakes = storedMistakes.filter((m) => m.testName === testName);
  }
  if (!storedMistakes.length) {
    alert("Xatolar topilmadi.");
    return;
  }

  currentTest = filteredMistakes.map((m) => ({
    q: m.q,
    photo: m.photo || null,
    a: m.a || [],
    correct: m.correct,
    selected: m.selected,
    id: m.id,
    testName: m.testName,
  }));
  currentTestName = "xatolar";
  currentIndex = 0;
  score = 0;
  mistakes = [];
  isReviewingStoredMistakes = true;

  const selection = document.getElementById("test-selection");
  const screen = document.getElementById("test-screen");
  const result = document.getElementById("result");
  if (selection) selection.classList.add("d-none");
  if (screen) screen.classList.remove("d-none");
  if (result) result.classList.add("d-none");

  const title = document.getElementById("test-title");
  const question = document.getElementById("question-container");
  const answers = document.getElementById("answer-buttons");
  if (!title || !question || !answers) return;

  const activeModal = document.getElementById("xatolarModal");
  if (activeModal) {
    const modal = bootstrap.Modal.getInstance(activeModal);
    modal?.hide();
  }

  showQuestion();
}

function setReviewModeOff() {
  isReviewingStoredMistakes = false;
}

function buildTestSummary() {
  const results = getTestResults();
  const summary = {
    byTest: {},
    overview: {
      totalRuns: 0,
      totalQuestions: 0,
      totalCorrect: 0,
      overallPercent: 0,
    },
  };

  results.forEach((entry) => {
    const name = entry.testName || "unknown";
    const existing = summary.byTest[name] || {
      last: null,
      attempts: 0,
      totalCorrect: 0,
      totalQuestions: 0,
    };

    existing.attempts += 1;
    existing.totalCorrect += entry.correct || 0;
    existing.totalQuestions += entry.total || 0;

    if (!existing.last || new Date(entry.date) > new Date(existing.last.date)) {
      existing.last = entry;
    }

    summary.byTest[name] = existing;
    summary.overview.totalRuns += 1;
    summary.overview.totalQuestions += entry.total || 0;
    summary.overview.totalCorrect += entry.correct || 0;
  });

  const total = summary.overview.totalQuestions;
  summary.overview.overallPercent =
    total === 0 ? 0 : Math.round((summary.overview.totalCorrect / total) * 100);
  return summary;
}

function parseTestNameFromCard(card) {
  if (!card) return null;
  if (card.dataset.testName) return card.dataset.testName;
  const onclick = card.getAttribute("onclick") || "";
  const startMatch = onclick.match(/startTest\(\s*['"]([^'"]+)['"]\s*\)/);
  if (startMatch) return startMatch[1];
  const hrefMatch = onclick.match(/\?test=([^'"&]+)/);
  if (hrefMatch) return hrefMatch[1];
  return null;
}

function renderTestStats() {
  const summary = buildTestSummary();
  const cards = document.querySelectorAll(".test-card, .collectioncard");

  cards.forEach((card) => {
    const testName = parseTestNameFromCard(card);
    if (!testName) return;
    card.dataset.testName = testName;

    let statEl = card.querySelector(".test-card-stats");
    if (!statEl) {
      statEl = document.createElement("div");
      statEl.className = "test-card-stats text-secondary";
      statEl.style.fontSize = "0.85rem";
      statEl.style.marginTop = "0.65rem";
      statEl.style.lineHeight = "1.4";
      statEl.style.minHeight = "2.4rem";
      const footer = card.querySelector(".question-footer");
      if (footer) {
        footer.insertAdjacentElement("afterend", statEl);
      } else {
        card.appendChild(statEl);
      }
    }

    const testResult = summary.byTest[testName];
    if (testResult && testResult.last) {
      const last = testResult.last;
      const attemptLabel =
        testResult.attempts > 1 ? `${testResult.attempts} ta` : "1 ta";
      const average = testResult.totalQuestions
        ? Math.round(
            (testResult.totalCorrect / testResult.totalQuestions) * 100,
          )
        : 0;
      statEl.innerHTML = `
        <div><strong>So'nggi:</strong> ${last.correct} / ${last.total} (${last.percent}%)</div>
        <div class="text-muted">Umumiy: ${attemptLabel}, o'rtacha ${average}%</div>
      `; // Eski classlarni tozalash
      // Eski ranglarni olib tashlash
      card.classList.remove("card-success", "card-warning", "card-danger");

      // Umumiy foizga qarab rang berish
      if (average >= 80) {
        card.classList.add("card-success");
      } else if (average >= 56) {
        card.classList.add("card-warning");
      } else {
        card.classList.add("card-danger");
      }
    } else {
      statEl.innerHTML = `<div class="text-muted">Hali ishlanmagan</div>`;
    }
  });
}

function initTestStats() {
  loadDataScript(() => {
    renderTestStats();
  });
}

// ----------------------
// Certificate functions
// ----------------------
function generateCertificate() {
  if (currentTest.length === 0) {
    alert("Avval testni tugating!");
    return;
  }

  const name = localStorage.getItem("userName") || "Ism Familiya";
  const percent = Math.round((score / currentTest.length) * 100);

  const certData = {
    name: name,
    score: score,
    total: currentTest.length,
    percent: percent,
    testTitle: testTitleMap[currentTestName] || currentTestName, // Faylga xos mapping HTML faylda
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };

  localStorage.setItem("certificateData", JSON.stringify(certData));
  window.location.href = "../../assets/modals/certificate.html";
}

// Footerga sana qo'shish
function updateCertificateFooter() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const footer = document.getElementById("certificate-footer");
  const text = `Pulse Medical Online Tests • tg: @pulseimi • ${formattedDate}`;

  if (footer) {
    footer.innerText = text;
  } else {
    const footerEl = document.createElement("p");
    footerEl.id = "certificate-footer";
    footerEl.style.position = "absolute";
    footerEl.style.bottom = "40px";
    footerEl.style.left = "50%";
    footerEl.style.transform = "translateX(-50%)";
    footerEl.style.fontSize = "14px";
    footerEl.style.color = "#94a3b8";
    footerEl.innerText = text;
    const cert = document.getElementById("certificate");
    if (cert) cert.appendChild(footerEl);
  }
}

// ----------------------
// Test navigation & display
// ----------------------

// Global variables
let currentTest = [];
let currentTestName = "";
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;
let isReviewingStoredMistakes = false;

// Load `data.js` helper dynamically if not already loaded

function loadDataScript(callback) {
  if (window.Data) {
    if (callback) callback();
    return;
  }

  const script = document.createElement("script");
  script.src = "../../assets/js/data.js";
  script.onload = () => {
    if (callback) callback();
  };
  script.onerror = () => console.error("Failed to load data.js");
  document.head.appendChild(script);
}

document.addEventListener("click", handleImageOpen);
document.addEventListener("touchstart", handleImageOpen);

function showQuestion() {
  if (currentIndex >= currentTest.length) {
    showResultPopup();
    return;
  }

  const q = currentTest[currentIndex];
  document.getElementById("test-title").innerText =
    `Savol ${currentIndex + 1} / ${currentTest.length}`;

  const container = document.getElementById("question-container");

  const navbar = document.querySelector(".navbar");

  if (q.photo) {
    if (navbar) navbar.style.display = "none";

    container.innerHTML = `
<div class="container d-flex justify-content-center mt-0 mb-0 pb-0 pt-0">
  <div class="tg-question mt-0 mb-0 pt-0">

    <p class="mb-0">${q.q}</p>

    <div class="text-center mb-0 position-relative">
      <div class="quiz-image-placeholder d-flex align-items-center justify-content-center rounded" style="min-height:240px; background:#f8fafc; color:#475569;">
        <span>Rasm yuklanmoqda...</span>
      </div>
      <img src="${q.photo}" 
           loading="eager" 
           decoding="async"
           class="img-fluid rounded quiz-img d-none">
    </div>

    <div id="answer-buttons" class="tg-answersimg mt-3"></div>

  </div>
</div>
`;

    const img = container.querySelector(".quiz-img");
    const placeholder = container.querySelector(".quiz-image-placeholder");
    if (img) {
      img.onload = () => {
        if (placeholder) placeholder.remove();
        img.classList.remove("d-none");
        img.classList.add("loaded");
      };
      img.onerror = () => {
        if (placeholder) placeholder.innerText = "Rasm yuklanmadi";
      };
    }
  } else {
    if (navbar) navbar.style.display = "";

    container.innerHTML = `
    <div class="container d-flex justify-content-center">
      <div class="tg-question">
        <p class="fw-semibold">${q.q}</p>
        <div id="answer-buttons" class="tg-answers"></div>
      </div>
    </div>
  `;
  }

  const answerButtons = document.getElementById("answer-buttons");
  answerButtons.innerHTML = "";

  q.a.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.innerHTML = `<i class="bi bi-circle"></i> ${ans}`;
    btn.className = "btn btn-outline-primary btn-lg text-start answer-btn";
    btn.onclick = () => selectAnswer(index);
    answerButtons.appendChild(btn);
  });

  clearInterval(timer);
  timeLeft = 60;
  document.getElementById("timer").innerText = `⏱ ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `⏱ ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      selectAnswer(-1);
    }
  }, 1000);
}

function handleImageOpen(e) {
  const img = e.target.closest("img");
  if (!img) return;

  const modalImg = document.getElementById("modalImage");
  if (!modalImg) return;

  modalImg.src = img.src;

  const modalEl = document.getElementById("imageModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);

  modal.show();
}

// Javobni tanlash
let mistakes = []; // Noto'g'ri javoblar

function selectAnswer(selectedIndex) {
  clearInterval(timer);

  const buttons = document.querySelectorAll("#answer-buttons button");
  const correctIndex = currentTest[currentIndex].correct;

  buttons.forEach((btn) => (btn.disabled = true));

  // To'g'ri javobni yashil qilish
  buttons[correctIndex].classList.remove("btn-outline-primary");
  buttons[correctIndex].classList.add("btn-success");
  buttons[correctIndex].style.transition = "background-color 0.3s, color 0.3s";

  // Noto'g'ri javobni qizil qilish
  if (selectedIndex !== correctIndex && selectedIndex !== -1) {
    buttons[selectedIndex].classList.remove("btn-outline-primary");
    buttons[selectedIndex].classList.add("btn-danger");
    buttons[selectedIndex].style.transition =
      "background-color 0.3s, color 0.3s";

    mistakes.push({
      q: currentTest[currentIndex].q,
      photo: currentTest[currentIndex].photo,
      a: currentTest[currentIndex].a,
      correct: correctIndex,
      selected: selectedIndex,
    });
  }

  if (selectedIndex === correctIndex) {
    score++;
    if (isReviewingStoredMistakes && currentTest[currentIndex]?.id) {
      resolveStoredMistakeById(currentTest[currentIndex].id);
    }
  }

  setTimeout(() => {
    currentIndex++;
    showQuestion();
  }, 1000);
}

function stopTest() {
  const modalEl = document.getElementById("exitTestModal");
  const modal = new bootstrap.Modal(modalEl);

  modal.show();

  document.getElementById("confirmExitTest").onclick = function () {
    clearInterval(timer);

    currentTest = [];
    currentIndex = 0;
    score = 0;

    document.activeElement.blur();

    document.getElementById("test-screen").classList.add("d-none");
    document.getElementById("test-selection").classList.remove("d-none");

    const container = document.getElementById("question-container");
    if (container) container.innerHTML = "";

    const navbar = document.querySelector(".navbar");
    if (navbar) navbar.style.display = "";

    modal.hide();
  };
}
function showResultPopup() {
  document.getElementById("test-screen").classList.add("d-none");

  const total = currentTest.length;
  const correct = score;
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100);

  const modalEl = document.getElementById("resultModal");
  const modal = new bootstrap.Modal(modalEl, {
    backdrop: "static",
    keyboard: false,
  });

  try {
    saveTestResult({
      testName: currentTestName || "unknown",
      total: total,
      correct: correct,
      mistakes: mistakes ? mistakes.slice() : [],
    });
  } catch (e) {
    console.error("Error saving test result:", e);
  }

  modal.show();

  renderTestStats();
  startResultAnimation(percent, correct, total);

  // setTimeout(() => {
  //   maybeShowFeedback();
  // }, 3000);
}

function startResultAnimation(targetPercent, correct, total) {
  const circle = document.querySelector(".progress-ring__circle");
  const percentText = document.getElementById("percent-text");
  const resultText = document.getElementById("final-score");

  const radius = 62;
  const circumference = 2 * Math.PI * radius;

  // reset circle
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  let start = null;
  const duration = 3000; // 3 sec (smooth + fast feel)

  function animate(timestamp) {
    if (!start) start = timestamp;

    const progress = Math.min((timestamp - start) / duration, 1);

    // smooth easing (important!)
    const eased = 1 - Math.pow(1 - progress, 3);

    const currentPercent = Math.floor(eased * targetPercent);

    const offset = circumference - (currentPercent / 100) * circumference;

    circle.style.strokeDashoffset = offset;

    // center number
    percentText.innerText = currentPercent;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // final result
      resultText.innerHTML = `
        <div class="tg-final-result">
          ${correct} / ${total}
        </div>
      `;
    }
  }

  requestAnimationFrame(animate);
}

function closeResult() {
  const modalEl = document.getElementById("resultModal");
  const modal = bootstrap.Modal.getInstance(modalEl);

  if (modal) modal.hide();

  isReviewingStoredMistakes = false;

  document.getElementById("test-screen").classList.add("d-none");
  document.getElementById("test-selection").classList.remove("d-none");

  renderTestStats();

  // reset (ixtiyoriy, lekin tavsiya)
  currentTest = [];
  currentIndex = 0;
  score = 0;

  const navbar = document.querySelector(".navbar");
  if (navbar) navbar.style.display = "";
}
// Natijani ulashish
function shareResult() {
  const text = `🩺 Pulse Medical\n📊 My result:\n✅ ${score} / ${currentTest.length}\n\n`;
  const url = window.location.href;
  const tgLink = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  window.open(tgLink, "_blank");
}

async function startTest(testName) {
  console.log("START TEST");

  isReviewingStoredMistakes = false;
  window.Data?.smartSync?.();

  // if (!window.showAdModal) {
  //   const script = document.createElement("script");
  //   script.src = "../../ads/ads.js";

  //   await new Promise((resolve) => {
  //     script.onload = resolve;
  //     document.head.appendChild(script);
  //   });
  // }

  // 🔥 ADS SHOW + WAIT
  if (window.showAdModal) {
    await window.showAdModal(); // 👈 MUHIM FIX
  }

  currentTest = tests[testName];
  currentTestName = testName;
  currentIndex = 0;
  score = 0;

  mistakes = [];

  const selection = document.getElementById("test-selection");
  const screen = document.getElementById("test-screen");
  const result = document.getElementById("result");

  if (selection) selection.classList.add("d-none");
  if (screen) screen.classList.remove("d-none");
  if (result) result.classList.add("d-none");

  const title = document.getElementById("test-title");
  const question = document.getElementById("question-container");
  const answers = document.getElementById("answer-buttons");

  if (!title || !question || !answers) {
    console.error("Test screen elementlari topilmadi");
    return;
  }

  showQuestion();
}

// Xatolarni ko‘rish
function reviewMistakes() {
  if (mistakes.length === 0) {
    alert("Congratulations! You had no mistakes 🎉");
    return;
  }

  currentTest = [...mistakes];
  currentIndex = 0;
  score = 0;
  mistakes = [];

  const modalEl = document.getElementById("resultModal");
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();

  document.getElementById("test-screen").classList.remove("d-none");
  showQuestion();
}

fetch("../../assets/modals/modals.html")
  .then((r) => r.text())
  .then((html) => {
    document.getElementById("common-modals").innerHTML = html;

    // 🔥 MUHIM: modal DOM endi bor
    setTimeout(() => {
      initAutoTest();
    }, 0);
  });

async function initAutoTest() {
  loadDataScript(async () => {
    await waitForModal(); // 🔥 KEY FIX

    try {
      if (window.Data?.ensureUser) {
        await window.Data.ensureUser();
      }
    } catch (e) {
      console.error(e);
    }

    const params = new URLSearchParams(window.location.search);
    const testName = params.get("test");

    if (testName && tests[testName]) {
      startTest(testName);
    }
  });
}
function waitForModal() {
  return new Promise((resolve) => {
    const check = () => {
      const modal = document.getElementById("userModal");
      const form = document.getElementById("pg-form");

      if (modal && form) return resolve(true);

      setTimeout(check, 20);
    };

    check();
  });
}

async function maybeShowFeedback() {
  if (!window.Data) return;

  const user = Data.getUser();

  if (!user) return;

  if (Data.hasSubmittedFeedback()) return;

  const results = Data.getResults();

  if (results.length < 1) return;

  const modalEl = document.getElementById("feedbackModal");

  if (!modalEl) return;

  const modal = new bootstrap.Modal(modalEl);

  modal.show();
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("📦 DOM ready");

  initTestStats();

  setTimeout(() => {
    const form = document.getElementById("feedbackForm");

    if (!form) {
      console.error("❌ feedbackForm NOT FOUND in DOM");
      return;
    }

    console.log("✅ feedbackForm found");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      console.log("📩 submit triggered");

      const liked = document.getElementById("fb-liked")?.value;
      const advantages = document
        .getElementById("fb-advantages")
        ?.value?.trim();
      const disadvantages = document
        .getElementById("fb-disadvantages")
        ?.value?.trim();

      if (!liked || !advantages || !disadvantages) {
        alert("Barcha maydonlarni to'ldiring!");
        return;
      }

      try {
        await Data.submitFeedback({
          liked,
          advantages,
          disadvantages,
          createdAt: new Date().toISOString(),
        });

        console.log("✅ saved");

        const modal = bootstrap.Modal.getInstance(
          document.getElementById("feedbackModal"),
        );

        modal?.hide();

        form.reset();

        alert("Rahmat ❤️");
      } catch (err) {
        console.error("❌ submit error:", err);
      }
    });
  }, 300);
});
