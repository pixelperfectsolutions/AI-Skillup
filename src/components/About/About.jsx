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
    <section className="about section-decor">
      <div className="decor-element decor-dots about-decor-dots-1" aria-hidden="true"></div>
      <div className="decor-element decor-arc about-decor-arc-1" aria-hidden="true"></div>
      <div className="about-container">
        <div className="about-image-container reveal fade-right">
          <div className="visual-frame">
            <img src="/images/about-1.png" alt="AI Technology" />
          </div>
        </div>
        <div className="about-content">
          <h2 className="reveal fade-up">We create <span className="highlight">Industry Ready</span> Engineers</h2>
          <h3 className="sub-heading reveal fade-up delay-1">AI SKILL UP</h3>
          <p className="reveal fade-up delay-2">
            At AI Skill Up, we provide industry-aligned training that turns learners into job‑ready professionals.
            Our programs combine expert‑led classes, hands‑on projects, mentoring, certifications, internships,
            and dedicated placement support. We also deliver corporate upskilling, real‑time workshops, and
            customized learning paths across in‑demand technologies to help you build a strong, future‑proof career.
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