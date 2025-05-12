import React from 'react';
import DietPlan from './DietPlan';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Contact from './Contact';
import DietChart from './DietChart';

function App() {
  return (
    <div>
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>
      <DietChart/>
      <div id="about">
        <h1 style={{ textAlign: 'center' }}>Control Diabetes Through Indian Diet</h1>
        <h2 style={{ textAlign: 'center' }}>2-Week Diet Plan</h2>
        <DietPlan />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <footer style={{ textAlign: 'center', marginTop: '40px' }}>
        <p>For more information, Visit: <a href="https://www.niddk.nih.gov"> https://www.niddk.nih.gov</a> </p>
        <p>Made with ❤️ HealthyLife</p>
      </footer>
    </div>
  );
}

export default App;
