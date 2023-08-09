
import React from 'react';

const Card = ({ data }) => {
  return (
    <div className='location-content'>
      {data.map((item, index) => (
        <article className='location-card' key={index}>
            <img src={item.cover} alt={item.title} className='location-image' />
            <p className='location-title'>{item.title}</p>
            <p className='location-detail'>{item.location}</p>
          {/* Autres éléments de la carte (image, description, etc.) */}
        </article>
      ))}
    </div>
  );
};

export default Card;