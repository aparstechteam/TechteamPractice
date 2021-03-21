import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB7Tmwtk7BEarMcqjdTHgWuVZ-S61Hstm8",
  authDomain: "quizzler-c9921.firebaseapp.com",
  databaseURL: "https://quizzler-c9921.firebaseio.com",
  projectId: "quizzler-c9921",
  storageBucket: "quizzler-c9921.appspot.com",
  messagingSenderId: "782469156138",
  appId: "1:782469156138:web:c0a07237e4264aba906253",
  measurementId: "G-VVP1MD63JS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
