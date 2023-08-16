import React from 'react';
import BannerHome from '../../assets/HomeBanner.jpg';
import Card from './card';
import data from '../../datas/datas.json';


function Home() {

return (

    <main className='Home-container'>
        <div className='Banner'>
            <img src={BannerHome} className="Banner-Background" alt="logo" /> 
            <h1 className='Banner-title'>Chez vous, partout et ailleurs</h1>
        </div>
        <section id='card-container' className='location'>    
            <Card data={data} /> 
      </section>
    </main>
 
)
}
export default Home;