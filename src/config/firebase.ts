// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWn5KT6gi1O1zsixSE4uAh4op7numhn7g",
  authDomain: "redbet-au.firebaseapp.com",
  projectId: "redbet-au",
  storageBucket: "redbet-au.appspot.com",
  messagingSenderId: "1046652105399",
  appId: "1:1046652105399:web:52793d451ae220bad09332",
  measurementId: "G-M6QLFJTW1M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
