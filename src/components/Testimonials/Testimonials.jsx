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
  const [mounted, setMounted] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(() => 1);
  // Static Google rating summary (no API)
  const googleRating = 5;
  const googleReviewCount = 52;
  const GOOGLE_FIRST_REVIEW_URL = 'https://maps.app.goo.gl/VqPxnK6FDWsgo7Ev8';

  // Instead of external reviews, open a new tab with a friendly message
  const openFeedbackClosedTab = useCallback(() => {
    const win = window.open('', '_blank', 'noopener,noreferrer');
    if (!win) {
      alert('Contact owner for your feedback form application. It\'s currently closed.');
      return;
    }
    const html = `<!doctype html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Feedback Form Closed</title>
        <style>
          body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Poppins, Arial, sans-serif; background: #0f172a; color: #e5e7eb; display: grid; place-items: center; min-height: 100vh; }
          .card { background: #111827; border: 1px solid #1f2937; border-radius: 12px; padding: 28px 24px; max-width: 560px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); text-align: center; }
          h1 { margin: 0 0 8px; font-size: 1.5rem; color: #f9fafb; }
          p { margin: 0 0 16px; color: #cbd5e1; line-height: 1.6; }
          .accent { color: #f39c12; font-weight: 600; }
          a.btn { display: inline-block; margin-top: 8px; padding: 10px 16px; background: #f39c12; color: #fff; border-radius: 8px; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Feedback Form Closed</h1>
          <p>Please <span class="accent">contact the owner</span> for the feedback form application. It is currently closed.</p>
          <p>Thank you for your understanding.</p>
          <a class="btn" href="/" onclick="window.close(); return false;">Back to site</a>
        </div>
      </body>
      </html>`;
    win.document.write(html);
    win.document.close();
  }, []);

  // No avatar generation needed as per requirements

  // All testimonials will have 5-star ratings
  const getRandomRating = () => 5; // Always return 5 stars

  // Helper: check if testimonial content is a URL
  const isUrl = (str) => typeof str === 'string' && /^https?:\/\//i.test(str);

  const testimonials = [
    {
      id: 1,
      name: 'Prema Prema',
      handle: '',
      timeAgo: '6 months ago',
      rating: getRandomRating(),
      content: 'https://maps.app.goo.gl/VqPxnK6FDWsgo7Ev8',
      display: 'Best UI UX, AI design institute in Coimbatore. One to one training, affordable fee, flexible timing, well educated staff, good learning atmosphere. I am really happy to share my experience and thank you for everyone.'
    },
    {
      id: 2,
      name: 'monika dhandapani',
      handle: '',
      timeAgo: '4 months ago',
      rating: getRandomRating(),
      content: 'https://maps.app.goo.gl/82uj56Ddywe4k7Gp6',
      display: 'I’m very satisfied with the Graphic & AI Design course... It covers both fundamentals and modern AI tools. Quality teaching at such affordable fees is hard to find.'
    },
    {
      id: 3,
      name: 'Alderin',
      handle: '',
      timeAgo: '2 months ago',
      rating: getRandomRating(),
      content: 'https://maps.app.goo.gl/tLUk7gTJgyy3GB2Q6',
      display: 'The institute provides excellent training in Graphic, Interior, UI/UX, and AI design, ensuring students gain both theoretical knowledge and practical skills. The faculty are highly experienced, supportive, and always ready to guide learners at every step. Their hands-on projects and real-world assignments make learning engaging and effective. The academy also offers top-notch resources and tools, helping students stay ahead in the industry. Overall, it is a professional, inspiring, and growth-oriented institute that I highly recommend.'
    },
    {
      id: 4,
      name: 'kalai mani',
      handle: '',
      timeAgo: '1 month ago',
      rating: getRandomRating(),
      content: 'https://maps.app.goo.gl/3CpLTPShjnV516PB8',
      display: 'I am kalaimani. I completed graphic design courses like Figma, Adobe Photoshop, Adobe Illustrator, Adobe XD, Balsamiq. Flexible class timing. Fun and education balanced perfectly. Thank you for this amazing experience, would 100% recommend.'
    },
    {
      id: 5,
      name: 'Sugumar M',
      handle: '',
      timeAgo: '3 weeks ago',
      rating: getRandomRating(),
      content: 'https://maps.app.goo.gl/MXt5WYf18dCSa76f6',
      display: 'Best UI UX, AI design institute in Coimbatore. It is the best institute in Coimbatore for the upcoming future updates. Many students who studied here are good designers. All the designing update versions are taught. There is a proper fee. In the coming times, civil engineers and designers will get more opportunities. People are needed for design work. So the students who come here can utilize it properly. This institute is the best choice for that. Thank you.'
    },
    {
      id: 6,
      name: 'K R MURUKANANDHAM',
      handle: '',
      timeAgo: '2 weeks ago',
      rating: getRandomRating(),
      content: 'https://maps.app.goo.gl/2o7xFVKsi2HSwiwP6',
      display: 'Best UI UX and Graphic Design AI Skillup institute. Completed Adobe Photoshop, Adobe Illustrator, Figma and Adobe XD. Digital Marketing course training also provided. Live project and internship-based training.'
    },
    {
      id: 7,
      name: 'T. Sneka',
      handle: '',
      timeAgo: '2 weeks ago',
      rating: getRandomRating(),
      content: 'https://maps.app.goo.gl/L3Scf1NyHLMZpj3t7',
      display: 'I am Sneka, 2025 B.E Computer Science Engineering pass out. I chose a course in graphic design and UI/UX as I am interested in design. The ambience is so good and clean, staff are friendly, and the teaching is perfect and easy to understand.'
    },
    {
      id: 8,
      name: 'Madan S',
      handle: '',
      timeAgo: '1 week ago',
      rating: getRandomRating(),
      content: 'https://maps.app.goo.gl/cjXJm7iotxasaRKA8',
      display: 'Hai I\'m Madan, from Dubai. I recently completed my UI/UX Design course here, and it was a great experience. The trainers were knowledgeable and very supportive throughout the journey. The sessions were practical, and I got hands-on exposure to real-time projects, which boosted my confidence. I really recommend this institution for anyone who wants to build a strong career in UI/UX design.'
    },
    {
      id: 9,
      name: 'Ariyvumozhi VP',
      handle: '',
      timeAgo: '4 days ago',
      rating: getRandomRating(),
      content: 'https://maps.app.goo.gl/DL9DLYrUs7nWiZ8k7',
      display: 'I learnt Photoshop and Illustrator courses. They provide UI/UX, interior design, Photoshop, Illustrator training in one-on-one classes, with flexible timing, skilled trainers, and a healthy atmosphere to learn designing courses at an affordable fee.'
    },
    {
      id: 10,
      name: 'SURYA KRISHNAN',
      handle: '',
      timeAgo: '2 days ago',
      rating: getRandomRating(),
      content: 'https://maps.app.goo.gl/AKp6ugJ922rgfTxM8',
      display: 'Best place to learn, with technical drive and real-time, project data-based work.'
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
    const timer = setTimeout(() => { nextSlide(); }, 3000);
    return () => clearTimeout(timer);
  }, [pageIndex, nextSlide]);

  // Update itemsPerView on resize for responsive 3/2/1 layout
  useEffect(() => {
    const onResize = () => {
      setItemsPerView(1);
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
  };

  // No pause behavior; slider runs continuously
  const pauseAutoSlide = useCallback(() => {}, []);

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
      {testimonials.map((t) => {
        const clickable = isUrl(t.content);
        const handleActivate = () => clickable && window.open(t.content, '_blank', 'noopener,noreferrer');
        const displayText = clickable
          ? (t.display && t.display.length > 0
              ? t.display
              : `${t.name}${t.handle ? ` (${t.handle})` : ''}`)
          : t.content;
        return (
        <article
          key={t.id}
          className="testimonial-card"
          role={clickable ? 'link' : 'listitem'}
          tabIndex={clickable ? 0 : undefined}
          onClick={clickable ? handleActivate : undefined}
          onKeyDown={clickable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleActivate(); } } : undefined}
          style={clickable ? { cursor: 'pointer' } : undefined}
        >
          <div className="google-badge-large"><span className="g-letter">G</span></div>
          <div className="testimonial-author">
            <div className="testimonial-fallback">{t.name.split(' ').map(n => n[0]).join('')}</div>
            <div className="author-info">
              <h4 className="author-name">{String(t.name).toLowerCase()}</h4>
              <div className="author-meta">
                <span className="handle">{t.handle ? `${t.handle}@gmail.com` : ''}</span>
                <span className="sep">•</span>
                <span className="time">{t.timeAgo}</span>
              </div>
            </div>
          </div>
          <StarRating rating={t.rating} />
          <p className="card-quote">"{displayText}"</p>
        </article>
        );
      })}
    </div>
  );

  return (
    <section className="testimonials-section">
      <div className="ts-decor" aria-hidden="true">
        <span className="ts-dots tl" />
        <span className="ts-dots tr" />
        <span className="ts-dots bl" />
        <span className="ts-dots br" />
        <div className="decor-element decor-arc testimonials-decor-arc-1"></div>
        <div className="decor-element decor-arc testimonials-decor-arc-2"></div>
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
          <a
            href="https://www.google.com/maps/place/Graphic,+UI+UX,+AI+Design+Academy/@11.0212172,76.9606693,14z/data=!4m18!1m9!3m8!1s0x3ba8594767deeaf7:0x578b90b22a69fb4c!2sGraphic,+UI+UX,+AI+Design+Academy!8m2!3d11.0148355!4d76.9638168!9m1!1b1!16s%2Fg%2F11xrc58944!3m7!1s0x3ba8594767deeaf7:0x578b90b22a69fb4c!8m2!3d11.0148355!4d76.9638168!9m1!1b1!16s%2Fg%2F11xrc58944?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-google-review"
            title="Write a review on Google"
          >
            Write a Review
          </a>
        </div>
        {layout === 'grid' ? (
          renderGrid()
        ) : (
          <div className="testimonials-slider">
            {showControls && (
              <button 
                className="slider-arrow prev" 
                onClick={() => { prevSlide(); }}
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
                    {page.map((t) => {
                      const clickable = isUrl(t.content);
                      const handleActivate = () => clickable && window.open(t.content, '_blank', 'noopener,noreferrer');
                      const displayText = clickable
                        ? (t.display && t.display.length > 0
                            ? t.display
                            : `${t.name}${t.handle ? ` (${t.handle})` : ''}`)
                        : t.content;
                      return (
                      <article
                        key={`${idx}-${t.id}`}
                        className="testimonial-card"
                        role={clickable ? 'link' : undefined}
                        tabIndex={clickable ? 0 : undefined}
                        onClick={clickable ? handleActivate : undefined}
                        onKeyDown={clickable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleActivate(); } } : undefined}
                        style={clickable ? { cursor: 'pointer' } : undefined}
                      >
                        <div className="google-badge-large"><span className="g-letter">G</span></div>
                        <div className="testimonial-author">
                          <div className="testimonial-fallback">{t.name.split(' ').map(n => n[0]).join('')}</div>
                          <div className="author-info">
                            <h4 className="author-name">{String(t.name).toLowerCase()}</h4>
                            <div className="author-meta">
                              <span className="handle">{t.handle ? `${t.handle}@gmail.com` : ''}</span>
                              <span className="sep">•</span>
                              <span className="time">{t.timeAgo}</span>
                            </div>
                          </div>
                        </div>
                        <StarRating rating={t.rating} />
                        <p className="card-quote">"{displayText}"</p>
                      </article>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            {showControls && (
              <button 
                className="slider-arrow next" 
                onClick={() => { nextSlide(); }}
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