import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
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

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((v) => !v);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo" aria-label="AI SKILL UP">
            <img src="/images/AI logo.png" alt="AI SKILL UP" />
          </div>
          <nav className="nav-desktop">
            <ul>
              <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
              <li><Link to="/" onClick={() => scrollToSection('about')}>About</Link></li>
              <li><Link to="/" onClick={() => scrollToSection('courses')}>Courses</Link></li>
              <li><Link to="/" onClick={() => scrollToSection('placement')}>Placement</Link></li>
              <li><Link to="/" onClick={() => scrollToSection('contact')}>Contact Us</Link></li>
            </ul>
          </nav>
          <div className="actions">
            <a href="tel:9655422511" className="contact-button">
              <FaPhoneAlt style={{ marginRight: '8px' }} />
              CALL NOW
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger-btn"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={toggleMobileMenu}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="mobile-menu" role="menu">
          <Link to="/" role="menuitem" onClick={() => { scrollToSection('home'); closeMobileMenu(); }}>Home</Link>
          <Link to="/" role="menuitem" onClick={() => { scrollToSection('about'); closeMobileMenu(); }}>About</Link>
          <Link to="/" role="menuitem" onClick={() => { scrollToSection('courses'); closeMobileMenu(); }}>Courses</Link>
          <Link to="/" role="menuitem" onClick={() => { scrollToSection('placement'); closeMobileMenu(); }}>Placement</Link>
          <Link to="/" role="menuitem" onClick={() => { scrollToSection('contact'); closeMobileMenu(); }}>Contact Us</Link>
        </div>
      )}
    </>
  );
};

export default Header;
