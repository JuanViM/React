import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm_7rPbqgRsPtBMJpJRkTSH7RcCDwKguY",
  authDomain: "react-app-cursos-99e27.firebaseapp.com",
  projectId: "react-app-cursos-99e27",
  storageBucket: "react-app-cursos-99e27.appspot.com",
  messagingSenderId: "115131274301",
  appId: "1:115131274301:web:d3ca3d0e4e347f17b28654"
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
