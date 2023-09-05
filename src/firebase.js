// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add Auth
import { getFirestore } from "firebase/firestore"; // Add Firestore
import { getDatabase } from "firebase/database"; // Add Realtime Database
import { getStorage } from "firebase/storage"; // Add Storage




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measy67urementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0mgV-QX0K8vTD9YH8Q4G6rAdU-4M2sqQ",
    authDomain: "smme-project.firebaseapp.com",
    databaseURL: "https://smme-project-default-rtdb.firebaseio.com",
    projectId: "smme-project",
    storageBucket: "smme-project.appspot.com",
    messagingSenderId: "168835292532",
    appId: "1:168835292532:web:c1b497997dfa2c4b772021",
    measurementId: "G-FWN07H6CPY"
};
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
const auth = getAuth(app); // Initialize Auth
const firestore = getFirestore(app); // Initialize Firestore
const database = getDatabase(app); // Initialize Realtime Database
const storage = getStorage(app); // Initialize Storage


export { auth, firestore, database, storage };
