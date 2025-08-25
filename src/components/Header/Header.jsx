import React from 'react';
import TopBar from '../TopBar/TopBar';
import './Header.css';

const Header = () => {
  return (
    <>
      <TopBar />
      <header className="header">
        <div className="logo">AI SKILL UP</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Placement</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <div className="actions">
          <button>Explore Course</button>
        </div>
      </header>
    </>
  );
};

export default Header;
