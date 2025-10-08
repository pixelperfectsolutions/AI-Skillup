import React, { useEffect, useState } from 'react';
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

  // Mobile detection for enabling slide-wide tap navigation
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 1024);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

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
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})`, cursor: isMobile ? 'pointer' : 'default' }}
            role={isMobile ? 'link' : undefined}
            tabIndex={isMobile ? 0 : -1}
            onClick={() => { if (isMobile) goToCourse(slide.slug); }}
            onKeyDown={(e) => {
              if (!isMobile) return;
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToCourse(slide.slug);
              }
            }}
            aria-label={isMobile ? `Open course ${slide.slug.replace(/-/g, ' ')}` : undefined}
          >
            <div className="hero-content">
              {/* Desktop button remains; hidden on mobile via CSS */}
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
