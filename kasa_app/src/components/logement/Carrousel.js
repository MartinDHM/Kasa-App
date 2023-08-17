import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Carrousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <img className='image-carrousel' src={images[currentImageIndex]} alt="carousel" />
        <div className='button-carrousel'>
            <button className="carousel-buttonLeft" onClick={prevImage}>
                <FontAwesomeIcon className='ArrowLeft' icon={faArrowLeft} />
            </button>
            <button className="carousel-buttonRight" onClick={nextImage}>
                <FontAwesomeIcon className='ArrowRight' icon={faArrowRight} />
            </button>
        </div>
    </div>
  );
};

export default Carrousel;