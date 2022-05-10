import '../styles/globals.css'
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgRg43F-jNc5NuKtLR9qN01QUk8u2VYX8",
  authDomain: "myduck-db193.firebaseapp.com",
  projectId: "myduck-db193",
  storageBucket: "myduck-db193.appspot.com",
  messagingSenderId: "770214163447",
  appId: "1:770214163447:web:0e1c5071c49fbb7046b4f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
