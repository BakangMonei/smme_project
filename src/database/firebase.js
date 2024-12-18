// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
} from "firebase/auth"; // Add Auth
import { collection, getFirestore } from "firebase/firestore"; // Add Firestore
import { getDatabase } from "firebase/database"; // Add Realtime Database
import { getStorage } from "firebase/storage"; // Add Storage
import { query, where, getDocs } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrLdzHv2R3Gox-FuITH_BGAroh4IdVuDQ",
  authDomain: "smme-project-70d7d.firebaseapp.com",
  databaseURL: "https://smme-project-70d7d-default-rtdb.firebaseio.com",
  projectId: "smme-project-70d7d",
  storageBucket: "smme-project-70d7d.firebasestorage.app",
  messagingSenderId: "1021563154980",
  appId: "1:1021563154980:web:f1a75ec7304e9926d39eb1",
  measurementId: "G-HGJLCRJVZ7",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Initialize Firebase services
const auth = getAuth(firebaseApp); // Initialize Auth
const firestore = getFirestore(firebaseApp); // Initialize Firestore
const database = getDatabase(firebaseApp); // Initialize Realtime Database
const storage = getStorage(firebaseApp); // Initialize Storage

// Getting from firebase
async function getDetails(firestore, email) {
  const usersCollection = collection(firestore, "users");
  const q = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userData = querySnapshot.docs[0].data();
    return userData; // Return user data
  } else {
    return null; // User not found
  }
}

export {
  auth,
  firestore,
  database,
  storage,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  firebaseApp,
};
