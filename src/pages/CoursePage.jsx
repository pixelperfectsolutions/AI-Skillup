import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import '../components/Courses/Courses.css';
import './CoursePage.css';

const CoursePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.slug === slug);

  const scrollToApply = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('apply-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  if (!course) {
    return (
      <section className="courses" style={{ paddingTop: '120px', minHeight: '60vh' }}>
        <div className="courses-container">
          <h2>Course not found</h2>
          <p>The course you are looking for does not exist or has been moved.</p>
          <Link to="/courses" className="btn" style={{ marginTop: '16px' }}>
            Back to Courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Page Hero (like Contact) */}
      <section className="course-hero" data-aos="fade-up">
        <div className="course-hero-decor" aria-hidden="true">
          <span className="ch-dot ch-dot-1" />
          <span className="ch-dot ch-dot-2" />
          <span className="ch-ring ch-ring-1" />
        </div>
        <div className="container">
          <h1 data-aos="fade-up" data-aos-delay="100">{course.title.split(' (')[0]}</h1>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
            Our commitment is to help learners become more successful by offering modern, job-ready AI programs and career support.
          </p>
        </div>
      </section>

      <section className="courses" style={{ paddingTop: '40px', position: 'relative' }}>
        <div className="course-page-decor" aria-hidden="true">
          <span className="cp-dots-left" />
          <span className="cp-ring" />
        </div>
        <div className="courses-header">
          <h2 className="section-title">{course.title}</h2>
        </div>

        {/* Course image placed below title and above duration */}
        <div style={{ maxWidth: 980, margin: '24px auto 8px', padding: '0 20px' }}>
          <img
            src={course.image}
            alt={course.title}
            style={{ display: 'block', width: '100%', maxWidth: 860, margin: '0 auto', borderRadius: 12 }}
          />
        </div>

        <div className="course-modal-body" style={{ maxWidth: 980, margin: '0 auto', padding: '0 20px' }}>
          <div className="course-modal-details">
            {course.description && (
              <div className="course-duration">
                <h4>Duration</h4>
                <p>
                  {course.description.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < course.description.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            )}

            {Array.isArray(course.highlights) && course.highlights.length > 0 && (
              <>
                <h4>Course Highlights</h4>
                <ul className="course-highlights">
                  {course.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {Array.isArray(course.projects) && course.projects.length > 0 && (
              <>
                <h4>Projects</h4>
                <ul className="course-projects">
                  {course.projects.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
              <button className="btn btn-secondary btn-arrow" onClick={scrollToApply}>Apply Course</button>
              <Link to="/courses" className="btn">Back to Courses</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePage;
