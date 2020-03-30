import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAc6dr6k6gbeUQ0letqexFlGS4zqQVRMUU",
  authDomain: "thugg-juice.firebaseapp.com",
  databaseURL: "https://thugg-juice.firebaseio.com",
  projectId: "thugg-juice",
  storageBucket: "thugg-juice.appspot.com",
  messagingSenderId: "935988625702",
  appId: "1:935988625702:web:9451b6706c7ab1af5241e7",
  measurementId: "G-777YNKPRJY"
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
