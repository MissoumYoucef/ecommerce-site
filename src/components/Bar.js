import React from 'react';
import './Bar.css'; // Assuming you're using a separate CSS file for styling


// Import images
import downloadImg from '../assets/a1.png';
import download1Img from '../assets/a2.png';
import download1Jpg from '../assets/a3.png';
import imagesImg from '../assets/a4.png';
import webImg from '../assets/a5.png';

const Bar = () => {
    return (
      <div className="bar">
            <div className="bar-background">
                <div className="bar-content">
                    <img className="brand" src={downloadImg} alt="Logo" />
                    <img className="brand" src={download1Img} alt="Logo" />
                    <img className="brand" src={download1Jpg} alt="Logo" />
                    <img className="brand" src={imagesImg} alt="Logo" />
                    <img className="brand" src={webImg} alt="Logo" />
                </div>
            </div>
        </div>
    );
  }

export default Bar;
