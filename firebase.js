import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmGBL0pDqcW8EyzE5BfZVlolNBjNRzhmc",
  authDomain: "yume-f41ae.firebaseapp.com",
  projectId: "yume-f41ae",
  storageBucket: "yume-f41ae.firebasestorage.app",
  messagingSenderId: "357238721312",
  appId: "1:357238721312:web:1b4981406d5f17847f2545",
  measurementId: "G-EH6FPWVVH5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
