//src/components/Footer

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Explore</h2>
          <ul>
            <li>About</li>
            <li>Diet Plans</li>
            <li>Recipes</li>
            <li>Workouts</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Resources</h2>
          <ul>
            <li>Blog</li>
            <li>Articles</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Connect</h2>
          <ul>
            <li>Contact Us</li>
            <li>Support</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Legal</h2>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Zeppcore</p>
      </div>
    </footer>
  );
};

export default Footer;
