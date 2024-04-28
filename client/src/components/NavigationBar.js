// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="white-button">Home</Link></li>
        <li><Link to="/create" className="white-button">Create Post</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;