import React, { useEffect, useRef, useState } from 'react';
import './Placement.css';

const stats = [
    { value: '95%', label: 'Placement Rate' },
    { value: '500+', label: 'Companies Visited' },
    { value: '1000+', label: 'Students Placed' },
    { value: '200+', label: 'Hiring Partners' },
    { value: '50+', label: 'Mock Interviews' },
];

const features = [
    {
        icon: '🧭',
        title: 'Career Guidance',
        desc: 'Personalized career path planning and industry insights',
    },
    {
        icon: '📄',
        title: 'Resume Building',
        desc: 'ATS-optimized resume creation and review',
    },
    {
        icon: '🎤',
        title: 'Mock Interviews',
        desc: 'Practice with industry professionals and get real feedback',
    },
    {
        icon: '🏢',
        title: 'Campus Drives',
        desc: 'Regular on-campus placement drives with top companies',
    },
    {
        icon: '🤝',
        title: 'Industry Connect',
        desc: 'Direct connections with 200+ hiring partners across India',
    },
    {
        icon: '📈',
        title: 'Salary Negotiation',
        desc: 'Expert guidance on package negotiation and career growth',
    },
];

const placementImages = [
    { src: '/images/placement-1.png', alt: 'Placement Drive 1' },
    { src: '/images/placement-2.png', alt: 'Placement Drive 2' },
    { src: '/images/placement-3.png', alt: 'Placement Drive 3' },
];

const Placement = () => {
    const [counters, setCounters] = useState([0, 0, 0, 0, 0]);
    const sectionRef = useRef(null);
    const animatedRef = useRef(false);

    const parseValue = (val) => parseInt(val.replace(/[^0-9]/g, ''), 10);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animatedRef.current) {
                    animatedRef.current = true;
                    stats.forEach((stat, i) => {
                        const target = parseValue(stat.value);
                        const duration = 1800;
                        const steps = 60;
                        const increment = target / steps;
                        let current = 0;
                        const timer = setInterval(() => {
                            current = Math.min(current + increment, target);
                            setCounters((prev) => {
                                const updated = [...prev];
                                updated[i] = Math.floor(current);
                                return updated;
                            });
                            if (current >= target) clearInterval(timer);
                        }, duration / steps);
                    });
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const formatValue = (stat, animated) => {
        const suffix = stat.value.replace(/[0-9]/g, '');
        return `${animated}${suffix}`;
    };

    return (
        <section className="placement-section" ref={sectionRef}>
            {/* Header */}
            <div className="placement-header">
                <span className="placement-badge">🎓 Placement Assistance</span>
                <h2 className="placement-main-title">
                    100% Placement Assistance for Every Student
                </h2>
                <p className="placement-subtitle">
                    At AI Skillup, we provide comprehensive placement assistance for every student.
                    Our strong connections with leading tech companies ensure you have access to
                    exciting career opportunities in AI and technology. Our dedicated placement team
                    supports you with resume building, interview preparation, and placement drives,
                    ensuring you are fully prepared for the competitive job market.
                </p>
                <a href="/contact" className="placement-cta-btn">
                    Start Your Journey →
                </a>
            </div>

            {/* Stats */}
            <div className="placement-stats">
                {stats.map((stat, i) => (
                    <div className="stat-card" key={i}>
                        <span className="stat-value">{formatValue(stat, counters[i])}</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* Main content: images + features */}
            <div className="placement-body">
                {/* Image grid */}
                <div className="placement-images">
                    {placementImages.map((img, i) => (
                        <div className="placement-img-card" key={i}>
                            <img src={img.src} alt={img.alt} />
                            <div className="placement-img-overlay">
                                <span>Placement Drive {i + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <div className="placement-features">
                    <h3 className="features-title">What We Offer</h3>
                    <div className="features-grid">
                        {features.map((f, i) => (
                            <div className="feature-card" key={i}>
                                <span className="feature-icon">{f.icon}</span>
                                <div>
                                    <h4 className="feature-title">{f.title}</h4>
                                    <p className="feature-desc">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Placement;
