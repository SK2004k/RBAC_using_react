import React, { useState } from 'react';
import './StyleSwitcher.css';

function StyleSwitcher() {
  const [open, setOpen] = useState(false);

  const toggleSwitcher = () => {
    setOpen(!open);
  };

  return (
    <div className={`style-switcher ${open ? 'open' : ''}`}>
      <div className="style-switcher-toggler s-icon" onClick={toggleSwitcher}>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div className="day-night s-icon">
        <i className="fas"></i>
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        <span className="color-1" onClick={() => console.log('Set color-1')}></span>
        <span className="color-2" onClick={() => console.log('Set color-2')}></span>
        <span className="color-3" onClick={() => console.log('Set color-3')}></span>
        <span className="color-4" onClick={() => console.log('Set color-4')}></span>
        <span className="color-5" onClick={() => console.log('Set color-5')}></span>
      </div>
    </div>
  );
}

export default StyleSwitcher;