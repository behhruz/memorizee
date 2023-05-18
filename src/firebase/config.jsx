import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBtCmX5vFaNmlJaAI-HfTTLDr1vWheBYQ",
  authDomain: "memorizee-56010.firebaseapp.com",
  projectId: "memorizee-56010",
  storageBucket: "memorizee-56010.appspot.com",
  messagingSenderId: "407014086380",
  appId: "1:407014086380:web:b57f740f4a9ce8be03b7c9",
  measurementId: "G-WKVXRZBJGW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
