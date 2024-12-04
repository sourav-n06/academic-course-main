import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKK46DJcDlrC0bv5aTmpJDoMWnT01LbLg",
  authDomain: "academic-course-main-6bec2.firebaseapp.com",
  projectId: "academic-course-main-6bec2",
  storageBucket: "academic-course-main-6bec2.firebasestorage.app",
  messagingSenderId: "158311093416",
  appId: "1:158311093416:web:dbd9f4cdd749c2600d9e9d",
  measurementId: "G-CDXFCKH7DH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app};