import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO_G7iKQbZrr8PHJuPC4ZqvwKljqofSZ8",
  authDomain: "mymyone-730f1.firebaseapp.com",
  projectId: "mymyone-730f1",
  storageBucket: "mymyone-730f1.appspot.com",
  messagingSenderId: "910552343955",
  appId: "1:910552343955:web:52255a0765b190d4003466",
  measurementId: "G-SPNLKK9QLZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
