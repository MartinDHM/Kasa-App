
import React, { useState } from 'react';
import Arrowup from '../../assets/arrow_up.png'

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button onClick={toggleCollapse} className="Collapse-card">
        {title}
        <img src={Arrowup} className="Arow-up" alt="Arrow up" />
      </button>
      {!isCollapsed && <div className="collapse-container">{children}</div>}
    </div>
  );
};

export default Collapse;