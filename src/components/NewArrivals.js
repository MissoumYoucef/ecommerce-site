import React from 'react';
import { Link } from 'react-router-dom';
import './NewArrivals.css'; // We'll add the styles in a moment
import hoodieImage from '../assets/b1.png';
import coatsImage from '../assets/b2.png';
import teesImage from '../assets/b3.png';

const NewArrivals = () => {
  return (
    <div className="new-arrivals">
      <h2>NEW ARRIVALS</h2>
      <div className="arrivals-container">
        <div className="arrival-item">
          <img src={hoodieImage} alt="Hoodies & Sweatshirt" />
          <h3>Hoodies & Sweatshirt</h3>
          <Link to="/hoodies" className="explore-link">Explore Now!</Link>
        </div>
        <div className="arrival-item">
          <img src={coatsImage} alt="Coats & Parkas" />
          <h3>Coats & Parkas</h3>
          <Link to="/coats" className="explore-link">Explore Now!</Link>
        </div>
        <div className="arrival-item">
          <img src={teesImage} alt="Tees & T-Shirt" />
          <h3>Tees & T-Shirt</h3>
          <Link to="/tees" className="explore-link">Explore Now!</Link>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
