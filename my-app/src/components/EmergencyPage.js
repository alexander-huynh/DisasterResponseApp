import React from 'react';
import './EmergencyPage.css'; // Ensure you create and link EmergencyPage-specific CSS

const EmergencyPage = () => {
  return (
    <div className="emergency-container">
      <img src={`${process.env.PUBLIC_URL}/pinkLogoSmall.png`} alt="Pink Logo" className="pink-logo" />
      <h1>Emergency Contact</h1>
      <input type="text" className="emergency-input" placeholder="Enter emergency contact" />
      <button className="emergency-button">Call 911</button>
      
      <h2>What do you need?</h2>
      <ul className="emergency-list">
        <li><button className="emergency-option">Shelter</button></li>
        <li><button className="emergency-option">Food</button></li>
        <li><button className="emergency-option">Water</button></li>
      </ul>
    </div>
  );
};

export default EmergencyPage;
