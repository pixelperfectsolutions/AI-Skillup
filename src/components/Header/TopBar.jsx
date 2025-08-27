import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-icons">
        <a className="icon-link" aria-label="Call us" href="tel:+919655422511"><FaPhoneAlt /></a>
        <a className="icon-link" aria-label="WhatsApp us" href="https://wa.me/919655422511" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
    </div>
  );
};

export default TopBar;
