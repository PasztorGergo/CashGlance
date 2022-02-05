import { initializeApp } from "@firebase/app";
import { initializeAuth } from "@firebase/auth";
import { initializeFirestore } from "@firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyD1kYCaMY36kHWYVWdM4HcOQVULv9onigg",
  authDomain: "cash-glance.firebaseapp.com",
  projectId: "cash-glance",
  storageBucket: "cash-glance.appspot.com",
  messagingSenderId: "153978518880",
  appId: "1:153978518880:web:a404c38112a84588b7f205",
  measurementId: "G-V76B04XXMG",
});

export const db = initializeFirestore(app, {});
export const auth = initializeAuth(app, {});
