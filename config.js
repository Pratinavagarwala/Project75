import firebase from "firebase"
require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDpwmKYPm9tbzRAPjAzWMyKjIZx-vFZnYw",
    authDomain: "bartersystem-a7cfb.firebaseapp.com",
    projectId: "bartersystem-a7cfb",
    storageBucket: "bartersystem-a7cfb.appspot.com",
    messagingSenderId: "125330876441",
    appId: "1:125330876441:web:cc025c6ecf06fc1eb1a288"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()