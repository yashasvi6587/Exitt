import React from 'react';
import '../Styles/New.css';
import { Link } from 'react-router-dom';

const New = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h1>GEAR UP. RIDE HARD. LIVE FREE.</h1>
        <p>Engineered for those who ride — and never settle.</p>
        <Link to="/collection"><button className="hero-btn">Shop Collection</button></Link>
      </div>
    </div>
  );
};

export default New