// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsnT0iFUa-XcLEYRu9mhVGqWJDJ4hHKKI",
  authDomain: "react-auth-b8650.firebaseapp.com",
  projectId: "react-auth-b8650",
  storageBucket: "react-auth-b8650.appspot.com",
  messagingSenderId: "154210694434",
  appId: "1:154210694434:web:cbc69eb6f2e34712f4e17b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);