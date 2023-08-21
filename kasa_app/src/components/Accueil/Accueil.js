import React from 'react';
import BannerHome from '../../assets/HomeBanner.jpg';
import Card from './card'; // Import du composant de carte
import data from '../../datas/datas.json'; // Import des données de logement depuis un fichier JSON

// Composant Home
function Home() {
  return (
    <main className='Home-container'>
      {/* Bannière de l'accueil */}
      <div className='Banner'>
        <img src={BannerHome} className="Banner-Background" alt="logo" /> 
        <h1 className='Banner-title'>Chez vous, partout et ailleurs</h1>
      </div>
      {/* Section de cartes de logement */}
      <section id='card-container' className='location'>    
        {/* Utilisation du composant Card pour afficher les cartes de logement en utilisant les données importées */}
        <Card data={data} /> 
      </section>
    </main>
  )
}

export default Home;