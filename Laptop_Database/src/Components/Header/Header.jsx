

import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
const Header = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',

      };
  return (
    <header className="app-header">

      <Link style={linkStyle}><h1>Laptop Database</h1></Link>
      <ul className="navigation-list">
      <li className="navigation-item">
        <Link to="/about" style={linkStyle}>About</Link>
      </li>
      <li className="navigation-item">
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </li>
      <li className="navigation-item">
        <Link to="/login" style={linkStyle}>Account</Link>
      </li>
    </ul>
    </header>
  );
};

export default Header;
