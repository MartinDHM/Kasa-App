import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const LogementDetails = ({ data }) => {
  const { index } = useParams();
  const selectedItem = data[+index];

  if (!selectedItem) {
    return <div>Logement introuvable.</div>;
  }

  // Fonction pour générer les étoiles en fonction du rating
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const remainingStars = 5 - fullStars; // Calcul des étoiles vides

    const stars = [];

    // Remplir les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} color="#FFD700" />);
    }

    // Ajouter les étoiles vides avec bordure noire
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i + fullStars}
          icon={faStar}
        />
      );
    }

    return stars;
  };

  return (
    <section className='logement-container'>
      <div className='Carrousel'>
        <img src={selectedItem.cover} alt={selectedItem.title} className='logement-image' />
      </div>
      <div className='logement-details'>
        <h2 className='logement-title'>{selectedItem.title}</h2>
        <p className='logement-location'>{selectedItem.location}</p>
        <div className='logement-tags'>
          {selectedItem.tags.map((tag, index) => (
            <span key={index} className='tag'>
              {tag}
            </span>
          ))}
        </div>
        <div className='logement-rating'>
          {renderRatingStars(selectedItem.rating)}
        </div>
      </div>
    </section>
  );
};

export default LogementDetails;
