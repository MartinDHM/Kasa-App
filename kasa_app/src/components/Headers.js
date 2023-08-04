import logo from '../assets/logo.jpg'
import React from 'react';
import {Link} from "react-router-dom"

function headers() {

return (

    
      
        <div className='Navbar'>
        <h1>      
            <img src={logo} className="App-logo" alt="logo" /> 
        </h1>
          <div className='Link'>
            <Link className='Accueil' to="/">Accueil</Link>
            <Link className='Propos' to="/propos">A Propos</Link>
          </div> 
        </div> 

 
)
}
export default headers;