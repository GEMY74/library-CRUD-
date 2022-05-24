import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl3UVHwPoj7VIYBWE_SUAPcMRhLOWjT6M",
  authDomain: "crud-637eb.firebaseapp.com",
  projectId: "crud-637eb",
  storageBucket: "crud-637eb.appspot.com",
  messagingSenderId: "277493122438",
  appId: "1:277493122438:web:4c6a5f45d777db5ca15807",
  measurementId: "G-XRHBHLX268",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
