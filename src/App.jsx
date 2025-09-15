import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CoursePage />} />
        <Route path="/" element={
          <>
            <Hero />
            <Partners />
            <div id="about">
              <About />
            </div>
            <div id="courses">
              <Courses layout="slider" showHero={false} showPlacement={false} />
            </div>
            <Features />
            <ApplyForm />
            <Testimonials layout="slider" columns={3} showControls={false} />
          </>
        } />
      </Routes>
      {/* Global footer on all pages */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;