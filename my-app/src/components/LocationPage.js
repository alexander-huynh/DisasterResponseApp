import React, { useEffect, useState } from 'react';
import './LocationPage.css'; // Ensure you create and link LocationPage-specific CSS

const LocationPage = () => {
  const [coordinates, setCoordinates] = useState({
    hardCoded: { latitude: '', longitude: '', civicAddress: '' },
    apiCall: { latitude: '', longitude: '', civicAddress: '' }
  });

  // Fetch device location from the backend
  useEffect(() => {
    const fetchDeviceLocation = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-device-location');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCoordinates({
          hardCoded: {
            latitude: data.hard_coded.latitude,
            longitude: data.hard_coded.longitude,
            civicAddress: data.hard_coded.civic_address
          },
          apiCall: {
            latitude: data.api_call.latitude,
            longitude: data.api_call.longitude,
            civicAddress: data.api_call.civic_address || 'N/A'
          }
        });
      } catch (error) {
        console.error('Error fetching device location:', error);
      }
    };

    fetchDeviceLocation();
  }, []);

  return (
    <div className="location-container">
      <h1>Location Page</h1>
      <div className="coordinates-box">
        <h2>Your Device Location</h2>
        <h3>Hard-Coded Coordinates:</h3>
        <p><strong>Coordinates:</strong> {coordinates.hardCoded.latitude}, {coordinates.hardCoded.longitude}</p>
        <p><strong>Region:</strong> {coordinates.hardCoded.civicAddress}</p>
        
        <h3>API Call Coordinates:</h3>
        <p><strong>Coordinates:</strong> {coordinates.apiCall.latitude}, {coordinates.apiCall.longitude}</p>
        <p><strong>Region:</strong> {coordinates.apiCall.civicAddress}</p>
      </div>
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
