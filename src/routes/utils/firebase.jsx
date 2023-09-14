// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy33WLVCQRONqLp4O5X-l1Tcck0sTqFHA",
  authDomain: "devlink-cd494.firebaseapp.com",
  projectId: "devlink-cd494",
  storageBucket: "devlink-cd494.appspot.com",
  messagingSenderId: "357542937311",
  appId: "1:357542937311:web:f91688ea03909abe55df6a",
  measurementId: "G-0D4RD0DNGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const firestore = firebase.firestore();

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();


export const createUserDocFromAuth = async (userAuth, additionalData) =>{
    const userDocRef = doc (db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshop = await getDoc(userDocRef);  
    console.log(userSnapshop);
    console.log(userSnapshop.exists());

    if (!userSnapshop.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch (error) { console.log('error creating ', error.messagage); }
    }

    return userDocRef;
}

export const getUserDocByUsername = async (username) => {
  try {
    const userDocs = await firestore.collection('users').where('email', '==', username).get();
    if (userDocs.empty) {
      console.log('No user document found for username:', username);
      return null;
    } else {
      const userDoc = userDocs.docs[0];
      console.log('User document found for username:', username);
      return userDoc;
    }
  } catch (error) {
    console.error('Error getting user document:', error);
    throw error;
  }
};
