"use client";

import HeroSub from '@/app/components/SharedComponent/HeroSub'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useState } from 'react'

const corporateHighlights = [
    { title: "Customized Curriculum", desc: "Tailored training modules designed to meet your specific business objectives and technology stack.", icon: "solar:settings-bold" },
    { title: "Expert Practitioners", desc: "Learn from industry veterans who bring real-world experience and case studies to your team.", icon: "solar:users-group-rounded-bold" },
    { title: "Hands-on Workshops", desc: "Interactive sessions with practical exercises to ensure immediate application of skills.", icon: "solar:clapperboard-edit-bold" },
    { title: "Flexible Delivery", desc: "Choose from on-site, virtual instructor-led, or hybrid training formats to suit your team's needs.", icon: "solar:calendar-bold" },
    { title: "Post-Training Support", desc: "Continuous guidance and resources to help your team transition and grow after the program.", icon: "solar:heart-bold" }
];

const trainingPrograms = [
    {
        title: "AI & Machine Learning for Enterprises",
        desc: "Equip your engineering and data teams with the latest AI frameworks and implementation strategies.",
        icon: "solar:cpu-bold"
    },
    {
        title: "Advanced UI/UX Design Strategy",
        desc: "Upskill your design team in user research, design systems, and AI-driven design tools.",
        icon: "solar:palette-bold"
    },
    {
        title: "Full-Stack Development Bootcamps",
        desc: "Modernize your development team's skills in Next.js, React, and cloud-native architecture.",
        icon: "solar:code-bold"
    },
    {
        title: "Executive AI Literacy",
        desc: "Empower leadership to understand AI's potential and make informed strategic decisions.",
        icon: "solar:chart-square-bold"
    }
];

const stats = [
    { label: "Corporate Partners", value: "5+", icon: "solar:buildings-bold" },
    { label: "Professionals Trained", value: "1000+", icon: "solar:user-bold" },
    { label: "Experience", value: "5+ Years", icon: "solar:star-bold" },
    { label: "Training Hours", value: "3K+", icon: "solar:clock-circle-bold" }
];

const corporateTestimonials = [
    {
        quote: "As a company building smart software for everyday life, we needed a training partner that understands the cutting edge of AI. AI Skillup delivered exactly that. Their program has empowered our developers to integrate proprietary AI engines more effectively, making our apps like Files Magic AI even smarter.",
        name: "Ragual",
        role: "CEO",
        company: "1dot.ai",
        initials: "RA",
        link: "https://1dot.ai/"
    },
    {
        quote: "Transforming client businesses requires us to stay ahead of design trends. AI Skillup's corporate training in advanced UI/UX strategy provided our team with the exact tools needed to deliver premium, high-converting digital products. Their focus on AI-driven workflows has given us a significant competitive edge.",
        name: "Gowtham",
        role: "CEO",
        company: "Pixel Perfect Solutions",
        initials: "GO",
        link: "https://pixelperfect.co.in/"
    },
    {
        quote: "In the world of CADD and BIM, precision and efficiency are everything. AI Skillup helped our architectural and civil engineering teams bridge the gap between traditional design and AI-powered automation. The training was practical, hands-on, and perfectly tailored to our industry's complex requirements.",
        name: "Vasanth Kumar",
        role: "CEO",
        company: "CADD BIM Technologies",
        initials: "VK",
        link: "https://caddbimtechnologies.com/"
    }
];

export default function CorporateTraining() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="bg-white overflow-hidden">
            {/* Contact Popup */}
            {showPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowPopup(false)}></div>
                    <div className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white">
                        <div className="hidden md:block w-2/5 relative">
                            <Image
                                src="/images/corporate/collaboration.png"
                                alt="Collaboration"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10"></div>
                        </div>

                        <div className="flex-1 p-8 md:p-12 relative bg-white">
                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
                            >
                                <Icon icon="material-symbols:close-rounded" width={24} />
                            </button>

                            <div className="mb-8">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-4">Inquiry</span>
                                <h2 className="text-3xl font-black text-gray-900 mb-2">Partner With Us</h2>
                                <p className="text-gray-500 font-bold">Fill in the details to customize your training program.</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const company = formData.get('company');
                                const employees = formData.get('employees');
                                const message = `Corporate Training Inquiry\nCompany: ${company}\nTeam Size: ${employees}`;
                                window.open(`https://wa.me/919655422511?text=${encodeURIComponent(message)}`, '_blank');
                                setShowPopup(false);
                            }}>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                                    <input type="text" name="company" placeholder="e.g. Google India" required className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none font-bold transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Approx. Team Size</label>
                                    <input type="number" name="employees" placeholder="e.g. 50" required className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none font-bold transition-all" />
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-secondary py-5 rounded-xl text-white font-black text-lg shadow-xl transition-all flex items-center justify-center gap-3 mt-6">
                                    <Icon icon="solar:letter-bold" width={24} />
                                    GET A QUOTE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 bg-slate-gray overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40"
                    style={{
                        backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                        backgroundSize: '30px 30px'
                    }}>
                </div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mb-64"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="max-w-2xl text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
                                <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Enterprise Excellence</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-midnight_text leading-[1.1] mb-6">
                                Transform Your Team with <span className="text-primary italic">AI-Powered</span> Corporate Training
                            </h1>
                            <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
                                Future-proof your workforce with customized, industry-standard training in AI, Design, and Development. Empower your team to deliver world-class results.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <button
                                    onClick={() => setShowPopup(true)}
                                    className='bg-primary text-white hover:bg-secondary py-5 px-10 rounded-full text-lg font-black transition-all shadow-2xl hover:-translate-y-1 active:scale-95 flex items-center gap-3'
                                >
                                    Get Custom Quote
                                    <Icon icon='solar:arrow-right-up-bold' width={22} height={22} />
                                </button>
                                <Link href='/courses' className='bg-white text-midnight_text hover:bg-gray-50 py-5 px-10 rounded-full text-lg font-black transition-all shadow-lg border border-gray-100 flex items-center gap-3'>
                                    Explore Courses
                                    <Icon icon='solar:list-bold' width={22} height={22} />
                                </Link>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all"></div>
                            <div className="relative transform hover:rotate-2 transition-transform duration-500">
                                <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src='/images/corporate/hero.png'
                                        alt='Corporate Training'
                                        width={800}
                                        height={600}
                                        className='rounded-[2.5rem] w-full object-cover'
                                    />
                                </div>
                                <div className="absolute -bottom-4 md:-bottom-6 -left-2 md:-left-6 bg-white p-3 md:p-5 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 z-10">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-green-500">
                                            <Icon icon="solar:verified-check-bold" className="w-5 h-5 md:w-7 md:h-7" />
                                        </div>
                                        <div>
                                            <p className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-wider">Trusted by</p>
                                            <p className="text-sm md:text-lg font-black text-gray-900 leading-none md:leading-normal">5+ MNCs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-slate-gray p-8 rounded-[2rem] text-center hover:bg-primary hover:text-white transition-all group duration-300">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary shadow-sm group-hover:rotate-12 transition-transform">
                                    <Icon icon={stat.icon} width={28} />
                                </div>
                                <h3 className="text-4xl font-black mb-2 group-hover:text-white">{stat.value}</h3>
                                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Logos / Partnerships */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <p className="text-center text-gray-400 text-xs font-black uppercase tracking-[0.3em] mb-12">Empowering Teams at Industry Leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 hover:grayscale-0 transition-all duration-500">
                        <Image src="/images/ai logo.webp" alt="Partner" width={120} height={40} className="h-8 object-contain opacity-80 hover:opacity-100 transition-all" />
                        <Image src="/images/cadd bim.png" alt="Partner" width={120} height={40} className="h-8 object-contain opacity-80 hover:opacity-100 transition-all" />
                        <Image src="/images/pixel-logo-site.png" alt="Partner" width={120} height={40} className="h-8 object-contain opacity-80 hover:opacity-100 transition-all" />
                        <Image src="/images/AI logo.png" alt="Partner" width={120} height={40} className="h-8 object-contain opacity-80 hover:opacity-100 transition-all" />
                    </div>
                </div>
            </section>

            {/* Why Choose Our Corporate Training */}
            <section className="py-24 bg-slate-gray relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 italic">
                            Why Choose <span className="text-primary not-italic border-b-8 border-primary/20">AI-Skillup</span> For Your Team?
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">We don't just teach tools; we build capabilities that drive business impact.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {corporateHighlights.map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Icon icon={item.icon} width={32} />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Programs */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight italic">
                                Specialised <span className="text-primary not-italic">Corporate</span> Modules
                            </h2>
                            <div className="space-y-6">
                                {trainingPrograms.map((program, idx) => (
                                    <div key={idx} className="flex gap-6 p-6 rounded-3xl border border-gray-100 hover:border-primary/30 transition-all bg-slate-gray/50">
                                        <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary shrink-0 shadow-sm">
                                            <Icon icon={program.icon} width={28} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-gray-900 mb-2">{program.title}</h4>
                                            <p className="text-gray-600 font-medium">{program.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
                            <Image
                                src="/images/corporate/collaboration.png"
                                alt="Training Session"
                                width={700}
                                height={900}
                                className="rounded-[2.5rem] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-midnight_text relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_rgba(37,99,235,0.1),transparent)]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <Icon icon="tabler:quote" width={60} className="text-primary mx-auto mb-6 opacity-40" />
                        <h2 className="text-3xl md:text-5xl font-black text-white italic">Trusted by <span className="text-primary not-italic">Industry Leaders</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {corporateTestimonials.map((t, idx) => (
                            <Link 
                                href={t.link} 
                                key={idx} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full group"
                            >
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group h-full flex flex-col">
                                    <p className="text-lg text-white/80 mb-10 leading-relaxed italic font-normal flex-grow">
                                        "{t.quote}"
                                    </p>
                                    <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-auto">
                                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center font-black text-white text-xl">
                                            {t.initials}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-black text-lg">{t.name}</h4>
                                            <p className="text-primary font-black uppercase tracking-widest text-[10px]">{t.role}, {t.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-primary relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 italic">Ready to Upskill Your <span className="text-white not-italic border-b-8 border-white">Team?</span></h2>
                    <p className="text-white/90 text-2xl mb-12 max-w-2xl mx-auto font-medium">Let's discuss how we can tailor our programs for your organizational success.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button
                            onClick={() => setShowPopup(true)}
                            className='bg-gray-900 text-white hover:bg-black py-6 px-16 rounded-full text-xl font-black transition-all shadow-2xl hover:-translate-y-2 active:scale-95 flex items-center gap-3 uppercase tracking-widest'
                        >
                            Get Started
                            <Icon icon='solar:heart-bold' width={24} height={24} />
                        </button>
                        <Link href='tel:+919655422511' className='bg-white text-primary hover:bg-gray-100 py-6 px-16 rounded-full text-xl font-black transition-all shadow-2xl hover:-translate-y-2 active:scale-95 flex items-center gap-3 uppercase tracking-widest border border-white/20'>
                            Call Expert
                            <Icon icon='solar:phone-bold' width={24} height={24} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
