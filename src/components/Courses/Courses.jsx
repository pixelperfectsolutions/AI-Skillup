import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Courses.css';
import './Placement.css';
import { courses } from '../../data/courses';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      onClick={onClick}
    />
  );
}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCourse = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const scrollToApply = () => {
    const el = document.getElementById('apply-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const applyAndClose = () => {
    closeModal();
    scrollToApply();
  };

  // Close modal with Escape key
  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isModalOpen]);

  // Reveal-on-scroll for placement section
  useEffect(() => {
    const elements = document.querySelectorAll('.placement .reveal');
    if (!elements.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Once revealed, unobserve to avoid re-trigger
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <section className="courses" id="courses">
        <div className="courses-container">
          <div className="courses-intro">
            <p>"At AI SKILL UP, our cutting-edge labs are dedicated to honing practical skills and combatting unemployment. Guided by industry veterans with over 20 years of experience and driven by young innovators, our tech campus is continuously evolving to embrace the latest in-demand technologies and trends."</p>
            <h2>Choose the right way to upgrade your career.</h2>
          </div>
          <div className="courses-slider-container">
            <Slider {...settings} className="courses-slider">
              {courses.map((course, index) => (
                <div key={index} className="course-card" onClick={() => openCourse(course)}>
                  <img src={course.image} alt={course.title} />
                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <button
                      className="view-course-btn"
                      onClick={(e) => { e.stopPropagation(); openCourse(course); }}
                    >
                      View Course &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {isModalOpen && selectedCourse && (
        <div className="course-modal-overlay" onClick={closeModal}>
          <div className="course-modal" onClick={(e) => e.stopPropagation()}>
            <button className="course-modal-close" onClick={closeModal} aria-label="Close">×</button>
            <div className="course-modal-header">
              <h3>{selectedCourse.title}</h3>
            </div>
            <div className="course-modal-body">
              <div className="course-modal-image">
                <img src={selectedCourse.image} alt={selectedCourse.title} />
              </div>
              <div className="course-modal-details">
                <p>{selectedCourse.description}</p>
                {Array.isArray(selectedCourse.highlights) && selectedCourse.highlights.length > 0 && (
                  <>
                    <h4>Course Highlights</h4>
                    <ul className="course-highlights">
                      {selectedCourse.highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {Array.isArray(selectedCourse.projects) && selectedCourse.projects.length > 0 && (
                  <>
                    <h4>Projects</h4>
                    <ul className="course-projects">
                      {selectedCourse.projects.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                <button className="apply-course-btn" onClick={applyAndClose}>Apply Course &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="placement" id="placement">
        <div className="placement-container">
          <h2 className="reveal">100% Placement Assistance</h2>
          <p className="reveal">Our commitment to your success doesn't end with course completion. We provide comprehensive placement assistance to help you launch your career.</p>

          <div className="placement-images reveal">
            <img src="/images/placement-1.png" alt="Placement Highlight 1" />
            <img src="/images/placement-2.png" alt="Placement Highlight 2" />
            <img src="/images/placement-3.jpg" alt="Placement Highlight 3" />
          </div>

          <div className="placement-stats">
            <div className="stat reveal">
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="stat reveal">
              <h3>500+</h3>
              <p>Companies Visited</p>
            </div>
            <div className="stat reveal">
              <h3>1000+</h3>
              <p>Students Placed</p>
            </div>
            <div className="stat reveal">
              <h3>200+</h3>
              <p>Hiring Partners</p>
            </div>
            <div className="stat reveal">
              <h3>50+</h3>
              <p>Mock Interviews</p>
            </div>
          </div>

          <div className="placement-process reveal">
            <h3>Our Placement Process</h3>
            <ol>
              <li>Career Counseling & Assessment</li>
              <li>Resume Building & Interview Preparation</li>
              <li>Mock Interviews & Skill Assessment</li>
              <li>Job Fairs & Company Visits</li>
              <li>Placement Offers & Alumni Network</li>
            </ol>
          </div>

          <div className="placement-benefits reveal">
            <h3>What You Get</h3>
            <ul className="benefits-list">
              <li>1:1 Career Mentorship</li>
              <li>Personalized Resume & LinkedIn Review</li>
              <li>Unlimited Interview Practice</li>
              <li>Company-Specific Preparation</li>
              <li>Real JD-based Assignments</li>
              <li>Alumni Networking & Referrals</li>
            </ul>
            <div className="placement-cta">
              <button className="placement-btn" onClick={scrollToApply}>Apply Now →</button>
              <a className="placement-btn" href="https://wa.me/919655422511" target="_blank" rel="noreferrer">Talk to Career Counselor</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
