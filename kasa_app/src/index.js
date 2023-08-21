import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import Headers from './components/Headers.js';
import Footer from './components/Footer.js';
import './Sass/main.css';
import { BrowserRouter } from "react-router-dom"

// Création de la racine pour l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application React dans la racine
root.render(
  <div className="main-container">  
    {/* Utilisation du BrowserRouter pour gérer les routes */}
    <BrowserRouter>
      {/* Inclusion de l'en-tête, de l'application principale (App) et du pied de page (Footer) */}
      <Headers />
      <App />
      <Footer />
    </BrowserRouter>
  </div>
);