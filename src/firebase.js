import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_S220_NehtmL7IW9-AS9nMSPaCDS788g",
  authDomain: "react-auth-737e0.firebaseapp.com",
  projectId: "react-auth-737e0",
  storageBucket: "react-auth-737e0.appspot.com",
  messagingSenderId: "310104409819",
  appId: "1:310104409819:web:dbebca552a36448e782efe"
};


const app = firebase.initializeApp(firebaseConfig);


export const auth = app.auth();
export const firestore = app.firestore();
export default app;