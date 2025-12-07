// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrNcH4nV3Bv6siJevKwVTcuhOYPps5n6k",
  authDomain: "pet-mart-a10.firebaseapp.com",
  projectId: "pet-mart-a10",
  storageBucket: "pet-mart-a10.firebasestorage.app",
  messagingSenderId: "1017591657564",
  appId: "1:1017591657564:web:e48283442fb8db93b7a299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;