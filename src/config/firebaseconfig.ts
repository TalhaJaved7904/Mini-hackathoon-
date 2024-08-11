// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjp8ibmpVApup706JprD3kdb1W2H4HFSs",
  authDomain: "hackathoon-moduleb-1.firebaseapp.com",
  databaseURL: "https://hackathoon-moduleb-1-default-rtdb.firebaseio.com",
  projectId: "hackathoon-moduleb-1",
  storageBucket: "hackathoon-moduleb-1.appspot.com",
  messagingSenderId: "686572715666",
  appId: "1:686572715666:web:a4341b2ae83e7ecf57304b",
  measurementId: "G-12LF4DRJTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app