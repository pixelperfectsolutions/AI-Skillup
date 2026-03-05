'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const stats = [
    { value: 95, suffix: '%', label: 'Placement Rate' },
    { value: 500, suffix: '+', label: 'Companies Visited' },
    { value: 1000, suffix: '+', label: 'Students Placed' },
    { value: 200, suffix: '+', label: 'Hiring Partners' },
    { value: 50, suffix: '+', label: 'Mock Interviews' },
]

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
]

const whatYouGet = [
    { icon: '🧑‍💼', text: '1:1 Career Mentorship' },
    { icon: '📄', text: 'Personalized Resume & LinkedIn Review' },
    { icon: '🎤', text: 'Unlimited Interview Practice' },
    { icon: '🏢', text: 'Company-Specific Preparation' },
    { icon: '📋', text: 'Real JD-based Assignments' },
    { icon: '🤝', text: 'Alumni Networking & Referrals' },
    { icon: '🗺️', text: 'Placement Guidance & Career Roadmap' },
    { icon: '💼', text: 'Portfolio & Project Review' },
    { icon: '🗣️', text: 'Soft Skills & Communication Training' },
    { icon: '🚀', text: 'Post-Placement Support' },
]

const Placement = () => {
    const [counters, setCounters] = useState(stats.map(() => 0))
    const sectionRef = useRef<HTMLElement>(null)
    const animatedRef = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animatedRef.current) {
                    animatedRef.current = true
                    stats.forEach((stat, i) => {
                        const duration = 1800
                        const steps = 60
                        const increment = stat.value / steps
                        let current = 0
                        const timer = setInterval(() => {
                            current = Math.min(current + increment, stat.value)
                            setCounters(prev => {
                                const updated = [...prev]
                                updated[i] = Math.floor(current)
                                return updated
                            })
                            if (current >= stat.value) clearInterval(timer)
                        }, duration / steps)
                    })
                }
            },
            { threshold: 0.3 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            {/* ===== Main Placement Section ===== */}
            <section
                ref={sectionRef}
                className="py-20 bg-white"
            >
                <div className="container">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-primary/10 text-primary border border-primary/20">
                            🎓 Placement Assistance
                        </span>
                        <h2 className="text-4xl font-extrabold mb-5 leading-tight text-gray-900">
                            100% Placement Assistance for Every Student
                        </h2>
                        <p className="text-lg leading-relaxed mb-8 text-gray-600">
                            At AI Skillup, we provide comprehensive placement assistance for every student. Our strong connections with leading tech companies ensure you have access to exciting career opportunities in AI and technology. Our dedicated placement team supports you with resume building, interview preparation, and placement drives, ensuring you are fully prepared for the competitive job market.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:-translate-y-1 bg-primary hover:bg-primary/90 shadow-lg"
                        >
                            Start Your Journey →
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-5 mb-16">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="text-center rounded-2xl px-8 py-7 transition-all duration-300 hover:-translate-y-2 bg-slate-gray border border-gray-100 shadow-sm"
                                style={{ minWidth: 160, flex: '1 1 150px', maxWidth: 200 }}
                            >
                                <div className="block text-4xl font-black mb-2 text-primary">
                                    {counters[i]}{stat.suffix}
                                </div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Full-Width Banner Image */}
                    <div className="relative rounded-2xl overflow-hidden group w-full mb-12" style={{ height: 420 }}>
                        <Image
                            src="/images/placement-3.png"
                            alt="Industry Partners - AI Skillup"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0"
                            style={{ background: 'linear-gradient(to top, rgba(13,27,62,0.55) 0%, transparent 60%)' }} />
                        <div className="absolute bottom-5 left-6">
                            <span className="text-white font-bold text-sm px-4 py-2 rounded-full bg-primary/80 backdrop-blur-sm">
                                🏢 Industry Partners
                            </span>
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="text-2xl font-extrabold text-gray-900 mb-6">What We Offer</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-default bg-slate-gray border border-gray-100"
                                >
                                    <span className="text-3xl flex-shrink-0 mt-0.5">{f.icon}</span>
                                    <div>
                                        <h4 className="font-bold text-base mb-1 text-gray-900">{f.title}</h4>
                                        <p className="text-xs leading-relaxed text-gray-500">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== What You Get Section ===== */}
            <section className="py-20 bg-slate-gray">
                <div className="container">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-primary/10 text-primary border border-primary/20">
                            🎁 Exclusive Benefits
                        </span>
                        <h2 className="text-4xl font-extrabold mb-4 leading-tight text-gray-900">
                            What You Get
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600">
                            Everything you need to land your dream job — from mentorship to post-placement support.
                        </p>
                    </div>

                    {/* Content: Benefits List + Images */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        {/* Benefits List */}
                        <div className="flex flex-col gap-4">
                            {whatYouGet.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 cursor-default bg-white border border-gray-100 shadow-sm"
                                >
                                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                                    <span className="font-semibold text-sm text-gray-800">{item.text}</span>
                                    <span className="ml-auto flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs bg-primary text-white">✓</span>
                                </div>
                            ))}

                            {/* Apply Now Button */}
                            <div className="mt-4">
                                <Link
                                    href="/contact"
                                    className="inline-block px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:-translate-y-1 bg-primary hover:bg-primary/90 shadow-lg"
                                >
                                    Apply Now →
                                </Link>
                            </div>
                        </div>

                        {/* Images */}
                        <div className="flex flex-col gap-4">
                            <div className="relative rounded-2xl overflow-hidden group" style={{ height: 280 }}>
                                <Image
                                    src="/images/placement-2.png"
                                    alt="Students Placed - AI Skillup"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                                    style={{ background: 'linear-gradient(to top, rgba(13,27,62,0.75), transparent)' }}>
                                    <span className="text-white font-bold text-sm px-4 py-1.5 rounded-full bg-primary/80">
                                        Students Placed
                                    </span>
                                </div>
                            </div>
                            <div className="relative rounded-2xl overflow-hidden group" style={{ height: 280 }}>
                                <Image
                                    src="/images/placement-1.png"
                                    alt="Placement Drive - AI Skillup"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                                    style={{ background: 'linear-gradient(to top, rgba(13,27,62,0.75), transparent)' }}>
                                    <span className="text-white font-bold text-sm px-4 py-1.5 rounded-full bg-primary/80">
                                        Placement Drive
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Placement
