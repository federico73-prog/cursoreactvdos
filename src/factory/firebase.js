import firebase from 'firebase/app';
import 'firebase/firestore';

var app = firebase.initializeApp({
    apiKey: "AIzaSyCCJOEzs5Mu35OBpScTzzfJytCgjk2nYZ0",
    authDomain: "federico-ecommerce.firebaseapp.com",
    projectId: "federico-ecommerce",
    storageBucket: "federico-ecommerce.appspot.com",
    messagingSenderId: "678366520915", 
    appId: "1:678366520915:web:65f79cd58b9499bff208a6",
    measurementId: "G-PCKKX2GKP9"
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
