// import { App, auth } from "../server/setup";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { authStateChangeHandler, signInHandler, signOutUser, signUpHandler, signInWithGoogle } from "./authMethods";
import { App } from "../server/setup";
import { addTask } from "./databaseMethods";

// remember to add code which would check if the curr user is a signed in user or not and then
// maybe run the same auth change handler

const signUpForm = document.getElementById("signUp");
const signOutButton = document.getElementById("signOut");
const signInForm = document.getElementById("signIn");
const googleSignIn = document.getElementById("googleSignIn");
const addTaskForm = document.getElementById("addTask");
const auth = getAuth(App);

if (signUpForm && signOutButton && signInForm && googleSignIn && addTaskForm) {
    signUpForm.addEventListener("submit", signUpHandler);
    signOutButton.addEventListener("click", signOutUser);
    signInForm.addEventListener("submit", signInHandler);
    googleSignIn.addEventListener("click", signInWithGoogle);
    addTaskForm?.addEventListener("submit", addTask);
} else {
    console.error("some HTML element does not exist");
}

onAuthStateChanged(auth, authStateChangeHandler);
