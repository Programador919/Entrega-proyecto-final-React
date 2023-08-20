// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBR6oUIkxNVir_cw7cb0MTDPCSZuvkZg8",
  authDomain: "react-coderhouse-carrito.firebaseapp.com",
  projectId: "react-coderhouse-carrito",
  storageBucket: "react-coderhouse-carrito.appspot.com",
  messagingSenderId: "463418166291",
  appId: "1:463418166291:web:972960030bf5466d7903e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);