import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie, FaFileAlt, FaComments, FaBuilding, FaHandshake, FaChartLine, FaUsers, FaLinkedin, FaInfinity, FaBriefcase, FaTasks, FaNetworkWired } from 'react-icons/fa';
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
  const [counters, setCounters] = useState({
    placementRate: 0,
    companies: 0,
    students: 0,
    partners: 0,
    interviews: 0
  });
  const statsRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted.current) {
            animationStarted.current = true;
            startCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const startCounters = () => {
    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();
    const endValues = {
      placementRate: 95,
      companies: 500,
      students: 1000,
      partners: 200,
      interviews: 50
    };

    const animate = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      
      setCounters({
        placementRate: Math.floor(progress * endValues.placementRate),
        companies: Math.floor(progress * endValues.companies),
        students: Math.floor(progress * endValues.students),
        partners: Math.floor(progress * endValues.partners),
        interviews: Math.floor(progress * endValues.interviews)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const scrollToApply = () => {
    const el = document.getElementById('apply-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 768, // Mobile landscape and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: true,
          dots: true,
          centerMode: true,
          centerPadding: '20px',
          swipeToSlide: true
        }
      },
      {
        breakpoint: 480, // Small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          centerMode: true,
          centerPadding: '30px',
          swipeToSlide: true
        }
      }
    ]
  };

  return (
    <>
      {/* Page Hero for Courses listing */}
      <section className="courses-hero" data-aos="fade-up">
        <div className="container">
          <h1 data-aos="fade-up" data-aos-delay="100">Courses</h1>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
            Our commitment is to help learners become more successful by offering modern, job-ready AI programs and career support.
          </p>
        </div>
      </section>

      <section className="courses" id="courses">
        <div className="courses-header">
          <h2 className="section-title">Our Popular Courses</h2>
          <button 
            className="enroll-now-btn"
            onClick={() => {
              const applySection = document.getElementById('apply-form');
              if (applySection) {
                applySection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Enroll Now
          </button>
        </div>
        <div className="courses-container">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-details">
                <h3>{course.title.split(' (')[0]}</h3>
                <div className="course-cta">
                  <Link to={`/courses/${course.slug}`} className="btn" onClick={(e) => e.stopPropagation()}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="placement" id="placement">
        <div className="placement-container">
          <h2 className="reveal">100% Placement Assistance</h2>
          <p className="reveal">Our commitment to your success doesn't end with course completion. We provide comprehensive placement assistance to help you launch your career.</p>

          <div className="placement-images reveal">
            <img src="/images/placement-1.png" alt="Placement Highlight 1" />
            <img src="/images/placement-2.png" alt="Placement Highlight 2" />
          </div>

          <div className="placement-stats" ref={statsRef}>
            <div className="stat reveal">
              <div className="stat-icon"><FaChartLine /></div>
              <h3>{counters.placementRate}%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="stat reveal">
              <div className="stat-icon"><FaBuilding /></div>
              <h3>{counters.companies}+</h3>
              <p>Companies Visited</p>
            </div>
            <div className="stat reveal">
              <div className="stat-icon"><FaUsers /></div>
              <h3>{counters.students}+</h3>
              <p>Students Placed</p>
            </div>
            <div className="stat reveal">
              <div className="stat-icon"><FaHandshake /></div>
              <h3>{counters.partners}+</h3>
              <p>Hiring Partners</p>
            </div>
            <div className="stat reveal">
              <div className="stat-icon"><FaComments /></div>
              <h3>{counters.interviews}+</h3>
              <p>Mock Interviews</p>
            </div>
          </div>

          <div className="placement-process-container reveal">
            <div className="placement-layout">
              <div className="placement-content">
                <h3>100% Placement Assistance for Every Student</h3>
                <p className="placement-intro">At AI Skillup, we provide comprehensive placement assistance for every student. Our strong connections with leading tech companies ensure you have access to exciting career opportunities in AI and technology.</p>
                
                <div className="placement-cta">
                  <p>Our dedicated placement team supports you with resume building, interview preparation, and placement drives, ensuring you are fully prepared for the competitive job market.</p>
                  <button className="btn btn-primary btn-arrow" onClick={scrollToApply}>
                    Start Your Journey
                  </button>
                </div>
              </div>
              
              <div className="placement-topics">
                <div className="topic-box">
                  <div className="topic-icon"><FaUserTie /></div>
                  <h4>Career Guidance</h4>
                  <p>Personalized career path planning and industry insights</p>
                </div>
                <div className="topic-box">
                  <div className="topic-icon"><FaFileAlt /></div>
                  <h4>Resume Building</h4>
                  <p>ATS-optimized resume creation and review</p>
                </div>
                <div className="topic-box">
                  <div className="topic-icon"><FaComments /></div>
                  <h4>Mock Interviews</h4>
                  <p>Practice with industry experts and HR professionals</p>
                </div>
                <div className="topic-box">
                  <div className="topic-icon"><FaBuilding /></div>
                  <h4>Company Connect</h4>
                  <p>Direct interaction with hiring managers</p>
                </div>
                <div className="topic-box">
                  <div className="topic-icon"><FaNetworkWired /></div>
                  <h4>Networking Events</h4>
                  <p>Exclusive access to industry meetups and networking sessions</p>
                </div>
                <div className="topic-box">
                  <div className="topic-icon"><FaChartLine /></div>
                  <h4>Career Growth</h4>
                  <p>Continuous learning and upskilling opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration moved below the process list and enlarged via CSS */}
          <div className="placement-illustration reveal">
            <img src="/images/placement-3.png" alt="Our Placement Process Illustration" />
          </div>

          <div className="placement-benefits reveal">
            <h3>What You Get</h3>
            <ul className="benefits-list">
              <li><FaUsers className="li-icon" /> 1:1 Career Mentorship</li>
              <li><FaLinkedin className="li-icon" /> Personalized Resume & LinkedIn Review</li>
              <li><FaInfinity className="li-icon" /> Unlimited Interview Practice</li>
              <li><FaBriefcase className="li-icon" /> Company-Specific Preparation</li>
              <li><FaTasks className="li-icon" /> Real JD-based Assignments</li>
              <li><FaNetworkWired className="li-icon" /> Alumni Networking & Referrals</li>
              <li><FaUserTie className="li-icon" /> Placement Guidance & Career Roadmap</li>
              <li><FaTasks className="li-icon" /> Portfolio & Project Review</li>
              <li><FaComments className="li-icon" /> Soft Skills & Communication Training</li>
              <li><FaHandshake className="li-icon" /> Post-Placement Support</li>
            </ul>
            <div className="placement-cta" style={{ justifyContent: 'center' }}>
              <button className="btn btn-primary btn-arrow" onClick={scrollToApply}>Apply Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Courses;