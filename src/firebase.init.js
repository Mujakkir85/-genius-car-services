// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTPCP5A7NNEwXlK6Ufe00LumBFbK0VpO8",
    authDomain: "genius-car-services-ff1bd.firebaseapp.com",
    projectId: "genius-car-services-ff1bd",
    storageBucket: "genius-car-services-ff1bd.appspot.com",
    messagingSenderId: "788914241471",
    appId: "1:788914241471:web:28f980695e880b4d58eb0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
