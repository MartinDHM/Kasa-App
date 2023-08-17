import React from 'react';
import { Link } from 'react-router-dom';


export default function NotFound() { 

  return (
    <div className="notfound">
        <>
        <div className='notfound-container'>
            <h1 className='notfound-title'>404</h1>
            <p className='notfound-text'>Oups ! La page que                      vous demandez n'existe pas.</p>
            <Link to="/" className="back-link">
                <p>Retourner sur la page d'accueil</p>
            </Link>
        </div>

      </>
    </div>
  );
}