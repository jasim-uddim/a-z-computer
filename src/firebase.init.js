// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfFq3_T39lH8pgBft165oNfRhlEZ-lFtc",
  authDomain: "a-z-computer.firebaseapp.com",
  projectId: "a-z-computer",
  storageBucket: "a-z-computer.appspot.com",
  messagingSenderId: "853804171406",
  appId: "1:853804171406:web:24a952370aa18c428749df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
