import React, { useEffect, useRef, useState } from 'react';
import './GeoSlider.css';

const GeoSlider = () => {
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  const section1Images = Array.from({ length: 9 }, (_, i) => ({
    src: `/images/geo tag/g${i + 1}.jpeg`,
    alt: `Geo Tag ${i + 1}`
  }));

  const section2Images = Array.from({ length: 10 }, (_, i) => ({
    src: `/images/geo tag/g${i + 10}.jpeg`,
    alt: `Geo Tag ${i + 10}`
  }));

  useEffect(() => {
    const autoScroll = (sliderRef, isHovering) => {
      if (!sliderRef.current) return;
      
      const slider = sliderRef.current;
      const scrollSpeed = isHovering ? 0.3 : 1;
      
      const scroll = () => {
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += scrollSpeed;
        }
      };
      
      const intervalId = setInterval(scroll, 20);
      return intervalId;
    };

    const interval1 = autoScroll(slider1Ref, isHovering1);
    const interval2 = autoScroll(slider2Ref, isHovering2);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [isHovering1, isHovering2]);

  return (
    <section className="geo-slider">
      <div className="geo-slider-container">
        <h2 className="geo-slider-main-title">Our Training Gallery</h2>
        
        <div className="slide-section">
          <h3 className="section-title">Training Sessions & Workshops</h3>
          <div 
            className="single-column-slider"
            ref={slider1Ref}
            onMouseEnter={() => setIsHovering1(true)}
            onMouseLeave={() => setIsHovering1(false)}
          >
            {section1Images.map((image, idx) => (
              <div key={idx} className="slide-item">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="slide-section">
          <h3 className="section-title">Student Projects & Activities</h3>
          <div 
            className="single-column-slider"
            ref={slider2Ref}
            onMouseEnter={() => setIsHovering2(true)}
            onMouseLeave={() => setIsHovering2(false)}
          >
            {section2Images.map((image, idx) => (
              <div key={idx} className="slide-item">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoSlider;
