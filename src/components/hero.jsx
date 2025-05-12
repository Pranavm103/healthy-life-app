import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url('/assets/hero.png')` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1>Welcome to HealthyLife</h1>
      </div>
    </section>
  );
};

export default Hero;
