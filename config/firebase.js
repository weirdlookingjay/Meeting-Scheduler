import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-scheduler-b43aa.firebaseapp.com",
  projectId: "meeting-scheduler-b43aa",
  storageBucket: "meeting-scheduler-b43aa.appspot.com",
  messagingSenderId: "50044489456",
  appId: "1:50044489456:web:a956aa61eeecc5d1c03c35",
};

export const app = initializeApp(firebaseConfig);
