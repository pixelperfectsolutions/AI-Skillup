import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Features from './components/Features/Features';
import ApplyForm from './components/ApplyForm/ApplyForm';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
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
              <div id="contact">
                <Footer />
              </div>
            </>
          } />
        </Routes>
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
