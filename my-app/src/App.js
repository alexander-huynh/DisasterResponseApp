import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import HelpPage from './components/HelpPage';
import EmergencyPage from './components/EmergencyPage';
import LocationPage from './components/LocationPage';
import NavPage from './components/NavPage'; // Import the Navigation Page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="nav-menu">
              <li><Link className="nav-button" to="/nav">Navigation Page</Link></li>
              {/* Temporarily removed buttons for Help, Emergency, and Location Pages */}
              {/* <li><Link className="nav-button" to="/help">Help Page</Link></li> */}
              {/* <li><Link className="nav-button" to="/emergency">Emergency Page</Link></li> */}
              {/* <li><Link className="nav-button" to="/location">Location Page</Link></li> */}
            </ul>
          </nav>
        </header>

        {/* Use Routes to switch between components */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/nav" element={<NavPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
