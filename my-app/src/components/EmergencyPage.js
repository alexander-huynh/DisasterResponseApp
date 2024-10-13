import React from 'react';
import './EmergencyPage.css'; // Ensure you create and link EmergencyPage-specific CSS

const EmergencyPage = () => {
  return (
    <div className="emergency-container">
      <h1>Emergency Contact</h1>
      <input type="text" placeholder="Enter emergency contact" />
      <button>Call 911</button>
      <h2>What do you need?</h2>
      <ul className="emergency-list">
        <li>Shelter</li>
        <li>Food</li>
        <li>Water</li>
      </ul>
    </div>
  );
};

export default EmergencyPage;
