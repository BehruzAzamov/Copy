// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpdnjFcEzej-mpkvyfXnkuZtQo5N54zRY",
  authDomain: "copy-comfy.firebaseapp.com",
  projectId: "copy-comfy",
  storageBucket: "copy-comfy.appspot.com",
  messagingSenderId: "968947582074",
  appId: "1:968947582074:web:6c52c1d63456d44c1da7c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();