import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="logo-text">AI SKILL UP</h3>
          <p>
            AI SKILL UP is a leading provider of AI-powered courses, dedicated to preparing students for the future of technology.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>123, Gandhipuram, Coimbatore, Tamil Nadu 641012</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 AI SKILL UP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
