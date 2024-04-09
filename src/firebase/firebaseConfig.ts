// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnXOB-i-D6E7EMinIX5MgK_eVF6jv9AEM",
  authDomain: "chatapp-21e26.firebaseapp.com",
  projectId: "chatapp-21e26",
  storageBucket: "chatapp-21e26.appspot.com",
  messagingSenderId: "323170999661",
  appId: "1:323170999661:web:8f5a9de3c4dbb2964e8e64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const auth = getAuth();
const fs = getFirestore();

export { auth, fs };
