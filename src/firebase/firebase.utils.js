import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAKd7HNriv-e1pYtYNP9e9t7NAMn42EbQQ",
    authDomain: "crwn-db-4cc80.firebaseapp.com",
    projectId: "crwn-db-4cc80",
    storageBucket: "crwn-db-4cc80.appspot.com",
    messagingSenderId: "782868353724",
    appId: "1:782868353724:web:75ef32b6f548d806daf6b9",
    measurementId: "G-VB6JCM84RN"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;