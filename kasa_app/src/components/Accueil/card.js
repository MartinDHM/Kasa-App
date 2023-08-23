import React from 'react';
import { Link } from 'react-router-dom';

// Composant Card
const Card = ({ data }) => {
  const cardElements = data.map((item, index) => (
    <Link to={`/Logement/${index}`} key={index} className='location-card' style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${item.cover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
      {/* Contenu de la carte */}
      <p className='location-title'>{item.title}</p>
      <p className='location-detail'>{item.location}</p>
    </Link>
  ));

  return <div className='location-content'>{cardElements}</div>;
};

export default Card;