import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAgRg43F-jNc5NuKtLR9qN01QUk8u2VYX8",
  authDomain: "myduck-db193.firebaseapp.com",
  projectId: "myduck-db193",
  storageBucket: "myduck-db193.appspot.com",
  messagingSenderId: "770214163447",
  appId: "1:770214163447:web:0e1c5071c49fbb7046b4f2"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth()