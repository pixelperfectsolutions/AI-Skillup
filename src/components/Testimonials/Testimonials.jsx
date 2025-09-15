import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

// Star rating component with only full stars
const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span 
          key={star} 
          className={`star ${star <= rating ? 'filled' : ''}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = ({ layout = 'slider', columns = 3, showTitle = true, showControls = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
    if (w <= 640) return 1;
    if (w <= 992) return 2;
    return 3;
  });
  // Static Google rating summary (no API)
  const googleRating = 4.9;
  const googleReviewCount = 563;
  // TODO: replace with your real Google "Write a review" URL
  const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID';
  
  // No avatar generation needed as per requirements

  // All testimonials will have 5-star ratings
  const getRandomRating = () => 5; // Always return 5 stars

  const testimonials = [
    {
      id: 1,
      name: 'Nantha Kumar',
      handle: '@nanthakumar',
      timeAgo: '6 months ago',
      rating: getRandomRating(),
      content: 'The AI courses transformed my career! The hands-on projects and expert mentorship helped me land my dream job at a top tech company.'
    },
    {
      id: 2,
      name: 'Keerthi',
      handle: '@keerthi',
      timeAgo: '4 months ago',
      rating: getRandomRating(),
      content: 'Exceptional curriculum and instructors. The practical approach to AI concepts made complex topics easy to understand and apply in real-world scenarios.'
    },
    {
      id: 3,
      name: 'Gokul Krishnan',
      handle: '@gokulkrishnan',
      timeAgo: '2 months ago',
      rating: getRandomRating(),
      content: 'The best investment I\'ve made in my education. The courses are well-structured and the community support is outstanding.'
    },
    {
      id: 4,
      name: 'Shamini',
      handle: '@shamini',
      timeAgo: '1 month ago',
      rating: getRandomRating(),
      content: 'The perfect blend of theory and practice. I was able to immediately apply what I learned to my job and see real results.'
    },
    {
      id: 5,
      name: 'Karthik',
      handle: '@karthik',
      timeAgo: '3 weeks ago',
      rating: getRandomRating(),
      content: 'The instructors are industry experts who genuinely care about student success. The career support team is also fantastic at helping with job placement.'
    }
  ];

  const pageCount = Math.max(1, Math.ceil(testimonials.length / itemsPerView));

  // Build pages of testimonials based on itemsPerView
  const pages = Array.from({ length: pageCount }, (_, pageIndex) =>
    testimonials.slice(pageIndex * itemsPerView, pageIndex * itemsPerView + itemsPerView)
  );
  // Extend with clones for seamless loop: [last, ...pages, first]
  const extendedPages = pages.length > 0 ? [pages[pages.length - 1], ...pages, pages[0]] : [[]];

  // Track page index within extendedPages: start at 1 (first real page)
  const [pageIndex, setPageIndex] = useState(1);
  const trackRef = React.useRef(null);

  const nextSlide = useCallback(() => {
    setPageIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setPageIndex((prev) => prev - 1);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => { nextSlide(); }, 5000);
    return () => clearTimeout(timer);
  }, [pageIndex, isPaused, nextSlide]);

  // Update itemsPerView on resize for responsive 3/2/1 layout
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setItemsPerView(w <= 640 ? 1 : w <= 992 ? 2 : 3);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // When itemsPerView changes, reset to first real page
  useEffect(() => {
    setPageIndex(1);
  }, [itemsPerView]);

  // Mark mounted after first paint to avoid initial off-screen transform
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const goToSlide = (index) => {
    setPageIndex(index + 1); // +1 because of leading clone
    setIsPaused(true);
  };

  // Pause auto-slide when user interacts; resume after 10s
  const pauseAutoSlide = useCallback(() => {
    setIsPaused(true);
    const timer = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // Handle transition end to snap seamlessly when we hit clones
  const handleTransitionEnd = () => {
    const track = trackRef.current;
    if (!track) return;
    // If moved before first real page (index 0), snap to last real page (pageCount)
    if (pageIndex === 0) {
      track.style.transition = 'none';
      setPageIndex(pageCount);
      // Force reflow then restore transition
      void track.offsetHeight;
      track.style.transition = '';
    }
    // If moved after last real page (index pageCount+1), snap to first real page (1)
    if (pageIndex === pageCount + 1) {
      track.style.transition = 'none';
      setPageIndex(1);
      void track.offsetHeight;
      track.style.transition = '';
    }
  };

  // Grid layout renderer (3 columns visible at once)
  const renderGrid = () => (
    <div className="testimonials-grid" role="list">
      {testimonials.map((t) => (
        <article key={t.id} className="testimonial-card" role="listitem">
          <div className="google-badge-large"><span className="g-letter">G</span></div>
          <StarRating rating={t.rating} />
          <p className="card-quote">"{t.content}"</p>
          <div className="testimonial-author">
            <div className="testimonial-fallback">{t.name.split(' ').map(n => n[0]).join('')}</div>
            <div className="author-info">
              <h4 className="author-name">{String(t.name).toLowerCase()}</h4>
              <div className="author-meta">
                <span className="handle">{t.handle}</span>
                <span className="sep">•</span>
                <span className="time">{t.timeAgo}</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section className="testimonials-section">
      <div className="ts-decor" aria-hidden="true">
        <span className="ts-dots tl" />
        <span className="ts-dots tr" />
        <span className="ts-dots bl" />
        <span className="ts-dots br" />
      </div>
      <div className="container">
        {showTitle && <h2 className="section-title">What Our Students Say</h2>}
        {/* Google Rating Summary Card (static mimic, no API) */}
        <div className="google-rating-card" role="region" aria-label="Google rating summary">
          <div className="google-brand" aria-hidden="true">
            <span className="g g-blue">G</span>
            <span className="g g-red">o</span>
            <span className="g g-yellow">o</span>
            <span className="g g-blue">g</span>
            <span className="g g-green">l</span>
            <span className="g g-red">e</span>
          </div>
          <div className="google-summary">
            <span className="avg" aria-label={`Average rating ${googleRating}`}>{googleRating}</span>
            <div className="google-stars" aria-hidden="true">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="count" aria-label={`${googleReviewCount} reviews`}>
              {googleReviewCount} reviews
            </span>
          </div>
          <a className="btn-google-review" href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
            Write a Review
          </a>
        </div>
        {layout === 'grid' ? (
          renderGrid()
        ) : (
          <div 
            className="testimonials-slider"
            onMouseEnter={pauseAutoSlide}
            onFocus={pauseAutoSlide}
          >
            {showControls && (
              <button 
                className="slider-arrow prev" 
                onClick={() => { prevSlide(); pauseAutoSlide(); }}
                aria-label="Previous"
              >&#10094;</button>
            )}
            <div className="testimonials-viewport">
              <div 
                className="testimonials-track" 
                ref={trackRef}
                style={{ transform: mounted ? `translateX(-${pageIndex * 100}%)` : 'translateX(-100%)' }}
                aria-live="polite"
                onTransitionEnd={handleTransitionEnd}
              >
                {(mounted ? extendedPages : pages).map((page, idx) => (
                  <div className="slide" key={idx} style={{ gridTemplateColumns: `repeat(${itemsPerView}, 1fr)` }}>
                    {page.map((t) => (
                      <article key={`${idx}-${t.id}`} className="testimonial-card">
                        <div className="google-badge-large"><span className="g-letter">G</span></div>
                        <StarRating rating={t.rating} />
                        <p className="card-quote">"{t.content}"</p>
                        <div className="testimonial-author">
                          <div className="testimonial-fallback">{t.name.split(' ').map(n => n[0]).join('')}</div>
                          <div className="author-info">
                            <h4 className="author-name">{String(t.name).toLowerCase()}</h4>
                            <div className="author-meta">
                              <span className="handle">{t.handle}</span>
                              <span className="sep">•</span>
                              <span className="time">{t.timeAgo}</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {showControls && (
              <button 
                className="slider-arrow next" 
                onClick={() => { nextSlide(); pauseAutoSlide(); }}
                aria-label="Next"
              >&#10095;</button>
            )}
            {showControls && (
              <div className="testimonial-dots" role="tablist">
                {Array.from({ length: pageCount }).map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index + 1 === pageIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-selected={index + 1 === pageIndex}
                    role="tab"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;