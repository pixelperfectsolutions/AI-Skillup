import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const scrollToApply = () => {
    const el = document.getElementById('apply-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Local reveal-on-scroll for About section only
  useEffect(() => {
    const container = document.querySelector('.about');
    if (!container) return;
    const elements = container.querySelectorAll('.reveal');
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image-container reveal fade-right">
          <img src="/images/about-1.png" alt="AI Technology" className="about-image" />
        </div>
        <div className="about-content">
          <h2 className="reveal fade-up">We create <span className="highlight">Industry Ready</span> Engineers</h2>
          <h3 className="sub-heading reveal fade-up delay-1">AI SKILL UP</h3>
          <p className="reveal fade-up delay-2">
            A promising future awaits at Theoretical Academy. I am confident and excited about the great things to come.
          </p>
          <p className="reveal fade-up delay-3">
            We are India's largest turnkey solution provider in Manufacturing of Fracture Connecting Rods. Developing new conceptual products for Automotive sectors like Hyundai Motors, Supporting hardware automation and software development we have wide range of diversified tech verticals and also owning a Skill development campus collaborated with World's leading companies.
          </p>
          <Link to="/about" className="btn btn-primary btn-arrow reveal fade-up delay-4">
            About AI SKILL UP
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;