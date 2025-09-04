import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      width: isMobile ? '100vw' : 'auto',
      margin: isMobile ? '0 -20px' : 0,
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
          padding: '0',
          margin: '-110px auto 0',
          backgroundColor: '#fff',
          overflow: 'hidden'
        }}
      >
        <div style={{
          padding: '0 20px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            padding: '20px 0 40px'
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
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
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

      {/* Stats Counter Section */}
      <section 
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          backgroundColor: '#4a6cf7',
          padding: '10px 0',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <div style={{
          maxWidth: '1450px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          padding: '0 20px'
        }}>
          {[
            { number: '200,000+', label: 'Students' },
            { number: '350+', label: 'Institutions' },
            { number: '1,500+', label: 'Workshops Conducted' },
            { number: '12+', label: 'Years of Excellence' },
            { number: '99%', label: 'Success Rate' }
          ].map((stat, index) => (
            <div key={index} style={{
              padding: '30px 20px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '150px'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                lineHeight: '1.2',
                marginBottom: '10px'
              }}>{stat.number}</div>
              <div style={{
                fontSize: '1.1rem',
                opacity: '0.9'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section style={missionStyles.container}>
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
                background: '#4a6cf7',
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

      {/* Team Section */}
      <section 
        className="team-section" 
        data-aos="zoom-in"
        data-aos-delay="200"
        style={{padding: '80px 0', backgroundColor: '#f8f9fa' }}
      >
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
              background: '#4a6cf7',
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
              <p style={{ color: '#4a6cf7', fontWeight: '600', marginBottom: '10px' }}>Founder & CEO</p>
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
              <p style={{ color: '#4a6cf7', fontWeight: '600', marginBottom: '10px' }}>Head of Education</p>
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
              <p style={{ color: '#4a6cf7', fontWeight: '600', marginBottom: '10px' }}>Lead Instructor</p>
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
              <p style={{ color: '#4a6cf7', fontWeight: '600', marginBottom: '10px' }}>Student Success</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Dedicated to your learning journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        data-aos="fade-up"
        data-aos-delay="200"
        style={{ 
          padding: '80px 0',
          backgroundColor: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
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
              background: '#4a6cf7',
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
                color: '#4a6cf7',
                icon: '⭐'
              },
              { 
                title: 'Innovation', 
                desc: 'Continuously updating our curriculum with the latest AI advancements',
                color: '#6c5ce7',
                icon: '🚀'
              },
              { 
                title: 'Community', 
                desc: 'Building a supportive network of AI enthusiasts',
                color: '#00b894',
                icon: '👥'
              },
              { 
                title: 'Accessibility', 
                desc: 'Making AI education available to everyone',
                color: '#e17055',
                icon: '🌍'
              },
            ].map((value, index) => (
              <div 
                key={index} 
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  border: '1px solid #f0f0f0',
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
                  borderRadius: '50%',
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

      {/* Testimonials Section */}
      <section 
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          padding: '80px 0',
          backgroundColor: '#fff',
          position: 'relative'
        }}
      >
        <div style={{
          maxWidth: '1450px',
          margin: '0 auto',
          padding: '0 20px',
          position: 'relative'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '60px',
            color: '#333',
            position: 'relative',
            paddingBottom: '15px'
          }}>
            What Our Students Say
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: '#4a6cf7',
              borderRadius: '2px'
            }} />
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {[
              {
                name: 'Abishek',
                role: 'AI Engineering Student',
                avatar: 'R',
                review: 'The AI course transformed my career. The practical projects and expert guidance helped me land a job at a top tech company within 3 months of completion!',
                rating: '★★★★★'
              },
              {
                name: 'Priyanka',
                role: 'Data Science Student',
                avatar: 'P',
                review: 'Exceptional curriculum and supportive mentors. The hands-on approach made complex AI concepts easy to understand and implement.',
                rating: '★★★★★'
              },
              {
                name: 'Lokesh',
                role: 'Machine Learning Enthusiast',
                avatar: 'A',
                review: 'The best investment I made in my tech career. The course structure is well-designed, and the instructors are industry experts.',
                rating: '★★★★★'
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid #f0f0f0',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  ':hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                    borderColor: '#4a6cf7',
                    '::before': {
                      transform: 'scaleX(1)',
                      opacity: 1
                    }
                  },
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#4a6cf7',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    opacity: 0,
                    zIndex: 1
                  }
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#4a6cf715',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#4a6cf7'
                  }}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 style={{
                      margin: '0 0 5px 0',
                      color: '#333',
                      fontSize: '1.2rem'
                    }}>
                      {testimonial.name}
                    </h3>
                    <p style={{
                      margin: 0,
                      color: '#666',
                      fontSize: '0.9rem'
                    }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p style={{
                  color: '#555',
                  lineHeight: '1.7',
                  marginBottom: '20px',
                  fontStyle: 'italic',
                  position: 'relative',
                  paddingLeft: '20px',
                  borderLeft: '3px solid #4a6cf7'
                }}>
                  "{testimonial.review}"
                </p>
                <div style={{
                  color: '#ffc107',
                  fontSize: '1.2rem',
                  textAlign: 'right'
                }}>
                  {testimonial.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
