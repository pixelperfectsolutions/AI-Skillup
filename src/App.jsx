import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CompanyPartners from './components/CompanyPartners/CompanyPartners';
import Partners from './components/Partners/Partners';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Features from './components/Features/Features';
import GeoSlider from './components/GeoSlider/GeoSlider';
import ApplyForm from './components/ApplyForm/ApplyForm';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import Popup from './components/Popup';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CoursePage from './pages/CoursePage';
import './App.css';

// Scroll to top on every route change
function ScrollToTop() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className={`App site-bg ${isHome ? 'home-minimal' : ''}`}>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<Courses showHero={false} />} />
        <Route path="/courses/:slug" element={<CoursePage />} />
        <Route path="/" element={
          <>
            <Hero />
            <CompanyPartners />
            <div id="about">
              <About />
            </div>
            <Partners />
            <div id="courses" className="courses-section-wrapper">
              {/* Decorations are now positioned via CSS relative to this wrapper */}
              <Courses layout="slider" showHero={false} showPlacement={false} />
            </div>
            <Features />
            <GeoSlider />
            <ApplyForm />
            <Testimonials layout="slider" columns={3} showControls={false} />
          </>
        } />
      </Routes>
      {/* Global footer on all pages */}
      <Footer />
      <ScrollToTopButton />
      {/* Hide floating WhatsApp on About page to remove the extra right-side widget */}
      {location.pathname !== '/about' && <FloatingWhatsApp />}
      {/* Popup form disabled on About page to avoid scroll interference */}
      {location.pathname !== '/about' && <Popup />}
    </div>
  );
}

export default App;