import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

// Your web app's Firebase configuration
// IMPORTANT: These values should be stored in environment variables and not hardcoded.
// e.g., in a .env file that is included in your .gitignore
const firebaseConfig = {
  apiKey: "AIzaSyAVZOuCKx-iIWNgT6XTzQRhmDO9MJK27ac",
  authDomain: "salonedatabase.firebaseapp.com",
  projectId: "salonedatabase",
  storageBucket: "salonedatabase.firebasestorage.app",
  messagingSenderId: "706605437979",
  appId: "1:706605437979:web:ec3a24854411becfcad4be",
  measurementId: "G-W1TLY9RZEK"
};

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;

try {
  app = initializeApp(firebaseConfig);
  
  // Get Firebase services that can be used throughout the app
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);

} catch (error) {
    console.error("Firebase initialization error:", error);
    // In a real app, you might want to show a user-facing error message
    // or disable features that depend on Firebase.
}


// Export the services for use in other components
export { app, auth, db, storage };