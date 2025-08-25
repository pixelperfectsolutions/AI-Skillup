import React from 'react';
import Slider from 'react-slick';
import './Hero.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    title: 'Master the Future of Technology',
    description: 'Explore our cutting-edge courses in AI, Machine Learning, and Data Science.'
  },
  {
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    title: 'Become an Industry-Ready Engineer',
    description: 'Gain practical skills with hands-on projects and real-world applications.'
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    title: 'Unlock Your Career Potential',
    description: 'Join a community of learners and innovators at AI SKILL UP.'
  }
];

const Hero = () => {
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
              <button>Explore Courses</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
