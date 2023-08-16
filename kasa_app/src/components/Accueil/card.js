import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className='location-content'>
      {data.map((item, index) => (
        <article className='location-card' key={index}>
          <Link to={`/Logement/${index}`}>
            <img src={item.cover} alt={item.title} className='location-image' />
            <p className='location-title'>{item.title}</p>
            <p className='location-detail'>{item.location}</p>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Card;