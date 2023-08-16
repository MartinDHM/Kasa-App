
import React, { useState } from 'react';
import Arrowup from '../../assets/arrow_up.png'

const Collapse = ({ title, children }) => {
  const [isCollapse, setIsCollapse] = useState(true);

  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div>
      <button onClick={toggleCollapse} className="Collapse-card">
        {title}
        <img src={Arrowup} className={`Arrow-up ${isCollapse ? '' : 'rotate'}`} alt="Arrow up" />
      </button>
      {!isCollapse && <div className="collapse-container">{children}</div>}
    </div>
  );
};

export default Collapse;