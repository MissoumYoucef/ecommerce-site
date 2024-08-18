import React from 'react';
import './Banner.css'; // Import your CSS file
import webImg from '../assets/c1.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <img src={webImg} alt="Banner" /> {/* Replace with the actual path to your image */}
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
      </div>
      <div className="banner-right">
        <div className="sale-info">
          <div className="payday-sale">PAYDAY SALE NOW</div>
          <p>Spend minimal $100 get 30% off voucher code for your next purchase</p>
          <div className="date">1 June - 10 June 2021</div>
          <p className="terms">*Terms & Conditions apply</p>
          <button className="shop-now">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;