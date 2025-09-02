import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

// Star rating component with only full stars
const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span 
          key={star} 
          className={`star ${star <= rating ? 'filled' : ''}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // No avatar generation needed as per requirements

  // All testimonials will have 5-star ratings
  const getRandomRating = () => 5; // Always return 5 stars

  const testimonials = [
    {
      id: 1,
      name: 'Nantha Kumar',
      role: 'AI/ML Engineer',
      rating: getRandomRating(),
      content: 'The AI courses transformed my career! The hands-on projects and expert mentorship helped me land my dream job at a top tech company.'
    },
    {
      id: 2,
      name: 'Keerthi',
      role: 'Data Science Lead',
      rating: getRandomRating(),
      content: 'Exceptional curriculum and instructors. The practical approach to AI concepts made complex topics easy to understand and apply in real-world scenarios.'
    },
    {
      id: 3,
      name: 'Gokul Krishnan',
      role: 'Machine Learning Specialist',
      rating: getRandomRating(),
      content: 'The best investment I\'ve made in my education. The courses are well-structured and the community support is outstanding.'
    },
    {
      id: 4,
      name: 'Shamini',
      role: 'AI Research Scientist',
      rating: getRandomRating(),
      content: 'The perfect blend of theory and practice. I was able to immediately apply what I learned to my job and see real results.'
    },
    {
      id: 5,
      name: 'Karthik',
      role: 'Deep Learning Engineer',
      rating: getRandomRating(),
      content: 'The instructors are industry experts who genuinely care about student success. The career support team is also fantastic at helping with job placement.'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);

  // Auto slide every 5 seconds, but only when not paused
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, isPaused]);
  
  // Pause auto-slide when user interacts with the slider
  const pauseAutoSlide = useCallback(() => {
    setIsPaused(true);
    // Resume after 10 seconds of inactivity
    const timer = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  
  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
    pauseAutoSlide();
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <div 
          className="testimonials-slider"
          onMouseEnter={pauseAutoSlide}
          onFocus={pauseAutoSlide}
        >
          <button 
            className="slider-arrow prev" 
            onClick={() => {
              prevSlide();
              pauseAutoSlide();
            }}
            aria-label="Previous testimonial"
          >
            &#10094;
          </button>
          
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial ${index === currentSlide ? 'active' : ''}`}
                aria-hidden={index !== currentSlide}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${testimonials.length}`}
              >
                <div className="testimonial-content">
                  <div className="testimonial-author">
                    <div className="testimonial-fallback">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span className="role">{testimonial.role}</span>
                    </div>
                  </div>
                  <StarRating rating={testimonial.rating} />
                  <p>"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="slider-arrow next" 
            onClick={() => {
              nextSlide();
              pauseAutoSlide();
            }}
            aria-label="Next testimonial"
          >
            &#10095;
          </button>
          
          {/* Dots Navigation */}
          <div className="testimonial-dots" role="tablist">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-selected={index === currentSlide}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;