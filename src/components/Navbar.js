import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Fashion Logo" /> {/* Replace with your logo */}
        <h1>FASHION</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/catalogue">Catalogue</Link></li>
        <li><Link to="/fashion">Fashion</Link></li>
        <li><Link to="/favourite">Favourite</Link></li>
        <li><Link to="/lifestyle">Lifestyle</Link></li>
      </ul>
      <button className="sign-up-button">Sign Up</button>
    </nav>
  );
};

export default Navbar;
