const PREP_SESSION_KEY = "preparationSessions";
const PREP_EXAM_TYPES = [
  { id: "final", title: "Final Exam" },
  { id: "grant", title: "Grant Exam" },
];
const PREP_SUBJECTS = [
  {
    id: "anatomy",
    title: "Anatomiya",
    script: "/anatomy/tests.js",
    page: "/anatomy/",
    tests: [
      { id: "mock1", title: "Peritoneum", count: 20 },
      { id: "mock2", title: "Anatomy Chapter 1", count: 20 },
      { id: "mock3", title: "Accessory GI Organs", count: 20 },
      { id: "mock4", title: "Celiac and Mesenteric Arteries", count: 20 },
      { id: "mock5", title: "Portal Vena", count: null },
      { id: "mock6", title: "Kidney (1)", count: 20 },
      { id: "mock7", title: "Kidney (2)", count: 20 },
      { id: "mock8", title: "Posterior Abdominal Wall Vessels", count: 20 },
      { id: "L22", title: "Upper Limb", count: 20 },
      { id: "mockUpperLimb2", title: "Upper Limb 2", count: 10 },
      { id: "mockLowerLimbArteries", title: "Lower Limb Arteries", count: 20 },
    ],
  },
  {
    id: "anatomy-yn",
    title: "Anatomiya Yakuniy",
    script: "/anatomy/imgtests.js",
    page: "/anatomy/yn/",
    tests: Array.from({ length: 15 }, (_, index) => ({
      id: `mock${index + 1}`,
      title: `Yakuniy test ${index + 1}`,
      count: null,
    })),
  },
  {
    id: "cellbiology",
    title: "Hujayra biologiyasi",
    script: "/cellbiology/tests.js",
    page: "/cellbiology/",
    tests: Array.from({ length: 11 }, (_, index) => ({
      id: `cellb${index + 1}`,
      title: `Bo'lim ${index + 1}`,
      count: null,
    })),
  },
  {
    id: "embriology",
    title: "Embriologiya",
    script: "/embriology/tests.js",
    page: "/embriology/",
    tests: [
      { id: "u1", title: "Test 1", count: null },
      { id: "u2", title: "Test 2", count: null },
      { id: "u3", title: "Test 3", count: null },
      { id: "u4", title: "Test 4", count: null },
      { id: "u5", title: "Test 5", count: null },
      { id: "u6", title: "Test 6", count: null },
      { id: "u7", title: "Test 7", count: null },
      { id: "u8", title: "Test 8", count: null },
      { id: "u9", title: "Test 9", count: null },
      { id: "review", title: "Review", count: null },
    ],
  },
  {
    id: "chemistry",
    title: "Kimyo",
    script: "/chemistry/tests.js",
    page: "/chemistry/",
    tests: [
      { id: "aminoacids", title: "Amino Acids", count: null },
      { id: "vitamins", title: "Vitamins", count: null },
      { id: "enzymes", title: "Enzymes", count: null },
      { id: "nucleicAcids", title: "Nucleic Acids", count: null },
      { id: "lipids", title: "Lipids", count: null },
      {
        id: "peptidesAndProteins",
        title: "Peptides and Proteins",
        count: null,
      },
      { id: "carbohydrates", title: "Carbohydrates", count: null },
      { id: "q50", title: "Q50", count: 30 },
      { id: "q100", title: "Q100", count: 30 },
      { id: "q150", title: "Q150", count: 30 },
      { id: "all", title: "All Questions", count: null },
      { id: "latin1", title: "Latin 1", count: null },
      { id: "latin2", title: "Latin 2", count: null },
      { id: "latin3", title: "Latin 3", count: null },
    ],
  },
];

function getStoredPrepData() {
  if (window.Data && typeof window.Data._getRawData === "function") {
    return window.Data._getRawData();
  }
  try {
    const raw = localStorage.getItem("pulsego_data_v1");
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveStoredPrepData(data) {
  if (window.Data && typeof window.Data._saveRawData === "function") {
    window.Data._saveRawData(data);
    return;
  }
  try {
    localStorage.setItem("pulsego_data_v1", JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save prep data", e);
  }
}

function getPrepSessions() {
  const data = getStoredPrepData();
  return Array.isArray(data[PREP_SESSION_KEY]) ? data[PREP_SESSION_KEY] : [];
}

function savePrepSessions(sessions) {
  const data = getStoredPrepData();
  data[PREP_SESSION_KEY] = sessions;
  saveStoredPrepData(data);
}

function findPrepSubject(subjectId) {
  return PREP_SUBJECTS.find((subject) => subject.id === subjectId);
}

function getSessionSelectedSubjects(session) {
  return (session.selectedSubjects || []).map(findPrepSubject).filter(Boolean);
}

function getSubjectQuestionCount(subject) {
  const total = subject.tests.reduce((sum, test) => sum + (test.count || 0), 0);
  const hasUnknown = subject.tests.some((test) => test.count == null);
  return { total, hasUnknown };
}

function getSessionMeta(session) {
  const selectedSubjects = getSessionSelectedSubjects(session);
  const totalTests = selectedSubjects.reduce(
    (sum, subject) => sum + subject.tests.length,
    0,
  );
  const totalQuestions = selectedSubjects.reduce(
    (sum, subject) => sum + getSubjectQuestionCount(subject).total,
    0,
  );
  const hasUnknownQuestions = selectedSubjects.some(
    (subject) => getSubjectQuestionCount(subject).hasUnknown,
  );
  const remainingTests = selectedSubjects.reduce((sum, subject) => {
    const stat = session.subjectStats?.[subject.id] || {};
    return sum + Math.max(0, subject.tests.length - (stat.testsTaken || 0));
  }, 0);
  const totalMistakes = selectedSubjects.reduce(
    (sum, subject) =>
      sum + (session.subjectStats?.[subject.id]?.mistakesCount || 0),
    0,
  );
  return {
    selectedSubjects,
    totalTests,
    totalQuestions,
    hasUnknownQuestions,
    remainingTests,
    totalMistakes,
  };
}

function savePrepSession(session) {
  const sessions = getPrepSessions();
  const index = sessions.findIndex((item) => item.id === session.id);
  if (index !== -1) {
    sessions[index] = session;
  } else {
    sessions.unshift(session);
  }
  savePrepSessions(sessions);
}

function deletePrepSession(sessionId) {
  const sessions = getPrepSessions().filter((item) => item.id !== sessionId);
  savePrepSessions(sessions);
}

function getPrepSession(sessionId) {
  return getPrepSessions().find((session) => session.id === sessionId) || null;
}

function computeSessionTotals(session, totalAvailableQuestions = null) {
  const stats = session.stats || {};
  const totalQuestions = stats.totalQuestions || 0;
  const solvedQuestions = stats.solvedQuestions || 0;
  const correctAnswers = stats.correctAnswers || 0;
  const wrongAnswers = stats.wrongAnswers || 0;
  const accuracy = stats.accuracy || 0;
  const available =
    typeof totalAvailableQuestions === "number"
      ? totalAvailableQuestions
      : totalQuestions;
  const percent =
    available === 0 ? 0 : Math.round((solvedQuestions / available) * 100);
  return {
    totalQuestions,
    solvedQuestions,
    correctAnswers,
    wrongAnswers,
    accuracy,
    percent,
    available,
  };
}

function buildSubjectCardHtml(session) {
  const selectedSubjects = (session.selectedSubjects || [])
    .map(findPrepSubject)
    .filter(Boolean);
  const totals = computeSessionTotals(session);
  const progress = totals.totalQuestions
    ? Math.round((totals.solvedQuestions / totals.totalQuestions) * 100)
    : 0;
  const subjectCount = selectedSubjects.length;
  const subjectLabel =
    subjectCount === 1 ? selectedSubjects[0].title : `${subjectCount} ta mavzu`;
  const summaryLabel = `${subjectCount} ta mavzu · ${selectedSubjects.reduce(
    (sum, subject) => sum + subject.tests.length,
    0,
  )} ta test`;

  return `
    <div class="col-md-4 col-12">
      <div class="card nav-test-card border-0 prep-session-card" data-session-id="${session.id}">
        <div class="card-overlay"></div>
        <div class="card-body d-flex flex-column gap-3">
          <div>
            <div class="card-title-custom">${subjectLabel}</div>
            <div class="card-subtitle-custom">${session.examType}</div>
            <div class="text-white text-opacity-75" style="font-size:0.9rem;">${summaryLabel}</div>
          </div>
          <div>
            <div class="test-count mb-2">
              <i class="bi bi-ui-checks-grid"></i>
              ${totals.totalQuestions.toLocaleString()} savol
            </div>
            <div class="text-white text-opacity-75" style="font-size:0.95rem;">
              Hal qilingan: ${totals.solvedQuestions.toLocaleString()}<br>
              To'g'ri: ${totals.correctAnswers.toLocaleString()} • Noto'g'ri: ${totals.wrongAnswers.toLocaleString()}
            </div>
          </div>
          <div>
            <div class="progress" style="height:10px; border-radius:999px; overflow:hidden; background:rgba(255,255,255,.16);">
              <div class="progress-bar bg-white" role="progressbar" style="width:${progress}%"></div>
            </div>
            <div class="d-flex justify-content-between text-white text-opacity-75 mt-1" style="font-size:0.85rem;">
              <span>${progress}%</span>
              <span>${totals.accuracy}% aniqlik</span>
            </div>
          </div>
          <div class="d-flex gap-2">
            <button class="btn btn-light btn-sm w-100 prep-open-session-btn" data-session-id="${session.id}">Davom etish</button>
            <button class="btn btn-outline-light btn-sm prep-delete-session-btn" data-session-id="${session.id}">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPrepSessions() {
  const container = document.getElementById("prep-cards");
  const sessions = getPrepSessions();

  if (!container) return;
  if (sessions.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="card border-0 p-4 text-center" style="background: rgba(255,255,255,.82); box-shadow: 0 10px 30px rgba(15,23,42,.06);">
          <h3 class="mb-3">Hech qanday tayyorgarlik sessiyasi yo'q</h3>
          <p class="text-muted">Yangi tayyorgarlik sessiyasini yaratish uchun + tugmasini bosing.</p>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = sessions.map(buildSubjectCardHtml).join("");
  document.querySelectorAll(".prep-open-session-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const sessionId = button.dataset.sessionId;
      if (sessionId) {
        window.location.href = `/preparation/prep.html?id=${sessionId}`;
      }
    });
  });
  document.querySelectorAll(".prep-delete-session-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const sessionId = button.dataset.sessionId;
      if (!sessionId) return;
      if (!confirm("Sessiyani o'chirishni tasdiqlaysizmi?")) return;
      deletePrepSession(sessionId);
      renderPrepSessions();
    });
  });
}

function openPrepSession(sessionId) {
  window.location.href = `/preparation/prep.html?id=${sessionId}`;
}

function createPrepSession(examTypeId, subjectIds) {
  const examType = PREP_EXAM_TYPES.find((type) => type.id === examTypeId);
  const subjects = Array.isArray(subjectIds)
    ? subjectIds.map(findPrepSubject).filter(Boolean)
    : [];
  if (!examType || subjects.length === 0) return null;

  const sessions = getPrepSessions();
  const newSession = {
    id: crypto.randomUUID(),
    examType: examType.title,
    selectedSubjects: subjects.map((subject) => subject.id),
    createdAt: new Date().toISOString(),
    startedAt: null,
    lastActivityAt: null,
    subjectStats: {},
    testResults: [],
    stats: {
      totalQuestions: 0,
      solvedQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      accuracy: 0,
      updatedAt: null,
    },
  };
  sessions.unshift(newSession);
  savePrepSessions(sessions);
  return newSession;
}

function initializePrepIndexPage() {
  renderPrepSessions();

  const addButton = document.getElementById("new-prep-button");
  const modal = new bootstrap.Modal(document.getElementById("createPrepModal"));
  const nextButton = document.getElementById("create-prep-next");
  const backButton = document.getElementById("create-prep-back");
  const finishButton = document.getElementById("create-prep-finish");
  const stepTitle = document.getElementById("create-prep-step-title");
  const examTypeContainer = document.getElementById("exam-type-list");
  const subjectList = document.getElementById("subject-list");
  const selectedExamTypeField = document.getElementById("selectedExamType");

  let step = 1;
  let selectedExamTypeId = null;
  let selectedSubjectIds = new Set();

  function renderExamTypes() {
    examTypeContainer.innerHTML = PREP_EXAM_TYPES.map(
      (type) => `
      <button type="button" class="btn btn-outline-secondary rounded-4 prep-step-item" data-value="${type.id}">${type.title}</button>
    `,
    ).join("");
    examTypeContainer.querySelectorAll(".prep-step-item").forEach((button) => {
      button.addEventListener("click", () => {
        selectedExamTypeId = button.dataset.value;
        examTypeContainer
          .querySelectorAll(".prep-step-item")
          .forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        nextButton.disabled = !selectedExamTypeId;
      });
    });
  }

  function renderSubjects() {
    subjectList.innerHTML = PREP_SUBJECTS.map(
      (subject) => `
      <div class="col-md-4 col-12">
        <button type="button" class="btn btn-light text-start rounded-4 w-100 prep-step-item subject-card" data-value="${subject.id}">
          <div class="fw-semibold mb-2">${subject.title}</div>
          <div class="text-muted" style="font-size:0.9rem;">${subject.tests.length} ta mavjud test</div>
        </button>
      </div>
    `,
    ).join("");
    subjectList.querySelectorAll(".subject-card").forEach((button) => {
      button.addEventListener("click", () => {
        const subjectId = button.dataset.value;
        if (selectedSubjectIds.has(subjectId)) {
          selectedSubjectIds.delete(subjectId);
        } else {
          selectedSubjectIds.add(subjectId);
        }
        subjectList
          .querySelectorAll(".subject-card")
          .forEach((btn) =>
            btn.classList.toggle(
              "active",
              selectedSubjectIds.has(btn.dataset.value),
            ),
          );
        finishButton.disabled = selectedSubjectIds.size === 0;
      });
    });
  }

  function setStep(value) {
    step = value;
    document.getElementById("step-1").classList.toggle("d-none", step !== 1);
    document.getElementById("step-2").classList.toggle("d-none", step !== 2);
    backButton.classList.toggle("d-none", step === 1);
    nextButton.classList.toggle("d-none", step !== 1);
    finishButton.classList.toggle("d-none", step !== 2);
    stepTitle.innerText =
      step === 1 ? "1. Imtihon turini tanlang" : "2. Mavzuni tanlang";
    finishButton.disabled = selectedSubjectIds.size === 0;
  }

  renderExamTypes();
  renderSubjects();
  setStep(1);

  addButton.addEventListener("click", () => {
    selectedExamTypeId = null;
    selectedSubjectIds.clear();
    examTypeContainer
      .querySelectorAll(".prep-step-item")
      .forEach((btn) => btn.classList.remove("active"));
    subjectList
      .querySelectorAll(".prep-step-item")
      .forEach((btn) => btn.classList.remove("active"));
    nextButton.disabled = true;
    finishButton.disabled = true;
    setStep(1);
    modal.show();
  });

  nextButton.addEventListener("click", () => {
    if (!selectedExamTypeId) return;
    const examType = PREP_EXAM_TYPES.find(
      (type) => type.id === selectedExamTypeId,
    );
    selectedExamTypeField.innerText = examType ? examType.title : "-";
    setStep(2);
  });

  backButton.addEventListener("click", () => setStep(1));

  finishButton.addEventListener("click", () => {
    if (!selectedExamTypeId || selectedSubjectIds.size === 0) return;
    const session = createPrepSession(
      selectedExamTypeId,
      Array.from(selectedSubjectIds),
    );
    if (session) {
      modal.hide();
      renderPrepSessions();
      window.location.href = `/preparation/prep.html?id=${session.id}`;
    }
  });
}

function initializePrepDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("id");
  const session = getPrepSession(sessionId);
  const notFoundBox = document.getElementById("prep-not-found");
  const detailBox = document.getElementById("prep-detail");

  function setTextById(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
  }

  if (!session || !sessionId) {
    if (notFoundBox) notFoundBox.classList.remove("d-none");
    if (detailBox) detailBox.classList.add("d-none");
    return;
  }

  function renderPrepDetail() {
    const selectedSubjects = getSessionSelectedSubjects(session);
    const meta = getSessionMeta(session);
    const totals = computeSessionTotals(session, meta.totalQuestions);
    const remaining = Math.max(
      0,
      (meta.totalQuestions || 0) - totals.solvedQuestions,
    );
    const createdAtLabel = session.createdAt
      ? new Date(session.createdAt).toLocaleDateString("uz-UZ", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "-";

    const updatedAtLabel = session.lastActivityAt
      ? new Date(session.lastActivityAt).toLocaleDateString("uz-UZ", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "-";

    setTextById(
      "prep-subject-title",
      selectedSubjects.length === 1
        ? selectedSubjects[0].title
        : `${selectedSubjects.length} ta mavzu`,
    );
    setTextById("prep-exam-type", session.examType);
    setTextById("prep-created-at", `Boshlangan: ${createdAtLabel}`);
    setTextById("prep-updated-at", `So'nggi yangilanish: ${updatedAtLabel}`);

    // summary / cards
    setTextById("prep-subject-count-card", selectedSubjects.length);
    setTextById("prep-subject-count-label", `${selectedSubjects.length} mavzu`);
    setTextById("prep-subject-tests-label", `${meta.totalTests} ta test`);
    setTextById("prep-total-tests", meta.totalTests);
    setTextById("prep-total-questions", meta.totalQuestions);
    setTextById("prep-solved", totals.solvedQuestions);
    setTextById("prep-correct", totals.correctAnswers);
    setTextById("prep-wrong", totals.wrongAnswers);
    setTextById("prep-accuracy", `${totals.accuracy}%`);
    setTextById("prep-completion", `${totals.percent}%`);
    setTextById("prep-remaining-questions", remaining);
    setTextById("prep-remaining-tests", meta.remainingTests);
    setTextById("prep-mistake-count", meta.totalMistakes);
    setTextById("prep-session-mistake-count", meta.totalMistakes);

    const testsGrid = document.getElementById("prep-tests-grid");
    testsGrid.innerHTML = selectedSubjects.length
      ? selectedSubjects
          .map((subject) => {
            const subjectStat = session.subjectStats?.[subject.id] || {};
            const { total: totalSubjectQuestions, hasUnknown } =
              getSubjectQuestionCount(subject);
            const solved = subjectStat.totalQuestions || 0;
            const correct = subjectStat.correctAnswers || 0;
            const accuracy = subjectStat.accuracy || 0;
            const mistakes = subjectStat.mistakesCount || 0;
            const questionLabel = hasUnknown
              ? `${totalSubjectQuestions} ta savol + noma'lum`
              : `${totalSubjectQuestions} ta savol`;

            return `
              <div class="col-lg-4 col-md-6 col-12">
                <div class="card prep-test-card h-100" data-subject-id="${subject.id}">
                  <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                      <div class="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h6 class="fw-semibold mb-1">${subject.title}</h6>
                          <div class="text-muted" style="font-size:0.95rem;">${questionLabel}</div>
                        </div>
                        <button type="button" class="btn btn-outline-danger btn-sm remove-subject-btn" data-subject-id="${subject.id}">
                          <i class="bi bi-x-lg"></i>
                        </button>
                      </div>
                    </div>
                    <div class="mt-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span class="text-muted">Yechilgan</span>
                        <strong>${solved}</strong>
                      </div>
                      <div class="d-flex justify-content-between mb-1">
                        <span class="text-muted">Aniqlik</span>
                        <strong>${accuracy}%</strong>
                      </div>
                      <div class="d-flex justify-content-between mb-3">
                        <span class="text-muted">Xatolar</span>
                        <strong>${mistakes}</strong>
                      </div>
                      <a href="${subject.page}?prepSession=${session.id}&prepSubject=${subject.id}" class="btn btn-primary w-100 btn-sm">
                        Mavzuga o'tish
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            `;
          })
          .join("")
      : `
        <div class="col-12">
          <div class="card p-4 text-center border-0" style="background: #f8fafc;">
            <h5 class="mb-2">Hozircha hech qanday mavzu tanlanmagan.</h5>
            <p class="text-muted mb-3">Yangi mavzu qo'shish uchun yuqoridagi tugmani bosing.</p>
          </div>
        </div>
      `;

    const reviewSection = document.getElementById("prep-review-section");
    if (reviewSection) {
      reviewSection.innerHTML = `
        <div class="d-flex gap-2 flex-wrap align-items-center mt-3">
          <a href="/xatolar/?action=view&sessionId=${session.id}" class="btn btn-outline-primary btn-sm">Xatolarni ko'rish</a>
          <a href="/xatolar/?action=review&sessionId=${session.id}" class="btn btn-outline-success btn-sm">Xatolarni yechish</a>
        </div>
      `;
    }

    document.querySelectorAll(".remove-subject-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const subjectId = button.dataset.subjectId;
        if (!subjectId) return;
        if (
          !confirm("Ushbu mavzuni sessiyadan olib tashlashni tasdiqlaysizmi?")
        )
          return;
        session.selectedSubjects = (session.selectedSubjects || []).filter(
          (id) => id !== subjectId,
        );
        if (session.subjectStats) {
          delete session.subjectStats[subjectId];
        }
        session.lastActivityAt = new Date().toISOString();
        savePrepSession(session);
        renderPrepDetail();
      });
    });
  }

  function setupPrepDetailActions() {
    const addButton = document.getElementById("prep-add-subject-button");
    const saveButton = document.getElementById("save-add-subjects");
    const availableList = document.getElementById("available-subject-list");
    const modalEl = document.getElementById("addSubjectModal");
    const subjectModal = modalEl ? new bootstrap.Modal(modalEl) : null;
    let selectedAddSubjects = new Set();

    function renderAvailableSubjects() {
      if (!availableList) return;
      const availableSubjects = PREP_SUBJECTS.filter(
        (subject) => !session.selectedSubjects.includes(subject.id),
      );
      if (!availableSubjects.length) {
        availableList.innerHTML = `
          <div class="col-12 text-center py-4">
            <p class="text-muted mb-0">Sessiyaga qo'shish uchun yangi mavzu mavjud emas.</p>
          </div>
        `;
        if (saveButton) saveButton.disabled = true;
        return;
      }
      availableList.innerHTML = availableSubjects
        .map(
          (subject) => `
            <div class="col-md-6 col-12">
              <button type="button" class="btn btn-outline-secondary w-100 text-start rounded-4 add-subject-card" data-value="${subject.id}">
                <div class="fw-semibold mb-1">${subject.title}</div>
                <div class="text-muted" style="font-size:0.9rem;">${subject.tests.length} ta test</div>
              </button>
            </div>
          `,
        )
        .join("");
      availableList.querySelectorAll(".add-subject-card").forEach((button) => {
        button.addEventListener("click", () => {
          const subjectId = button.dataset.value;
          if (!subjectId) return;
          if (selectedAddSubjects.has(subjectId)) {
            selectedAddSubjects.delete(subjectId);
          } else {
            selectedAddSubjects.add(subjectId);
          }
          availableList
            .querySelectorAll(".add-subject-card")
            .forEach((btn) =>
              btn.classList.toggle(
                "active",
                selectedAddSubjects.has(btn.dataset.value),
              ),
            );
          if (saveButton) saveButton.disabled = selectedAddSubjects.size === 0;
        });
      });
    }

    function openAddSubjectModal() {
      if (!subjectModal) return;
      selectedAddSubjects.clear();
      renderAvailableSubjects();
      if (saveButton) saveButton.disabled = true;
      subjectModal.show();
    }

    function saveAddedSubjects() {
      if (selectedAddSubjects.size === 0) return;
      const added = Array.from(selectedAddSubjects).filter(
        (subjectId) => !session.selectedSubjects.includes(subjectId),
      );
      if (!added.length) return;
      session.selectedSubjects = [...session.selectedSubjects, ...added];
      session.lastActivityAt = new Date().toISOString();
      savePrepSession(session);
      renderPrepDetail();
      subjectModal?.hide();
    }

    if (addButton) {
      addButton.addEventListener("click", openAddSubjectModal);
    }
    if (saveButton) {
      saveButton.addEventListener("click", saveAddedSubjects);
    }
  }

  function saveSessionAndRefresh(session) {
    const sessions = getPrepSessions();
    const idx = sessions.findIndex((item) => item.id === session.id);
    if (idx !== -1) {
      sessions[idx] = session;
      savePrepSessions(sessions);
    }
  }

  function patchResultPopup() {
    if (!window.showResultPopup || window.__prepResultPatched) return;
    const originalShowResultPopup = window.showResultPopup;
    window.showResultPopup = function () {
      originalShowResultPopup();
      if (window.__prepSessionActive) {
        const sessionId = window.__prepSessionActive.sessionId;
        const session = getPrepSession(sessionId);
        if (session) {
          saveSessionAndRefresh(session);
          renderPrepDetail();
          renderPrepCardsUpdate();
        }
      }
      window.__prepSessionActive = null;
    };
    window.__prepResultPatched = true;
  }

  function renderPrepSummary() {
    const stats = computeSessionTotals(session);
    const selected = getSessionSelectedSubjects(session);
    const totalQuestions = selected.reduce((sum, subject) => {
      const subjectTotal = subject.tests.reduce(
        (subjectSum, test) => subjectSum + (test.count || 0),
        0,
      );
      return sum + subjectTotal;
    }, 0);
    const remaining = Math.max(0, totalQuestions - stats.solvedQuestions);
    setTextById("prep-total-questions", totalQuestions);
    setTextById("prep-solved", stats.solvedQuestions);
    setTextById("prep-correct", stats.correctAnswers);
    setTextById("prep-wrong", stats.wrongAnswers);
    setTextById("prep-accuracy", `${stats.accuracy}%`);
    setTextById("prep-completion", `${stats.percent}%`);
    setTextById("prep-remaining-questions", remaining);
  }

  function renderPrepCardsUpdate() {
    const card = document.querySelector(
      `.prep-session-card[data-session-id="${session.id}"]`,
    );
    if (!card) return;
    const meta = getSessionMeta(session);
    const totals = computeSessionTotals(session, meta.totalQuestions);
    const totalQuestionsLabel = meta.totalQuestions || totals.totalQuestions;
    card.querySelector(".test-count").innerText =
      `${totalQuestionsLabel.toLocaleString()} savol`;
    const footer = card.querySelector(".text-white.text-opacity-75");
    if (footer) {
      footer.innerHTML = `Hal qilingan: ${totals.solvedQuestions.toLocaleString()}<br>To'g'ri: ${totals.correctAnswers.toLocaleString()} • Noto'g'ri: ${totals.wrongAnswers.toLocaleString()}`;
    }
    const progressBar = card.querySelector(".progress-bar");
    if (progressBar) {
      const progress = meta.totalQuestions
        ? Math.round((totals.solvedQuestions / meta.totalQuestions) * 100)
        : 0;
      progressBar.style.width = `${progress}%`;
    }
  }

  renderPrepDetail();
  patchResultPopup();
}

window.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "prep-index") {
    initializePrepIndexPage();
  }
  if (page === "prep-detail") {
    initializePrepDetailPage();
  }
});
