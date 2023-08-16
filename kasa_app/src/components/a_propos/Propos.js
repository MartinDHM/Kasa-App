import React from 'react';
import BannerHome from '../../assets/AboutBanner.jpg'
import Collapse from './Collapse';

function Propos () {
    return (
      <main className='Home-container'>
        <div className='Banner'>
            <img src={BannerHome} className="Banner-about" alt="banniere A propos" /> 
        </div>
        <div>
        <Collapse title="Fiabilité">
          <p className='Collapse-text'>Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse title="Respect">
          <p className='Collapse-text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Services">
          <p className='Collapse-text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Sécurité">
          <p className='Collapse-text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
        </div>
      </main>
  )
}
export default Propos;