import React from 'react';
import './HomeVisualShowcase.css';

const bannerImages = [
  {
    src: '/images/aiskillup-banner1.jpeg',
    title: 'Studio Sessions',
    label: 'Industry-ready labs'
  },
  {
    src: '/images/aiskillup-banner2.jpeg',
    title: 'Learners in action',
    label: 'Immersive mentoring'
  }
];

const welcomePosts = [
  {
    src: '/images/Aiskillup-welcomepost.jpeg',
    meta: 'Admissions 2025',
    title: 'UI & UX Design Course'
  },
  {
    src: '/images/Aiskillup-welcomepost1.jpeg',
    meta: 'Career Lab',
    title: 'Graphic Design and Video Editing Course'
  },
  {
    src: '/images/Aiskillup-welcomepost2.jpeg',
    meta: 'Community pulse',
    title: 'UI & UX Design Course'
  }
];

const HomeVisualShowcase = () => (
  <section className="home-visual" aria-labelledby="home-visual-heading">
    <div className="home-visual__section home-visual__banners">
      <div className="visual-copy">
        <p className="eyebrow">Inside AI Skill Up</p>
        <h2 id="home-visual-heading">Learning spaces that keep you inspired</h2>
        <p className="lead">
          From immersive labs to community showcases, every space is designed to keep learners curious and hands-on.
        </p>
        <ul className="visual-points">
          <li>Hybrid studios with guided mentors</li>
          <li>Ambient lighting that keeps focus high</li>
          <li>Collaborative corners for rapid builds</li>
        </ul>
      </div>
      <div className="visual-image-stack" aria-label="Studio highlight visuals">
        {bannerImages.map((image, index) => (
          <figure className={`image-card image-card-${index}`} key={image.src}>
            <span className="image-ring" aria-hidden="true"></span>
            <img src={image.src} alt={image.title} loading="lazy" />
            <figcaption>
              <span>{image.label}</span>
              <strong>{image.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>

    <div id="welcome-moments" className="home-visual__section home-visual__welcomes">
      <div className="welcome-head">
        <p className="eyebrow">Welcome Moments</p>
        <h3>Snapshots from our latest batches</h3>
      </div>
      <div className="welcome-grid">
        {welcomePosts.map((post) => (
          <article className="welcome-card" key={post.src}>
            <div className="welcome-media">
              <img src={post.src} alt={post.title} loading="lazy" />
              <span className="welcome-pill">#campuslife</span>
            </div>
            <div className="welcome-copy">
              <p>{post.meta}</p>
              <h4>{post.title}</h4>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default HomeVisualShowcase;
