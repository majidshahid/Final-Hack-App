// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSB35MCoSeFy25lwoICvW4A97aCUPOjf8",
  authDomain: "react-hack-e0e65.firebaseapp.com",
  projectId: "react-hack-e0e65",
  storageBucket: "react-hack-e0e65.appspot.com",
  messagingSenderId: "431134331741",
  appId: "1:431134331741:web:5924aec21fe880ebe04eb4"

  // apiKey: "AIzaSyDSB35MCoSeFy25lwoICvW4A97aCUPOjf8",
  // authDomain: "react-hack-e0e65.firebaseapp.com",
  // projectId: "react-hack-e0e65",
  // storageBucket: "react-hack-e0e65.appspot.com",
  // messagingSenderId: "431134331741",
  // appId: "1:431134331741:web:6410c32f12c43357e04eb4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app=firebase.initializeApp(firebaseConfig)
}else{
  app=firebase.app()
}
const auth =firebase.auth()
var database = firebase.database();
// firebase.initializeApp(config);

// // Get a reference to the database service

export {auth,database};

// const app = initializeApp(firebaseConfig);\
