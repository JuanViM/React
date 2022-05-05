import {firebase} from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtKWpPUyKPQb5AVMCFe1a5DJWNCXvhrz0",
    authDomain: "react-app-curso-5ebc8.firebaseapp.com",
    projectId: "react-app-curso-5ebc8",
    storageBucket: "react-app-curso-5ebc8.appspot.com",
    messagingSenderId: "412574073709",
    appId: "1:412574073709:web:eca6b8c7394a6a963c1064"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 

  export {
      db,
      googleAuthProvider,
     firebase 
  }
