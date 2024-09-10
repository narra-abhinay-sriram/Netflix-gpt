// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB56gKv-b-eq2pqTOXF__WzIZtjLHfB5dI",
  authDomain: "netflixgpt-9d535.firebaseapp.com",
  projectId: "netflixgpt-9d535",
  storageBucket: "netflixgpt-9d535.appspot.com",
  messagingSenderId: "87092921325",
  appId: "1:87092921325:web:ffb38094655d9715b8dde4",
  measurementId: "G-QE22W9RX9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
