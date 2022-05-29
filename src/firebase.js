// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBtlEpcuY7HrBX2KqukayK7fvJzagNnHVY",
    authDomain: "twitter-clone-ca641.firebaseapp.com",
    projectId: "twitter-clone-ca641",
    storageBucket: "twitter-clone-ca641.appspot.com",
    messagingSenderId: "1060247435672",
    appId: "1:1060247435672:web:d381d92e42efcca8b8d3ed",
    measurementId: "G-NZ0M4EBWBY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;