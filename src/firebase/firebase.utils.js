import * as firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAquDXYIEdegPFVmIzkDO_-qyp752z9yNM",
  authDomain: "clothing-store-3fd59.firebaseapp.com",
  databaseURL: "https://clothing-store-3fd59.firebaseio.com",
  projectId: "clothing-store-3fd59",
  storageBucket: "clothing-store-3fd59.appspot.com",
  messagingSenderId: "264876658198",
  appId: "1:264876658198:web:d286dfe49b8e2511f82f37",
  measurementId: "G-SZ2N81C75S",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionandDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
