import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero" id="home">
      <div className="hero-bottom-left">
        <span className="hero-tag">Open from 6am to 5pm</span>
      </div>
      <div className="hero-middle">
        <span className="hero-title">the<br />Cafe</span>
      </div>
      <div className="hero-bottom-right">
        <span className="hero-address">15 Adr street, 5015</span>
      </div>
    </header>
  );
};

export default Hero;