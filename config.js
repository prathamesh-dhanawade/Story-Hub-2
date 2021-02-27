import firebase from 'firebase';
require("@firebase/firestore")


const firebaseConfig = {
    apiKey: "AIzaSyC29vB6-CKlYuTmSYWO_tin6f92TiNzElQ",
    authDomain: "story-hub-559a8.firebaseapp.com",
    databaseURL: "https://story-hub-559a8-default-rtdb.firebaseio.com",
    projectId: "story-hub-559a8",
    storageBucket: "story-hub-559a8.appspot.com",
    messagingSenderId: "34436700351",
    appId: "1:34436700351:web:f538701175c04c6c874e0a",
    measurementId: "G-407C2D81HL"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()