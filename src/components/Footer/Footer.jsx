import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
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
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true"><FaMapMarkerAlt /></span>
            <p>45, Gokhale Street, Ram Nagar, Near MK Residency, Coimbatore, Tamil Nadu 641009.</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true"><FaPhoneAlt /></span>
            <p><a href="tel:+919655422511">+91 96554 22511</a></p>
          </div>
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true"><FaWhatsapp /></span>
            <p><a href="https://wa.me/919655422511" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></p>
          </div>
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true"><FaMapLocationDot /></span>
            <p><a href="https://maps.app.goo.gl/n5sw7Whk6syLkCAq7" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
          </div>
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true"><FaEnvelope /></span>
            <p><a href="mailto:info@aiskillup.example">info@aiskillup.example</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2025 AI SKILL UP. All rights reserved.</span>
        <span className="designer-credit">
          Designed by <a href="https://pixelperfect.co.in/" target="_blank" rel="noopener noreferrer">Pixel Perfect Software Solutions</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
