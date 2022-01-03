import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBi9hpjGurohskVOEocbdWZ60HiiLzGx18",
  authDomain: "discord-d7f06.firebaseapp.com",
  projectId: "discord-d7f06",
  storageBucket: "discord-d7f06.appspot.com",
  messagingSenderId: "31983679799",
  appId: "1:31983679799:web:04c0facaa195ba74e042b2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
