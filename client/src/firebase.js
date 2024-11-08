// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ab74c.firebaseapp.com",
  projectId: "mern-estate-ab74c",
  storageBucket: "mern-estate-ab74c.firebasestorage.app",
  messagingSenderId: "155001423222",
  appId: "1:155001423222:web:03a8df96b225c30bd5e657"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);