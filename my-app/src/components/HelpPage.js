// HelpPage.js
import React from 'react';
import './HelpPage.css'; // Ensure you create and link HelpPage-specific CSS

const HelpPage = () => {
  return (
    <div className="help-container">
      <h1>Help Page</h1>
      <p>Need help? Here are some resources.</p>
      <button className="help-button" onClick={() => alert('Help Button Clicked!')}>Help</button>
    </div>
  );
};

export default HelpPage;
