import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjscsGNzwrAhEn6tsH_FzKeOHl0gREGzI",
  authDomain: "crime-control-app.firebaseapp.com",
  projectId: "crime-control-app",
  storageBucket: "crime-control-app.appspot.com",
  messagingSenderId: "341167285003",
  appId: "1:341167285003:web:7b8c8b18a6dcb17e21b80e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase Firestore
export const db = getFirestore(app);
//Firebase Authentication
export const auth = getAuth(app);
// Firebase Storage
export const storage = getStorage(app);
