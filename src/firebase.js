import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBic23TGQtLB1UUNR2EY6l3hMGg6aSc3E0",
    authDomain: "printedbags-a64df.firebaseapp.com",
    databaseURL: "https://printedbags-a64df.firebaseio.com",
    projectId: "printedbags-a64df",
    storageBucket: "printedbags-a64df.appspot.com",
    messagingSenderId: "527340978020",
    appId: "1:527340978020:web:30faa955593e0c3029c471",
    measurementId: "G-5VG139LZWS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database().ref();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};