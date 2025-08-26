import React from 'react';
import './About.css';

const About = () => {
  const scrollToApply = () => {
    const el = document.getElementById('apply-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image-container">
          <img src="/images/about-1.png" alt="AI Technology" className="about-image" />
        </div>
        <div className="about-content">
          <h2>We create <span className="highlight">Industry Ready</span> Engineers</h2>
          <h3 className="sub-heading">AI SKILL UP</h3>
          <p>
            A promising future awaits at Theoretical Academy. I am confident and excited about the great things to come.
          </p>
          <p>
            We are India's largest turnkey solution provider in Manufacturing of Fracture Connecting Rods. Developing new conceptual products for Automotive sectors like Hyundai Motors, Supporting hardware automation and software development we have wide range of diversified tech verticals and also owning a Skill development campus collaborated with World's leading companies.
          </p>
          <a href="#apply-form" className="about-btn" onClick={(e) => { e.preventDefault(); scrollToApply(); }}>About AI SKILL UP &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default About;