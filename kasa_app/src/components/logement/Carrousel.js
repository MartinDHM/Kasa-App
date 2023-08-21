import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Composant Carrousel
const Carrousel = ({ images }) => {
  // État local pour suivre l'index de l'image actuellement affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      {/* Image affichée dans le carrousel */}
      <img className='image-carrousel' src={images[currentImageIndex]} alt="carousel" />
      {/* Boutons de navigation du carrousel */}
      <div className='button-carrousel'>
        <button className="carousel-buttonLeft" onClick={prevImage}>
          <FontAwesomeIcon className='ArrowLeft' icon={faArrowLeft} />
        </button>
        <button className="carousel-buttonRight" onClick={nextImage}>
          <FontAwesomeIcon className='ArrowRight' icon={faArrowRight} />
        </button>
      </div>
      {/* Pagination indiquant l'indice actuel de l'image */}
      <div className="carousel-pagination">
        <span>{currentImageIndex + 1} / {images.length}</span>
      </div>
    </div>
  );
};

export default Carrousel;