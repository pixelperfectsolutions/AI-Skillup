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
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: false,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          variableWidth: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: true
        }
      }
    ]
  };

  return (
    <section className="partners section-decor">
      <div className="partners-header">
        <h2 className="partners-title"> Practical AI Tools for Smarter Learning, Careers, and Innovation</h2>
        <p className="partners-description">
        At AISkillUp, we equip you with hands-on experience in today’s most powerful AI tools and platforms. From AI-powered productivity apps to advanced machine learning frameworks, our programs are designed to help you master practical tools that are transforming industries. By learning with real-world AI applications, you’ll gain the skills needed to stay ahead in the tech landscape and apply them directly in your career or business.
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