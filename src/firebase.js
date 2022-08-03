import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

var firebaseConfig = {
  apiKey: "AIzaSyA1mJGfGP7sUALURMTCgd8S_KcBq9FvNek",
  authDomain: "trustiva-37f49.firebaseapp.com",
  databaseURL: "https://trustiva-37f49-default-rtdb.firebaseio.com",
  projectId: "trustiva-37f49",
  storageBucket: "trustiva-37f49.appspot.com",
  messagingSenderId: "1032213862814",
  appId: "1:1032213862814:web:43223674bda5c3c3209e8f",
  measurementId: "G-5B905TE60D"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
// Initialize Firebase
