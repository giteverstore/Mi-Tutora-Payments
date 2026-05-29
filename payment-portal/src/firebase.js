import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithCustomToken
} from "firebase/auth";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDHiT8cMXJmxPqI02nw70uP0H-gTNwffAA",

  authDomain: "tutor-app-1e394.firebaseapp.com",

  projectId: "tutor-app-1e394",

  storageBucket: "tutor-app-1e394.firebasestorage.app",

  messagingSenderId: "566238166126",

  appId: "1:566238166126:web:0de33be8c207b7528efa7f",

  measurementId: "G-YD7D5H491Q"

};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);

export const db =
  getFirestore(app);

export {
  signInWithCustomToken
};