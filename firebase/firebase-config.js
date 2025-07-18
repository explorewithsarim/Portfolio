import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyARLmSMJA9MzjMcBSs6LGxzFbuiq3aX1KA",
  authDomain: "sarimsportfolio.firebaseapp.com",
  projectId: "sarimsportfolio",
  storageBucket: "sarimsportfolio.appspot.com",
  messagingSenderId: "80853441070",
  appId: "1:80853441070:web:fafe6c6f9372f0043e9dbf",
  measurementId: "G-HK1YJ4YGMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Form submission handler
const form = document.getElementById("loginForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get email and password values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Login using Firebase Auth
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login Successful");
      console.log("Logged in user:", user);
      // Redirect or do something after successful login
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Login Failed: " + errorMessage);
    });
});
