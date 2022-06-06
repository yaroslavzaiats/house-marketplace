import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaPRd9rF0Rom-f3COLmJ-o1PD8yOSagPY",
  authDomain: "house-marketplace-app-aa0da.firebaseapp.com",
  projectId: "house-marketplace-app-aa0da",
  storageBucket: "house-marketplace-app-aa0da.appspot.com",
  messagingSenderId: "535282673877",
  appId: "1:535282673877:web:1c643e3e9f075cf6945a5c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()