// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-b5a68.firebaseapp.com",
  projectId: "real-estate-b5a68",
  storageBucket: "real-estate-b5a68.appspot.com",
  messagingSenderId: "509283757198",
  appId: "1:509283757198:web:274a36a17f3b2127466ddf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
