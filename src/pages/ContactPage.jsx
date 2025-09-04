import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ApplyForm from '../components/ApplyForm/ApplyForm';
import '../App.css';
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" data-aos="fade-up">
        <div className="container">
          <h1 data-aos="fade-up" data-aos-delay="100">Get In Touch</h1>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
            We'd love to hear from you. Fill out the form and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="contact-container">
        <div className="container">
          <div className="contact-sections">
            {/* Contact Form */}
            <div className="contact-section" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-form-container">
                <h2>Send Us a Message</h2>
                <ApplyForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-section" data-aos="fade-up" data-aos-delay="400">
              <div className="contact-info">
                <h2>Contact Information</h2>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div>
                      <h3>Our Location</h3>
                      <p>45, Gokhale Street, Ram Nagar, Near MK Residency,<br />Coimbatore, Tamil Nadu 641009.</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                      <h3>Phone Number</h3>
                      <p>+91 98765 43210</p>
                      <h3>Whatsapp Number</h3>
                      <p>+91 98765 43211</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <div>
                      <h3>Email Address</h3>
                      <p>info@aiskillup.com</p>
                      <p>support@aiskillup.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="social-links">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1958.1598818464008!2d76.9633314!3d11.0146179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fff3c5f2e3%3A0xdb874aa0157dc97!2s45%2C%20Gokhale%20St%2C%20near%20MK%20Residency%2C%20Opposite%20Senthil%20Kumaran%20Theatre%2C%20Ram%20Nagar%2C%20Coimbatore%2C%20Tamil%20Nadu%20641009!5e0!3m2!1sen!2sin!4v1756981986236!5m2!1sen!2sin"
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AI Skill Up Location"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
