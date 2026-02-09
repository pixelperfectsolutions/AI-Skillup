import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const floatingBadges = [
  { alt: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { alt: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { alt: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { alt: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { alt: 'Linux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { alt: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { alt: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { alt: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
];

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" role="region" aria-label="Hero">
      <div className="hero-layer hero-layer--glow" aria-hidden="true" />
      <div className="hero-layer hero-layer--card" aria-hidden="true" />
      <div className="hero-inner">
        <p className="hero-eyebrow">AI Skill Up • Coimbatore</p>
        <h1>Top Software Training Institute in Coimbatore</h1>
        <p className="hero-lead">
          Master in-demand AI and software skills with immersive labs, real projects, and career-first mentoring.
        </p>
        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={() => navigate('/courses')}>Explore Courses</button>
          <button className="btn btn-secondary" onClick={() => navigate('/contact')}>Talk to us</button>
        </div>
        <ul className="hero-highlights">
          <li>Live & hybrid classrooms</li>
          <li>Project-based curriculum</li>
          <li>Dedicated placement desk</li>
        </ul>
      </div>
      <div className="hero-floating" aria-hidden="true">
        {floatingBadges.map((badge, index) => (
          <span className={`floating-badge floating-badge-${index}`} key={badge.alt}>
            <img src={badge.src} alt={badge.alt} />
          </span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
