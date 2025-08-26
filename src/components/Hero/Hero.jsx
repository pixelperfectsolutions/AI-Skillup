import React from 'react';
import Slider from 'react-slick';
import './Hero.css';

const slides = [
  {
    image: '/images/slider-1.png',
    title: 'AI & Machine Learning Masterclass',
    description: 'Master cutting-edge AI technologies with hands-on projects and real-world applications at AI SKILL UP.'
  },
  {
    image: '/images/slider-2.png',
    title: 'Data Science Professional Certification',
    description: 'Transform data into insights with our comprehensive Data Science program at AI SKILL UP.'
  },
  {
    image: '/images/slider-3.png',
    title: 'Cloud Computing & DevOps',
    description: 'Deploy scalable solutions in the cloud with our industry-recognized Cloud Computing course at AI SKILL UP.'
  },
  {
    image: '/images/slider-4.png',
    title: 'Unlock Your Tech Career Potential',
    description: 'Join thousands of successful learners at AI SKILL UP and accelerate your career in technology.'
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
