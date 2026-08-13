import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  setDoc,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCWfDPqZIe0sR26S7Wybl-C5e1hiPyRO0A",
  authDomain: "pulse-5f61d.firebaseapp.com",
  databaseURL: "https://pulse-5f61d-default-rtdb.firebaseio.com",
  projectId: "pulse-5f61d",
  storageBucket: "pulse-5f61d.appspot.com",
  messagingSenderId: "359964012652",
  appId: "1:359964012652:web:10722fdfb19d41a1052849",
  measurementId: "G-QX686G4TT9",
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Firestore exports
export const db = getFirestore(app);
export { setDoc, doc, getDoc };

export async function fetchTestsFromFirestore(
  collectionName = "premiumTests",
  documentId = "premiumAll",
) {
  try {
    const docRef = doc(db, collectionName, documentId);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      return {};
    }

    const data = snapshot.data();

    if (!data || typeof data !== "object") {
      return {};
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch tests from Firestore: ", error);
    return {};
  }
}

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
