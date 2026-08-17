// ----------------------
// Common utility functions
// ----------------------

import { db } from "../../firebase.js";
import { doc, getDoc } from "../../firebase.js";

// Arrayni aralashtirish
function shuffle(array) {
  return [...array]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function getRandomTest(questions, n = "all") {
  const shuffledQuestions =
    n === "all" ? shuffle(questions) : shuffle(questions).slice(0, n);

  return shuffledQuestions.map((q) => {
    const correctAnswer = q.a[q.correct];
    const shuffledAnswers = shuffle(q.a);

    return {
      q: q.q,
      photo: q.photo || null,
      a: shuffledAnswers,
      correct: shuffledAnswers.indexOf(correctAnswer),
      explanation: q.explanation || null,
    };
  });
}

window.getRandomTest = getRandomTest;

// ========== PROGRESS (localStorage) ==========
const PROGRESS_KEY = "pulsego_test_progress_v1";

function saveTestProgress() {
  try {
    const data = {
      testName: currentTestName,
      currentIndex,
      score,
      mistakes: mistakes.slice(),
      total: currentTest.length,
      timeLeft,
      totalTestTime,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Progress saqlanmadi", e);
  }
}

function loadTestProgress(testName) {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.testName !== testName) return null;
    if (data.updatedAt) {
      const age = Date.now() - new Date(data.updatedAt).getTime();
      if (age > 24 * 60 * 60 * 1000) {
        localStorage.removeItem(PROGRESS_KEY);
        return null;
      }
    }
    return data;
  } catch (e) {
    return null;
  }
}

function clearTestProgress() {
  try {
    localStorage.removeItem(PROGRESS_KEY);
  } catch (e) {}
}

function formatTime(sec) {
  const m = Math.floor(Math.max(0, sec) / 60);
  const s = Math.max(0, sec) % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
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
      partial: !!resultData.partial,
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

let currentXatolarSessionId = null;

function setXatolarSessionId(sessionId) {
  currentXatolarSessionId = sessionId || null;
}

function getStoredMistakesForSession() {
  const mistakes = getStoredMistakes();
  if (!currentXatolarSessionId) return mistakes;
  return mistakes.filter(
    (item) => item.prepSessionId === currentXatolarSessionId,
  );
}

function getResolvedMistakesForSession() {
  const resolved = getResolvedMistakes();
  if (!currentXatolarSessionId) return resolved;
  return resolved.filter(
    (item) => item.prepSessionId === currentXatolarSessionId,
  );
}

function getStoredAppData() {
  if (window.Data && typeof Data._getRawData === "function") {
    return Data._getRawData();
  }
  try {
    const raw = localStorage.getItem("pulsego_data_v1");
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("Failed to read stored app data", e);
    return {};
  }
}

function saveStoredAppData(data) {
  if (window.Data && typeof Data._saveRawData === "function") {
    return Data._saveRawData(data);
  }
  try {
    localStorage.setItem("pulsego_data_v1", JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save stored app data", e);
  }
}

function getPrepSessionsData() {
  const data = getStoredAppData();
  return Array.isArray(data.preparationSessions)
    ? data.preparationSessions
    : [];
}

function savePrepSessionsData(sessions) {
  const data = getStoredAppData();
  data.preparationSessions = sessions;
  saveStoredAppData(data);
}

function getPrepSessionData(sessionId) {
  return getPrepSessionsData().find((item) => item.id === sessionId) || null;
}

function savePrepSessionData(session) {
  const sessions = getPrepSessionsData();
  const idx = sessions.findIndex((item) => item.id === session.id);
  if (idx !== -1) sessions[idx] = session;
  else sessions.push(session);
  savePrepSessionsData(sessions);
}

function recordPrepSessionResult(sessionId, subjectId, result) {
  if (!sessionId || !subjectId || !result) return;

  const session = getPrepSessionData(sessionId);
  if (!session) return;

  session.startedAt = session.startedAt || new Date().toISOString();
  session.lastActivityAt = new Date().toISOString();
  session.subjectStats = session.subjectStats || {};

  const subjectStat = session.subjectStats[subjectId] || {
    testsTaken: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    mistakesCount: 0,
    accuracy: 0,
  };

  const total = result.total || 0;
  const correct = result.correct || 0;
  const wrong = total - correct;
  const mistakesCount = (result.mistakes || []).length;

  subjectStat.testsTaken += 1;
  subjectStat.totalQuestions += total;
  subjectStat.correctAnswers += correct;
  subjectStat.wrongAnswers += wrong;
  subjectStat.mistakesCount += mistakesCount;
  subjectStat.accuracy = subjectStat.totalQuestions
    ? Math.round(
        (subjectStat.correctAnswers / subjectStat.totalQuestions) * 100,
      )
    : 0;
  subjectStat.updatedAt = session.lastActivityAt;
  session.subjectStats[subjectId] = subjectStat;

  session.stats = session.stats || {
    totalQuestions: 0,
    solvedQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    accuracy: 0,
    updatedAt: null,
  };

  session.stats.totalQuestions += total;
  session.stats.solvedQuestions += total;
  session.stats.correctAnswers += correct;
  session.stats.wrongAnswers += wrong;
  session.stats.accuracy = session.stats.totalQuestions
    ? Math.round(
        (session.stats.correctAnswers / session.stats.totalQuestions) * 100,
      )
    : 0;
  session.stats.updatedAt = session.lastActivityAt;

  session.testResults = session.testResults || [];
  session.testResults.push({
    id: Date.now(),
    subjectId,
    testName: result.testName || "unknown",
    total,
    correct,
    percent: total === 0 ? 0 : Math.round((correct / total) * 100),
    mistakesCount,
    date: session.lastActivityAt,
    prep: true,
  });

  savePrepSessionData(session);

  try {
    const appData = getStoredAppData();
    appData.mistakes = appData.mistakes || [];
    const baseName = result.testName || "unknown";

    (result.mistakes || []).forEach((m, i) => {
      const stored = Object.assign(
        {
          id: Date.now() + i,
          testName: baseName,
          date: session.lastActivityAt,
          prepSessionId: session.id,
          prepSessionName: session.examType || session.id,
          prepSubjectId: subjectId,
        },
        m,
      );

      const isSame = (a, b) =>
        a.q === b.q &&
        a.correct === b.correct &&
        a.selected === b.selected &&
        (a.testName || "") === (b.testName || "") &&
        (a.prepSessionId || null) === (b.prepSessionId || null);

      if (!appData.mistakes.some((existing) => isSame(existing, stored))) {
        appData.mistakes.push(stored);
      }
    });

    saveStoredAppData(appData);
  } catch (e) {
    console.error("Failed to persist prep mistakes", e);
  }
}

function getPrepContext() {
  const params = new URLSearchParams(window.location.search);
  const prepSessionId = params.get("prepSession");
  const prepSubjectId = params.get("prepSubject");
  if (!prepSessionId || !prepSubjectId) return null;
  return { sessionId: prepSessionId, subjectId: prepSubjectId };
}

function initPrepContext() {
  const prepContext = getPrepContext();
  if (!prepContext) return;

  const session = getPrepSessionData(prepContext.sessionId);
  if (session) {
    session.startedAt = session.startedAt || new Date().toISOString();
    session.lastActivityAt = new Date().toISOString();
    savePrepSessionData(session);
    prepContext.sessionName = session.examType || session.id;
  }

  window.__prepContext = prepContext;
  window.__prepSessionActive = prepContext;
}

function showPrepBanner() {
  return;
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

    try {
      if (removed.prepSessionId) {
        data.preparationSessions = data.preparationSessions || [];
        const sess = data.preparationSessions.find(
          (s) => s.id === removed.prepSessionId,
        );
        if (sess && removed.prepSubjectId && sess.subjectStats) {
          const ss = sess.subjectStats[removed.prepSubjectId];
          if (ss && typeof ss.mistakesCount === "number") {
            ss.mistakesCount = Math.max(0, ss.mistakesCount - 1);
          }
        }
      }
    } catch (er) {
      console.error("Failed to update prep session on mistake resolve", er);
    }

    localStorage.setItem("pulsego_data_v1", JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Failed to resolve fallback stored mistake", e);
    return false;
  }
}

function getMistakeQuestion(item) {
  return item.question || item.q || "Savol yo‘q";
}

function getMistakeCorrectAnswer(item) {
  if (item.correctAnswer) return item.correctAnswer;
  if (item.a && typeof item.correct === "number")
    return item.a[item.correct] ?? "";
  return "";
}

function getMistakeUserAnswer(item) {
  if (item.userAnswer) return item.userAnswer;
  if (item.a && typeof item.selected === "number")
    return item.a[item.selected] ?? "";
  return "";
}

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-src="${src}"]`)) return resolve();

    const existing = Array.from(document.scripts).find(
      (s) => s.src === src || s.dataset.src === src,
    );
    if (existing) {
      if (existing.onload) existing.onload = () => resolve();
      else resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.dataset.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.head.appendChild(script);
  });
}

function waitForImagesInContainer(container) {
  const images = Array.from(container.querySelectorAll("img"));
  if (!images.length) return Promise.resolve();

  return Promise.all(
    images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete && img.naturalWidth !== 0) return resolve();
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }),
    ),
  );
}

function buildXatolarPdfPageHtml(item, index, total, groupName) {
  const answers = Array.isArray(item.a) ? item.a : [];
  const correctIndex = typeof item.correct === "number" ? item.correct : -1;
  const selectedIndex = typeof item.selected === "number" ? item.selected : -1;

  const imageHtml = item.photo
    ? `<div style="text-align:center;margin:20px 0;"><img src="${item.photo}" style="max-width:100%;border-radius:18px;box-shadow:0 16px 40px rgba(15,23,42,.12);" alt="Savol rasmi"/></div>`
    : "";

  const answerItems = answers
    .map((answer, idx) => {
      const isCorrect = idx === correctIndex;
      const isSelected = idx === selectedIndex;
      const badge = isCorrect
        ? `<span style="display:inline-block;margin-left:10px;padding:4px 10px;border-radius:999px;background:#198754;color:#fff;font-size:11px;">To'g'ri</span>`
        : isSelected
          ? `<span style="display:inline-block;margin-left:10px;padding:4px 10px;border-radius:999px;background:#dc3545;color:#fff;font-size:11px;">Siz tanlagan</span>`
          : "";
      const bg = isCorrect ? "#ecfdf5" : isSelected ? "#ffe4e6" : "#f8fafc";
      const border = isCorrect ? "#d1fae5" : isSelected ? "#f8d7da" : "#e2e8f0";
      return `<li style="list-style:none;margin-bottom:10px;padding:14px 16px;border-radius:16px;background:${bg};border:1px solid ${border};display:flex;justify-content:space-between;align-items:center;"><span>${answer}</span>${badge}</li>`;
    })
    .join("");

  const createdAt = new Date().toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return `
    <div style="font-family:Inter,system-ui,sans-serif;box-sizing:border-box;width:595px;min-height:842px;padding:32px;background:#fff;color:#111827;display:flex;flex-direction:column;justify-content:space-between;">
      <div>
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:24px;">
          <div>
            <div style="font-size:12px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:#0f172a;margin-bottom:8px;">PulseGo</div>
            <div style="font-size:24px;font-weight:800;line-height:1.1;">Xatolar hisobot</div>
            <div style="font-size:13px;color:#475569;margin-top:10px;">${groupName} · ${index + 1}/${total} savol</div>
          </div>
          <div style="text-align:right;font-size:12px;color:#6b7280;">${createdAt}</div>
        </div>
        <div style="padding:24px;border:1px solid #e2e8f0;border-radius:24px;background:#f8fafc;">
          <div style="font-size:16px;font-weight:700;color:#111827;margin-bottom:18px;">${index + 1}. ${getMistakeQuestion(item)}</div>
          ${imageHtml}
          <div style="font-size:15px;font-weight:600;color:#111827;margin-bottom:14px;">Javoblar</div>
          <ul style="margin:0;padding:0;">${answerItems}</ul>
          <div style="margin-top:20px;display:grid;gap:10px;font-size:14px;color:#334155;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;"><span style="font-weight:700;">To‘g‘ri javob:</span><span>${getMistakeCorrectAnswer(item) || "-"}</span></div>
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;"><span style="font-weight:700;">Sizning javob:</span><span>${getMistakeUserAnswer(item) || "-"}</span></div>
          </div>
        </div>
      </div>
      <div style="margin-top:28px;padding-top:18px;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#64748b;">
        <div>PulseGo • professional test platform</div>
        <div>Sahifa ${index + 1} / ${total}</div>
      </div>
    </div>`;
}

async function downloadXatolar() {
  let items = getStoredMistakesForSession();
  if (currentXatolarGroupName) {
    items = items.filter(
      (x) => (x.testName || "Noma'lum test") === currentXatolarGroupName,
    );
  }
  if (!items.length) {
    alert("Xatolar topilmadi.");
    return;
  }

  try {
    await loadScriptOnce(
      "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",
    );
    await loadScriptOnce(
      "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
    );
  } catch (error) {
    console.error(error);
    alert("PDF kutubxonasi yuklanmadi.");
    return;
  }

  const groupName = currentXatolarGroupName || "PulseGo xatolar guruhi";
  const filename = `PulseGo-xatolar-${groupName.replace(/\s+/g, "-").toLowerCase()}-${new Date().toISOString().slice(0, 10)}.pdf`;
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const container = document.createElement("div");
  container.style.cssText = `position:fixed;left:-9999px;top:0;width:${pageWidth}px;min-height:${pageHeight}px;background:#fff;`;
  document.body.appendChild(container);

  for (let i = 0; i < items.length; i++) {
    container.innerHTML = buildXatolarPdfPageHtml(
      items[i],
      i,
      items.length,
      groupName,
    );
    await waitForImagesInContainer(container);
    const canvas = await window.html2canvas(container, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });
    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);
  }
  pdf.save(filename);
  document.body.removeChild(container);
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
  const items = getStoredMistakesForSession();

  if (summary) {
    summary.innerHTML = `
      <strong>Saqlangan xatolar:</strong> ${items.length} ta |
      <strong>Tog'rilanganlar:</strong> ${getResolvedMistakesForSession().length} ta`;
  }

  currentXatolarGroupName = null;

  if (list) {
    if (!items.length) {
      list.innerHTML = `<div class="col-12"><div class="alert alert-info">Hozircha xatolar mavjud emas.</div></div>`;
    } else {
      const groups = {};
      items.forEach((item) => {
        const name = item.testName || "Noma'lum test";
        if (!groups[name]) groups[name] = [];
        groups[name].push(item);
      });

      if (!document.getElementById("mistake-card-style")) {
        const style = document.createElement("style");
        style.id = "mistake-card-style";
        style.textContent = `
          .mistake-card{border:none;border-radius:20px;overflow:hidden;transition:.25s ease;box-shadow:0 6px 18px rgba(0,0,0,.08);background:#fff}
          .mistake-card:hover{transform:translateY(-5px);box-shadow:0 12px 28px rgba(0,0,0,.15)}
          .mistake-icon{width:60px;height:60px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center;color:#198754;font-size:28px;flex-shrink:0}
          .mistake-badge{background:#ffe5e5;color:#dc3545;padding:6px 14px;border-radius:999px;font-size:13px;font-weight:600}
          .mistake-btn{border-radius:50px;padding:10px 24px;font-weight:600;transition:.2s}
          .mistake-btn:hover{transform:scale(1.05)}`;
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
                      <div class="mistake-icon"><i class="bi bi-journal-medical"></i></div>
                      <div class="ms-3">
                        <h5 class="fw-bold mb-1">${testName}</h5>
                        <span class="mistake-badge">${mistakes.length} ta xato</span>
                        <div class="text-muted mt-2"><i class="bi bi-clock-history"></i> ${lastDate}</div>
                      </div>
                    </div>
                    <div class="d-flex gap-2 flex-wrap">
                      <button class="btn btn-success mistake-btn" onclick="startXatolarReview('${testName}')">
                        <i class="bi bi-play-fill"></i> Boshlash
                      </button>
                      <button class="btn btn-secondary mistake-btn" onclick="openGroupMistakes('${testName}')">
                        <i class="bi bi-eye"></i> Ko'rish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
        })
        .join("");
    }
  }

  const modalEl = document.getElementById("xatolarModal");
  if (modalEl) bootstrap.Modal.getOrCreateInstance(modalEl).show();
}

function openGroupMistakes(testName) {
  currentXatolarGroupName = testName;
  const items = getStoredMistakesForSession().filter(
    (x) => (x.testName || "Noma'lum test") === testName,
  );
  const list = document.getElementById("xatolarList");

  list.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5 class="mb-0">${testName}</h5>
        <small class="text-muted">${items.length} ta savol</small>
      </div>
      <button class="btn btn-sm btn-secondary" onclick="openXatolarModal()">Orqaga</button>
    </div>`;

  items.forEach((q, index) => {
    const answers = Array.isArray(q.a) ? q.a : [];
    const correctIndex = typeof q.correct === "number" ? q.correct : -1;
    const selectedIndex = typeof q.selected === "number" ? q.selected : -1;

    const imageHtml = q.photo
      ? `<div class="text-center mb-3"><img src="${q.photo}" class="img-fluid rounded" alt="Savol rasmi"></div>`
      : "";

    const answerList = answers
      .map((answer, idx) => {
        const isCorrect = idx === correctIndex;
        const isSelected = idx === selectedIndex;
        const itemClass = isCorrect
          ? "list-group-item list-group-item-success"
          : isSelected
            ? "list-group-item list-group-item-danger"
            : "list-group-item";
        const badge = isCorrect
          ? `<span class="badge bg-success ms-2">To'g'ri</span>`
          : isSelected
            ? `<span class="badge bg-danger ms-2">Siz tanlagan</span>`
            : "";
        return `<li class="${itemClass} d-flex justify-content-between align-items-center">${answer}${badge}</li>`;
      })
      .join("");

    const card = document.createElement("div");
    card.className = "card shadow-sm p-4 mb-4 rounded-4";
    card.innerHTML = `
      <div class="d-flex flex-column gap-3">
        <div>
          <h6 class="fw-bold mb-2">${index + 1}. ${getMistakeQuestion(q)}</h6>
          ${imageHtml}
        </div>
        <div>
          <div class="fw-semibold mb-2">Javoblar</div>
          <ul class="list-group">${answerList}</ul>
        </div>
        <div class="text-muted small">
          <p class="mb-1"><strong>To‘g‘ri javob:</strong> ${getMistakeCorrectAnswer(q) || "-"}</p>
          <p class="mb-0"><strong>Sizning javob:</strong> ${getMistakeUserAnswer(q) || "-"}</p>
        </div>
        ${
          q.explanation
            ? `<div class="card border-0 bg-light"><div class="card-body"><div class="fw-semibold mb-2">Izoh</div><div class="text-secondary">${q.explanation}</div></div></div>`
            : ""
        }
        <div class="d-flex gap-2 mt-3">
          <button class="btn btn-sm btn-outline-success" data-mistake-id="${q.id}">Belgilash</button>
          <button class="btn btn-sm btn-outline-secondary" onclick="openGroupMistakes('${testName}')">Orqaga</button>
        </div>
      </div>`;

    list.appendChild(card);

    const resolveBtn = card.querySelector("button[data-mistake-id]");
    if (resolveBtn) {
      resolveBtn.addEventListener("click", () => {
        if (!confirm("Xatoni to'g'irlashni tasdiqlaysizmi?")) return;
        const ok = resolveStoredMistakeById(q.id);
        if (ok) {
          alert("Xato belgilandi");
          if (document.body.dataset.page === "prep-detail") location.reload();
          else openGroupMistakes(testName);
        } else {
          alert("Xatoni belgilashda xato yuz berdi");
        }
      });
    }
  });
}

function viewMistake(testName, index) {
  const items = getStoredMistakes().filter(
    (x) => (x.testName || "Noma'lum test") === testName,
  );
  const q = items[index];
  const list = document.getElementById("xatolarList");
  if (!list) return;

  if (!q) {
    list.innerHTML = `
      <div class="alert alert-warning rounded-4 p-4">
        <h5>Savol topilmadi</h5>
        <p>Ushbu xato uchun ma'lumot topilmadi yoki noto'g'ri indeks berilgan.</p>
        <button class="btn btn-secondary mt-3" onclick="openGroupMistakes('${testName}')">Orqaga</button>
      </div>`;
    return;
  }

  const answers = Array.isArray(q.a) ? q.a : [];
  const correctIndex = typeof q.correct === "number" ? q.correct : -1;
  const selectedIndex = typeof q.selected === "number" ? q.selected : -1;

  list.innerHTML = `
    <div class="card p-4 rounded-4">
      <div class="d-flex flex-column gap-4">
        <div>
          <h5>Savol</h5>
          <p class="mb-3">${getMistakeQuestion(q)}</p>
          ${q.photo ? `<div class="text-center mb-3"><img src="${q.photo}" class="img-fluid rounded" alt="Savol rasmi"></div>` : ""}
        </div>
        <div>
          <h6 class="mb-3">Javoblar</h6>
          <div class="list-group">
            ${answers
              .map((answer, idx) => {
                const isCorrect = idx === correctIndex;
                const isSelected = idx === selectedIndex;
                const btnClass = isCorrect
                  ? "list-group-item list-group-item-action list-group-item-success"
                  : isSelected
                    ? "list-group-item list-group-item-action list-group-item-danger"
                    : "list-group-item list-group-item-action";
                const badge = isCorrect
                  ? `<span class="badge bg-success ms-2">To'g'ri</span>`
                  : isSelected
                    ? `<span class="badge bg-danger ms-2">Siz tanlagan</span>`
                    : "";
                return `<div class="${btnClass}">${answer}${badge}</div>`;
              })
              .join("")}
          </div>
        </div>
        <div>
          <h6 class="mt-3">Natijalar</h6>
          <p class="mb-1"><strong>To‘g‘ri javob:</strong> ${getMistakeCorrectAnswer(q) || "-"}</p>
          <p><strong>Sizning javob:</strong> ${getMistakeUserAnswer(q) || "-"}</p>
          ${
            q.explanation
              ? `<div class="card border-0 bg-light mt-3"><div class="card-body"><div class="fw-semibold mb-2">Izoh</div><div class="text-secondary">${q.explanation}</div></div></div>`
              : ""
          }
        </div>
        <button class="btn btn-secondary align-self-start" onclick="openGroupMistakes('${testName}')">Orqaga</button>
      </div>
    </div>`;
}

function viewQuestion(testName, index) {
  return viewMistake(testName, index);
}

function startXatolarReview(testName = null) {
  const storedMistakes = getStoredMistakesForSession();
  let filteredMistakes = storedMistakes;
  if (testName)
    filteredMistakes = storedMistakes.filter((m) => m.testName === testName);

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
    explanation: m.explanation || null,
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
  if (!title || !question) return;

  const activeModal = document.getElementById("xatolarModal");
  if (activeModal) {
    const modal = bootstrap.Modal.getInstance(activeModal);
    modal?.hide();
  }

  // xatolar review uchun ham umumiy timer
  totalTestTime = Math.max(currentTest.length * 180, 60);
  timeLeft = totalTestTime;

  showQuestion();
  startCaseTimer();
}

function setReviewModeOff() {
  isReviewingStoredMistakes = false;
}

function getXatolarSummaryData() {
  return {
    mistakesCount: getStoredMistakes().length,
    resolvedCount: getResolvedMistakes().length,
  };
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

function buildPrepSessionSummary(sessionId, subjectId = null) {
  const session = getPrepSessionData(sessionId);
  const results = (session?.testResults || []).filter((entry) => {
    if (!subjectId) return true;
    return entry.subjectId === subjectId;
  });

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

function buildTestCardHtml(options) {
  const testName = options.testName || options.id || "";
  const title = options.title || testName;
  const wrapperClass = options.wrapperClass || "col-6 col-md-3";
  const cardClass = options.cardClass || "test-card";
  const iconClass = options.iconClass || "bi bi-journal-medical fs-3";
  const themeClass = options.themeClass || "bg-success-subtle text-success";
  const footerText = options.footerText || "";
  const extraAttributes = options.extraAttributes || "";

  return `
    <div class="${wrapperClass}">
      <div class="${cardClass}" onclick="startTest('${testName}')" ${extraAttributes}>
        <div class="test-icon ${themeClass}"><i class="${iconClass}"></i></div>
        <div class="test-title fw-semibold">${title}</div>
        <div class="question-footer">${footerText}</div>
      </div>
    </div>`;
}

function renderTestCards(containerSelector, cards, options = {}) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const html = cards
    .map((card) =>
      buildTestCardHtml(Object.assign({}, options.cardDefaults || {}, card)),
    )
    .join("");
  container.innerHTML = html;

  if (options.afterRender && typeof options.afterRender === "function") {
    options.afterRender();
  }
}

function getTestCardQuestionCount(testName) {
  if (!testName) return null;
  const availableTests = window.tests || {};
  if (Array.isArray(availableTests[testName]))
    return availableTests[testName].length;
  if (
    typeof window.TEST_QUESTIONS === "object" &&
    Array.isArray(window.TEST_QUESTIONS[testName])
  ) {
    return window.TEST_QUESTIONS[testName].length;
  }
  return null;
}

function renderTestStats() {
  const prepContext = getPrepContext();
  const summary = prepContext?.sessionId
    ? buildPrepSessionSummary(prepContext.sessionId, prepContext.subjectId)
    : buildTestSummary();

  const cards = document.querySelectorAll(".test-card, .collectioncard");
  cards.forEach((card) => {
    const testName = parseTestNameFromCard(card);
    if (!testName) return;
    card.dataset.testName = testName;

    const footer = card.querySelector(".question-footer");
    if (footer) {
      const questionCount = getTestCardQuestionCount(testName);
      footer.innerText =
        questionCount !== null ? `${questionCount} ta savol` : footer.innerText;
    }

    let statEl = card.querySelector(".test-card-stats");
    if (!statEl) {
      statEl = document.createElement("div");
      statEl.className = "test-card-stats text-secondary";
      statEl.style.fontSize = "0.85rem";
      statEl.style.marginTop = "0.65rem";
      statEl.style.lineHeight = "1.4";
      statEl.style.minHeight = "2.4rem";
      if (footer) footer.insertAdjacentElement("afterend", statEl);
      else card.appendChild(statEl);
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
        <div class="text-muted">Umumiy: ${attemptLabel}, o'rtacha ${average}%</div>`;

      card.classList.remove("card-success", "card-warning", "card-danger");
      if (average >= 80) card.classList.add("card-success");
      else if (average >= 56) card.classList.add("card-warning");
      else card.classList.add("card-danger");
    } else {
      statEl.innerHTML = `<div class="text-muted">Hali ishlanmagan</div>`;
    }
  });
}

function initTestStats() {
  loadDataScript(() => renderTestStats());
}

// ----------------------
// Certificate
// ----------------------

function generateCertificate() {
  if (currentTest.length === 0) {
    alert("Avval testni tugating!");
    return;
  }

  const name = localStorage.getItem("userName") || "Ism Familiya";
  const percent = Math.round((score / currentTest.length) * 100);

  const certData = {
    name,
    score,
    total: currentTest.length,
    percent,
    testTitle:
      (typeof testTitleMap !== "undefined" && testTitleMap[currentTestName]) ||
      currentTestName,
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };

  localStorage.setItem("certificateData", JSON.stringify(certData));
  window.location.href = "../../assets/modals/certificate.html";
}

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
    footerEl.style.cssText =
      "position:absolute;bottom:40px;left:50%;transform:translateX(-50%);font-size:14px;color:#94a3b8";
    footerEl.innerText = text;
    const cert = document.getElementById("certificate");
    if (cert) cert.appendChild(footerEl);
  }
}

// ----------------------
// Global variables
// ----------------------

let currentTest = [];
let currentTestName = "";
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;
let totalTestTime = 60;
let selectedAnswerIndex = null;
let answerChecked = false;
let isReviewingStoredMistakes = false;
let examTimerPaused = false;
let examHighlightMode = false;
let examFlaggedQuestions = new Set();
/** @type {Record<number, {status: 'correct'|'wrong', selected: number}>} */
let examQuestionResults = {};
let examNotes = {};
let examFontScale = 1;
let examSelectionRange = null;

let currentXatolarGroupName = null;
let mistakes = [];

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

/* ============================================================
   UWORLD-STYLE CASE UI + EXAM MODE HEADER
============================================================ */

function ensureCaseStyles() {
  // Styles are now in your CSS file — nothing to inject
}

function ensureExamHeaderStyles() {
  if (document.getElementById("exam-header-style")) return;
  const style = document.createElement("style");
  style.id = "exam-header-style";
  style.textContent = `
    /* Hide site chrome while exam is running */
    body.exam-mode-active .top-navbar,
    body.exam-mode-active nav.top-navbar,
    body.exam-mode-active .navbar:not(#exam-bar),
    body.exam-mode-active .sidebar,
    body.exam-mode-active #sidebar,
    body.exam-mode-active .sidebar-overlay,
    body.exam-mode-active #sidebarOverlay {
      display: none !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }

    /* Fixed top + bottom bars: no gap from edges */
    body.exam-mode-active {
      padding-top: 52px !important;
      padding-bottom: 58px !important;
      background: #f4f6f8 !important;
      margin: 0 !important;
    }

    /* TOP BAR — fixed flush to top */
    #exam-bar.exam-bar,
    #test-screen .tg-test-header.exam-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      max-width: none;
      margin: 0;
      z-index: 1050;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      box-sizing: border-box;
      min-height: 52px;
      height: 52px;
      padding: 0 0.85rem;
      background: #1b3a3a;
      color: #e8f0f0;
      border: none;
      border-radius: 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.22);
      font-family: Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
    }

    .exam-bar-left,
    .exam-bar-center,
    .exam-bar-right {
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .exam-bar-left { flex: 0 0 auto; }
    .exam-bar-center { flex: 1 1 auto; justify-content: center; min-width: 0; gap: 0.65rem; }
    .exam-bar-right { flex: 0 0 auto; margin-left: auto; }

    #test-title.exam-progress,
    .exam-bar .exam-progress {
      margin: 0;
      font-size: 1.05rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      color: #ffffff;
      white-space: nowrap;
      line-height: 1.1;
    }

    #timer.tg-timer,
    .exam-bar .tg-timer {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      font-variant-numeric: tabular-nums;
      font-weight: 700;
      font-size: 0.9rem;
      min-width: 4.4rem;
      padding: 0.3rem 0.7rem;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.12);
      color: #f0fdfa;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
    #timer.tg-timer.warning {
      background: rgba(251, 146, 60, 0.25);
      border-color: rgba(251, 146, 60, 0.45);
      color: #ffedd5;
    }
    #timer.tg-timer.danger {
      background: rgba(239, 68, 68, 0.3);
      border-color: rgba(248, 113, 113, 0.5);
      color: #fee2e2;
      animation: exam-pulse 1s ease infinite;
    }
    @keyframes exam-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    .exam-bar .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      white-space: nowrap;
      font-weight: 600;
      font-size: 0.8rem;
      line-height: 1;
      padding: 0.4rem 0.65rem;
      border-radius: 10px;
      border: 1px solid transparent;
      transition: background 0.15s ease, transform 0.12s ease, opacity 0.15s ease;
      color: #e8f0f0;
      background: transparent;
    }
    .exam-bar .btn:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
    }
    .exam-bar .btn:active:not(:disabled) { transform: scale(0.96); }
    .exam-bar .btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .exam-bar #exam-stop-btn { color: #fecaca; }
    .exam-bar #exam-stop-btn:hover:not(:disabled) {
      background: rgba(239, 68, 68, 0.25);
      color: #fff;
    }
    .exam-bar #exam-next-btn { color: #a7f3d0; }
    .exam-bar #exam-next-btn:hover:not(:disabled) {
      background: rgba(16, 185, 129, 0.22);
      color: #ecfdf5;
    }
    .exam-bar .btn i { font-size: 1.05rem; }

    /* BOTTOM BAR — fixed flush to bottom */
    #exam-bottom-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1050;
      display: none;
      align-items: center;
      justify-content: space-around;
      gap: 0.25rem;
      min-height: 56px;
      padding: 0.35rem 0.5rem calc(0.35rem + env(safe-area-inset-bottom, 0px));
      background: #1b3a3a;
      color: #e8f0f0;
      box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.22);
      font-family: Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
    }
    body.exam-mode-active #exam-bottom-bar { display: flex; }

    #exam-bottom-bar .exam-tool {
      flex: 1 1 0;
      max-width: 5.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.15rem;
      padding: 0.35rem 0.25rem;
      border: none;
      border-radius: 10px;
      background: transparent;
      color: #c8d9d9;
      font-size: 0.65rem;
      font-weight: 600;
      line-height: 1.15;
      cursor: pointer;
      transition: background 0.15s ease, color 0.15s ease;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
    }
    #exam-bottom-bar .exam-tool i {
      font-size: 1.2rem;
      line-height: 1;
    }
    #exam-bottom-bar .exam-tool:hover,
    #exam-bottom-bar .exam-tool:focus {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      outline: none;
    }
    #exam-bottom-bar .exam-tool.active {
      background: rgba(255, 255, 255, 0.16);
      color: #a7f3d0;
    }
    #exam-bottom-bar .exam-tool.flagged {
      color: #fbbf24;
    }
    #exam-bottom-bar .exam-tool.danger-tool:hover {
      background: rgba(239, 68, 68, 0.22);
      color: #fecaca;
    }

    /* Content under fixed bars */
    #test-screen {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width: 100%;
      max-width: 780px;
      margin: 0 auto;
      background: transparent;
    }
    #test-screen > #question-container {
      position: relative;
      z-index: 1;
      width: 100%;
      padding: 1.25rem 1rem 1.5rem;
      box-sizing: border-box;
    }

    /* Helper modes — work with your existing option classes */
    body.exam-mode-active.exam-strike-mode .mcq-option,
    body.exam-mode-active.exam-strike-mode #answer-buttons button {
      cursor: crosshair;
    }
    body.exam-mode-active .mcq-option.exam-struck,
    body.exam-mode-active #answer-buttons button.exam-struck {
      opacity: 0.5;
    }
    body.exam-mode-active .mcq-option.exam-struck .mcq-option-text,
    body.exam-mode-active .mcq-option.exam-struck .mcq-option-letter {
      text-decoration: line-through;
      color: #94a3b8;
    }
    body.exam-mode-active .mcq-option {
      position: relative;
      padding-right: 2.5rem !important;
    }
    body.exam-mode-active .exam-option-x {
      position: absolute;
      right: 0.55rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1.65rem;
      height: 1.65rem;
      border: 1px solid #cbd5e1;
      border-radius: 50%;
      background: #fff;
      color: #64748b;
      font-size: 0.75rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 2;
      padding: 0;
      line-height: 1;
      transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
    }
    body.exam-mode-active .exam-option-x:hover {
      background: #fee2e2;
      border-color: #fca5a5;
      color: #dc2626;
    }
    body.exam-mode-active .mcq-option.exam-struck .exam-option-x {
      background: #fee2e2;
      border-color: #f87171;
      color: #b91c1c;
    }
    body.exam-mode-active .mcq-option.exam-highlight,
    body.exam-mode-active #answer-buttons button.exam-highlight {
      background: #fef08a !important;
      box-shadow: inset 3px 0 0 #eab308;
    }
    body.exam-mode-active .mcq-question ::selection,
    body.exam-mode-active #question-container ::selection {
      background: #fde047;
    }
    body.exam-mode-active mark.exam-hl {
      background: #fde047;
      color: inherit;
      padding: 0 0.1em;
      border-radius: 2px;
    }
    body.exam-mode-active .exam-flag-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      margin-bottom: 0.75rem;
      padding: 0.35rem 0.7rem;
      border-radius: 999px;
      background: #fef3c7;
      color: #92400e;
      font-size: 0.8rem;
      font-weight: 650;
    }
    /* Text selection floating toolbar */
    #exam-sel-toolbar {
      position: absolute;
      z-index: 2000;
      display: none;
      align-items: center;
      gap: 2px;
      padding: 4px;
      background: #0f172a;
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.28);
      transform: translateX(-50%);
    }
    #exam-sel-toolbar button {
      border: none;
      background: transparent;
      color: #e2e8f0;
      font-size: 0.72rem;
      font-weight: 600;
      padding: 0.4rem 0.55rem;
      border-radius: 8px;
      cursor: pointer;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
    #exam-sel-toolbar button:hover { background: rgba(255,255,255,0.12); color: #fff; }
    #exam-sel-toolbar button.locked { opacity: 0.55; }
    #exam-sel-toolbar button i { font-size: 0.85rem; }

    /* Navigator colors */
    .exam-nav-btn { padding: 10px 0; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; position: relative; }
    .exam-nav-btn.nav-current { outline: 2px solid #0f172a; outline-offset: 2px; }
    .exam-nav-btn.nav-correct { background: #16a34a; color: #fff; }
    .exam-nav-btn.nav-wrong { background: #dc2626; color: #fff; }
    .exam-nav-btn.nav-unsolved { background: #e2e8f0; color: #0f172a; }
    .exam-nav-btn.nav-flagged::after {
      content: "";
      position: absolute;
      top: 4px; right: 6px;
      width: 7px; height: 7px;
      border-radius: 50%;
      background: #fbbf24;
    }

    body.exam-mode-active #question-container {
      font-size: calc(1rem * var(--exam-font-scale, 1));
    }

    @media (max-width: 576px) {
      body.exam-mode-active {
        padding-top: 48px !important;
        padding-bottom: 60px !important;
      }
      #exam-bar.exam-bar { min-height: 48px; height: 48px; padding: 0 0.55rem; }
      #test-title.exam-progress { font-size: 0.95rem; }
      #timer.tg-timer { font-size: 0.8rem; min-width: 3.8rem; padding: 0.25rem 0.5rem; }
      .exam-bar .exam-btn-label { display: none; }
      .exam-bar .btn { padding: 0.35rem 0.5rem; }
      #exam-bottom-bar .exam-tool span { font-size: 0.6rem; }
      #exam-bottom-bar .exam-tool i { font-size: 1.15rem; }
      #test-screen > #question-container { padding: 1rem 0.75rem 1.25rem; }
    }
  `;
  document.head.appendChild(style);
}

function bindExamBarSticky() {
  // Top bar is position:fixed — no sticky tracking needed
}


function setSiteChromeVisible(visible) {
  const selectors = [
    ".top-navbar",
    "nav.top-navbar",
    ".navbar:not(#exam-bar)",
    ".sidebar",
    "#sidebar",
    ".sidebar-overlay",
    "#sidebarOverlay",
  ];
  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      if (el.id === "exam-bar" || el.classList.contains("exam-bar")) return;
      if (visible) {
        el.style.removeProperty("display");
        el.style.removeProperty("visibility");
        el.style.removeProperty("pointer-events");
      } else {
        el.style.setProperty("display", "none", "important");
        el.style.setProperty("visibility", "hidden", "important");
        el.style.setProperty("pointer-events", "none", "important");
      }
    });
  });
  if (!visible) {
    document.getElementById("sidebar")?.classList.remove("open");
    document.getElementById("sidebarOverlay")?.classList.remove("show");
    document.body.style.overflow = "";
  }
}

function createExamBottomBar() {
  let bar = document.getElementById("exam-bottom-bar");
  if (bar) return bar;

  bar = document.createElement("div");
  bar.id = "exam-bottom-bar";
  bar.setAttribute("role", "toolbar");
  bar.setAttribute("aria-label", "Test yordamchi paneli");
  bar.innerHTML = `
    <button type="button" class="exam-tool" id="exam-tool-flag" title="Belgilash">
      <i class="bi bi-flag"></i><span>Flag</span>
    </button>
    <button type="button" class="exam-tool" id="exam-tool-notes" title="Izoh / notes">
      <i class="bi bi-journal-text"></i><span>Notes</span>
    </button>
    <button type="button" class="exam-tool" id="exam-tool-font" title="Matn o'lchami">
      <i class="bi bi-fonts"></i><span>Font</span>
    </button>
    <button type="button" class="exam-tool" id="exam-tool-pause" title="Taymerni to'xtatish / davom">
      <i class="bi bi-pause-circle"></i><span>Pause</span>
    </button>
    <button type="button" class="exam-tool" id="exam-tool-nav" title="Savollar">
      <i class="bi bi-grid-3x3-gap"></i><span>Savollar</span>
    </button>
    <button type="button" class="exam-tool" id="exam-tool-lab" title="Tezkor yordam">
      <i class="bi bi-heart-pulse"></i><span>Labs</span>
    </button>
    <button type="button" class="exam-tool danger-tool" id="exam-tool-stop" title="Chiqish">
      <i class="bi bi-x-circle"></i><span>Chiqish</span>
    </button>
  `;
  document.body.appendChild(bar);

  document.getElementById("exam-tool-flag").onclick = () => toggleExamFlag();
  document.getElementById("exam-tool-notes").onclick = () => openExamNotes();
  document.getElementById("exam-tool-font").onclick = () => cycleExamFontSize();
  document.getElementById("exam-tool-pause").onclick = () => toggleExamTimerPause();
  document.getElementById("exam-tool-nav").onclick = () => openExamNavigator();
  document.getElementById("exam-tool-lab").onclick = () => openExamLabHelper();
  document.getElementById("exam-tool-stop").onclick = () => stopTest();

  ensureExamSelectionToolbar();
  return bar;
}

function showExamBottomBar() {
  const bar = createExamBottomBar();
  bar.style.display = "flex";
  updateExamBottomBar();
}

function hideExamBottomBar() {
  const bar = document.getElementById("exam-bottom-bar");
  if (bar) bar.style.display = "none";
  examHighlightMode = false;
  examTimerPaused = false;
  document.body.classList.remove("exam-highlight-mode");
  hideExamSelectionToolbar();
}

function updateExamBottomBar() {
  const flagBtn = document.getElementById("exam-tool-flag");
  const pauseBtn = document.getElementById("exam-tool-pause");

  const flagged = examFlaggedQuestions.has(currentIndex);
  if (flagBtn) {
    flagBtn.classList.toggle("flagged", flagged);
    flagBtn.classList.toggle("active", flagged);
    flagBtn.innerHTML = flagged
      ? `<i class="bi bi-flag-fill"></i><span>Flag</span>`
      : `<i class="bi bi-flag"></i><span>Flag</span>`;
  }
  if (pauseBtn) {
    pauseBtn.classList.toggle("active", examTimerPaused);
    pauseBtn.innerHTML = examTimerPaused
      ? `<i class="bi bi-play-circle"></i><span>Davom</span>`
      : `<i class="bi bi-pause-circle"></i><span>Pause</span>`;
  }
}

function toggleExamFlag() {
  if (examFlaggedQuestions.has(currentIndex)) examFlaggedQuestions.delete(currentIndex);
  else examFlaggedQuestions.add(currentIndex);
  updateExamBottomBar();
  updateExamFlagBadge();
}

function updateExamFlagBadge() {
  const container = document.getElementById("question-container");
  if (!container) return;
  let badge = container.querySelector(".exam-flag-badge");
  const flagged = examFlaggedQuestions.has(currentIndex);
  if (flagged && !badge) {
    badge = document.createElement("div");
    badge.className = "exam-flag-badge";
    badge.innerHTML = `<i class="bi bi-flag-fill"></i> Belgilangan savol`;
    container.insertBefore(badge, container.firstChild);
  } else if (!flagged && badge) {
    badge.remove();
  }
}

function toggleExamTimerPause() {
  examTimerPaused = !examTimerPaused;
  updateExamBottomBar();
  if (examTimerPaused) clearInterval(timer);
  else startCaseTimer();
}

function cycleExamFontSize() {
  const steps = [0.9, 1, 1.12, 1.25];
  const i = steps.indexOf(examFontScale);
  examFontScale = steps[(i + 1) % steps.length];
  document.documentElement.style.setProperty("--exam-font-scale", String(examFontScale));
}

function openExamNotes() {
  let modal = document.getElementById("examNotesModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "examNotesModal";
    modal.className = "modal fade";
    modal.tabIndex = -1;
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 rounded-4">
          <div class="modal-header border-0">
            <h5 class="modal-title fw-bold">Savol izohi</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <textarea id="examNotesInput" class="form-control" rows="6" placeholder="Bu savol bo'yicha eslatma..."></textarea>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Yopish</button>
            <button type="button" class="btn btn-success" id="examNotesSave">Saqlash</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modal);
    document.getElementById("examNotesSave").onclick = () => {
      const val = document.getElementById("examNotesInput")?.value || "";
      examNotes[currentIndex] = val;
      bootstrap.Modal.getInstance(modal)?.hide();
    };
  }
  document.getElementById("examNotesInput").value = examNotes[currentIndex] || "";
  bootstrap.Modal.getOrCreateInstance(modal).show();
}

function openExamLabHelper() {
  let modal = document.getElementById("examLabModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "examLabModal";
    modal.className = "modal fade";
    modal.tabIndex = -1;
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 rounded-4">
          <div class="modal-header border-0">
            <h5 class="modal-title fw-bold">Tezkor yordam</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <div class="col-md-6">
                <div class="card border-0 bg-light h-100">
                  <div class="card-body">
                    <h6 class="fw-bold">Asosiy lab qiymatlari</h6>
                    <ul class="small mb-0 text-secondary" style="line-height:1.7">
                      <li>Na⁺ 135–145 · K⁺ 3.5–5.0</li>
                      <li>Cl⁻ 98–106 · HCO₃⁻ 22–28</li>
                      <li>BUN 7–20 · Creatinine 0.6–1.2</li>
                      <li>Glucose 70–100 · HbA1c &lt;5.7%</li>
                      <li>Hb ♂ 13.5–17.5 · ♀ 12–16</li>
                      <li>WBC 4.5–11 · Platelets 150–450</li>
                      <li>pH 7.35–7.45 · PaCO₂ 35–45 · PaO₂ 80–100</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card border-0 bg-light h-100">
                  <div class="card-body">
                    <h6 class="fw-bold">Case yondashuv</h6>
                    <ol class="small mb-0 text-secondary" style="line-height:1.7">
                      <li>Asosiy shikoyat va vaqt oralig'i</li>
                      <li>Hayot uchun xavfli holatlarni chiqarish</li>
                      <li>Eng ehtimoliy tashxis (1–2 ta)</li>
                      <li>Keyingi eng yaxshi qadam (test / davolash)</li>
                      <li>Chalg'ituvchi variantlarni X bilan chiqarish</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modal);
  }
  bootstrap.Modal.getOrCreateInstance(modal).show();
}

function openExamNavigator() {
  const total = currentTest.length || 0;
  if (!total) return;

  let solved = 0, correct = 0, wrong = 0;
  for (let i = 0; i < total; i++) {
    const r = examQuestionResults[i];
    if (!r) continue;
    solved++;
    if (r.status === "correct") correct++;
    else wrong++;
  }

  let html = `
    <div class="d-flex flex-wrap gap-2 justify-content-center mb-3 small">
      <span class="badge text-bg-success">To'g'ri: ${correct}</span>
      <span class="badge text-bg-danger">Xato: ${wrong}</span>
      <span class="badge text-bg-secondary">Yechilmagan: ${total - solved}</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(44px,1fr));gap:8px;max-width:360px;margin:0 auto;">`;

  for (let i = 0; i < total; i++) {
    const r = examQuestionResults[i];
    const isCurrent = i === currentIndex;
    const flagged = examFlaggedQuestions.has(i);
    let cls = "exam-nav-btn nav-unsolved";
    if (r?.status === "correct") cls = "exam-nav-btn nav-correct";
    else if (r?.status === "wrong") cls = "exam-nav-btn nav-wrong";
    if (isCurrent) cls += " nav-current";
    if (flagged) cls += " nav-flagged";
    html += `<button type="button" class="${cls}" data-nav-q="${i}">${i + 1}</button>`;
  }
  html += `</div>
    <p class="mb-0 mt-3 text-center text-muted small">
      Yashil = to'g'ri · Qizil = xato · Kulrang = yechilmagan · Nuqta = flag<br>
      Yechilgan savolni qayta yechib bo'lmaydi (faqat ko'rish).
    </p>`;

  let modal = document.getElementById("examNavModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "examNavModal";
    modal.className = "modal fade";
    modal.tabIndex = -1;
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 rounded-4">
          <div class="modal-header border-0">
            <h5 class="modal-title fw-bold">Savollar</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" id="examNavBody"></div>
        </div>
      </div>`;
    document.body.appendChild(modal);
  }
  const body = document.getElementById("examNavBody");
  body.innerHTML = html;
  body.querySelectorAll("[data-nav-q]").forEach((btn) => {
    btn.onclick = () => {
      const idx = Number(btn.getAttribute("data-nav-q"));
      bootstrap.Modal.getInstance(modal)?.hide();
      jumpToExamQuestion(idx);
    };
  });
  bootstrap.Modal.getOrCreateInstance(modal).show();
}

function jumpToExamQuestion(idx) {
  if (idx < 0 || idx >= currentTest.length) return;
  saveTestProgress();
  currentIndex = idx;
  const prev = examQuestionResults[idx];
  if (prev) {
    // already solved — review only
    answerChecked = true;
    selectedAnswerIndex = prev.selected;
    showQuestion(true);
  } else {
    answerChecked = false;
    selectedAnswerIndex = null;
    showQuestion(false);
  }
}

function toggleOptionStrike(btn, e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  btn.classList.toggle("exam-struck");
}

/* ---------- Text selection toolbar (highlight / copy / unhighlight / translate soon) ---------- */
function ensureExamSelectionToolbar() {
  if (document.getElementById("exam-sel-toolbar")) return;
  const tip = document.createElement("div");
  tip.id = "exam-sel-toolbar";
  tip.innerHTML = `
    <button type="button" data-act="highlight"><i class="bi bi-highlighter"></i> Highlight</button>
    <button type="button" data-act="unhighlight"><i class="bi bi-eraser"></i> Unhighlight</button>
    <button type="button" data-act="copy"><i class="bi bi-clipboard"></i> Copy</button>
    <button type="button" class="locked" data-act="translate"><i class="bi bi-translate"></i> Translate · soon</button>
  `;
  document.body.appendChild(tip);
  tip.addEventListener("mousedown", (e) => e.preventDefault());
  tip.querySelectorAll("button").forEach((b) => {
    b.onclick = () => handleExamSelectionAction(b.getAttribute("data-act"));
  });

  document.addEventListener("mouseup", onExamTextSelection);
  document.addEventListener("touchend", onExamTextSelection, { passive: true });
  document.addEventListener("scroll", hideExamSelectionToolbar, true);
}

function hideExamSelectionToolbar() {
  const tip = document.getElementById("exam-sel-toolbar");
  if (tip) tip.style.display = "none";
  examSelectionRange = null;
}

function onExamTextSelection() {
  if (!document.body.classList.contains("exam-mode-active")) return;
  setTimeout(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) {
      hideExamSelectionToolbar();
      return;
    }
    const node = sel.anchorNode;
    const container = document.getElementById("question-container");
    if (!container || !node || !container.contains(node)) {
      hideExamSelectionToolbar();
      return;
    }
    examSelectionRange = sel.getRangeAt(0).cloneRange();
    const rect = examSelectionRange.getBoundingClientRect();
    const tip = document.getElementById("exam-sel-toolbar");
    if (!tip) return;
    tip.style.display = "flex";
    const top = window.scrollY + rect.top - tip.offsetHeight - 10;
    const left = window.scrollX + rect.left + rect.width / 2;
    tip.style.top = `${Math.max(8, top)}px`;
    tip.style.left = `${Math.min(window.innerWidth - 40, Math.max(40, left))}px`;
  }, 10);
}

function handleExamSelectionAction(act) {
  if (!examSelectionRange) return;
  if (act === "translate") {
    alert("Tarjima tez orada qo'shiladi (soon).");
    return;
  }
  if (act === "copy") {
    const text = examSelectionRange.toString();
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text);
    else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    hideExamSelectionToolbar();
    return;
  }
  if (act === "highlight") {
    try {
      const mark = document.createElement("mark");
      mark.className = "exam-hl";
      examSelectionRange.surroundContents(mark);
    } catch (e) {
      // partial nodes — fallback extract
      try {
        const frag = examSelectionRange.extractContents();
        const mark = document.createElement("mark");
        mark.className = "exam-hl";
        mark.appendChild(frag);
        examSelectionRange.insertNode(mark);
      } catch (err) {
        console.warn("highlight failed", err);
      }
    }
    window.getSelection()?.removeAllRanges();
    hideExamSelectionToolbar();
    return;
  }
  if (act === "unhighlight") {
    const root = examSelectionRange.commonAncestorContainer;
    const el = root.nodeType === 1 ? root : root.parentElement;
    const marks = el?.closest?.("#question-container")?.querySelectorAll("mark.exam-hl") || [];
    marks.forEach((m) => {
      if (!examSelectionRange.intersectsNode(m)) return;
      const parent = m.parentNode;
      while (m.firstChild) parent.insertBefore(m.firstChild, m);
      parent.removeChild(m);
      parent.normalize();
    });
    window.getSelection()?.removeAllRanges();
    hideExamSelectionToolbar();
  }
}

/** Use the bar already in casesmodal (#exam-bar / .tg-test-header). No injected top navbar. */
function showExamHeader() {
  ensureExamHeaderStyles();
  document.body.classList.add("exam-mode-active");
  setSiteChromeVisible(false);

  const bar = document.getElementById("exam-bar") || document.querySelector("#test-screen .tg-test-header");
  if (bar) {
    bar.classList.add("exam-bar");
    bar.style.display = "flex";
  }

  const prevBtn = document.getElementById("exam-prev-btn");
  const nextBtn = document.getElementById("exam-next-btn");
  const stopBtn = document.getElementById("exam-stop-btn");
  if (prevBtn) prevBtn.onclick = () => previousQuestion();
  if (nextBtn) nextBtn.onclick = () => nextQuestion();
  if (stopBtn) stopBtn.onclick = () => stopTest();

  showExamBottomBar();
  updateExamHeader();
}

function hideExamHeader() {
  document.body.classList.remove("exam-mode-active", "exam-strike-mode", "exam-highlight-mode");
  setSiteChromeVisible(true);
  hideExamBottomBar();
}

function updateExamHeader() {
  const titleEl = document.getElementById("test-title");
  const timerEl = document.getElementById("timer");
  const prevBtn = document.getElementById("exam-prev-btn");
  const nextBtn = document.getElementById("exam-next-btn");

  if (titleEl) {
    titleEl.innerText = `${Math.min(currentIndex + 1, currentTest.length)} / ${currentTest.length || 1}`;
  }

  if (timerEl) {
    timerEl.innerHTML = `⏱ ${formatTime(timeLeft)}`;
    timerEl.classList.remove("warning", "danger");
    if (timeLeft <= 60) timerEl.classList.add("danger");
    else if (timeLeft <= 180) timerEl.classList.add("warning");
  }

  if (prevBtn) prevBtn.disabled = currentIndex <= 0;

  if (nextBtn) {
    const isLast = currentIndex >= currentTest.length - 1;
    nextBtn.innerHTML = isLast && answerChecked
      ? `<span class="exam-btn-label">Natija </span><i class="bi bi-flag-fill"></i>`
      : `<span class="exam-btn-label">Keyingi </span><i class="bi bi-chevron-right"></i>`;
  }

  updateExamBottomBar();
}


function previousQuestion() {
  if (currentIndex <= 0) return;
  saveTestProgress();
  currentIndex--;
  answerChecked = true;
  selectedAnswerIndex = null;
  showQuestion(true);
}

function showQuestion(isNavigatingBack = false) {
  if (currentIndex >= currentTest.length) {
    clearInterval(timer);
    hideExamHeader();
    showResultPopup();
    return;
  }

  if (!isNavigatingBack) {
    selectedAnswerIndex = null;
    answerChecked = false;
  }

  const q = currentTest[currentIndex];

  showExamHeader();
  updateExamHeader();

  const container = document.getElementById("question-container");
  if (!container) return;

  const photoHtml = q.photo
    ? `<div class="mcq-photo"><img src="${q.photo}" alt="Savol rasmi" loading="eager"></div>`
    : "";

  container.innerHTML = `
    <div class="mcq-question">${q.q}</div>
    ${photoHtml}
    <div id="answer-buttons" class="mcq-options"></div>
    <div id="case-controls" class="mcq-controls"></div>`;

  const answerButtons = document.getElementById("answer-buttons");
  const letters = ["A", "B", "C", "D", "E", "F"];

  const locked = !!examQuestionResults[currentIndex];

  q.a.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mcq-option";
    btn.innerHTML = `
      <div class="mcq-radio"></div>
      <div class="mcq-option-letter">${letters[index] || ""}.</div>
      <div class="mcq-option-text">${ans}</div>
      <span class="exam-option-x" title="Chizib tashlash" aria-label="Chizib tashlash"><i class="bi bi-x"></i></span>
    `;
    const xBtn = btn.querySelector(".exam-option-x");
    xBtn.addEventListener("click", (e) => toggleOptionStrike(btn, e));

    btn.onclick = (e) => {
      if (e.target.closest(".exam-option-x")) return;
      if (locked || answerChecked) return;
      selectAnswer(index);
    };
    answerButtons.appendChild(btn);
  });

  // Restore result if already solved this session
  if (locked || (isNavigatingBack && answerChecked)) {
    const result = examQuestionResults[currentIndex];
    const buttons = document.querySelectorAll("#answer-buttons .mcq-option");
    buttons.forEach((btn) => {
      btn.disabled = true;
    });
    const correctIndex = q.correct;
    const selectedIndex = result?.selected ?? selectedAnswerIndex;
    if (typeof correctIndex === "number" && buttons[correctIndex]) {
      buttons[correctIndex].classList.add("correct");
    }
    if (
      typeof selectedIndex === "number" &&
      selectedIndex !== correctIndex &&
      buttons[selectedIndex]
    ) {
      buttons[selectedIndex].classList.add("wrong");
    }
    answerChecked = true;
    selectedAnswerIndex = selectedIndex;
  }

  renderCaseControls();
  updateExamHeader();
  updateExamFlagBadge();
}
function selectAnswer(selectedIndex) {
  if (answerChecked || examQuestionResults[currentIndex]) return;

  const buttons = document.querySelectorAll("#answer-buttons .mcq-option");
  if (!buttons[selectedIndex]) return;

  selectedAnswerIndex = selectedIndex;

  buttons.forEach((btn, index) => {
    btn.classList.toggle("active", index === selectedIndex);
  });

  const checkBtn = document.getElementById("check-answer-btn");
  if (checkBtn) checkBtn.disabled = false;
}

function checkCurrentAnswer() {
  if (answerChecked || selectedAnswerIndex === null) return;

  answerChecked = true;
  const q = currentTest[currentIndex];
  const buttons = document.querySelectorAll("#answer-buttons .mcq-option");
  const correctIndex = q.correct;
  const selectedIndex = selectedAnswerIndex;

  buttons.forEach((btn) => {
    btn.disabled = true;
    btn.classList.remove("active");
  });

  if (buttons[correctIndex]) {
    buttons[correctIndex].classList.add("correct");
  }

  if (selectedIndex !== correctIndex && buttons[selectedIndex]) {
    buttons[selectedIndex].classList.add("wrong");

    mistakes.push({
      q: q.q,
      photo: q.photo,
      a: q.a,
      correct: correctIndex,
      selected: selectedIndex,
      explanation: q.explanation || null,
      testName: currentTestName || "unknown",
      prepSessionId: window.__prepContext?.sessionId || null,
      prepSessionName: window.__prepContext?.sessionName || null,
      prepSubjectId: window.__prepContext?.subjectId || null,
    });
  }

  if (selectedIndex === correctIndex) {
    score++;
    examQuestionResults[currentIndex] = { status: "correct", selected: selectedIndex };
    if (isReviewingStoredMistakes && q?.id) {
      resolveStoredMistakeById(q.id);
    }
  } else {
    examQuestionResults[currentIndex] = { status: "wrong", selected: selectedIndex };
  }

  saveTestProgress();
  renderCaseControls();
  updateExamHeader();
}

function renderCaseControls() {
  const controls = document.getElementById("case-controls");
  if (!controls) return;

  const q = currentTest[currentIndex];
  const hasExplanation =
    typeof q?.explanation === "string" && q.explanation.trim().length > 0;

  if (!answerChecked) {
    controls.innerHTML = `
      <button type="button" id="check-answer-btn" class="mcq-check-btn" disabled>
        Tekshirish
      </button>`;
    const checkBtn = document.getElementById("check-answer-btn");
    if (checkBtn) checkBtn.onclick = checkCurrentAnswer;
    return;
  }

  controls.innerHTML = `
    <button type="button" id="next-question-btn" class="mcq-next-btn">
      ${currentIndex + 1 >= currentTest.length ? "Natijani ko'rish" : "Keyingi savol"}
    </button>
    ${
      hasExplanation
        ? `<div class="mcq-explanation">
            <div class="mcq-explanation-title"><i class="bi bi-lightbulb"></i> Izoh</div>
            <div class="mcq-explanation-body">${q.explanation}</div>
          </div>`
        : ""
    }`;

  const nextBtn = document.getElementById("next-question-btn");
  if (nextBtn) nextBtn.onclick = nextQuestion;
}

function finishCaseByTime() {
  if (currentIndex >= currentTest.length) return;

  if (!answerChecked) {
    const q = currentTest[currentIndex];
    const correctIndex = q.correct;
    const selectedIndex =
      typeof selectedAnswerIndex === "number" ? selectedAnswerIndex : -1;
    const buttons = document.querySelectorAll("#answer-buttons .mcq-option");

    buttons.forEach((btn) => {
      btn.disabled = true;
      btn.classList.remove("active");
    });

    if (buttons[correctIndex]) {
      buttons[correctIndex].classList.add("correct");
    }

    if (selectedIndex !== correctIndex) {
      mistakes.push({
        q: q.q,
        photo: q.photo,
        a: q.a,
        correct: correctIndex,
        selected: selectedIndex,
        explanation: q.explanation || null,
        testName: currentTestName || "unknown",
        prepSessionId: window.__prepContext?.sessionId || null,
        prepSessionName: window.__prepContext?.sessionName || null,
        prepSubjectId: window.__prepContext?.subjectId || null,
      });
      examQuestionResults[currentIndex] = { status: "wrong", selected: selectedIndex };
    } else {
      score++;
      examQuestionResults[currentIndex] = { status: "correct", selected: selectedIndex };
    }

    answerChecked = true;
    saveTestProgress();
    renderCaseControls();
  }
}

function handleImageOpen(e) {
  const img = e.target.closest("img");
  if (!img) return;
  const modalImg = document.getElementById("modalImage");
  if (!modalImg) return;
  modalImg.src = img.src;
  const modalEl = document.getElementById("imageModal");
  if (modalEl) bootstrap.Modal.getOrCreateInstance(modalEl).show();
}

// function selectAnswer(selectedIndex) {
//   if (answerChecked) return;

//   const buttons = document.querySelectorAll("#answer-buttons button");
//   if (!buttons[selectedIndex]) return;

//   selectedAnswerIndex = selectedIndex;

//   buttons.forEach((btn, index) => {
//     btn.classList.remove("active");
//     btn.innerHTML = `<i class="bi bi-circle"></i><span>${currentTest[currentIndex].a[index]}</span>`;
//     if (index === selectedIndex) {
//       btn.classList.add("active");
//       btn.innerHTML = `<i class="bi bi-check-circle-fill"></i><span>${currentTest[currentIndex].a[index]}</span>`;
//     }
//   });

//   const checkBtn = document.getElementById("check-answer-btn");
//   if (checkBtn) checkBtn.disabled = false;
// }

// function checkCurrentAnswer() {
//   if (answerChecked || selectedAnswerIndex === null) return;

//   answerChecked = true;
//   const q = currentTest[currentIndex];
//   const buttons = document.querySelectorAll("#answer-buttons button");
//   const correctIndex = q.correct;
//   const selectedIndex = selectedAnswerIndex;

//   buttons.forEach((btn) => (btn.disabled = true));

//   if (buttons[correctIndex]) {
//     buttons[correctIndex].classList.remove("active");
//     buttons[correctIndex].classList.add("btn-success");
//     buttons[correctIndex].innerHTML =
//       `<i class="bi bi-check-circle-fill"></i><span>${q.a[correctIndex]}</span>`;
//   }

//   if (selectedIndex !== correctIndex && buttons[selectedIndex]) {
//     buttons[selectedIndex].classList.remove("active");
//     buttons[selectedIndex].classList.add("btn-danger");
//     buttons[selectedIndex].innerHTML =
//       `<i class="bi bi-x-circle-fill"></i><span>${q.a[selectedIndex]}</span>`;

//     mistakes.push({
//       q: q.q,
//       photo: q.photo,
//       a: q.a,
//       correct: correctIndex,
//       selected: selectedIndex,
//       explanation: q.explanation || null,
//       testName: currentTestName || "unknown",
//       prepSessionId: window.__prepContext?.sessionId || null,
//       prepSessionName: window.__prepContext?.sessionName || null,
//       prepSubjectId: window.__prepContext?.subjectId || null,
//     });
//   }

//   if (selectedIndex === correctIndex) {
//     score++;
//     if (isReviewingStoredMistakes && q?.id) {
//       resolveStoredMistakeById(q.id);
//     }
//   }

//   // HAR BIR JAVOBDAN KEYIN PROGRESS
//   saveTestProgress();

//   renderCaseControls();
// }

function nextQuestion() {
  if (!answerChecked) return;
  currentIndex++;
  showQuestion();
}

function startCaseTimer() {
  clearInterval(timer);
  examTimerPaused = false;
  updateExamHeader();

  timer = setInterval(() => {
    if (examTimerPaused) return;

    timeLeft--;
    updateExamHeader();

    if (timeLeft % 15 === 0) saveTestProgress();

    if (timeLeft <= 0) {
      clearInterval(timer);
      finishCaseByTime();
      hideExamHeader();
      showResultPopup();
    }
  }, 1000);
}

// function finishCaseByTime() {
//   if (currentIndex >= currentTest.length) return;

//   if (!answerChecked) {
//     const q = currentTest[currentIndex];
//     const correctIndex = q.correct;
//     const selectedIndex =
//       typeof selectedAnswerIndex === "number" ? selectedAnswerIndex : -1;
//     const buttons = document.querySelectorAll("#answer-buttons button");

//     buttons.forEach((btn) => (btn.disabled = true));

//     if (buttons[correctIndex]) {
//       buttons[correctIndex].classList.remove("active");
//       buttons[correctIndex].classList.add("btn-success");
//       buttons[correctIndex].innerHTML =
//         `<i class="bi bi-check-circle-fill"></i><span>${q.a[correctIndex]}</span>`;
//     }

//     if (selectedIndex !== correctIndex) {
//       mistakes.push({
//         q: q.q,
//         photo: q.photo,
//         a: q.a,
//         correct: correctIndex,
//         selected: selectedIndex,
//         explanation: q.explanation || null,
//         testName: currentTestName || "unknown",
//         prepSessionId: window.__prepContext?.sessionId || null,
//         prepSessionName: window.__prepContext?.sessionName || null,
//         prepSubjectId: window.__prepContext?.subjectId || null,
//       });
//     } else {
//       score++;
//     }

//     answerChecked = true;
//     saveTestProgress();
//     renderCaseControls();
//   }
// }

function stopTest() {
  const modalEl = document.getElementById("exitTestModal");
  if (!modalEl) return;
  const modal = new bootstrap.Modal(modalEl);
  modal.show();

  document.getElementById("confirmExitTest").onclick = function () {
    clearInterval(timer);

    // Partial natija saqlash
    if (currentIndex > 0 || answerChecked || score > 0 || mistakes.length > 0) {
      try {
        saveTestResult({
          testName: currentTestName || "unknown",
          total: currentTest.length,
          correct: score,
          mistakes: mistakes.slice(),
          partial: true,
        });
      } catch (e) {
        console.error(e);
      }
    }

    clearTestProgress();

    currentTest = [];
    currentIndex = 0;
    score = 0;
    selectedAnswerIndex = null;
    answerChecked = false;
    timeLeft = 0;

    hideExamHeader();

    document.activeElement?.blur();
    document.getElementById("test-screen")?.classList.add("d-none");
    document.getElementById("test-selection")?.classList.remove("d-none");

    const container = document.getElementById("question-container");
    if (container) container.innerHTML = "";

    modal.hide();
  };
}
window.stopTest = stopTest;

function showResultPopup() {
  hideExamHeader();
  document.getElementById("test-screen")?.classList.add("d-none");

  const total = currentTest.length;
  const correct = score;
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100);

  const modalEl = document.getElementById("resultModal");
  if (!modalEl) return;

  const modal = new bootstrap.Modal(modalEl, {
    backdrop: "static",
    keyboard: false,
  });

  try {
    saveTestResult({
      testName: currentTestName || "unknown",
      total,
      correct,
      mistakes: mistakes ? mistakes.slice() : [],
    });

    const prepContext = getPrepContext();
    if (prepContext) {
      recordPrepSessionResult(prepContext.sessionId, prepContext.subjectId, {
        testName: currentTestName || "unknown",
        total,
        correct,
        mistakes: mistakes ? mistakes.slice() : [],
      });
    }
  } catch (e) {
    console.error("Error saving test result:", e);
  }

  clearTestProgress();

  modal.show();
  renderTestStats();
  startResultAnimation(percent, correct, total);
}

function startResultAnimation(targetPercent, correct, total) {
  const circle = document.querySelector(".progress-ring__circle");
  const percentText = document.getElementById("percent-text");
  const resultText = document.getElementById("final-score");
  if (!circle || !percentText) return;

  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  let start = null;
  const duration = 3000;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentPercent = Math.floor(eased * targetPercent);
    const offset = circumference - (currentPercent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    percentText.innerText = currentPercent;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else if (resultText) {
      resultText.innerHTML = `<div class="tg-final-result">${correct} / ${total}</div>`;
    }
  }
  requestAnimationFrame(animate);
}

function closeResult() {
  const modalEl = document.getElementById("resultModal");
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();

  isReviewingStoredMistakes = false;

  const prepContext = getPrepContext();
  if (prepContext) {
    window.location.href = `/preparation/prep.html?id=${prepContext.sessionId}`;
    return;
  }

  document.getElementById("test-screen")?.classList.add("d-none");
  document.getElementById("test-selection")?.classList.remove("d-none");
  renderTestStats();

  currentTest = [];
  currentIndex = 0;
  score = 0;
  selectedAnswerIndex = null;
  answerChecked = false;
  clearInterval(timer);

  hideExamHeader();
}

window.startTest = closeResult;

function shareResult() {
  const text = `Pulse Medical\n\nMy result:\n\n${score} / ${currentTest.length}`;
  const url = window.location.href;
  const tgLink = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  window.open(tgLink, "_blank");
}

/* ============================================================
   START TEST
============================================================ */

async function startTest(testName) {
  console.log("START TEST");
  initPrepContext();
  isReviewingStoredMistakes = false;
  window.Data?.smartSync?.();

  if (window.showAdModal) {
    await window.showAdModal();
  }

  const availableTests = window.tests || {};
  const selectedTest = availableTests[testName];

  if (
    selectedTest &&
    typeof selectedTest === "object" &&
    selectedTest.pro === true
  ) {
    const allowed = await checkProAccess();
    if (!allowed) return;

    try {
      const testRef = doc(db, "testSets", "anatomy_tests");
      const snapshot = await getDoc(testRef);
      if (!snapshot.exists()) return;

      const firestoreData = snapshot.data();
      const firestoreTest = firestoreData?.[testName];
      if (!firestoreTest) return;

      let convertedTest = null;
      if (Array.isArray(firestoreTest)) convertedTest = firestoreTest;
      else if (Array.isArray(firestoreTest.questions))
        convertedTest = firestoreTest.questions;
      else if (Array.isArray(firestoreTest.data))
        convertedTest = firestoreTest.data;

      if (!convertedTest) return;
      currentTest = getRandomTest(convertedTest);
    } catch (error) {
      console.error("PRO test error:", error);
      return;
    }
  } else {
    if (Array.isArray(selectedTest)) {
      currentTest = getRandomTest(selectedTest);
    } else {
      currentTest = selectedTest || [];
    }
  }

  currentTestName = testName;
  currentIndex = 0;
  score = 0;
  mistakes = [];
  answerChecked = false;
  selectedAnswerIndex = null;
  examQuestionResults = {};
  examFlaggedQuestions = new Set();
  examNotes = {};
  examFontScale = 1;
  document.documentElement.style.setProperty("--exam-font-scale", "1");

  // UMUMIY TIMER: har bir savolga 3 daqiqa
  totalTestTime = Math.max(currentTest.length * 180, 60);
  timeLeft = totalTestTime;

  // Progress dan davom ettirish
  const saved = loadTestProgress(testName);
  if (
    saved &&
    saved.currentIndex > 0 &&
    saved.currentIndex < currentTest.length
  ) {
    const resume = confirm(
      `Oldingi progress topildi (${saved.score}/${saved.total} to‘g‘ri, savol ${saved.currentIndex + 1}).\nDavom etasizmi?`,
    );
    if (resume) {
      currentIndex = saved.currentIndex;
      score = saved.score || 0;
      mistakes = saved.mistakes || [];
      timeLeft = saved.timeLeft > 0 ? saved.timeLeft : totalTestTime;
    } else {
      clearTestProgress();
    }
  }

  const selection = document.getElementById("test-selection");
  const screen = document.getElementById("test-screen");
  const result = document.getElementById("result");

  if (selection) selection.classList.add("d-none");
  if (screen) screen.classList.remove("d-none");
  if (result) result.classList.add("d-none");

  const title = document.getElementById("test-title");
  const question = document.getElementById("question-container");

  if (!title || !question) {
    console.error("Test screen elementlari topilmadi");
    return;
  }

  showQuestion();
  startCaseTimer();
}

window.startTest = startTest;

function reviewMistakes() {
  if (mistakes.length === 0) {
    alert("Congratulations! You had no mistakes");
    return;
  }

  currentTest = [...mistakes];
  currentIndex = 0;
  score = 0;
  mistakes = [];

  const modalEl = document.getElementById("resultModal");
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();

  document.getElementById("test-screen")?.classList.remove("d-none");

  totalTestTime = Math.max(currentTest.length * 180, 60);
  timeLeft = totalTestTime;

  showQuestion();
  startCaseTimer();
}

// ============================================================
// COMMON MODALS
// ============================================================

fetch("/assets/modals/casesmodal.html")
  .then((r) => r.text())
  .then((html) => {
    const el = document.getElementById("common-modals");
    if (el) el.innerHTML = html;
    setTimeout(() => initAutoTest(), 0);
  });

async function initAutoTest() {
  loadDataScript(async () => {
    await waitForModal();
    try {
      if (window.Data?.ensureUser) await Data.ensureUser();
    } catch (e) {
      console.error(e);
    }

    const params = new URLSearchParams(window.location.search);
    const testName = params.get("test");
    const prepTest = params.get("prepTest");

    if (testName && window.tests?.[testName]) startTest(testName);
    else if (prepTest && window.tests?.[prepTest]) startTest(prepTest);
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
  new bootstrap.Modal(modalEl).show();
}

function openSidebar() {
  document.getElementById("sidebar")?.classList.add("open");
  document.getElementById("sidebarOverlay")?.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  document.getElementById("sidebar")?.classList.remove("open");
  document.getElementById("sidebarOverlay")?.classList.remove("show");
  document.body.style.overflow = "";
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");
  initTestStats();
  initPrepContext();
  showPrepBanner();

  setTimeout(() => {
    const form = document.getElementById("feedbackForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
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
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("feedbackModal"),
        );
        modal?.hide();
        form.reset();
        alert("Rahmat");
      } catch (err) {
        console.error("submit error:", err);
      }
    });
  }, 300);
});

window.closeResult = closeResult;
window.reviewMistakes = reviewMistakes;
window.generateCertificate = generateCertificate;
window.shareResult = shareResult;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.toggleExamFlag = toggleExamFlag;
window.toggleExamTimerPause = toggleExamTimerPause;
window.openExamNavigator = openExamNavigator;
window.openExamNotes = openExamNotes;
window.openExamLabHelper = openExamLabHelper;
window.cycleExamFontSize = cycleExamFontSize;
window.selectAnswer = selectAnswer;
window.checkCurrentAnswer = checkCurrentAnswer;
window.stopTest = stopTest;
window.startTest = startTest;
window.openXatolarModal = openXatolarModal;
window.downloadXatolar = downloadXatolar;
window.startXatolarReview = startXatolarReview;
window.openGroupMistakes = openGroupMistakes;
window.viewMistake = viewMistake;
window.viewQuestion = viewQuestion;
window.showExamHeader = showExamHeader;
window.hideExamHeader = hideExamHeader;
