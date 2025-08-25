import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Features from './components/Features/Features';
import ApplyForm from './components/ApplyForm/ApplyForm';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Partners />
      <About />
      <Courses />
      <Features />
      <ApplyForm />
      <Footer />
    </div>
  );
}

export default App;
