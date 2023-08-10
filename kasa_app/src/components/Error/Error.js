import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Importation des composants personnalisés
import Header from '../Headers';
import Footer from '../Footer';

// Définition de la fonction de la page "À propos"
export default function NotFound() { // Utilisez le nom correct "NotFound" ici
  // Utilisation du hook useLocation pour obtenir l'URL actuelle
  const location = useLocation();

  // Rendu de la page d'erreur 404
  return (
    <div className="notfound">
        <>
        <div className='notfound-container'>
            <h1 className='notfound-title'>404</h1>
            <p className='notfound-text'>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="back-link">
                <p>Retourner sur la page d'accueil</p>
            </Link>
        </div>

      </>
    </div>
  );
}