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
function getRandomTest(questions, n = 25) {
  const shuffledQuestions = shuffle(questions).slice(0, n);
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
  window.location.href = "/assets/modals/certificate.html";
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
let timeLeft = 45;

function showQuestion() {
  if (currentIndex >= currentTest.length) {
    showResultPopup();
    return;
  }

  const q = currentTest[currentIndex];
  document.getElementById("test-title").innerText = `Savol ${currentIndex + 1}`;

  const container = document.getElementById("question-container");

  // 🔥 SMART RENDER
  // 🔥 SMART RENDER
  // 🔥 SMART RENDER
  // 🔥 SMART RENDER

  const navbar = document.querySelector(".navbar");

  if (q.photo) {
    // photo bo‘lsa navbar yo‘qoladi
    if (navbar) navbar.style.display = "none";

    container.innerHTML = `
    <div class="container d-flex justify-content-center mt-0 mb-0 pb-0 pt-0">
      <div class="tg-question mt-0 mb-0 pt-0">
        <p id="question-container" class="mb-0">${q.q}</p>

        <div class="text-center mb-0">
          <img src="${q.photo}" 
               class="img-fluid rounded mb-0"
               style="max-height: 260px; object-fit:contain;">
        </div> 
      </div>
    </div>
  `;
  } else {
    // oddiy savolda navbar qaytadi
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

  container.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      const modalImg = document.getElementById("modalImage");
      modalImg.src = e.target.src;

      new bootstrap.Modal(document.getElementById("imageModal")).show();
    }
  });

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
  timeLeft = 45;
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

  if (selectedIndex === correctIndex) score++;

  setTimeout(() => {
    currentIndex++;
    showQuestion();
  }, 1000);
}

// Testni to'xtatish
function stopTest() {
  if (confirm("Really want to end the test?")) {
    clearInterval(timer);
    document.getElementById("test-screen").classList.add("d-none");
    document.getElementById("test-selection").classList.remove("d-none");
  }
}

// Natija popup
function showResultPopup() {
  document.getElementById("test-screen").classList.add("d-none");
  document.getElementById("final-score").innerText =
    `Sizning natijangiz: ${score} / ${currentTest.length}`;

  const modalEl = document.getElementById("resultModal");
  const modal = new bootstrap.Modal(modalEl, {
    backdrop: "static",
    keyboard: false,
  });
  modal.show();
}

function closeResult() {
  location.reload();
}

// Natijani ulashish
function shareResult() {
  const text = `🩺 Pulse Medical\n📊 My result:\n✅ ${score} / ${currentTest.length}\n\n`;
  const url = window.location.href;
  const tgLink = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  window.open(tgLink, "_blank");
}

function startTest(testName) {
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

fetch("/assets/modals/modals.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("common-modals").innerHTML = html;
    initAutoTest(); // testni shu yerda boshlash
  });

function initAutoTest() {
  const params = new URLSearchParams(window.location.search);
  const testName = params.get("test");

  if (testName && tests[testName]) {
    startTest(testName);
  }
}
