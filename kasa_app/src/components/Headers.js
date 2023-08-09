import logo from '../assets/logo.jpg'
import React from 'react';
import {Link, useLocation } from "react-router-dom"

function Headers() {
  
  const location = useLocation();
  const isAccueilActive = location.pathname === '/';
  const isProposActive = location.pathname === '/propos';

return (

      <header className='headers'>
        <div className='Navbar'>
          <h1>      
              <img src={logo} className="App-logo" alt="logo" /> 
          </h1>
          <div className='Link'>
            <Link
              className={isAccueilActive ? 'Accueil active' : 'Accueil'}
              to="/"
            >
              Accueil
            </Link>
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

 
