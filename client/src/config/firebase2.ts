// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJLmlqOtzoBWEslT82sFMgmnyb7Or1uy8",
  authDomain: "maskedtexting-staging.firebaseapp.com",
  projectId: "maskedtexting-staging",
  storageBucket: "maskedtexting-staging.appspot.com",
  messagingSenderId: "1007088319970",
  appId: "1:1007088319970:web:1ef183658c01ba210c4dbb",
  measurementId: "G-LY0DPFS8DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;