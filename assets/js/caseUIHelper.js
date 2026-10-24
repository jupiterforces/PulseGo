/**
 * PulseGo Case UI Helper
 * UI components for displaying and managing case notes and flags
 */

import {
  saveNoteForCase,
  getNoteForCase,
  flagCase,
  unflagCase,
  isCaseFlagged,
  getCaseSolution,
  saveCaseSolution,
} from "./caseNotesManager.js";

/**
 * Attach note button to case element
 */
export function attachCaseNoteButton(caseElement, caseId, uid) {
  if (!caseElement || !caseId) return;

  // Check if button already exists
  if (caseElement.querySelector("[data-case-note-btn]")) return;

  const noteBtn = document.createElement("button");
  noteBtn.setAttribute("data-case-note-btn", "true");
  noteBtn.className = "btn btn-sm btn-outline-secondary ms-2";
  noteBtn.innerHTML = '<i class="bi bi-pencil-square"></i> Izoh';
  noteBtn.title = "Bu kase uchun eslatma yozing";
  noteBtn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openCaseNoteModal(caseId, uid);
  };

  // Update button if note exists
  const existingNote = getNoteForCase(caseId);
  if (existingNote) {
    noteBtn.classList.add("active");
    noteBtn.innerHTML = '<i class="bi bi-pencil-fill"></i> Izoh';
  }

  caseElement.appendChild(noteBtn);
}

/**
 * Attach flag button to case element
 */
export function attachCaseFlagButton(caseElement, caseId, uid) {
  if (!caseElement || !caseId) return;

  // Check if button already exists
  if (caseElement.querySelector("[data-case-flag-btn]")) return;

  const flagBtn = document.createElement("button");
  flagBtn.setAttribute("data-case-flag-btn", "true");
  flagBtn.className = "btn btn-sm btn-outline-warning ms-2";
  flagBtn.innerHTML = '<i class="bi bi-flag"></i> Belgilash';
  flagBtn.title = "Bu kaseni belgilash";
  flagBtn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCaseFlag(caseId, uid, flagBtn);
  };

  // Update button if flagged
  const flagged = isCaseFlagged(caseId);
  if (flagged) {
    flagBtn.classList.remove("btn-outline-warning");
    flagBtn.classList.add("btn-warning", "active");
    flagBtn.innerHTML = '<i class="bi bi-flag-fill"></i> Belgilangan';
  }

  caseElement.appendChild(flagBtn);
}

/**
 * Open case note modal
 */
function openCaseNoteModal(caseId, uid) {
  const existing = getNoteForCase(caseId);
  const modalId = `caseNoteModal_${caseId}`;

  // Remove existing modal if any
  const oldModal = document.getElementById(modalId);
  if (oldModal) oldModal.remove();

  const modal = document.createElement("div");
  modal.id = modalId;
  modal.className = "modal fade";
  modal.tabIndex = -1;
  modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 rounded-4">
        <div class="modal-header border-0">
          <h5 class="modal-title fw-bold">Kasing Izohi</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <textarea id="caseNoteInput" class="form-control" rows="5" placeholder="Bu kase haqida eslatma...
Masalan: Muhim tushunchalar, qiyinchiliklar, yoki boshqa malumotlar...">${existing?.text || ""}</textarea>
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Bekor qilish</button>
          ${existing ? '<button type="button" class="btn btn-outline-danger" id="deleteCaseNote">O\'chirish</button>' : ""}
          <button type="button" class="btn btn-success" id="saveCaseNote">Saqlash</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const bsModal = new bootstrap.Modal(modal);

  // Save handler
  document.getElementById("saveCaseNote").onclick = async () => {
    const noteText = document.getElementById("caseNoteInput").value;
    const ok = await saveNoteForCase(caseId, noteText, uid);
    if (ok) {
      // Update button
      const noteBtn = document.querySelector(
        `[data-case-note-btn][data-case-id="${caseId}"]`,
      );
      if (noteBtn) {
        noteBtn.classList.add("active");
      }
      bsModal.hide();
    }
  };

  // Delete handler
  if (existing) {
    document.getElementById("deleteCaseNote").onclick = () => {
      if (confirm("Bu izohni o'chirmoqchimisiz?")) {
        const noteBtn = document.querySelector(
          `[data-case-note-btn][data-case-id="${caseId}"]`,
        );
        if (noteBtn) {
          noteBtn.classList.remove("active");
        }
        bsModal.hide();
      }
    };
  }

  bsModal.show();
}

/**
 * Toggle case flag
 */
async function toggleCaseFlag(caseId, uid, btn) {
  const isFlagged = isCaseFlagged(caseId);

  if (isFlagged) {
    await unflagCase(caseId, uid);
    btn.classList.remove("btn-warning", "active");
    btn.classList.add("btn-outline-warning");
    btn.innerHTML = '<i class="bi bi-flag"></i> Belgilash';
  } else {
    await flagCase(caseId, "Marked", uid);
    btn.classList.remove("btn-outline-warning");
    btn.classList.add("btn-warning", "active");
    btn.innerHTML = '<i class="bi bi-flag-fill"></i> Belgilangan';
  }
}

/**
 * Display case note badge
 */
export function displayCaseNoteBadge(caseElement, caseId) {
  if (!caseElement || !caseId) return;

  // Remove existing badge
  const existingBadge = caseElement.querySelector("[data-case-note-badge]");
  if (existingBadge) existingBadge.remove();

  const note = getNoteForCase(caseId);
  if (!note) return;

  const badge = document.createElement("div");
  badge.setAttribute("data-case-note-badge", "true");
  badge.className = "badge bg-info text-dark mt-2";
  badge.innerHTML = `<i class="bi bi-pencil-square"></i> Izoh mavjud`;
  badge.style.display = "inline-block";

  caseElement.appendChild(badge);
}

/**
 * Display case review mode (showing user's previous solution)
 */
export function displayCaseReview(caseContainer, caseId) {
  if (!caseContainer || !caseId) return;

  const solution = getCaseSolution(caseId);
  if (!solution) return;

  const reviewDiv = document.createElement("div");
  reviewDiv.className = "card border-info bg-light mt-3";
  reviewDiv.innerHTML = `
    <div class="card-body">
      <h6 class="card-subtitle text-info fw-bold mb-2">
        <i class="bi bi-eye"></i> Sizning Yechim (Tahlil Rejimi)
      </h6>
      <p class="card-text text-secondary mb-2">
        ${solution.text || JSON.stringify(solution.selectedOptions)}
      </p>
      <small class="text-muted">
        ${new Date(solution.solvedAt).toLocaleString("uz-UZ")} da yechilgan
      </small>
    </div>
  `;

  caseContainer.appendChild(reviewDiv);
}

/**
 * Initialize case UI helpers on page load
 */
export function initCaseUIHelpers() {
  console.log("🎯 Initializing case UI helpers...");

  // Find current user
  try {
    const cached = localStorage.getItem("pulsego_user_v1");
    const user = cached ? JSON.parse(cached) : null;

    if (!user) {
      console.warn("No user found, skipping case UI init");
      return;
    }

    // Find all case elements and attach buttons
    document.querySelectorAll("[data-case-id]").forEach((caseElement) => {
      const caseId = caseElement.getAttribute("data-case-id");
      attachCaseNoteButton(caseElement, caseId, user.uid);
      attachCaseFlagButton(caseElement, caseId, user.uid);
      displayCaseNoteBadge(caseElement, caseId);
    });

    console.log("✅ Case UI helpers initialized");
  } catch (error) {
    console.error("Failed to init case UI helpers:", error);
  }
}

export default {
  attachCaseNoteButton,
  attachCaseFlagButton,
  displayCaseNoteBadge,
  displayCaseReview,
  initCaseUIHelpers,
};
