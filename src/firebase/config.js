// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGF41npn0qfuGvg2IH1_5TqjlCT82ziro",
  authDomain: "yaru-cosmetica.firebaseapp.com",
  projectId: "yaru-cosmetica",
  storageBucket: "yaru-cosmetica.appspot.com",
  messagingSenderId: "1067013443633",
  appId: "1:1067013443633:web:0d038d522a248371280510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);