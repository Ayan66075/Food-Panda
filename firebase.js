import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, query, orderBy, updateDoc, deleteDoc, where } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAALoElcZA6A5BeluboXz3z-6HGeEeHGkQ",
    authDomain: "food-panda-by-sir.firebaseapp.com",
    projectId: "food-panda-by-sir",
    storageBucket: "food-panda-by-sir.firebasestorage.app",
    messagingSenderId: "768259532202",
    appId: "1:768259532202:web:0650837c329779236337d3",
    measurementId: "G-GZ8B1KGQZF"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, db, doc, setDoc, getDoc, collection, addDoc, getDocs, query, orderBy, updateDoc, deleteDoc, where };