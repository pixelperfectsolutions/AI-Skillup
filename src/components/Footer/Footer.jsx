import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('about')}>About</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('courses')}>Courses</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section contact" id="contact-section">
          <h3>Contact Info</h3>
          <p>45, Gokhale Street, Ram Nagar, Near MK Residency, Coimbatore, Tamil Nadu 641009.</p>
          <p>Phone: <a href="tel:+919655422511">+91 96554 22511</a></p>
          <p>Whatsapp: <a href="https://wa.me/919655422511" target="_blank" rel="noopener noreferrer">96554 22511</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 AI SKILL UP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
