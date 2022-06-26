
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDAgvV1iVhF1ppBykh4Cc75-q3SV6MFi6I",
  authDomain: "ta-test-b62c3.firebaseapp.com",
  databaseURL: "https://ta-test-b62c3.firebaseio.com",
  projectId: "ta-test-b62c3",
  storageBucket: "ta-test-b62c3.appspot.com",
  messagingSenderId: "209500305934",
  appId: "1:209500305934:web:afd00b2b023ab432f4da5f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);