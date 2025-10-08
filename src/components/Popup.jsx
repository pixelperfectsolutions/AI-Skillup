import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ApplyForm from './ApplyForm/ApplyForm';
import './Popup.css';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 10 seconds on initial load/refresh
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 seconds

    // Then keep showing every 3 minutes
    const interval = setInterval(() => {
      setIsVisible(true);
    }, 3 * 60 * 1000); // 3 minutes

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  // Lock body scroll while popup is open
  useEffect(() => {
    if (isVisible) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return createPortal(
    (
      <div className="popup-overlay" onClick={closePopup}>
        <div className="popup-content modal" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={closePopup} aria-label="Close">
            ×
          </button>
          <div className="modal-grid">
            <div className="modal-image">
              <img src="/images/apply form-1.png" alt="Happy students" />
            </div>
            <div className="modal-body">
              <h2>Wait! <span>Before you go,</span> Here is a 20% Discount.</h2>
              <hr/>
              <p>in your Course Fee</p>
              <ApplyForm inline={true} hideImage={true} compact={true} />
            </div>
          </div>
        </div>
      </div>
    ),
    document.body
  );
};

export default Popup;
