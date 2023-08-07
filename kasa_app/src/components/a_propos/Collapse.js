import React from 'react';
import Arrowup from '../../assets/arrow_up.png'
function Collapse() {

    return (
    
    <div className='Collapse-content'>
        <div className='Collapse-card'>
            <p className='Collapse-title'>Fiabilité</p>
            <img src={Arrowup} className="Arow-up" alt="Arrow up" /> 
        </div>
        <div className='Collapse-card'>
            <p className='Collapse-title'>Respect</p>
            <img src={Arrowup} className="Arow-up" alt="Arrow up" />
        </div>
        <div className='Collapse-card'>
            <p className='Collapse-title'>Service</p>
            <img src={Arrowup} className="Arow-up" alt="Arrow up" />
        </div>
        <div className='Collapse-card'>
            <p className='Collapse-title'>Sécurité</p>
            <img src={Arrowup} className="Arow-up" alt="Arrow up" />
        </div>
    </div>
    
     
    )
    }
    export default Collapse;