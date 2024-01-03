// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpxCazCnUOsCfrQJbQ91md1vA97BdIsbU",
    authDomain: "career-hub-authenticatio-19463.firebaseapp.com",
    projectId: "career-hub-authenticatio-19463",
    storageBucket: "career-hub-authenticatio-19463.appspot.com",
    messagingSenderId: "83178722299",
    appId: "1:83178722299:web:136c33e54b29b17181b15e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;