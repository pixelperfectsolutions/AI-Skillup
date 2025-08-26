import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Courses.css';
import './Placement.css';

const courses = [
  {
    title: 'Embedded & IOT Development',
    description: 'Project based assessment | world-class courseware',
    image: '/images/course-1.png'
  },
  {
    title: 'Full Stack Development',
    description: 'World-class courseware | Industry recognized certificate',
    image: '/images/course-2.png'
  },
  {
    title: 'Data Science Course',
    description: 'Project based assessment | World-class courseware',
    image: '/images/course-3.png'
  },
  {
    title: 'Automotive Design',
    description: 'Learn the principles of automotive design and engineering.',
    image: '/images/course-4.png'
  },
  {
    title: 'Industrial Design',
    description: 'Master the skills of an industrial design engineer.',
    image: '/images/course-5.png'
  },
  {
    title: 'Cybersecurity Specialist',
    description: 'Protect networks and data from cyber threats.',
    image: '/images/course-6.png'
  },
  {
    title: 'UI/UX Design Fundamentals',
    description: 'Create intuitive and beautiful user interfaces.',
    image: '/images/course-7.png'
  },
  {
    title: 'Blockchain Development',
    description: 'Build decentralized applications on the blockchain.',
    image: '/images/course-8.png'
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Drive online growth with cutting-edge marketing strategies.',
    image: '/images/course-9.png'
  },
  {
    title: 'Game Development with Unity',
    description: 'Bring your game ideas to life with the Unity engine.',
    image: '/images/course-10.png'
  }
];

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
  const scrollToApply = () => {
    const el = document.getElementById('apply-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                <div key={index} className="course-card">
                  <img src={course.image} alt={course.title} />
                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <button className="view-course-btn" onClick={scrollToApply}>Apply Course &rarr;</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="placement" id="placement">
        <div className="placement-container">
          <h2>100% Placement Assistance</h2>
          <p>Our commitment to your success doesn't end with course completion. We provide comprehensive placement assistance to help you launch your career.</p>
          <div className="placement-images">
            <img src="/images/placement-1.png" alt="Placement Highlight 1" />
            <img src="/images/placement-2.png" alt="Placement Highlight 2" />
          </div>
          <div className="placement-stats">
            <div className="stat">
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Companies Visited</p>
            </div>
            <div className="stat">
              <h3>1000+</h3>
              <p>Students Placed</p>
            </div>
          </div>
          <div className="placement-process">
            <h3>Our Placement Process</h3>
            <ol>
              <li>Career Counseling & Assessment</li>
              <li>Resume Building & Interview Preparation</li>
              <li>Mock Interviews & Skill Assessment</li>
              <li>Job Fairs & Company Visits</li>
              <li>Placement Offers & Alumni Network</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
