// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
 
const firebaseConfig = {
    apiKey: "AIzaSyCf-BwRrw9W3ofWI48rm64xYX-34Fd_cm4",
    authDomain: "kyledickey-me.firebaseapp.com",
    databaseURL: "https://kyledickey-me-default-rtdb.firebaseio.com",
    projectId: "kyledickey-me",
    storageBucket: "kyledickey-me.appspot.com",
    messagingSenderId: "273447468879",
    appId: "1:273447468879:web:621527162019bad7c98f3a",
    measurementId: "G-45TEXHWB3B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);