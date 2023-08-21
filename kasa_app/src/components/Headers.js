import logo from '../assets/logo.jpg'
import React from 'react';
import { Link, useLocation } from "react-router-dom"

// Composant Headers
function Headers() {
  // Récupération de l'emplacement actuel de la page
  const location = useLocation();
  
  // Vérification si la page d'accueil est active
  const isAccueilActive = location.pathname === '/';

  // Vérification si la page "À Propos" est active
  const isProposActive = location.pathname === '/propos';

  return (
    <header className='headers'>
      <div className='Navbar'>
        <h1>      
          {/* Logo Header */}
          <img src={logo} className="App-logo" alt="logo" /> 
        </h1>
        <div className='Link'>
          {/* Lien vers la page d'accueil avec classe active si la page est active */}
          <Link
            className={isAccueilActive ? 'Accueil active' : 'Accueil'}
            to="/"
          >
            Accueil
          </Link>
          {/* Lien vers la page "À Propos" avec classe active si la page est active */}
          <Link
            className={isProposActive ? 'Propos active' : 'Propos'} 
            to='/propos'
          >
            A Propos
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Headers;