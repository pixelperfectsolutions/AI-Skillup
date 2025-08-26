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
        <div className="apply-form-content">
          <div className="discount-info">
            <h2>Wait! <br/><span>Before you go,</span> <br/>Here is a 20% <br/>Discount.</h2>
            <hr/>
            <p>in your Course Fee</p>
          </div>
          <div className="form-image-container">
            <form onSubmit={handleSubmit} className="apply-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Id"
                  value={formData.email}
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
                  <option value="" disabled>Enter your Interested Course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
            <div className="apply-form-image">
              <img src="/images/apply form-1.png" alt="Student with books" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
