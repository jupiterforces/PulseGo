const PREP_SESSION_KEY = "preparationSessions";

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
  const tests = Array.isArray(subject.tests) ? subject.tests : [];
  const total = tests.reduce((sum, test) => sum + (test.count || 0), 0);
  const hasUnknown = tests.some((test) => test.count == null);
  return { total, hasUnknown };
}

// Ensure subject.tests exists: try to dynamically load subject.script and detect globals
function ensureSubjectTests(subject) {
  return new Promise((resolve) => {
    if (!subject) return resolve([]);
    if (Array.isArray(subject.tests) && subject.tests.length)
      return resolve(subject.tests);

    const beforeKeys = new Set(Object.keys(window));
    if (!subject.script) return resolve([]);

    const script = document.createElement("script");
    script.src = subject.script + "?_prep_ts=" + Date.now();
    script.async = true;
    script.onload = () => {
      try {
        const afterKeys = Object.keys(window).filter((k) => !beforeKeys.has(k));
        let detected = [];

        // Check for container objects like window.tests = {mock1: [...], mock2: [...]}
        afterKeys.forEach((k) => {
          const val = window[k];
          if (!val) return;
          // object-with-array-values pattern
          if (typeof val === "object" && !Array.isArray(val)) {
            const values = Object.values(val);
            if (values.length && values.every((v) => Array.isArray(v))) {
              Object.keys(val).forEach((testId) => {
                const arr = val[testId];
                detected.push({
                  id: testId,
                  title: prettyTestTitle(testId),
                  count: arr.length,
                });
              });
            }
          }
          // direct array assigned: window.someArray = [...] => treat as single test
          if (Array.isArray(val)) {
            detected.push({
              id: k,
              title: prettyTestTitle(k),
              count: val.length,
            });
          }
        });

        // Fallback: look for common global names
        const commonNames = [
          "tests",
          "mockTests",
          "imgTests",
          "cellb1",
          "u1",
          "window.tests",
        ];
        commonNames.forEach((name) => {
          const v = window[name];
          if (!v) return;
          if (typeof v === "object" && !Array.isArray(v)) {
            Object.keys(v).forEach((testId) => {
              const arr = v[testId];
              if (Array.isArray(arr))
                detected.push({
                  id: testId,
                  title: prettyTestTitle(testId),
                  count: arr.length,
                });
            });
          } else if (Array.isArray(v)) {
            detected.push({
              id: name,
              title: prettyTestTitle(name),
              count: v.length,
            });
          }
        });

        // Deduplicate by id
        const map = new Map();
        detected.forEach((t) => {
          if (t && t.id) map.set(t.id, t);
        });
        const tests = Array.from(map.values());

        if (tests.length) {
          subject.tests = tests;
        } else {
          subject.tests = [];
        }
        resolve(subject.tests);
      } catch (e) {
        console.error("Error detecting tests for subject", subject.id, e);
        subject.tests = subject.tests || [];
        resolve(subject.tests);
      }
    };
    script.onerror = () => {
      console.warn("Failed to load subject script", subject.script);
      subject.tests = subject.tests || [];
      resolve(subject.tests);
    };
    document.head.appendChild(script);
  });
}

function prettyTestTitle(id) {
  if (!id) return "Test";
  // Convert camel or snake to readable
  return String(id)
    .replace(/[_-]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (m) => m.toUpperCase());
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
  const summaryLabel = `${session.examType} · ${selectedSubjects.reduce(
    (sum, subject) => sum + subject.tests.length,
    0,
  )} ta test`;

  return `
    <div class="col-md-4 col-12">
      <div class="session-card h-100" data-session-id="${session.id}">
        <div class="session-title">${subjectLabel}</div>
        <div class="session-meta">${summaryLabel}</div>

        <div class="session-progress">
          <div class="session-progress-bar" style="width:${progress}%"></div>
        </div>

        <div class="session-stats">
          <span><i class="bi bi-ui-checks-grid"></i> ${totals.totalQuestions.toLocaleString()} savol</span>
          <span><i class="bi bi-check-circle"></i> ${totals.solvedQuestions.toLocaleString()}</span>
          <span><i class="bi bi-x-circle"></i> ${totals.wrongAnswers.toLocaleString()}</span>
          <span><i class="bi bi-bullseye"></i> ${totals.accuracy}%</span>
        </div>

        <div class="session-actions">
          <button class="btn btn-primary flex-grow-1 prep-open-session-btn" data-session-id="${session.id}">
            <i class="bi bi-play-fill"></i> Davom etish
          </button>
          <button class="btn btn-outline-danger prep-delete-session-btn" data-session-id="${session.id}">
            <i class="bi bi-trash"></i>
          </button>
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
        <div class="empty-state">
          <i class="bi bi-journal-bookmark"></i>
          <h3>Hech qanday tayyorgarlik sessiyasi yo'q</h3>
          <p>Yangi tayyorgarlik sessiyasini yaratish uchun + tugmasini bosing.</p>
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

function renderPrepSubjects() {
  const pillsContainer = document.getElementById("subject-pills");
  const groupsContainer = document.getElementById("groups-container");
  if (!pillsContainer || !groupsContainer) return;

  const bgColors = {
    danger: "#dc2626",
    success: "#16a34a",
    warning: "#d97706",
    info: "#0891b2",
    primary: "#2563eb",
    dark: "#1f2937",
  };

  function getTotalQuestions(subject) {
    const tests = Array.isArray(subject.tests) ? subject.tests : [];
    const total = tests.reduce((sum, test) => sum + (test.count || 0), 0);
    return total > 0 ? `${total} ta savol` : `${tests.length} ta test`;
  }

  pillsContainer.innerHTML = PREP_SUBJECTS.map(
    (subject) => `
      <a href="#group-${subject.id}" class="subject-pill" data-group="${subject.id}">
        <i class="bi ${subject.icon || "bi-journal-medical"}"></i>
        ${subject.title}
      </a>
    `,
  ).join("");

  groupsContainer.innerHTML = PREP_SUBJECTS.map(
    (subject) => `
      <div class="group-section" id="group-${subject.id}" data-group="${subject.id}">
        <div class="group-header" onclick="openPrepGroup('${subject.id}')">
          <div class="group-icon" style="background: ${bgColors[subject.color] || bgColors.primary}">
            <i class="bi ${subject.icon || "bi-journal-medical"}"></i>
          </div>
          <div class="group-title-wrap">
            <div class="group-title">${subject.title}</div>
            <div class="group-total">
              <i class="bi bi-ui-checks-grid"></i>
              ${getTotalQuestions(subject)}
            </div>
          </div>
          <span class="group-count-badge">
            <i class="bi bi-ui-checks-grid"></i>
            ${Array.isArray(subject.tests) ? subject.tests.length : 0} ta test
          </span>
          <i class="bi bi-chevron-down group-chevron"></i>
        </div>

        <div class="group-body">
          <div class="row g-3">
            ${(subject.tests || [])
              .map(
                (test) => `
              <div class="col-6 col-md-3">
                <div class="test-card prep-index-test-card" data-subject-id="${subject.id}" data-test-id="${encodeURIComponent(test.id)}" data-page="${subject.page || ""}">
                  <div class="test-card h-100">
                    <div class="test-icon bg-${subject.color || "primary"}-subtle text-${subject.color || "primary"}">
                      <i class="bi bi-journal-medical"></i>
                    </div>
                    <div class="test-title">${test.title}</div>
                    <div class="question-footer">${test.count ? test.count + " ta" : "Test"}</div>
                  </div>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `,
  ).join("");

  // Wire index test cards to create a quick session and start the test
  groupsContainer.querySelectorAll(".prep-index-test-card").forEach((card) => {
    card.addEventListener("click", () => {
      const subjectId = card.dataset.subjectId;
      const testId = decodeURIComponent(card.dataset.testId);
      const page = card.dataset.page || "/preparation";
      const subject = findPrepSubject(subjectId);
      if (!subject) return;

      // Find or create a quick preparation session for this subject
      let sessions = getPrepSessions();
      let session = sessions.find(
        (s) =>
          s.examType === "Quick Prep" &&
          s.selectedSubjects.length === 1 &&
          s.selectedSubjects[0] === subjectId,
      );

      if (!session) {
        session = {
          id: crypto.randomUUID(),
          examType: "Quick Prep",
          selectedSubjects: [subjectId],
          createdAt: new Date().toISOString(),
          startedAt: new Date().toISOString(),
          lastActivityAt: new Date().toISOString(),
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
        sessions.unshift(session);
        savePrepSessions(sessions);
      }

      initSubjectStatsIfMissing(session, subject);
      session.subjectStats[subject.id].tests[testId] = session.subjectStats[
        subject.id
      ].tests[testId] || {
        solvedQuestions: 0,
        totalQuestions: subject.tests.find((t) => t.id === testId)?.count || 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        completed: false,
        accuracy: 0,
        lastPlayedAt: null,
      };
      session.lastActivityAt = new Date().toISOString();
      savePrepSession(session);

      const q = `?prepSession=${session.id}&prepSubject=${subjectId}&prepTest=${encodeURIComponent(testId)}`;
      window.location.href = page + q;
    });
  });
}

function openPrepGroup(id) {
  const sections = document.querySelectorAll(".group-section");
  const target = document.getElementById("group-" + id);
  const isAlreadyOpen = target.classList.contains("open");

  sections.forEach((section) => section.classList.remove("open"));

  if (!isAlreadyOpen) {
    target.classList.add("open");
  }

  const openSection = document.querySelector(".group-section.open");
  document.querySelectorAll(".subject-pill").forEach((pill) => {
    pill.classList.toggle(
      "active",
      openSection && pill.dataset.group === openSection.dataset.group,
    );
  });
}

function initializePrepIndexPage() {
  renderPrepSubjects();
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
    setTextById("prep-updated-at", updatedAtLabel);

    // summary / cards
    setTextById("prep-subject-count-card", selectedSubjects.length);
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
            const wrong = subjectStat.wrongAnswers || 0;
            const accuracy = subjectStat.accuracy || 0;
            const mistakes = subjectStat.mistakesCount || 0;
            const progress = totalSubjectQuestions
              ? Math.round((solved / totalSubjectQuestions) * 100)
              : 0;
            const questionLabel = hasUnknown
              ? `${totalSubjectQuestions} ta savol + noma'lum`
              : `${totalSubjectQuestions} ta savol`;

            return `
              <div class="col-lg-4 col-md-6 col-12">
                <div class="subject-card" data-subject-id="${subject.id}">
                  <div class="d-flex justify-content-between align-items-start mb-2">
                    <div class="subject-title">${subject.title}</div>
                    <button type="button" class="btn btn-outline-danger btn-sm remove-subject-btn" data-subject-id="${subject.id}">
                      <i class="bi bi-x-lg"></i>
                    </button>
                  </div>
                  <div class="subject-meta">${questionLabel}</div>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width:${progress}%"></div>
                  </div>
                  <div class="stat-row">
                    <span>Yechilgan <strong>${solved}</strong></span>
                    <span>Aniqlik <strong>${accuracy}%</strong></span>
                    <span>Xatolar <strong>${mistakes}</strong></span>
                  </div>
                  <a href="/preparation/tests.html?id=${session.id}&subject=${subject.id}" class="btn btn-primary w-100">
                    Testlarni ko'rish
                  </a>
                </div>
              </div>
            `;
          })
          .join("")
      : `
        <div class="col-12">
          <div class="empty-state">
            <i class="bi bi-journal-bookmark"></i>
            <h3>Hozircha hech qanday mavzu tanlanmagan.</h3>
            <p>Yangi mavzu qo'shish uchun yuqoridagi tugmani bosing.</p>
          </div>
        </div>
      `;

    const reviewSection = document.getElementById("prep-review-section");
    if (reviewSection) {
      reviewSection.innerHTML = `
        <div class="d-flex gap-2 flex-wrap align-items-center">
          <a href="/xatolar/?action=view&sessionId=${session.id}" class="btn btn-outline-primary btn-sm rounded-pill">
            <i class="bi bi-eye"></i> Xatolarni ko'rish
          </a>
          <a href="/xatolar/?action=review&sessionId=${session.id}" class="btn btn-outline-success btn-sm rounded-pill">
            <i class="bi bi-arrow-repeat"></i> Xatolarni yechish
          </a>
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
  if (page === "prep-tests") {
    initializePrepTestsPage();
  }
});

function initSubjectStatsIfMissing(session, subject) {
  if (!session || !subject) return;
  session.subjectStats = session.subjectStats || {};
  const subj = session.subjectStats[subject.id] || { tests: {} };
  subj.tests = subj.tests || {};
  session.subjectStats[subject.id] = subj;
}

async function initializePrepTestsPage() {
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("id");
  const subjectId = params.get("subject");
  const session = getPrepSession(sessionId);
  const subject = findPrepSubject(subjectId);

  const container = document.getElementById("prep-tests-container");
  const headerTitle = document.getElementById("prep-tests-title");
  const headerMeta = document.getElementById("prep-tests-meta");
  const headerTitle2 = document.getElementById("prep-tests-header-title");
  const headerMeta2 = document.getElementById("prep-tests-header-meta");
  const statsGrid = document.getElementById("prep-tests-stats");

  if (!session || !subject) {
    if (container)
      container.innerHTML = `
        <div class="empty-state">
          <i class="bi bi-exclamation-circle"></i>
          <h3>Mavzu yoki sessiya topilmadi.</h3>
        </div>
      `;
    return;
  }

  headerTitle && (headerTitle.innerText = subject.title);
  headerTitle2 && (headerTitle2.innerText = subject.title);
  // Ensure subject stats structure
  initSubjectStatsIfMissing(session, subject);

  const tests = await ensureSubjectTests(subject);
  const subjectQuestionCount = getSubjectQuestionCount(subject).total;
  const subjectTotalTests = tests.length;
  const metaText = `${subjectTotalTests} test · ${subjectQuestionCount} savol`;
  headerMeta && (headerMeta.innerText = metaText);
  headerMeta2 && (headerMeta2.innerText = metaText);

  // Compute per-test stats from session
  const subjectStats = session.subjectStats?.[subject.id] || { tests: {} };

  // Summary cards
  const solvedTestsCount = Object.values(subjectStats.tests || {}).filter(
    (t) => t.completed,
  ).length;
  const totalTestsCount = tests.length;
  const remainingTests = Math.max(0, totalTestsCount - solvedTestsCount);
  const solvedQuestions = Object.values(subjectStats.tests || {}).reduce(
    (sum, t) => sum + (t.solvedQuestions || 0),
    0,
  );
  const accuracy = (() => {
    const totalCorrect = Object.values(subjectStats.tests || {}).reduce(
      (s, t) => s + (t.correctAnswers || 0),
      0,
    );
    const totalAnswered = Object.values(subjectStats.tests || {}).reduce(
      (s, t) => s + ((t.correctAnswers || 0) + (t.wrongAnswers || 0)),
      0,
    );
    return totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  })();

  const subjectCompletion = subjectTotalTests
    ? Math.round((solvedTestsCount / subjectTotalTests) * 100)
    : 0;

  if (statsGrid) {
    statsGrid.innerHTML = `
      <div class="col-6 col-md-3">
        <div class="main-stat-card completion">
          <div class="stat-label">Tugatish</div>
          <div class="stat-value">${subjectCompletion}%</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="main-stat-card accuracy">
          <div class="stat-label">Aniqlik</div>
          <div class="stat-value">${accuracy}%</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="main-stat-card">
          <div class="stat-label">Yechilgan testlar</div>
          <div class="stat-value">${solvedTestsCount}</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="main-stat-card">
          <div class="stat-label">Qolgan testlar</div>
          <div class="stat-value">${remainingTests}</div>
        </div>
      </div>
    `;
  }

  const progressBadge = document.getElementById("sessionBadge");
  if (progressBadge) {
    progressBadge.innerText = `Progress ${subjectCompletion}%`;
  }

  // Render test cards
  const grid = document.getElementById("prep-tests-grid");
  if (!grid) return;
  if (!tests.length) {
    grid.innerHTML = `
      <div class="col-12">
        <div class="empty-state">
          <i class="bi bi-folder-x"></i>
          <h3>Testlar topilmadi</h3>
          <p>Bu mavzu uchun test skripti yuklandi, lekin testlar aniqlanmadi.</p>
        </div>
      </div>
    `;
    return;
  }
  grid.innerHTML = tests
    .map((test) => {
      const tStat = subjectStats.tests?.[test.id] || {};
      const totalQ = test.count || 0;
      const solvedQ = tStat.solvedQuestions || 0;
      const correctQ = tStat.correctAnswers || 0;
      const wrongQ = tStat.wrongAnswers || 0;
      const testAccuracy =
        correctQ + wrongQ
          ? Math.round((correctQ / (correctQ + wrongQ)) * 100)
          : 0;
      const progress = totalQ
        ? Math.round((solvedQ / totalQ) * 100)
        : tStat.completed
          ? 100
          : 0;
      const completed = tStat.completed || progress === 100;
      const hasStarted = solvedQ > 0 || correctQ > 0 || wrongQ > 0;

      let statusClass = "status-new";
      let statusIcon = "bi-circle";
      let footerClass = "footer-default";
      let footerText = `${totalQ || "?"} ta savol`;

      if (completed) {
        if (testAccuracy >= 80) {
          statusClass = "status-done";
          footerClass = "footer-success";
        } else if (testAccuracy >= 50) {
          statusClass = "status-mid";
          footerClass = "footer-warning";
        } else {
          statusClass = "status-bad";
          footerClass = "footer-danger";
        }
        statusIcon = "bi-check-lg";
        footerText = `${testAccuracy}% · ${correctQ}/${totalQ || "?"}`;
      } else if (hasStarted) {
        statusClass = "status-mid";
        statusIcon = "bi-hourglass-split";
        footerClass = "footer-warning";
        footerText = `${progress}% · ${solvedQ}/${totalQ || "?"}`;
      }

      return `
      <div class="col-6 col-md-3">
        <div class="test-card start-test-btn" data-test-id="${test.id}">
          <div class="status-badge ${statusClass}">
            <i class="bi ${statusIcon}"></i>
          </div>
          <div class="test-icon bg-primary-subtle text-primary">
            <i class="bi bi-journal-medical"></i>
          </div>
          <div class="test-title">${test.title}</div>
          <div class="test-meta">${totalQ ? totalQ + " ta savol" : "Test"}</div>
          <div class="mini-stats">
            <span><i class="bi bi-check-circle text-success"></i> ${correctQ}</span>
            <span><i class="bi bi-x-circle text-danger"></i> ${wrongQ}</span>
            <span><i class="bi bi-bullseye text-primary"></i> ${testAccuracy}%</span>
          </div>
          <div class="question-footer ${footerClass}">${footerText}</div>
        </div>
      </div>
    `;
    })
    .join("");

  // Wire start buttons
  grid.querySelectorAll(".start-test-btn").forEach((card) => {
    card.addEventListener("click", () => {
      const testId = card.dataset.testId;
      // ensure stats placeholder
      initSubjectStatsIfMissing(session, subject);
      session.subjectStats[subject.id].tests[testId] = session.subjectStats[
        subject.id
      ].tests[testId] || {
        solvedQuestions: 0,
        totalQuestions: tests.find((t) => t.id === testId)?.count || 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        completed: false,
        accuracy: 0,
        lastPlayedAt: null,
      };
      session.lastActivityAt = new Date().toISOString();
      savePrepSession(session);
      // Redirect to original subject page with prep params
      const base = subject.page || "/";
      const q = `?prepSession=${sessionId}&prepSubject=${subjectId}&prepTest=${encodeURIComponent(testId)}`;
      window.location.href = base + q;
    });
  });
}
