import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
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

  return (
    <>
      <TopBar />
      <header className="header">
        <div className="logo">AI SKILL UP</div>
        <nav>
          <ul>
            <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('about')}>About</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('courses')}>Courses</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('placement')}>Placement</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('contact')}>Contact Us</Link></li>
          </ul>
        </nav>
        <div className="actions">
          <button onClick={() => scrollToSection('courses')}>Explore Course</button>
        </div>
      </header>
    </>
  );
};

export default Header;
