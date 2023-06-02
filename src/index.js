import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBfRALybFC6bxn56c_VK0ZZp7bkEwjUYo4",
  authDomain: "calendrierweb-cb2d7.firebaseapp.com",
  projectId: "calendrierweb-cb2d7",
  storageBucket: "calendrierweb-cb2d7.appspot.com",
  messagingSenderId: "381591054329",
  appId: "1:381591054329:web:c4198ac039c60ceca0bf28",
  measurementId: "G-EJSWKTH459"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtention de l'authentification Firebase
const auth = getAuth(app);

// Initialisation de Firestore
const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Exportation de l'authentification Firebase et de Firestore
export { auth, db };
