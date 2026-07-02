import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxc67ZQiY4hHfAkvNq1emVC8qUoT_diBQ",
  authDomain: "portfoilio-manager.firebaseapp.com",
  databaseURL: "https://portfoilio-manager-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfoilio-manager",
  storageBucket: "portfoilio-manager.appspot.com",
  messagingSenderId: "1065030502150",
  appId: "1:1065030502150:web:27e2601523587f4ac64087",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginMessage = document.getElementById('loginMessage');

// Email/Password Login
document.getElementById('adminLoginForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const email = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  loginMessage.textContent = "Authenticating...";
  loginMessage.style.color = "#444";

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Login failed:", error);
    loginMessage.style.color = "#e74c3c";
    loginMessage.textContent = "Invalid credentials or login failed!";
  }
});
