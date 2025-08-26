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
  const WHATSAPP_NUMBER = '919655422511'; // target number in international format without '+'

  const buildWhatsAppMessage = ({ name, phone, email, course }) => {
    return (
      `New course enquiry from AI SKILL UP website:%0A` +
      `%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Interested Course: ${encodeURIComponent(course)}`
    );
  };
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

    // Open WhatsApp with prefilled message
    const text = buildWhatsAppMessage(formData);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    // Attempt to open in a new tab; fallback to same tab
    const newWin = window.open(waUrl, '_blank');
    if (!newWin) {
      window.location.href = waUrl;
    }

    alert('Thank you for applying! We will contact you shortly on WhatsApp or Email.');
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
