import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyBLaCC4xOdsz4Jh7mqpN_wzaot8b9k5Ixo",
    authDomain: "cinematica-1688e.firebaseapp.com",
    projectId: "cinematica-1688e",
    storageBucket: "cinematica-1688e.appspot.com",
    messagingSenderId:"539026530024",
    appId: "1:539026530024:web:e6b2541be5b1694543f35d"
    
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
