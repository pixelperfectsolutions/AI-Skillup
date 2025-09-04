import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'aos/dist/aos.css';
import './index.css';
import './pages.css';
import App from './App';
import initAOS from './utils/aosConfig';

// Initialize AOS
initAOS();

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
