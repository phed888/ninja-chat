import firebase from "firebase";
import firestore from "firebase/firestore";

// initialize firebase
var config = {
  apiKey: "AIzaSyCC31nMBeC_PTg2PxnYL4DtMozX8SGmsRE",
  authDomain: "udemy-ninja-chat-4e713.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-4e713.firebaseio.com",
  projectId: "udemy-ninja-chat-4e713",
  storageBucket: "udemy-ninja-chat-4e713.appspot.com",
  messagingSenderId: "103431262480"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
