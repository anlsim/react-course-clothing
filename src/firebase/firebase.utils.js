import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDFY8ru9olsEX5QEm6jrj3c_dUqeDwEjGg",
    authDomain: "clothing-db-59d3e.firebaseapp.com",
    projectId: "clothing-db-59d3e",
    storageBucket: "clothing-db-59d3e.appspot.com",
    messagingSenderId: "918886189686",
    appId: "1:918886189686:web:7e32a200919b6525c2ed57",
    measurementId: "G-GED6EXBV3E"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
