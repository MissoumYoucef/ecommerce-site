import React from 'react';
import './Pub.css'; // Import your CSS
import downloadImg from '../assets/d1.png';
import download1Img from '../assets/d2.png';

const Pub = () => {
  return (
    <div className="youngs-favourite">
      <div className="title-container">
        <h2 className="title">Young’s Favourite</h2>
        <div className="highlight"></div> {/* This is for the yellow highlight */}
      </div>
      <div className="image-grid">
        <div className="image-card">
          <img src={downloadImg} alt="Trending on Instagram" /> {/* Replace with your image path */}
          <div className="card-info">
            <div>
              <h3>Trending on Instagram</h3>
              <p>Explore Now!</p>
            </div>
            <span className="arrow"></span> {/* This is for the arrow */}
          </div>
        </div>
        <div className="image-card">
          <img src={download1Img} alt="All Under $40" /> {/* Replace with your image path */}
          <div className="card-info">
            <div>
              <h3>All Under $40</h3>
              <p>Explore Now!</p>
            </div>
            <span className="arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pub;