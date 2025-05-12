import React from 'react';
import './DietChart.css';  // Assuming the CSS file is named DietChart.css

const DietChart = () => {
  return (
    <div className="diet-chart-container">
      <div className="image-container">
        <img src="/assets/diet_chart.png" alt="Diet Chart" className="centered-image" />
      </div>
      <p>Follow this diet chart for a healthier lifestyle!</p>
    </div>
  );
}

export default DietChart;
