// ────────────────────────────────────────────────────────────────
//  welcomer.js – page‑specific help modal + persistent button
//  Requires: welcomerdata.js (defines WELCOMER_DATA)
//  Usage: add <script src="welcomer.js"></script> after welcomerdata.js
// ────────────────────────────────────────────────────────────────
(function () {
  "use strict";

  // ─── CONFIG ──────────────────────────────────────────────────
  const STORAGE_PREFIX = "pulse_welcomer_";
  const MODAL_ID = "pulseWelcomerModal";
  const BUTTON_ID = "pulseWelcomerBtn";

  // ─── DETECT CURRENT PAGE ──────────────────────────────────
  let pageKey = "default";
  // Try to get from body data attribute
  const body = document.body;
  if (body.dataset.page) {
    pageKey = body.dataset.page;
  } else {
    // Fallback: use pathname
    const path = window.location.pathname.replace(/^\/|\/$/g, "") || "home";
    const parts = path.split("/");
    pageKey = parts[0] || "home";
  }

  // ─── GET INSTRUCTION DATA ──────────────────────────────────
  let instructions = null;
  if (typeof WELCOMER_DATA !== "undefined" && WELCOMER_DATA[pageKey]) {
    instructions = WELCOMER_DATA[pageKey];
  } else {
    // Fallback default instructions
    instructions = {
      title: "Xush kelibsiz!",
      steps: [
        {
          icon: "bi-info-circle",
          title: "Sahifa bo‘yicha yordam",
          description:
            "Bu yerda siz asosiy vazifalarni bajarishingiz mumkin. Agar yordam kerak bo‘lsa, pastdagi 💬 tugmachani bosing.",
        },
      ],
    };
  }

  // ─── HTML TEMPLATES ──────────────────────────────────────────

  // Modal with step‑by‑step instructions
  const modalHTML = `
        <div id="${MODAL_ID}" class="pulse-modal-overlay" style="display:none;">
            <div class="pulse-modal">
                <div class="pulse-modal-header">
                    <h5><i class="bi bi-question-circle"></i> ${instructions.title}</h5>
                    <button class="pulse-modal-close" id="pulseModalClose">&times;</button>
                </div>
                <div class="pulse-modal-body" id="pulseModalBody">
                    <!-- Steps will be rendered here -->
                </div>
                <div class="pulse-modal-footer">
                    <div class="pulse-progress" id="pulseProgress">
                        ${instructions.steps.map((_, i) => `<span class="${i === 0 ? "active" : ""}"></span>`).join("")}
                    </div>
                    <div class="pulse-nav">
                        <button class="pulse-nav-btn pulse-prev" id="pulsePrev" disabled>⬅ Orqaga</button>
                        <button class="pulse-nav-btn pulse-next" id="pulseNext">Davom etish →</button>
                        <button class="pulse-nav-btn pulse-done" id="pulseDone" style="display:none;">✅ Tushundim</button>
                    </div>
                </div>
            </div>
        </div>
    `;

  // Floating help button
  const buttonHTML = `
        <button id="${BUTTON_ID}" class="pulse-help-btn" title="Yordam">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path>
            </svg>
        </button>
    `;

  // ─── INJECT STYLES ──────────────────────────────────────────
  const style = document.createElement("style");
  style.textContent = `
        /* ── Modal overlay ── */
        .pulse-modal-overlay {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background: rgba(0,0,0,0.55);
            backdrop-filter: blur(6px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: pulseFadeIn 0.3s ease;
        }
        @keyframes pulseFadeIn {
            from { opacity: 0; transform: scale(0.96); }
            to   { opacity: 1; transform: scale(1); }
        }

        .pulse-modal {
            background: #fff;
            border-radius: 28px;
            max-width: 500px;
            width: 100%;
            box-shadow: 0 24px 64px rgba(0,0,0,0.25);
            overflow: hidden;
            animation: pulseSlideUp 0.35s cubic-bezier(.22,1,.36,1);
        }
        @keyframes pulseSlideUp {
            from { transform: translateY(40px); opacity: 0; }
            to   { transform: translateY(0); opacity: 1; }
        }

        .pulse-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px 24px 10px 24px;
            border-bottom: 1px solid #eef2f6;
        }
        .pulse-modal-header h5 {
            margin: 0;
            font-size: 20px;
            font-weight: 700;
            color: #0f172a;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .pulse-modal-header h5 i {
            color: #0d6efd;
        }
        .pulse-modal-close {
            background: none;
            border: none;
            font-size: 28px;
            line-height: 1;
            color: #94a3b8;
            cursor: pointer;
            padding: 0 4px;
            transition: color 0.2s;
        }
        .pulse-modal-close:hover { color: #0f172a; }

        .pulse-modal-body {
            padding: 20px 24px 12px 24px;
            min-height: 120px;
            position: relative;
        }

        .pulse-step {
            display: none;
            animation: pulseStepIn 0.35s ease;
        }
        .pulse-step.active {
            display: block;
        }
        @keyframes pulseStepIn {
            from { opacity: 0; transform: translateX(12px); }
            to   { opacity: 1; transform: translateX(0); }
        }

        .pulse-step-icon {
            font-size: 36px;
            color: #0d6efd;
            margin-bottom: 8px;
            display: block;
        }
        .pulse-step-title {
            font-size: 18px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 6px;
        }
        .pulse-step-desc {
            font-size: 14px;
            line-height: 1.5;
            color: #475569;
            margin: 0;
        }

        .pulse-modal-footer {
            padding: 8px 24px 20px 24px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .pulse-progress {
            display: flex;
            gap: 6px;
            justify-content: center;
        }
        .pulse-progress span {
            height: 4px;
            flex: 1;
            max-width: 40px;
            border-radius: 4px;
            background: #e2e8f0;
            transition: background 0.3s;
        }
        .pulse-progress span.active {
            background: #0f172a;
        }
        .pulse-progress span.done {
            background: #0d6efd;
        }

        .pulse-nav {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        .pulse-nav-btn {
            padding: 8px 20px;
            border-radius: 999px;
            border: none;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.2s, opacity 0.2s;
        }
        .pulse-nav-btn:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }
        .pulse-prev {
            background: #f1f5f9;
            color: #334155;
        }
        .pulse-prev:hover:not(:disabled) { background: #e2e8f0; }

        .pulse-next {
            background: #0f172a;
            color: #fff;
        }
        .pulse-next:hover:not(:disabled) { background: #1e293b; }

        .pulse-done {
            background: #0d6efd;
            color: #fff;
        }
        .pulse-done:hover { background: #0b5ed7; }

        /* ── Floating help button ── */
        .pulse-help-btn {
            position: fixed;
            bottom: 90px;
            right: 20px;
            z-index: 9998;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            background: #0d6efd;
            color: #fff;
            border: none;
            box-shadow: 0 8px 24px rgba(13, 110, 253, 0.4);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .pulse-help-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 32px rgba(13, 110, 253, 0.5);
        }
        .pulse-help-btn svg {
            width: 28px;
            height: 28px;
            stroke: currentColor;
        }

        /* ── Responsive ── */
        @media (max-width: 576px) {
            .pulse-help-btn { bottom: 80px; right: 16px; width: 50px; height: 50px; }
            .pulse-help-btn svg { width: 24px; height: 24px; }
            .pulse-modal { margin: 12px; }
            .pulse-modal-header h5 { font-size: 18px; }
            .pulse-modal-body { padding: 16px 18px 8px; }
            .pulse-modal-footer { padding: 4px 18px 16px; }
            .pulse-step-title { font-size: 16px; }
            .pulse-step-desc { font-size: 13px; }
            .pulse-nav-btn { font-size: 13px; padding: 6px 16px; }
        }
    `;
  document.head.appendChild(style);

  // ─── BUILD DOM ──────────────────────────────────────────────

  // Inject modal
  const modalContainer = document.createElement("div");
  modalContainer.innerHTML = modalHTML;
  document.body.appendChild(modalContainer.firstElementChild);

  // Inject button
  const btnContainer = document.createElement("div");
  btnContainer.innerHTML = buttonHTML;
  document.body.appendChild(btnContainer.firstElementChild);

  // ─── GET REFERENCES ─────────────────────────────────────────

  const modal = document.getElementById(MODAL_ID);
  const closeBtn = document.getElementById("pulseModalClose");
  const helpBtn = document.getElementById(BUTTON_ID);
  const bodyEl = document.getElementById("pulseModalBody");
  const progressEl = document.getElementById("pulseProgress");
  const prevBtn = document.getElementById("pulsePrev");
  const nextBtn = document.getElementById("pulseNext");
  const doneBtn = document.getElementById("pulseDone");

  // ─── STEP MANAGEMENT ─────────────────────────────────────────

  let currentStep = 0;
  const totalSteps = instructions.steps.length;

  function renderStep(index) {
    const step = instructions.steps[index];
    const icon = step.icon || "bi-info-circle";
    bodyEl.innerHTML = `
            <div class="pulse-step active">
                <span class="pulse-step-icon"><i class="bi ${icon}"></i></span>
                <div class="pulse-step-title">${step.title}</div>
                <p class="pulse-step-desc">${step.description}</p>
            </div>
        `;

    // Update progress dots
    const dots = progressEl.querySelectorAll("span");
    dots.forEach((dot, i) => {
      dot.className = "";
      if (i === index) dot.classList.add("active");
      else if (i < index) dot.classList.add("done");
    });

    // Update buttons
    prevBtn.disabled = index === 0;
    if (index === totalSteps - 1) {
      nextBtn.style.display = "none";
      doneBtn.style.display = "inline-block";
    } else {
      nextBtn.style.display = "inline-block";
      doneBtn.style.display = "none";
    }
  }

  function nextStep() {
    if (currentStep < totalSteps - 1) {
      currentStep++;
      renderStep(currentStep);
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      renderStep(currentStep);
    }
  }

  function closeModal() {
    modal.style.display = "none";
    // Save seen state for this page
    try {
      localStorage.setItem(STORAGE_PREFIX + pageKey, "true");
    } catch (e) {}
  }

  function openModal() {
    // Reset to first step
    currentStep = 0;
    renderStep(0);
    modal.style.display = "flex";
  }

  // ─── EVENT BINDING ───────────────────────────────────────────

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  nextBtn.addEventListener("click", nextStep);
  prevBtn.addEventListener("click", prevStep);
  doneBtn.addEventListener("click", closeModal);

  helpBtn.addEventListener("click", openModal);

  // ─── AUTO‑SHOW ON FIRST VISIT ──────────────────────────────

  let alreadySeen = false;
  try {
    alreadySeen = localStorage.getItem(STORAGE_PREFIX + pageKey) === "true";
  } catch (e) {}

  if (!alreadySeen && totalSteps > 0) {
    // Wait a moment for page to settle
    setTimeout(openModal, 600);
  }
})();
