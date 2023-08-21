import React from 'react';
import { Link } from 'react-router-dom';

// Composant Card
const Card = ({ data }) => {
  return (
    <div className='location-content'>
      {/* Mapping à travers les données pour afficher les cartes */}
      {data.map((item, index) => (
        <article className='location-card' key={index}>
          {/* Lien vers la page de détails du logement en utilisant l'index */}
          <Link to={`/Logement/${index}`}>
            {/* Image du logement */}
            <img src={item.cover} alt={item.title} className='location-image' />
            {/* Titre du logement */}
            <p className='location-title'>{item.title}</p>
            {/* Détails de l'emplacement du logement */}
            <p className='location-detail'>{item.location}</p>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Card;