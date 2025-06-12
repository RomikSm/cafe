import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-row">
        <div className="header-col">
          <a href="#" className="header-button">HOME</a>
        </div>
        <div className="header-col">
          <a href="#about" className="header-button">ABOUT</a>
        </div>
        <div className="header-col">
          <a href="#menu" className="header-button">MENU</a>
        </div>
        <div className="header-col">
          <a href="#where" className="header-button">WHERE</a>
        </div>
      </div>
    </div>
  );
};

export default Header;