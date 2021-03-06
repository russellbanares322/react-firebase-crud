import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRKnl5E4M0zlBAQv54EGDCLm2dPnGpM6E",
  authDomain: "fir-crud-e0fd8.firebaseapp.com",
  projectId: "fir-crud-e0fd8",
  storageBucket: "fir-crud-e0fd8.appspot.com",
  messagingSenderId: "628807091480",
  appId: "1:628807091480:web:38b8aebbb8f8ffd890ca6d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
