// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHKIN4k2i0i2IGLQOsVFTnG2YV1GcQKPg",
  authDomain: "react-login-app-83253.firebaseapp.com",
  projectId: "react-login-app-83253",
  storageBucket: "react-login-app-83253.appspot.com",
  messagingSenderId: "198560444185",
  appId: "1:198560444185:web:06a01dade7a40924f6df88",
  measurementId: "G-4XD6YPVL7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;