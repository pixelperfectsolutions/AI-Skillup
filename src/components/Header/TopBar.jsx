import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <p>Phone: <a href="tel:+919655422511">+91 96554 22511</a></p>
        <p>Whatsapp: <a href="https://wa.me/919655422511" target="_blank" rel="noopener noreferrer">96554 22511</a></p>
      </div>
    </div>
  );
};

export default TopBar;
