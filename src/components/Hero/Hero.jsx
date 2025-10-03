import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const slides = [
  {
    image: '/images/slider-1.png',
    slug: 'ui-ux-design-with-ai'
  },
  {
    image: '/images/slider-2.png',
    slug: 'digital-marketing-using-ai'
  },
  {
    image: '/images/slider-3.png',
    slug: 'ai-based-mobile-app-development'
  },
  {
    image: '/images/slider-4.png',
    slug: 'full-stack-development-using-ai'
  }
];

function Hero() {
  const navigate = useNavigate();
  const goToCourse = (slug) => navigate(`/courses/${slug}`);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    cssEase: 'linear',
    arrows: false
  };

  return (
    <Slider {...settings} className="hero-slider">
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="hero-content">
              <button className="btn btn-primary" onClick={() => goToCourse(slide.slug)}>
                Explore Course
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Hero;
