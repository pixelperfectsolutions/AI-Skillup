import React from 'react';
import './Features.css';
import { FaBookOpen, FaUserTie, FaBriefcase, FaLaptopCode, FaClock, FaCertificate, FaRobot, FaCloud } from 'react-icons/fa';

const features = [
  { icon: <FaBookOpen />, title: 'Industry-Ready Curriculum', description: 'Our courses are designed to meet the latest industry standards.' },
  { icon: <FaUserTie />, title: 'Expert Instructors', description: 'Learn from experienced professionals and industry experts.' },
  { icon: <FaBriefcase />, title: 'Placement Assistance', description: 'We provide dedicated placement support to our students.' },
  { icon: <FaLaptopCode />, title: 'Live Projects', description: 'Gain hands-on experience with real-world projects.' },
  { icon: <FaClock />, title: 'Flexible Learning', description: 'Learn at your own pace with our flexible schedules.' },
  { icon: <FaCertificate />, title: 'Certification', description: 'Get certified and recognized for your skills.' },
  { icon: <FaRobot />, title: 'AI-Powered Tools', description: 'Boost productivity with AI-assisted coding, design, and analytics tools.' },
  { icon: <FaCloud />, title: 'Cloud Labs Access', description: 'Practice in cloud-based environments for seamless learning anywhere.' },
];

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose AI SKILL UP?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
