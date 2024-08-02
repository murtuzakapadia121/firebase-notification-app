import 'firebase/firestore';
import 'firebase/auth';
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD49cadfUlhzjBewrkg3AYV8Med4iST1Tg",
  authDomain: "fir-notification-app-2bf10.firebaseapp.com",
  projectId: "fir-notification-app-2bf10",
  storageBucket: "fir-notification-app-2bf10.appspot.com",
  messagingSenderId: "247339313576",
  appId: "1:247339313576:web:3f468e8301318b11e1159d",
  measurementId: "G-NQPQ6VLNX6"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app); 
const firestore = getFirestore(app);
connectFirestoreEmulator(firestore, 'localhost', 8080); // Default port is 8080

export { firestore, auth };
