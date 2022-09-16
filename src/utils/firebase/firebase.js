import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import {
    getFirestore,
    doc, 
    getDoc,
    setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBX_1GpU8_KviDS3mYBwQcAJ6CjCTX0xq4",
  authDomain: "fs-crown-db.firebaseapp.com",
  projectId: "fs-crown-db",
  storageBucket: "fs-crown-db.appspot.com",
  messagingSenderId: "859745779452",
  appId: "1:859745779452:web:afd9ee8189a80c2e442179",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();


//SIGN UP WITH GOOGLE_AUTH_PROVIDER
//SAVES USER TO FIREBASE STORE 
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        })
      } catch(error) {
        console.log("error creating user", error.message)
      }
    }
    return userDocRef;
}

//SIGN-UP* WITH EMAIL AND PASSWORD
export const createAuthUserWithEMailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

//SIGN-IN* WITH EMAIL AND PASSWORD
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}



