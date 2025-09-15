import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      {/* Full-page decorative layer (behind all sections) */}
      <div className="page-decor contact-page-decor" aria-hidden="true">
        <span className="pd-shape pd-dots-left" />
        <span className="pd-shape pd-dots-right" />
        <span className="pd-shape pd-ring-top" />
        <span className="pd-shape pd-ring-bottom" />
        <span className="pd-shape pd-blob" />
      </div>
      {/* Hero Section */}
      <section className="contact-hero" data-aos="fade-up">
        {/* Decorative background for Contact */}
        <div className="contact-decor" aria-hidden="true">
          <span className="c-dot c-dot-1" />
          <span className="c-dot c-dot-2" />
          <span className="c-ring c-ring-1" />
          <span className="c-ring c-ring-2" />
        </div>
        <div className="container">
          <h1 data-aos="fade-up" data-aos-delay="100">CONTACT US</h1>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
            Our commitment is to help learners become more successful by offering modern, job-ready AI programs and career support.
          </p>
        </div>
      </section>

      <div className="contact-container">
        <div className="container">
          <div className="contact-sections reference-layout">
            {/* Left Info Column */}
            <div className="contact-section contact-section-plain" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-info">
                <h2 className="contact-left-title">We&apos;re Always Eager to Hear From You!</h2>

                <div className="info-block">
                  <h4>Address</h4>
                  <p>
                    45, Gokhale Street, Ram Nagar, Near MK Residency,<br />
                    Coimbatore, Tamil Nadu 641009, India
                  </p>
                </div>

                <div className="info-block">
                  <h4>Email</h4>
                  <a className="info-link email" href="mailto:info@aiskillup.com">info@aiskillup.com</a>
                </div>

                <div className="info-block">
                  <h4>Phone</h4>
                  <a className="info-link phone" href="tel:+919655422511">+91 96554 22511</a>
                </div>

                <div className="social-row">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-pill"><i className="fab fa-facebook-f" /></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-pill"><i className="fab fa-instagram" /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-pill"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>

            {/* Contact Form (Right) */}
            <div className="contact-section contact-card" data-aos="fade-up" data-aos-delay="400">
              <div className="contact-form-container">
                <h2 className="contact-form-title">Get In Touch</h2>
                <p className="contact-form-sub">Fill out this form for booking a consultant advising session.</p>
                <ApplyForm inline />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1958.1598818464008!2d76.9633314!3d11.0146179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fff3c5f2e3%3A0xdb874aa0157dc97!2s45%2C%20Gokhale%20St%2C%20near%20MK%20Residency%2C%20Opposite%20Senthil%20Kumaran%20Theatre%2C%20Ram%20Nagar%2C%20Coimbatore%2C%20Tamil%20Nadu%20641009!5e0!3m2!1sen!2sin!4v1756981986236!5m2!1sen!2sin"
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AI Skill Up Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
