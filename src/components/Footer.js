import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="brand">
          <h1>FASHION</h1>
          <p>Complete your style with awesome clothes from us.</p>
          <div className="social-links">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i> {/* Use Font Awesome icons */}
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="links">
          <div className="link-group">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="link-group">
            <h3>Quick Link</h3>
            <ul>
              <li><a href="#">Share Location</a></li>
              <li><a href="#">Orders Tracking</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className="link-group">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms & conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;