// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
import "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Q0Vr2lGjCCgljVUDDWuao3e1TMEKZTY",
  authDomain: "bloggar-a8526.firebaseapp.com",
  projectId: "bloggar-a8526",
  storageBucket: "bloggar-a8526.appspot.com",
  messagingSenderId: "475453038094",
  appId: "1:475453038094:web:0df05a872625c6b46e265f",
  measurementId: "G-KKZ9T64JFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;