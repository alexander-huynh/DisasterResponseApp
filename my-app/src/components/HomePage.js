import React from 'react';
import './HomePage.css'; // Ensure this file exists and is linked correctly

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Disaster Relief App</h1>
      <img src="/pinkLogo.png" alt="Pink Logo" className="pink-logo" />
    </div>
  );
};

export default HomePage;
