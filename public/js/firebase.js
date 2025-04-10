// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSvV3l7I-sjxgl2RhW7chZdNJf5DJEHO8",
  authDomain: "webtest-191fb.firebaseapp.com",
  projectId: "webtest-191fb",
  storageBucket: "webtest-191fb.firebasestorage.app",
  messagingSenderId: "361311676080",
  appId: "1:361311676080:web:18c86e37105a70062fbd75",
  measurementId: "G-PLZ7K0RWS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);