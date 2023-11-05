import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAWb_Va3WpS1bGlxXmQb8FAWIi_BGCo_RM",
    authDomain: "learning-firebase-aee6e.firebaseapp.com",
    projectId: "learning-firebase-aee6e",
    storageBucket: "learning-firebase-aee6e.appspot.com",
    messagingSenderId: "887832685208",
    appId: "1:887832685208:web:5e401f404ab5bf46bf7eed",
    measurementId: "G-8Q1D16VHK5",
};

const App = initializeApp(firebaseConfig);

export { App };
