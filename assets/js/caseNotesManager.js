/**
 * PulseGo Case Notes & Flags Manager
 * Stores user notes and flags for cases:
 * - Local storage for all users
 * - Firestore sync for pro users
 * - Retrieval and display of saved notes/flags
 */

import {
  auth,
  db,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "../../firebase.js";
import { getProStatus } from "./proStatusManager.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const STORAGE_KEY_CASE_NOTES = "pulsego_case_notes_v2";
const STORAGE_KEY_CASE_FLAGS = "pulsego_case_flags_v2";

// ============================================================================
// LOCAL STORAGE FUNCTIONS
// ============================================================================

/**
 * Get all case notes from localStorage
 */
function getLocalCaseNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CASE_NOTES);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("Failed to read case notes", e);
    return {};
  }
}

/**
 * Save case notes to localStorage
 */
function saveLocalCaseNotes(notes) {
  try {
    localStorage.setItem(STORAGE_KEY_CASE_NOTES, JSON.stringify(notes));
  } catch (e) {
    console.error("Failed to save case notes", e);
  }
}

/**
 * Get all case flags from localStorage
 */
function getLocalCaseFlags() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CASE_FLAGS);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("Failed to read case flags", e);
    return {};
  }
}

/**
 * Save case flags to localStorage
 */
function saveLocalCaseFlags(flags) {
  try {
    localStorage.setItem(STORAGE_KEY_CASE_FLAGS, JSON.stringify(flags));
  } catch (e) {
    console.error("Failed to save case flags", e);
  }
}

// ============================================================================
// CASE NOTE OPERATIONS
// ============================================================================

/**
 * Add or update note for a case
 */
export async function saveNoteForCase(caseId, noteText, uid = null) {
  try {
    if (!caseId || !noteText.trim()) {
      return false;
    }

    const notes = getLocalCaseNotes();
    notes[caseId] = {
      id: caseId,
      text: noteText.trim(),
      savedAt: new Date().toISOString(),
      uid: uid || localStorage.getItem("pulsego_user_id") || null,
    };
    saveLocalCaseNotes(notes);

    // Sync to Firestore for pro users
    if (uid) {
      const proStatus = await getProStatus(uid);
      if (proStatus.isPro) {
        await syncNoteToFirestore(uid, caseId, noteText.trim());
      }
    }

    console.log("✅ Note saved for case:", caseId);
    return true;
  } catch (error) {
    console.error("Failed to save note:", error);
    return false;
  }
}

/**
 * Get note for a specific case
 */
export function getNoteForCase(caseId) {
  try {
    const notes = getLocalCaseNotes();
    return notes[caseId] || null;
  } catch (e) {
    return null;
  }
}

/**
 * Delete note for a case
 */
export async function deleteNoteForCase(caseId, uid = null) {
  try {
    const notes = getLocalCaseNotes();
    delete notes[caseId];
    saveLocalCaseNotes(notes);

    // Remove from Firestore if pro
    if (uid) {
      const proStatus = await getProStatus(uid);
      if (proStatus.isPro) {
        await deleteNoteFromFirestore(uid, caseId);
      }
    }

    console.log("✅ Note deleted for case:", caseId);
    return true;
  } catch (error) {
    console.error("Failed to delete note:", error);
    return false;
  }
}

// ============================================================================
// CASE FLAG OPERATIONS
// ============================================================================

/**
 * Flag a case
 */
export async function flagCase(caseId, reason = "", uid = null) {
  try {
    if (!caseId) return false;

    const flags = getLocalCaseFlags();
    flags[caseId] = {
      id: caseId,
      reason: reason || "Marked",
      flaggedAt: new Date().toISOString(),
      uid: uid || localStorage.getItem("pulsego_user_id") || null,
      isFlagged: true,
    };
    saveLocalCaseFlags(flags);

    // Sync to Firestore for pro users
    if (uid) {
      const proStatus = await getProStatus(uid);
      if (proStatus.isPro) {
        await syncFlagToFirestore(uid, caseId, reason);
      }
    }

    console.log("🚩 Case flagged:", caseId);
    return true;
  } catch (error) {
    console.error("Failed to flag case:", error);
    return false;
  }
}

/**
 * Unflag a case
 */
export async function unflagCase(caseId, uid = null) {
  try {
    const flags = getLocalCaseFlags();
    delete flags[caseId];
    saveLocalCaseFlags(flags);

    // Remove from Firestore if pro
    if (uid) {
      const proStatus = await getProStatus(uid);
      if (proStatus.isPro) {
        await deleteFlagFromFirestore(uid, caseId);
      }
    }

    console.log("✅ Case unflagged:", caseId);
    return true;
  } catch (error) {
    console.error("Failed to unflag case:", error);
    return false;
  }
}

/**
 * Check if case is flagged
 */
export function isCaseFlagged(caseId) {
  try {
    const flags = getLocalCaseFlags();
    return flags[caseId]?.isFlagged === true;
  } catch (e) {
    return false;
  }
}

/**
 * Get all flagged cases
 */
export function getAllFlaggedCases() {
  try {
    const flags = getLocalCaseFlags();
    return Object.values(flags).filter((f) => f.isFlagged === true);
  } catch (e) {
    return [];
  }
}

// ============================================================================
// CASE SOLUTION STORAGE
// ============================================================================

/**
 * Save user's solution attempt for a case
 */
export async function saveCaseSolution(
  caseId,
  solution,
  selectedOptions = {},
  uid = null,
) {
  try {
    if (!caseId || !solution) return false;

    const allNotes = getLocalCaseNotes();
    const solutionKey = `${caseId}_solution_`;

    // Add solution as a special note
    allNotes[solutionKey] = {
      id: `${caseId}_solution`,
      text: typeof solution === "string" ? solution : JSON.stringify(solution),
      selectedOptions: selectedOptions,
      solvedAt: new Date().toISOString(),
      uid: uid || localStorage.getItem("pulsego_user_id") || null,
      isSolution: true,
    };
    saveLocalCaseNotes(allNotes);

    // Sync to Firestore for pro users
    if (uid) {
      const proStatus = await getProStatus(uid);
      if (proStatus.isPro) {
        await syncSolutionToFirestore(uid, caseId, solution, selectedOptions);
      }
    }

    console.log("✅ Solution saved for case:", caseId);
    return true;
  } catch (error) {
    console.error("Failed to save case solution:", error);
    return false;
  }
}

/**
 * Get user's saved solution for a case (for review mode)
 */
export function getCaseSolution(caseId) {
  try {
    const notes = getLocalCaseNotes();
    const solutionKey = `${caseId}_solution_`;
    return notes[solutionKey] || null;
  } catch (e) {
    return null;
  }
}

// ============================================================================
// FIRESTORE SYNC FUNCTIONS
// ============================================================================

/**
 * Sync note to Firestore
 */
async function syncNoteToFirestore(uid, caseId, noteText) {
  try {
    if (!uid || !caseId) return;

    const noteRef = doc(db, "user", uid, "caseNotes", caseId);
    await setDoc(
      noteRef,
      {
        caseId,
        text: noteText,
        savedAt: new Date().toISOString(),
      },
      { merge: true },
    );

    console.log("☁️ Note synced to Firestore for case:", caseId);
  } catch (error) {
    console.error("Failed to sync note to Firestore:", error);
  }
}

/**
 * Delete note from Firestore
 */
async function deleteNoteFromFirestore(uid, caseId) {
  try {
    if (!uid || !caseId) return;

    const noteRef = doc(db, "user", uid, "caseNotes", caseId);
    await setDoc(
      noteRef,
      { deletedAt: new Date().toISOString() },
      { merge: true },
    );

    console.log("☁️ Note deleted from Firestore for case:", caseId);
  } catch (error) {
    console.error("Failed to delete note from Firestore:", error);
  }
}

/**
 * Sync flag to Firestore
 */
async function syncFlagToFirestore(uid, caseId, reason) {
  try {
    if (!uid || !caseId) return;

    const flagRef = doc(db, "user", uid, "caseFlagsFlags", caseId);
    await setDoc(
      flagRef,
      {
        caseId,
        reason: reason || "Marked",
        flaggedAt: new Date().toISOString(),
      },
      { merge: true },
    );

    console.log("☁️ Flag synced to Firestore for case:", caseId);
  } catch (error) {
    console.error("Failed to sync flag to Firestore:", error);
  }
}

/**
 * Delete flag from Firestore
 */
async function deleteFlagFromFirestore(uid, caseId) {
  try {
    if (!uid || !caseId) return;

    const flagRef = doc(db, "user", uid, "caseFlags", caseId);
    await setDoc(
      flagRef,
      { deletedAt: new Date().toISOString() },
      { merge: true },
    );

    console.log("☁️ Flag deleted from Firestore for case:", caseId);
  } catch (error) {
    console.error("Failed to delete flag from Firestore:", error);
  }
}

/**
 * Sync solution to Firestore
 */
async function syncSolutionToFirestore(uid, caseId, solution, selectedOptions) {
  try {
    if (!uid || !caseId) return;

    const solutionRef = doc(db, "user", uid, "caseSolutions", caseId);
    await setDoc(
      solutionRef,
      {
        caseId,
        solution:
          typeof solution === "string" ? solution : JSON.stringify(solution),
        selectedOptions: selectedOptions || {},
        solvedAt: new Date().toISOString(),
      },
      { merge: true },
    );

    console.log("☁️ Solution synced to Firestore for case:", caseId);
  } catch (error) {
    console.error("Failed to sync solution to Firestore:", error);
  }
}

/**
 * Load notes and flags from Firestore (for pro users)
 */
export async function loadNotesAndFlagsFromFirestore(uid) {
  try {
    if (!uid) return;

    // Check if user is pro
    const proStatus = await getProStatus(uid);
    if (!proStatus.isPro) {
      console.log("User is not pro, skipping Firestore sync");
      return;
    }

    // Load notes
    try {
      const notesQuery = collection(db, "user", uid, "caseNotes");
      const notesDocs = await getDocs(notesQuery);
      const notes = getLocalCaseNotes();

      notesDocs.forEach((doc) => {
        const data = doc.data();
        if (!data.deletedAt) {
          notes[data.caseId] = data;
        }
      });

      saveLocalCaseNotes(notes);
      console.log("✅ Notes loaded from Firestore");
    } catch (e) {
      console.warn("Failed to load notes from Firestore:", e);
    }

    // Load flags
    try {
      const flagsQuery = collection(db, "user", uid, "caseFlags");
      const flagsDocs = await getDocs(flagsQuery);
      const flags = getLocalCaseFlags();

      flagsDocs.forEach((doc) => {
        const data = doc.data();
        if (!data.deletedAt) {
          flags[data.caseId] = { ...data, isFlagged: true };
        }
      });

      saveLocalCaseFlags(flags);
      console.log("✅ Flags loaded from Firestore");
    } catch (e) {
      console.warn("Failed to load flags from Firestore:", e);
    }
  } catch (error) {
    console.error("Failed to load notes and flags from Firestore:", error);
  }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

export function initCaseNotesManager() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("📌 Loading case notes from Firestore for user:", user.uid);
      loadNotesAndFlagsFromFirestore(user.uid);
    }
  });
}

export default {
  saveNoteForCase,
  getNoteForCase,
  deleteNoteForCase,
  flagCase,
  unflagCase,
  isCaseFlagged,
  getAllFlaggedCases,
  saveCaseSolution,
  getCaseSolution,
  initCaseNotesManager,
};
