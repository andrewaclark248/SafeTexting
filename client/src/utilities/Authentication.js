import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";

import auth from "./../config/firebase2";



export const registerUser = (auth, email, password) => {
    // If the new account was created, the user is signed in automatically.
    return createUserWithEmailAndPassword(auth, email, password);
 }



export const loginUser = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
 }


export const logoutUser = () => {
    return auth.signOut();
 }

export const sendPasswordResetEmail = (email) => {
    return auth.sendPasswordResetEmail(email);
}

