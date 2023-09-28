import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAuth } from "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAtB5VbXH-UCHSzoIN64gGW8hg5-URwHnM",
    authDomain: "imoney-c4ac0.firebaseapp.com",
    projectId: "imoney-c4ac0",
    storageBucket: "imoney-c4ac0.appspot.com",
    messagingSenderId: "403374515154",
    appId: "1:403374515154:web:71fa8c251e43d135549e0b",
    measurementId: "G-QZRBE39MW4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth }