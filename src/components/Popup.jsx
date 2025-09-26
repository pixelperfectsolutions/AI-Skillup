import React, { useState, useEffect } from 'react';
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

  if (!isVisible) return null;

  return (
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
            <h3 className="modal-title">One Form. One Dream.<br/>One Career Upgrade.</h3>
            <p className="modal-subtitle">Just a few quick details and we're all set.</p>
            <ApplyForm inline={true} hideImage={true} compact={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
