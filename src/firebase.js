import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgHs5GGZlIPAXQAga5wygU_vLsjKcuBwQ",
    authDomain: "slack-clone-23d24.firebaseapp.com",
    projectId: "slack-clone-23d24",
    storageBucket: "slack-clone-23d24.appspot.com",
    messagingSenderId: "530817170673",
    appId: "1:530817170673:web:d709f6f5a612d7e58ffd50",
    measurementId: "G-N21RYHSTPX"
 };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;