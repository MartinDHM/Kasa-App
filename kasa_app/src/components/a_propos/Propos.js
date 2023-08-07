import React from 'react';
import BannerHome from '../../assets/AboutBanner.jpg'
import Collapse from './Collapse';

function Propos () {
    return (
      <main className='Home-container'>
        <div className='Banner'>
            <img src={BannerHome} className="Banner-about" alt="logo" /> 
        </div>
        <div>
          <Collapse />
        </div>
      </main>
  )
}
export default Propos;