import React from 'react';
import BannerHome from '../../assets/HomeBanner.jpg';
import Card from './card';
import data from '../../datas/datas.json';



function Home() {

return (

    <main className='Home-container'>
        <div className='Banner'>
            <img src={BannerHome} className="Banner-Background" alt="logo" /> 
            <p className='Banner-title'>Chez vous, partout et ailleurs</p>
        </div>
        <section id='card-container' className='location'>
        <Card data={data} /> {/* Passer les données au composant Card */}
      </section>
    </main>
 
)
}
export default Home;