import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      {/* Desktop text */}
      <div className="top-bar-content top-bar-text">
        <p>Phone: <a href="tel:+919655422511">+91 96554 22511</a></p>
        <p>Whatsapp: <a href="https://wa.me/919655422511" target="_blank" rel="noopener noreferrer">96554 22511</a></p>
      </div>
      {/* Mobile icons */}
      <div className="top-bar-icons">
        <a className="icon-link" aria-label="Call us" href="tel:+919655422511"><FaPhoneAlt /></a>
        <a className="icon-link" aria-label="WhatsApp us" href="https://wa.me/919655422511" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
    </div>
  );
};

export default TopBar;
