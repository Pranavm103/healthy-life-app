import React from 'react';
import heroImg from '../assets/hero.png';
import './Hero.css'; // Link to external CSS

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1>Welcome to HealthyLife</h1>
      </div>
    </section>
  );
};

export default Hero;
