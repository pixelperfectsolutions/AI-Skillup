import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Features from './components/Features/Features';
import ApplyForm from './components/ApplyForm/ApplyForm';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={
          <>
            <Hero />
            <Partners />
            <div id="about">
              <About />
            </div>
            <div id="courses">
              <Courses />
            </div>
            <Features />
            <ApplyForm />
            <Testimonials />
            <div id="contact">
              <Footer />
            </div>
          </>
        } />
      </Routes>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;