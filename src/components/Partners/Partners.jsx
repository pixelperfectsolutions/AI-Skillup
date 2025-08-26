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
      <h3 className="partners-title">Our Accreditations & Partnerships</h3>
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