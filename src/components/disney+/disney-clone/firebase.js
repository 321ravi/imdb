import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAsh8uziqpTmjD0mCv8g0a1e6ZPjqvkvTU",
    authDomain: "disney-clone-2a211.firebaseapp.com",
    projectId: "disney-clone-2a211",
    storageBucket: "disney-clone-2a211.appspot.com",
    messagingSenderId: "576368880257",
    appId: "1:576368880257:web:efef3342ab1ec6d2cefb80"
  };

  
  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  export {  db };
