import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut, User, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { App } from "../server/setup";

const auth = getAuth(App);
const provider = new GoogleAuthProvider();
const signUpForm = document.getElementById("signUp") as HTMLFormElement;
const signInForm = document.getElementById("signIn") as HTMLFormElement;
const verificationDiv = document.getElementById("verification") as HTMLDivElement;
const signedInDiv = document.getElementById("signedIn") as HTMLDivElement;
const userInfo = document.getElementById("userInfo") as HTMLDivElement;

type signUpOrIn = (email: string, password: string) => void;

function addUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            verifyEmail(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Error");
        });
}

function logInUser(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("sign in succesful");
            console.log("Email:", userCredential.user.email);
        })
        .catch((error) => {
            console.log("sign in error");
            console.log(error);
        });
}

function verifyEmail(user: User) {
    sendEmailVerification(user);
}

function checkEmailPasswordInputs(email_input: HTMLInputElement | undefined, password_input: HTMLInputElement | undefined, firebaseFunction: signUpOrIn) {
    if (email_input && password_input) {
        const [email, password] = [email_input.value, password_input.value];
        firebaseFunction(email, password);
    } else {
        console.error("email or the password input is undefined");
    }
}

function handleFormInputs(form: HTMLFormElement | undefined, firebaseFunction: signUpOrIn) {
    if (form) {
        const email_input = form.elements.namedItem("email") as HTMLInputElement | undefined;
        const password_input = form.elements.namedItem("password") as HTMLInputElement | undefined;
        checkEmailPasswordInputs(email_input, password_input, firebaseFunction);
    } else {
        console.error("signInForm is undefined");
    }
}

function signUpHandler(event: SubmitEvent) {
    event.preventDefault();
    handleFormInputs(signUpForm, addUser);
}

function signInHandler(event: SubmitEvent) {
    event.preventDefault();
    handleFormInputs(signInForm, logInUser);
}

function showUserInfo(user: User) {
    const name_input = userInfo.children.namedItem("name") as HTMLInputElement | undefined;
    const email_input = userInfo.children.namedItem("email") as HTMLInputElement | undefined;
    if (name_input && email_input) {
        name_input.value = user.displayName ?? "No name";
        email_input.value = user.email ?? "No Email";
    } else {
        console.error("bug in code: name or email input is empty");
    }
}

function signOutUser() {
    signOut(auth);
    alert(`We are about to sign out your email ${auth.currentUser?.email ?? "No Email"}`);
}

function signInWithGoogle() {
    // signInWithRedirect(auth, provider);
    signInWithPopup(auth, provider)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
}

function authStateChangeHandler(user: User | null) {
    if (user) {
        console.log(signUpForm);
        signUpForm.hidden = true;
        signInForm.hidden = true;
        if (user.emailVerified) {
            verificationDiv.hidden = true;
            signedInDiv.hidden = false;
            showUserInfo(user);
        } else {
            verificationDiv.hidden = false;
            signedInDiv.hidden = true;
        }
    } else {
        signUpForm.hidden = false;
        signInForm.hidden = false;
        signedInDiv.hidden = true;
        verificationDiv.hidden = true;
    }
}

export { signUpHandler, signOutUser, signInHandler, authStateChangeHandler, signInWithGoogle };
