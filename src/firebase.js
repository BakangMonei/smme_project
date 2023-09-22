// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add Auth
import { collection, getFirestore } from "firebase/firestore"; // Add Firestore
import { getDatabase } from "firebase/database"; // Add Realtime Database
import { getStorage } from "firebase/storage"; // Add Storage
import { query, where, getDocs } from "firebase/firestore";


// Web app's Firebase configuration
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
    const usersCollection = collection(firestore, 'users');
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        return userData; // Return user data
    } else {
        return null; // User not found
    }
}

export { auth, firestore, database, storage, firebaseApp };