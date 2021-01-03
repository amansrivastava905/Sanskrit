import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCgYIbiEJiMfr824u4DxR2hB1i-m8D-hrc",
    authDomain: "sanskrit-db.firebaseapp.com",
    projectId: "sanskrit-db",
    storageBucket: "sanskrit-db.appspot.com",
    messagingSenderId: "686894677160",
    appId: "1:686894677160:web:bf128538902a693ae3969d",
    measurementId: "G-H2KD1Q6CYD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();