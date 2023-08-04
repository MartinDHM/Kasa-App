import React from 'react';
import BannerHome from '../../assets/HomeBanner.jpg'


function Home() {

return (

    <main className='Home-container'>
        <div className='Banner'>
            <img src={BannerHome} className="Banner-Background" alt="logo" /> 
            <p className='Banner-title'>Chez vous, partout et ailleurs</p>
        </div>
        <section className='location'>
            <div className='location-content'>
                <article className='location-card'>
                    <p className='location-title'>Titre de la location</p>
                </article>
                <article className='location-card'>
                    <p className='location-title'>Titre de la location</p>
                </article>
                <article className='location-card'>
                    <p className='location-title'>Titre de la location</p>
                </article>
                <article className='location-card'>
                    <p className='location-title'>Titre de la location</p>
                </article>
                <article className='location-card'>
                    <p className='location-title'>Titre de la location</p>
                </article>
                <article className='location-card'>
                    <p className='location-title'>Titre de la location</p>
                </article>
            </div>
        </section>
    </main>
 
)
}
export default Home;