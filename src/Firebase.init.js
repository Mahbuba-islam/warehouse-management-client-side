


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7_nR0UplnNV-nNxjin_aZrFcm30B9oNU",
  authDomain: "warehouse-management-sit-78bbf.firebaseapp.com",
  projectId: "warehouse-management-sit-78bbf",
  storageBucket: "warehouse-management-sit-78bbf.appspot.com",
  messagingSenderId: "745953261171",
  appId: "1:745953261171:web:e14d306c82afb726c5dc06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;