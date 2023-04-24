import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD40r6CK4T7JFO20XGlyMG-EIL-FRUDlg8",
  authDomain: "peter-chat-f09bb.firebaseapp.com",
  projectId: "peter-chat-f09bb",
  storageBucket: "peter-chat-f09bb.appspot.com",
  messagingSenderId: "677628828578",
  appId: "1:677628828578:web:01ff6f2c04c306546cb0fb",
  measurementId: "G-2MG6K0HKXT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()