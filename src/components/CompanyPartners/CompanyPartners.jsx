import React from 'react';
import { FaHandshake, FaBriefcase, FaUsers, FaRocket } from 'react-icons/fa';
import './CompanyPartners.css';

const CompanyPartners = () => {
  const companies = [
    {
      name: 'Pixel Perfect Solutions',
      logo: '/images/pixel-logo-site.png',
      alt: 'Pixel Perfect Solutions Logo',
      url: 'https://pixelperfect.co.in/'
    },
    {
      name: '1dot.ai',
      logo: '/images/ai logo.webp',
      alt: '1dot.ai Logo',
      url: 'https://1dot.ai/'
    },
    {
      name: 'CADD BIM',
      logo: '/images/cadd bim.png',
      alt: 'CADD BIM Logo',
      url: 'https://caddbimtechnologies.com/'
    }
  ];

  const partnershipPoints = [
    {
      icon: <FaHandshake />,
      title: 'Strategic Partnership',
      description: 'Collaborative training programs designed with industry leaders'
    },
    {
      icon: <FaBriefcase />,
      title: 'Job Opportunities',
      description: 'Direct placement opportunities for our trained students'
    },
    {
      icon: <FaUsers />,
      title: 'Industry Mentorship',
      description: 'Expert guidance from professionals working in top companies'
    },
    {
      icon: <FaRocket />,
      title: 'Real-World Projects',
      description: 'Hands-on experience with live industry projects and case studies'
    }
  ];

  return (
    <section className="company-partners">
      <div className="company-partners-container">
        <h2 className="company-partners-title">Companies Tied Up with AI Skillup</h2>
        <p className="company-partners-subtitle">
          Partnering with leading organizations to provide the best learning and career opportunities
        </p>
        
        <div className="company-logos-grid">
          {companies.map((company, index) => (
            <a 
              key={index} 
              href={company.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="company-logo-item"
            >
              <img src={company.logo} alt={company.alt} />
            </a>
          ))}
        </div>

        <div className="partnership-benefits">
          {partnershipPoints.map((point, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{point.icon}</div>
              <h3 className="benefit-title">{point.title}</h3>
              <p className="benefit-description">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyPartners;
