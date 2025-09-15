import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaChevronDown } from 'react-icons/fa';
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
        {/* Top info bar */}
        <div className="topbar">
          <div className="topbar-container">
            <div className="topbar-item">
              <FaPhoneAlt aria-hidden="true" />
              <a href="tel:+919360899780">Call: +91 9360899780</a>
            </div>
            <div className="topbar-item">
              <FaEnvelope aria-hidden="true" />
              <a href="mailto:info@fulcrumtechcbe.com">Email: info@fulcrumtechcbe.com</a>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div className="navbar">
          <div className="header-container">
            <div className="logo" aria-label="AI SKILL UP">
              <Link to="/">
                <img src="/images/AI logo.png" alt="AI SKILL UP" />
              </Link>
            </div>
            <nav className="nav-desktop">
              <ul>
                <li><Link to="/" className={isActive('home')} onClick={() => { scrollToSection('home'); closeMobileMenu(); }}>Home</Link></li>
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
                    Courses <FaChevronDown className="caret" />
                  </Link>
                </li>
                <li><Link to="#" onClick={(e)=>e.preventDefault()}>Blogs</Link></li>
                <li><Link to="#" onClick={(e)=>e.preventDefault()}>Students Work</Link></li>
                <li><Link to="/about" className={isActive('about')} onClick={closeMobileMenu}>About Us</Link></li>
                <li><Link to="/contact" className={isActive('contact')} onClick={closeMobileMenu}>Contact</Link></li>
              </ul>
            </nav>
            <div className="actions">
              <Link to="/contact" className="enquiry-btn">Enquiry Now</Link>
            </div>

            <button
              className={`hamburger-btn ${mobileOpen ? 'open' : ''}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMobileMenu}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
          <nav>
            <ul>
              <li><Link to="/" className={isActive('home')} onClick={() => { scrollToSection('home'); closeMobileMenu(); }}>Home</Link></li>
              <li><Link to="/courses" className={isActive('courses')} onClick={closeMobileMenu}>Courses</Link></li>
              <li><Link to="#" onClick={(e)=>e.preventDefault()}>Blogs</Link></li>
              <li><Link to="#" onClick={(e)=>e.preventDefault()}>Students Work</Link></li>
              <li><Link to="/about" className={isActive('about')} onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link to="/contact" className={isActive('contact')} onClick={closeMobileMenu}>Contact</Link></li>
              <li><Link to="/contact" className="enquiry-btn mobile">Enquiry Now</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
