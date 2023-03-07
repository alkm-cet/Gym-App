import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnpLBfvxzOzIq9XoMTqJWC8KupPA5WGdI",
    authDomain: "gymapp-757c8.firebaseapp.com",
    projectId: "gymapp-757c8",
    storageBucket: "gymapp-757c8.appspot.com",
    messagingSenderId: "1018070718983",
    appId: "1:1018070718983:web:040ea9f8f1f25a057568a2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);