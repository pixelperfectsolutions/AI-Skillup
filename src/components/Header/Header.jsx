import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Set active link based on current path
    const path = location.pathname;
    if (path === '/') {
      setActiveLink('home');
    } else if (path === '/about') {
      setActiveLink('about');
    } else if (path === '/contact') {
      setActiveLink('contact');
    } else if (path.startsWith('/courses')) {
      setActiveLink('courses');
    }
  }, [location]);

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

  const toggleMobileMenu = () => setMobileOpen((v) => !v);
  const closeMobileMenu = () => setMobileOpen(false);

  // Helper function to determine if a link is active
  const isActive = (linkName) => activeLink === linkName ? 'active' : '';

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo" aria-label="AI SKILL UP">
            <Link to="/">
              <img src="/images/AI logo.png" alt="AI SKILL UP" />
            </Link>
          </div>
          <nav className="nav-desktop">
            <ul>
              <li><Link to="/" className={isActive('home')} onClick={() => { scrollToSection('home'); closeMobileMenu(); }}>Home</Link></li>
              <li><Link to="/about" className={isActive('about')} onClick={closeMobileMenu}>About</Link></li>
              <li>
                <Link
                  to="/courses"
                  className={isActive('courses')}
                  onClick={(e) => {
                    // If on home page, smooth scroll to in-page section
                    if (location.pathname === '/') {
                      scrollToSection('courses');
                    } else if (location.pathname === '/courses') {
                      // If already on courses page, prevent navigation and scroll to top
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    closeMobileMenu();
                  }}
                >
                  Courses
                </Link>
              </li>
              <li><Link to="/contact" className={isActive('contact')} onClick={closeMobileMenu}>Contact Us</Link></li>
            </ul>
          </nav>
          <div className="actions">
            <a href="tel:9655422511" className="contact-button">
              <FaPhoneAlt style={{ marginRight: '8px' }} />
              CALL NOW
            </a>
          </div>

          <button
            className="hamburger-btn"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMobileMenu}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
          <nav>
            <ul>
              <li><Link to="/" className={isActive('home')} onClick={() => { scrollToSection('home'); closeMobileMenu(); }}>Home</Link></li>
              <li><Link to="/about" className={isActive('about')} onClick={closeMobileMenu}>About</Link></li>
              <li>
                <Link
                  to="/courses"
                  className={isActive('courses')}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      scrollToSection('courses');
                    } else if (location.pathname === '/courses') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    closeMobileMenu();
                  }}
                >
                  Courses
                </Link>
              </li>
              <li><Link to="/contact" className={isActive('contact')} onClick={closeMobileMenu}>Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
