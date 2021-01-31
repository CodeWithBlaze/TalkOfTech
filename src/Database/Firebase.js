import firebase from 'firebase/app';
import '@firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyD8ysISqU6kc9toXwFGg7aHpWy4_pEq3Cc",
    authDomain: "talk-of-tech.firebaseapp.com",
    projectId: "talk-of-tech",
    storageBucket: "talk-of-tech.appspot.com",
    messagingSenderId: "985591044163",
    appId: "1:985591044163:web:a9916f42ed926e2f00dcf6",
    measurementId: "G-DKQ56SDV54"
  };
  // Initialize Firebase
let database=firebase.initializeApp(firebaseConfig);
//firebase.analytics();
export default database.firestore();