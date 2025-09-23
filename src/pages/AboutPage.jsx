import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './AboutPage.css';
import Testimonials from '../components/Testimonials/Testimonials';

const useCountUp = (target = 0, { duration = 1500, decimals = 0, startOnView = true } = {}) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(!startOnView);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const animate = (ts) => {
    if (!startRef.current) startRef.current = ts;
    const progress = Math.min((ts - startRef.current) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = target * eased;
    const factor = Math.pow(10, decimals);
    setValue(Math.round(current * factor) / factor);
    if (progress < 1) rafRef.current = requestAnimationFrame(animate);
  };

  const start = () => {
    if (started) return;
    setStarted(true);
    cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);
  return { value, start };
};

const AnimatedNumber = ({ target, decimals = 0, suffix = '', className = '' }) => {
  const ref = useRef(null);
  const { value, start } = useCountUp(target, { duration: 1500, decimals, startOnView: true });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { start(); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [start]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
};

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const whyRef = React.useRef(null);
  const teamRef = React.useRef(null);
  const valuesRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  const scrollRaf = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const sections = [whyRef, teamRef, valuesRef, testimonialsRef];

    const run = () => {
      scrollRaf.current = null;
      const vh = window.innerHeight || 1;
      for (const r of sections) {
        const el = r?.current;
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = Math.max(0, Math.min(1, center / vh));
        const deg = Math.round(progress * 360);
        el.style.setProperty('--rot', `${deg}deg`);
      }
    };

    const onScroll = () => {
      if (scrollRaf.current != null) return;
      scrollRaf.current = requestAnimationFrame(run);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
      scrollRaf.current = null;
    };
  }, []);

  useEffect(() => {
    // On page mount, ensure we start at the very top so header/topbar are visible
    try { window.scrollTo(0, 0); } catch (e) {}
    return () => {};
  }, []);

  const handleParallaxMove = (ref) => (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const mx = (x - 0.5) * 10;
    const my = (y - 0.5) * 10;
    el.style.setProperty('--mx', `${mx}px`);
    el.style.setProperty('--my', `${my}px`);
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    const norm = Math.round(((angle % 360) + 360) % 360); 
    el.style.setProperty('--rotMouse', `${norm}deg`);
  };

  const missionStyles = {
    container: {
      width: '100%',
      padding: isMobile ? '40px 0' : '80px 0',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    content: {
      width: '1450px',
      maxWidth: '100%',
      padding: isMobile ? '0 20px' : '0 40px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '30px' : '40px',
      alignItems: 'center'
    },
    text: {
      flex: 1,
      padding: isMobile ? 0 : '0 20px',
      order: isMobile ? 2 : 1
    },
    image: {
      flex: 1,
      borderRadius: isMobile ? 0 : '12px',
      overflow: 'hidden',
      boxShadow: isMobile ? 'none' : '0 10px 30px rgba(0,0,0,0.1)',
      // Avoid horizontal overflow on mobile by using 100% instead of 100vw and no negative margins
      width: isMobile ? '100%' : 'auto',
      margin: 0,
      order: isMobile ? 1 : 2
    },
    imageContent: {
      width: '100%',
      height: 'auto',
      display: 'block',
      borderRadius: isMobile ? 0 : '12px'
    }
  };

  const styles = {
    missionContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      alignItems: 'center'
    },
    missionText: {
      padding: '20px'
    },
    missionImage: {
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    },
    missionImageMobile: {
      width: '100%',
      marginLeft: '-20px',
      marginRight: '-20px',
      maxWidth: 'none',
      '& img': {
        borderRadius: 0
      }
    },
    '@media (max-width: 768px)': {
      missionContent: {
        display: 'flex',
        flexDirection: 'column'
      },
      missionText: {
        order: 2,
        padding: '20px 0'
      },
      missionImage: {
        order: 1,
        width: '100vw',
        marginLeft: '-20px',
        marginRight: '-20px',
        borderRadius: 0,
        boxShadow: 'none'
      }
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section 
        className="about-hero-section" 
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          maxWidth: '100%',
          margin: '0 auto',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Decorative animated background */}
        <div className="about-decor" aria-hidden="true">
          <span className="dot-grid dot-grid-1" />
          <span className="dot-grid dot-grid-2" />
          <span className="ring ring-1" />
          <span className="ring ring-2" />
          <span className="arc arc-left" />
          <span className="arc arc-bottom" />
          <span className="blob blob-1" />
        </div>
        <div style={{
          padding: '0 20px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            padding: '0 0 80px'
          }}>
            {/* Left Column - Content */}
            <div style={{
              padding: '20px',
              backgroundColor: '#fff'
            }}>
              <h1 style={{
                fontSize: '2.8rem',
                fontWeight: '700',
                color: '#333',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Who We Are</h1>
              <p style={{
                fontSize: '1.1rem',
                color: '#555',
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                AI SKILL UP is one of the leading software training institutes in Coimbatore, which focuses on industry-applicable skills and knowledge for the people.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#555',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                Our courses are prepared in such a way that each student gets hands-on experiences and practical skills to work from day one. We provide the newest facilities, trained mentors, and student-centered methodologies to uphold excellence in education while creating a nurturing and innovative learning environment for all.
              </p>
              <Link 
                to="/contact" 
                className="btn btn-primary"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  marginTop: '10px'
                }}
              >
                Learn More
              </Link>
            </div>
            
            {/* Right Column - Image */}
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              marginTop: isMobile ? '10px' : '20px'
            }}>
              <img 
                src="/images/AboutPage.jpg" 
                alt="AI SkillUp Team" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '12px'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative band below Hero: Mission & Vision */}
      <section className="about-band" data-aos="fade-up" data-aos-delay="120">
        <div className="band-decor" aria-hidden="true">
          <span className="band-arc-left" />
          <span className="band-dots-right" />
        </div>
        <div className="band-container">
          <div className="band-grid">
            <div className="band-item" data-aos="fade-up" data-aos-delay="150">
              <div className="band-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                Our mission is to provide hands-on industrial training that equips learners with
                practical skills, fosters innovation, and enhances employability.
              </p>
            </div>
            <div className="band-item" data-aos="fade-up" data-aos-delay="250">
              <div className="band-icon">📈</div>
              <h3>Our Vision</h3>
              <p>
                To be a premier hub for industrial training, driving skill development,
                innovation, and workforce readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section (decorated band with stat cards) */}
      <section className="stats-band" data-aos="fade-up" data-aos-delay="200">
        <div className="stats-decor" aria-hidden="true">
          <span className="stats-dots-left" />
          <span className="stats-dots-right" />
          <span className="stats-arc" />
        </div>
        <div className="stats-container">
          <div className="stats-cards">
            {[
              { icon: '👤', value: 1278, suffix: '+', decimals: 1, label: 'STUDENT ENROLLED', tone: 'var(--primary-color)' },
              { icon: '🧰', value: 10, suffix: 'k', decimals: 1, label: 'CLASS COMPLETED', tone: 'var(--primary-color)' },
              { icon: '👍', value: 100, suffix: '%', decimals: 0, label: 'SATISFACTION RATE', tone: 'var(--primary-color)' },
              { icon: '👨‍🏫', value: 354, suffix: '+', decimals: 0, label: 'TOP INSTRUCTORS', tone: 'var(--primary-color)' }
            ].map((s, i) => (
              <div className="stat-card" key={i} data-aos="zoom-in" data-aos-delay={150 + i * 80}>
                <div className="stat-icon" style={ { backgroundColor: s.tone } }>{s.icon}</div>
                <div className="stat-number">
                  <AnimatedNumber target={s.value} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{...missionStyles.container, position: 'relative', overflow: 'hidden'}}>
        <div className="decor-element decor-dots about-mission-dots-1" aria-hidden="true"></div>
        <div className="decor-element decor-blob about-mission-blob-1" aria-hidden="true"></div>
        <div style={missionStyles.content}>
          <div style={missionStyles.text}>
            <h2 style={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: '700',
              color: '#333',
              textAlign: isMobile ? 'center' : 'left',
              marginBottom: '30px',
              position: 'relative',
              paddingBottom: '15px'
            }}>
              Our Mission
              <span style={{
                content: '""',
                position: 'absolute',
                left: isMobile ? '50%' : '0',
                bottom: '0',
                transform: isMobile ? 'translateX(-50%)' : 'none',
                width: '80px',
                height: '4px',
                background: 'var(--primary-color)',
                borderRadius: '2px'
              }} />
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              At AI SkillUp, we believe in democratizing AI education and making cutting-edge knowledge accessible to everyone. Our mission is to bridge the gap between theoretical knowledge and practical AI applications through comprehensive, industry-relevant courses.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              What sets us apart is our commitment to excellence in education. We provide state-of-the-art facilities, industry-experienced mentors, and a curriculum that's constantly updated to reflect the latest technological advancements.
            </p>
          </div>
          <div style={missionStyles.image}>
            <img 
              src="/images/about-1.png" 
              alt="AI Education" 
              style={missionStyles.imageContent}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section (below Mission) */}
      <section
        className="why-choose"
        data-aos="fade-up"
        data-aos-delay="160"
        ref={whyRef}
        onMouseMove={handleParallaxMove(whyRef)}
      >
        <div className="wc-decor" aria-hidden="true">
          <span className="wc-dots-left" />
          <span className="wc-dots-right" />
          <span className="wc-arc-right" />
          <span className="wc-arc-bottom" />
        </div>
        <div className="wc-container">
          <div className="wc-heading" data-aos="fade-up" data-aos-delay="180">
            <div className="wc-eyebrow">WHY CHOOSE AI SKILL UP</div>
            <h2>
              The <span className="highlight"> Best  Beneficial</span> Side
              <br /> of <span className="highlight">AI SkillUp</span>
            </h2>
            <div className="wc-underline" />
          </div>
          <div className="wc-grid">
            <div className="wc-card" data-aos="zoom-in" data-aos-delay="220">
              <div className="wc-card-img"><img loading="lazy" src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1600&h=900&fit=crop&auto=format&dpr=1" alt="Industry Experienced Trainers" /></div>
              <div className="wc-card-body">
                <div className="wc-badge">🎓</div>
                <h3>Industry Experienced Trainers</h3>
                <p>Nurturing talent with industry experts. Training led by experienced instructors with practical insights for real-world success.</p>
              </div>
            </div>
            <div className="wc-card" data-aos="zoom-in" data-aos-delay="260">
              <div className="wc-card-img"><img loading="lazy" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop&auto=format&dpr=1" alt="100% Practical Training" /></div>
              <div className="wc-card-body">
                <div className="wc-badge">🧪</div>
                <h3>100% Practical Training</h3>
                <p>Hands-on sessions, workshops, and projects designed to build confidence through application-focused learning.</p>
              </div>
            </div>
            <div className="wc-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="wc-card-img"><img loading="lazy" src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1600&h=900&fit=crop&auto=format&dpr=1" alt="Dedicated Placement Support" /></div>
              <div className="wc-card-body">
                <div className="wc-badge">💼</div>
                <h3>Dedicated Placement Cell Support</h3>
                <p>End-to-end guidance to connect you with rewarding career opportunities and support your path to success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        className="team-section" 
        data-aos="zoom-in"
        data-aos-delay="200"
        style={{padding: '80px 0', backgroundColor: '#f8f9fa' }}
        ref={teamRef}
        onMouseMove={handleParallaxMove(teamRef)}
      >
        <div className="team-decor" aria-hidden="true">
          <span className="team-dots-left" />
          <span className="team-arc-right" />
        </div>
        <div className="container" style={{ maxWidth: '1450px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#333',
            textAlign: 'center',
            marginBottom: '20px',
            position: 'relative',
            paddingBottom: '15px'
          }}>
            Meet Our Team
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'var(--primary-color)',
              borderRadius: '2px'
            }} />
          </h2>
          <p style={{
            textAlign: 'center',
            maxWidth: '1450px',
            margin: '0 auto 50px',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#555'
          }}>
            Our Team comprises four distinguished leaders, each an expert in their respective technologies. Their combined experience serves as a powerhouse, capable of profoundly shaping students' careers and carving their potential. Together, they offer unmatched guidance and insights, ensuring our students' success in the ever-evolving tech landscape. In addition, they head our resource pool, which is further bolstered by additional leaders who excel in their respective domains.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: '30px',
            padding: '0 20px',
            width: '100%',
            boxSizing: 'border-box',
            maxWidth: '1450px',
            margin: '0 auto'
          }}>
            {/* Team Member 1 */}
            <div className="team-member-box" style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              padding: '20px 20px 30px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
              },
              '@media (max-width: 768px)': {
                margin: '0 10px',
                width: 'calc(100% - 20px)'
              }
            }}>
              <div style={{
                width: '100%',
                height: '300px',
                margin: '0 auto 20px',
                overflow: 'hidden',
                borderRadius: '8px'
              }}>
                <img 
                  src="/images/Faculty-1.png" 
                  alt="John Doe" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'top center'
                  }}
                />
              </div>
              <h3 style={{ color: '#333', marginBottom: '5px' }}>John Doe</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: '10px' }}>Founder & CEO</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>10+ years in AI research and development</p>
            </div>

            {/* Team Member 2 */}
            <div className="team-member-box" style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              padding: '20px 20px 30px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
              },
              '@media (max-width: 768px)': {
                margin: '0 10px',
                width: 'calc(100% - 20px)'
              }
            }}>
              <div style={{
                width: '100%',
                height: '300px',
                margin: '0 auto 20px',
                overflow: 'hidden',
                borderRadius: '8px'
              }}>
                <img 
                  src="/images/Faculty-2.png" 
                  alt="Jane Smith" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'top center'
                  }}
                />
              </div>
              <h3 style={{ color: '#333', marginBottom: '5px' }}>Jane Smith</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: '10px' }}>Head of Education</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Former AI lead at Tech Corp</p>
            </div>

            {/* Team Member 3 */}
            <div className="team-member-box" style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              padding: '20px 20px 30px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
              },
              '@media (max-width: 768px)': {
                margin: '0 10px',
                width: 'calc(100% - 20px)'
              }
            }}>
              <div style={{
                width: '100%',
                height: '300px',
                margin: '0 auto 20px',
                overflow: 'hidden',
                borderRadius: '8px'
              }}>
                <img 
                  src="/images/Faculty-3.png" 
                  alt="Alex Johnson" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'top center'
                  }}
                />
              </div>
              <h3 style={{ color: '#333', marginBottom: '5px' }}>Alex Johnson</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: '10px' }}>Lead Instructor</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Specialist in Machine Learning</p>
            </div>

            {/* Team Member 4 */}
            <div className="team-member-box" style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              padding: '20px 20px 30px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
              },
              '@media (max-width: 768px)': {
                margin: '0 10px',
                width: 'calc(100% - 20px)'
              }
            }}>
              <div style={{
                width: '100%',
                height: '300px',
                margin: '0 auto 20px',
                overflow: 'hidden',
                borderRadius: '8px'
              }}>
                <img 
                  src="/images/Faculty-4.png" 
                  alt="Sarah Williams" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'top center'
                  }}
                />
              </div>
              <h3 style={{ color: '#333', marginBottom: '5px' }}>Sarah Williams</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: '10px' }}>Student Success</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Dedicated to your learning journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        className="values-section"
        data-aos="fade-up"
        data-aos-delay="200"
        onMouseMove={handleParallaxMove(valuesRef)}
        ref={valuesRef}
        style={{ 
          padding: '80px 0',
          backgroundColor: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="values-decor" aria-hidden="true">
          <span className="values-dots-right" />
          <span className="values-arc-left" />
        </div>
        <div style={{ 
          maxWidth: '1450px', 
          margin: '0 auto', 
          padding: '0 20px',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '60px',
            color: '#333',
            position: 'relative',
            paddingBottom: '15px'
          }}>
            Our Values
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'var(--primary-color)',
              borderRadius: '2px'
            }} />
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {[
              { 
                title: 'Excellence', 
                desc: 'We strive for the highest standards in AI education',
                color: 'var(--primary-color)',
                icon: '⭐'
              },
              { 
                title: 'Innovation', 
                desc: 'Continuously updating our curriculum with the latest AI advancements',
                color: 'var(--primary-color)',
                icon: '🚀'
              },
              { 
                title: 'Community', 
                desc: 'Building a supportive network of AI enthusiasts',
                color: 'var(--primary-color)',
                icon: '👥'
              },
              { 
                title: 'Accessibility', 
                desc: 'Making AI education available to everyone',
                color: 'var(--primary-color)',
                icon: '🌍'
              },
            ].map((value, index) => (
              <div 
                key={index} 
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '2px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid #f0f0f0',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  ':hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: `0 15px 40px ${value.color}40`,
                    borderColor: value.color,
                    '::before': {
                      transform: 'scaleX(1)',
                      opacity: 1
                    },
                    '> div:first-child': {
                      transform: 'scale(1.15) rotate(5deg)',
                      backgroundColor: `${value.color}20`,
                      boxShadow: `0 0 0 5px ${value.color}20`
                    },
                    '> div:last-child': {
                      opacity: 1,
                      transform: 'scale(1.1)'
                    },
                    'h3': {
                      color: value.color,
                      transform: 'translateX(5px)'
                    },
                    'p': {
                      transform: 'translateX(3px)'
                    }
                  },
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    backgroundColor: value.color,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    opacity: 0,
                    zIndex: 1
                  }
                }}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '20%',
                  backgroundColor: `${value.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  fontSize: '28px',
                  color: value.color,
                  transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  willChange: 'transform'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.7rem',
                  marginBottom: '15px',
                  color: '#333',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'all 0.4s ease',
                  textAlign: 'center'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.7',
                  margin: 0,
                  position: 'relative',
                  zIndex: 2,
                  transition: 'all 0.4s ease',
                  textAlign: 'center',
                  fontSize: '1.05rem'
                }}>
                  {value.desc}
                </p>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `radial-gradient(circle at 70% 30%, ${value.color}08 0%, transparent 70%)`,
                  zIndex: -1,
                  opacity: 0,
                  transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  transform: 'scale(0.95)'
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (reuse home component) */}
      <section 
        className="about-testimonials" 
        data-aos="fade-up" 
        data-aos-delay="200"
        ref={testimonialsRef}
        onMouseMove={handleParallaxMove(testimonialsRef)}
      >
        <div className="about-testimonials-decor" aria-hidden="true">
          <span className="at-dots-left" />
          <span className="at-arc-right" />
        </div>
        <div className="about-testimonials-container">
           <Testimonials layout="slider" columns={3} showControls={false} />
         </div>
      </section>

    </div>
  );
};

export default AboutPage;
