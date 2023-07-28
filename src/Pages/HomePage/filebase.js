// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7bJfY9d4JNJUfxV5Ttx_A2rz6j7w295E",
  authDomain: "project-cijs-85.firebaseapp.com",
  databaseURL: "https://project-cijs-85-default-rtdb.firebaseio.com",
  projectId: "project-cijs-85",
  storageBucket: "project-cijs-85.appspot.com",
  messagingSenderId: "1043379861870",
  appId: "1:1043379861870:web:af09572d4228b74c5b297f",
  measurementId: "G-H0BDSNPV4Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export default storage;
