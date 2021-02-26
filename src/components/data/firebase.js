import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCAlbw29bWt8YzECJIUsXhoZWODu4JJ3Bg",
    authDomain: "slack-clone-chirag.firebaseapp.com",
    projectId: "slack-clone-chirag",
    storageBucket: "slack-clone-chirag.appspot.com",
    messagingSenderId: "443698642652",
    appId: "1:443698642652:web:bb4b2100a332f6b874be19"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export default db;
export {auth,provider};

