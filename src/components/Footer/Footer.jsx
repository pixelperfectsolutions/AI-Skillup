import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <div className="logo-wrap">
            <img src="/images/AI logo.png" alt="AI Skill Up Logo" />
          </div>
          <p>
            AI SKILL UP is a leading provider of AI-powered courses, dedicated to preparing students for the future of technology.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Students Work</Link></li>
            <li><Link to="/">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
            <p><a href="https://www.google.com/maps/place/Graphic,+UI+UX,+AI+Design+Academy/@11.0148355,76.9638168,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8594767deeaf7:0x578b90b22a69fb4c!8m2!3d11.0148355!4d76.9638168!16s%2Fg%2F11v00g_j1l?entry=ttu" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
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