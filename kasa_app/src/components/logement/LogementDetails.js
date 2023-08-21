import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Collapse from '../a_propos/Collapse';
import Carrousel from '../logement/Carrousel';
import Error from '../Error/Error'; 

// Composant LogementDetails
const LogementDetails = ({ data }) => {
  // Récupération de l'indice du logement depuis les paramètres de l'URL
  const { index } = useParams();
  const selectedIndex = +index; 

  // Vérification de la validité de l'indice
  if (selectedIndex < 0 || selectedIndex >= data.length) {
    return <Error />; // Afficher une page d'erreur si l'indice est invalide
  }

  // Sélection du logement correspondant à l'indice
  const selectedItem = data[selectedIndex];

  // Fonction pour générer les étoiles en fonction du rating
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const remainingStars = 5 - fullStars; // Calcul des étoiles vides

    const stars = [];

    // Remplir les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} color="#FF6060" />);
    }

    // Ajouter les étoiles vides avec bordure noire
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FontAwesomeIcon key={i + fullStars} icon={faStar} color='#E3E3E3' />);
    }

    return stars;
  };

  return (
    <section className='logement-container'>
      <div className='Carrousel'>
        {/* Affichage du carrousel d'images */}
        <Carrousel className='image-carrousel' images={selectedItem.pictures} />
      </div>
      <div className='logement-details'>
        <h2 className='logement-title'>{selectedItem.title}</h2>
        <p className='logement-location'>{selectedItem.location}</p>
        <div className='logement-tags'>
          {/* Affichage des tags du logement */}
          {selectedItem.tags.map((tag, index) => (
            <span key={index} className='tag'>
              {tag}
            </span>
          ))}
        </div>
        {/* Affichage du propriètaire */}
        <div className='host-rating'>
          <div className='Host-picture'>
            <img className='Picturehost' src={selectedItem.host.picture} alt='Portrait host' />
            <p className='Host'>{selectedItem.host.name}</p>
          </div>
          {/* Affichage des étoiles de notation */}
          <div className='logement-rating'>{renderRatingStars(selectedItem.rating)}</div>
        </div>
        <div className='Collapse-logement'>
          {/* Sections de description et d'équipements avec le composant Collapse */}
          <Collapse className='logement-collapse' title='Description'>
            <p className='Collapse-text'>{selectedItem.description}</p>
          </Collapse>
          <Collapse title='Equipement'>
            <p className='Collapse-text'>{selectedItem.equipments}</p>
          </Collapse>
        </div>
      </div>
    </section>
  );
};

export default LogementDetails;