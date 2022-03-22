import Rebase from "re-base";
import firebase from "firebase/app";
// require("firebase/database");
import "firebase/database";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_8X6jBFc85PDFBI1R8CAn1NCfCZlfpr0",
  authDomain: "very-hot-burgers-4b25b.firebaseapp.com",
  projectId: "very-hot-burgers-4b25b",
  storageBucket: "very-hot-burgers-4b25b.appspot.com",
  messagingSenderId: "85546773605",
  appId: "1:85546773605:web:1f35e8a365a26a4efdea8c",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
