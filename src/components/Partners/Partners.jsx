import React from 'react';
import Slider from 'react-slick';
import './Partners.css';

const logos = [
  'https://www.logo.wine/a/logo/IAS_Accreditation/IAS_Accreditation-Logo.wine.svg',
  'https://www.logo.wine/a/logo/Autodesk/Autodesk-Logo.wine.svg',
  'https://www.nsdcindia.org/sites/default/files/logo_0.png',
  'https://www.ncs.gov.in/Style%20Library/images/NCS-logo-Eng.png',
  'https://www.startupindia.gov.in/content/dam/invest-india/new-assets/images/logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/d/d3/Dubai_logo.svg'
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