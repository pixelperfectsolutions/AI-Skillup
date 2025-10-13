import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-slide hero-static" role="region" aria-label="Hero">
      <div className="hero-edges" aria-hidden="true">
        <div className="edge left"></div>
        <div className="edge right"></div>
      </div>
      <div className="hero-content">
        <h1>
          <span className="title-accent-blue">Top Software Training Institute</span>
          <br />
          <span className="title-accent-green">in Coimbatore</span>
        </h1>
        <p>Master in-demand AI and software skills to kickstart your IT career.</p>
        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={() => navigate('/courses')}>Explore Courses</button>
        </div>
      </div>

      <div className="hero-badges" aria-hidden="true">
        <span className="badge badge-js"><img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></span>
        <span className="badge badge-py"><img alt="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /></span>
        <span className="badge badge-react"><img alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></span>
        <span className="badge badge-node"><img alt="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></span>
        <span className="badge badge-html"><img alt="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /></span>
        <span className="badge badge-css"><img alt="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /></span>
        <span className="badge badge-linux"><img alt="Linux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" /></span>
        <span className="badge badge-ts"><img alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></span>
        <span className="badge badge-git"><img alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /></span>
        <span className="badge badge-mongo"><img alt="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" /></span>
        <span className="badge badge-tailwind"><img alt="TailwindCSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" /></span>
      </div>
    </section>
  );
}

export default Hero;
