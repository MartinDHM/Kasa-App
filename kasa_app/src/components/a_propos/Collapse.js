import React, { useState } from 'react';
import Arrowup from '../../assets/arrow_up.png'

// Composant Collapse
const Collapse = ({ title, children }) => {
  // État local pour suivre l'état d'expansion ou de réduction
  const [isCollapse, setIsCollapse] = useState(true);

  // Fonction pour basculer le modale
  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div className='Collapse-space'>
      {/* Bouton pour contrôler l'expansion/réduction */}
      <button onClick={toggleCollapse} className="Collapse-card">
        {title}
        {/* Icône de flèche vers le haut, tournant en fonction de l'état */}
        <img src={Arrowup} className={`Arrow-up ${isCollapse ? '' : 'rotate'}`} alt="Arrow up" />
      </button>
      {/* Contenu à afficher si l'expansion est activée */}
      {!isCollapse && <div className="collapse-container">{children}</div>}
    </div>
  );
};

export default Collapse;