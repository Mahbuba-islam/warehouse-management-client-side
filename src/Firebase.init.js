// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAewITLuA_I_d0pAgT7vSU0uPDQQWsCLGo",
  authDomain: "warehouse-management-cli-6485d.firebaseapp.com",
  projectId: "warehouse-management-cli-6485d",
  storageBucket: "warehouse-management-cli-6485d.appspot.com",
  messagingSenderId: "749610759248",
  appId: "1:749610759248:web:66e3a3b4fb6f3965e7cd55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const  auth = getAuth(app)

// export default auth;