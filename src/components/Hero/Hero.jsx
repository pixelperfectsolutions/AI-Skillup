import React from 'react';
import Slider from 'react-slick';
import './Hero.css';

const slides = [
  {
    image: '/images/slider-1.png',
    title: 'Full-Stack Web Development Using AI',
    description: 'Build modern web apps faster using AI-assisted coding, automation, and real-world projects.'
  },
  {
    image: '/images/slider-2.png',
    title: 'AI-Based Mobile App Development',
    description: 'Create cross-platform apps with AI-generated code, smart features, and automated testing.'
  },
  {
    image: '/images/slider-3.png',
    title: 'UI/UX Design with AI',
    description: 'Design smarter with Figma AI and Midjourney—rapid prototyping, user research, and systemized design.'
  },
  {
    image: '/images/slider-4.png',
    title: 'Digital Marketing Using AI',
    description: 'Scale growth with AI-driven SEO, ads, social, and analytics—hands-on campaigns using top tools.'
  }
];

const Hero = () => {
  const scrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false
  };

  return (
    <Slider {...settings} className="hero-slider">
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button onClick={scrollToCourses}>Explore Course</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
