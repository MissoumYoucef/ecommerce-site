import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-icon"></div> {/* Placeholder for the logo icon */}
        <h1 className="logo-text">FASHION</h1>
      </div>
      <div className="nav-links">
        <Link to="/catalogue" className="nav-link">CATALOGUE</Link>
        <Link to="/fashion" className="nav-link">FASHION</Link>
        <Link to="/favourite" className="nav-link">FAVOURITE</Link>
        <Link to="/lifestyle" className="nav-link">LIFESTYLE</Link>
      </div>
      <div className="sign-up-container">
        <button className="sign-up-button">SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;
