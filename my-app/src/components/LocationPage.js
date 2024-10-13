import React from 'react';
import './LocationPage.css'; // Ensure you create and link LocationPage-specific CSS

const LocationPage = () => {
  return (
    <div className="location-container">
      <h1>Location Page</h1>
      <iframe 
        src="/location.html" // This points to your location.html in the public folder
        width="100%" // Adjust width as needed
        height="600px" // Adjust height as needed
        style={{ border: 0 }}
        title="Location Map"
      ></iframe>
    </div>
  );
};

export default LocationPage;
