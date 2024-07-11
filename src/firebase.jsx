import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn1rPAYNrCqIKpYW0hT82VISUxXyLbfWU",
  authDomain: "ecoflix-fe382.firebaseapp.com",
  projectId: "ecoflix-fe382",
  storageBucket: "ecoflix-fe382.appspot.com",
  messagingSenderId: "171721595886",
  appId: "1:171721595886:web:9af653919175cc23d10cff",
  measurementId: "G-7K1RS9E8RP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
