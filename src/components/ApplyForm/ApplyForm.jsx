import React, { useState } from 'react';
import './ApplyForm.css';

const courses = [
  'Embedded & IOT Development',
  'Full Stack Development',
  'Data Science Course',
  'Automotive Design',
  'Industrial Design',
];

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for applying! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', course: '' });
  };

  return (
    <section className="apply-form-section">
      <div className="apply-form-container">
        <h2>Apply Now</h2>
        <p>Fill out the form below to enroll in a course.</p>
        <form onSubmit={handleSubmit} className="apply-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a Course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
    </section>
  );
};

export default ApplyForm;
