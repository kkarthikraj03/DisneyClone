import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAoHzzyjKOKY7batglQBmeMImG0z2s8q0E",
    authDomain: "disneyplusclone-c2b78.firebaseapp.com",
    projectId: "disneyplusclone-c2b78",
    storageBucket: "disneyplusclone-c2b78.appspot.com",
    messagingSenderId: "834365284423",
    appId: "1:834365284423:web:c2aa24a6d23682e1b65162",
    measurementId: "G-Q6CMHGK2VP"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export default db;


