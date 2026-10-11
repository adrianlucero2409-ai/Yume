
import { auth, googleProvider } from "./firebase.js";
import {
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const googleButton = document.getElementById("googleSignInButton");

if (googleButton) {
  googleButton.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert("¡Bienvenido a Yume, " + (result.user.displayName || "viajero") + "!");
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión: " + error.code);
    }
  });
}

onAuthStateChanged(auth, (user) => {
  if (user && googleButton) {
    googleButton.innerHTML =
      '<span class="google-g">G</span><span>Sesión iniciada</span>';
  }
});
