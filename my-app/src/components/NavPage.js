import React from 'react';
import { Link } from 'react-router-dom';
import './NavPage.css'; // Ensure that this path is correct

const NavPage = () => {
  return (
    <div className="nav-container">
      <h1>Navigation Menu</h1>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/help">Help Page</Link>
        </li>
        <li>
          <Link to="/emergency">Emergency Page</Link>
        </li>
        <li>
          <Link to="/location">Location Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavPage;
