// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvxK0S1uw2WTAp7ghPvlJquS7-cA1qsX4",
  authDomain: "build-70fb4.firebaseapp.com",
  projectId: "build-70fb4",
  storageBucket: "build-70fb4.firebasestorage.app",
  messagingSenderId: "751086823934",
  appId: "1:751086823934:web:02b98cec26ac911f2c38af",
  measurementId: "G-XFVB5JFML6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
