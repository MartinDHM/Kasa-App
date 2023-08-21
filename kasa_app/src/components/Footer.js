import React from 'react';
import logofooter from '../assets/logo-footer.png'

// Composant Footer
function footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* Logo du footer */}
        <img src={logofooter} className="App-logoFooter" alt="logo" />
        {/* Information de droits d'auteur */}
        <p className='Info-Footer'>© 2020 Kasa. All rights reserved</p> 
      </div>
    </footer>
  )
}

export default footer;