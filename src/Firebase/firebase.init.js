// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg-tOu4hiuv6FQ4p_BGijU5FIhVHGSifo",
  authDomain: "phone-shop-30ca9.firebaseapp.com",
  projectId: "phone-shop-30ca9",
  storageBucket: "phone-shop-30ca9.appspot.com",
  messagingSenderId: "896755061624",
  appId: "1:896755061624:web:c4b97638d0fa45996b6e8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;