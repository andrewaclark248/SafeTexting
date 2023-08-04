import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";





export function registerUser(auth, email, password) {
    // If the new account was created, the user is signed in automatically.
    return createUserWithEmailAndPassword(auth, email, password);
 }



 export function loginUser(auth, email, password) {
    return signInWithEmailAndPassword(auth, email, password);
 }
