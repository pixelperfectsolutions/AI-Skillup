import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Header.css';
import { courses } from '../../data/courses';

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  // UI state for header behavior
  const [isCompact, setIsCompact] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

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

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY || 0;
      // compact when scrolled a bit (only affects topbar)
      setIsCompact(y > 20);
      // per request: never hide header
      setIsHidden(false);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    // initialize once after mount
    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) setMobileCoursesOpen(false);
  }, [mobileOpen]);

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
      <header className={`header ${isCompact ? 'compact' : ''}`}>
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
                <li className="has-dropdown">
                  <Link
                    to="/courses"
                    className={isActive('courses')}
                    onClick={closeMobileMenu}
                  >
                    Courses <FaChevronDown className="caret" />
                  </Link>
                  <ul className="dropdown" role="menu" aria-label="Courses">
                    {courses.slice(0, 5).map((c) => (
                      <li key={c.slug} role="none">
                        <Link role="menuitem" to={`/courses/${c.slug}`}>{c.title.split(' (')[0]}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li><Link to="/about" className={isActive('about')} onClick={closeMobileMenu}>About Us</Link></li>
                <li><Link to="#" onClick={(e)=>e.preventDefault()}>Blogs</Link></li>
                <li><Link to="#" onClick={(e)=>e.preventDefault()}>Students Work</Link></li>
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
              <li className={`mobile-has-sub ${mobileCoursesOpen ? 'open' : ''}`}>
                <div className="mobile-sub-row">
                  <Link
                    to="/courses"
                    className={isActive('courses')}
                    onClick={closeMobileMenu}
                  >
                    Courses
                  </Link>
                  <button
                    type="button"
                    className="mobile-accordion-trigger"
                    aria-label="Toggle Courses submenu"
                    aria-expanded={mobileCoursesOpen}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setMobileCoursesOpen((v) => !v);
                    }}
                  >
                    <FaChevronDown className={`caret ${mobileCoursesOpen ? 'rotated' : ''}`} />
                  </button>
                </div>
                <ul className="mobile-submenu" role="menu" aria-label="Courses">
                  {courses.slice(0, 5).map((c) => (
                    <li key={c.slug} role="none">
                      <Link role="menuitem" to={`/courses/${c.slug}`} onClick={closeMobileMenu}>
                        {c.title.split(' (')[0]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li><Link to="#" onClick={(e)=>e.preventDefault()}>Blogs</Link></li>
              <li><Link to="#" onClick={(e)=>e.preventDefault()}>Students Work</Link></li>
              <li><Link to="/about" className={isActive('about')} onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link to="/contact" className={isActive('contact')} onClick={closeMobileMenu}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
