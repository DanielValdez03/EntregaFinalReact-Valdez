// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5oiE46VSvbjDPg3-6dJFktW3P3SPVmRs",
  authDomain: "proyecto-react-e-commerce.firebaseapp.com",
  projectId: "proyecto-react-e-commerce",
  storageBucket: "proyecto-react-e-commerce.appspot.com",
  messagingSenderId: "1037253718490",
  appId: "1:1037253718490:web:37dbfd3ba31de5cec450e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
