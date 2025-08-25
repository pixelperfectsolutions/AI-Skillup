import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Courses.css';

const courses = [
  {
    title: 'Embedded & IOT Development',
    description: 'Project based assessment | world-class courseware',
    image: 'https://images.unsplash.com/photo-1581092334632-333a235a4e1e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Full Stack Development',
    description: 'World-class courseware | Industry recognized certificate',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Data Science Course',
    description: 'Project based assessment | World-class courseware',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Automotive Design',
    description: 'Learn the principles of automotive design and engineering.',
    image: 'https://images.unsplash.com/photo-1553440569-224b87d054e2?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Industrial Design',
    description: 'Master the skills of an industrial design engineer.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop'
  },
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      onClick={onClick}
    />
  );
}

const Courses = () => {
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
    <section className="courses">
      <div className="courses-header">
        <h2>Our Courses</h2>
        <p>Choose the right way to upgrade your career.</p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {courses.map((course, index) => (
            <div className="course-card-wrapper" key={index}>
              <div className="course-card">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <a href="#" className="view-course-btn">Apply Course &rarr;</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
