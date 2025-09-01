import React, { useState, useEffect } from 'react';
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
  
  // No avatar generation needed as per requirements

  // Generate random whole number ratings between 3 and 5
  const getRandomRating = () => Math.floor(Math.random() * 3) + 3; // 3, 4, or 5

  const testimonials = [
    {
      id: 1,
      name: 'Aarav Sharma',
      role: 'AI/ML Engineer',
      rating: getRandomRating(),
      content: 'The AI courses transformed my career! The hands-on projects and expert mentorship helped me land my dream job at a top tech company.'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Data Science Lead',
      rating: getRandomRating(),
      content: 'Exceptional curriculum and instructors. The practical approach to AI concepts made complex topics easy to understand and apply in real-world scenarios.'
    },
    {
      id: 3,
      name: 'Rahul Verma',
      role: 'Machine Learning Specialist',
      rating: getRandomRating(),
      content: 'The best investment I\'ve made in my education. The courses are well-structured and the community support is outstanding.'
    },
    {
      id: 4,
      name: 'Ananya Gupta',
      role: 'AI Research Scientist',
      rating: getRandomRating(),
      content: 'The perfect blend of theory and practice. I was able to immediately apply what I learned to my job and see real results.'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Deep Learning Engineer',
      rating: getRandomRating(),
      content: 'The instructors are industry experts who genuinely care about student success. The career support team is also fantastic at helping with job placement.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonials-slider">
          <button className="slider-arrow prev" onClick={prevSlide}>&#10094;</button>
          
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-initials">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p className="role">{testimonial.role}</p>
                      <div className="rating-container">
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="slider-arrow next" onClick={nextSlide}>&#10095;</button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;