import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCgqHTbNR_rXmZq88GAn4d4BL9pz2qIW6M",
  authDomain: "crwn-clothing-b.firebaseapp.com",
  projectId: "crwn-clothing-b",
  storageBucket: "crwn-clothing-b.appspot.com",
  messagingSenderId: "414681921371",
  appId: "1:414681921371:web:c07a0f09b9a62ddd5acc7e",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
