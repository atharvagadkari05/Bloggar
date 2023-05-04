// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from  "firebase/auth"
import "firebase/firestore"


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
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider


// export default app;