import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGt0sYA3coufkcFg5AIkLt-X7M6KFAuus",
  authDomain: "tarefasplus-57e0f.firebaseapp.com",
  projectId: "tarefasplus-57e0f",
  storageBucket: "tarefasplus-57e0f.firebasestorage.app",
  messagingSenderId: "893229932959",
  appId: "1:893229932959:web:ae72780259596de7d69daa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db }