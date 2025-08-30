import React from 'react';
import Slider from 'react-slick';
import './Partners.css';

const logos = [
  '/images/partner logo-1.png',
  '/images/partner logo-2.png',
  '/images/partner logo-3.png',
  '/images/partner logo-4.png',
  '/images/partner logo-5.png',
  '/images/partner logo-6.png',
  '/images/partner logo-7.png'
];

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="partners">
      <div className="partners-header">
        <h2 className="partners-title">Our Esteemed Partners & Industry Leaders</h2>
        <p className="partners-description">
          At AI Skill Up, we're proud to collaborate with leading technology companies and educational institutions to provide you with industry-relevant training and certification programs. 
          Our partnerships ensure that our curriculum stays current with the latest advancements in AI and technology, giving you the competitive edge in today's job market.
        </p>
      </div>
      <div className="partners-slider">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="partner-logo-container">
              <img src={logo} alt={`Partner ${index + 1}`} className="partner-logo" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;