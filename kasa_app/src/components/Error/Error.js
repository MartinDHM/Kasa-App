import React from 'react';
import { Link } from 'react-router-dom';

// Composant NotFound
export default function NotFound() { 
  return (
    <div className="notfound">
      <>
        <div className='notfound-container'>
          {/* Titre de la page 404 */}
          <h1 className='notfound-title'>404</h1>
          {/* Message d'erreur */}
          <p className='notfound-text'>Oups ! La page que vous demandez n'existe pas.</p>
          {/* Lien de retour vers la page d'accueil */}
          <Link to="/" className="back-link">
            <p>Retourner sur la page d'accueil</p>
          </Link>
        </div>
      </>
    </div>
  );
}