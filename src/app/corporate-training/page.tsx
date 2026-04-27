"use client";

import HeroSub from '@/app/components/SharedComponent/HeroSub'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useState } from 'react'

// Note: metadata cannot be exported from 'use client' components.
// The page title/description is set via the parent layout for this route.
// To add metadata, a wrapper server component would be needed.
// For now, the meta is handled at layout.tsx level with the template.

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
                                <h6 className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">Inquiry</h6>
                                <h2 className="mb-2">Partner With <span className="text-primary">Us</span></h2>
                                <p className="font-bold">Fill in the details to customize your training program.</p>
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
                                    <h6 className="ml-1 text-gray-400">Company Name</h6>
                                    <input type="text" name="company" placeholder="e.g. Google India" required className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none font-bold transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <h6 className="ml-1 text-gray-400">Approx. Team Size</h6>
                                    <input type="number" name="employees" placeholder="e.g. 50" required className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none font-bold transition-all" />
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-secondary py-5 rounded-xl text-white font-semibold text-[15px] shadow-xl transition-all flex items-center justify-center gap-3 mt-6 uppercase tracking-widest">
                                    <Icon icon="solar:letter-bold" width={24} />
                                    GET A QUOTE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 bg-white overflow-hidden">
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
                                <h6 className="text-primary">Enterprise Excellence</h6>
                            </div>
                            <h1>
                                Transform Your Team with <span className="text-primary">AI-Powered</span> Corporate Training
                            </h1>
                            <p className="mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
                                Future-proof your workforce with customized, industry-standard training in AI, Design, and Development. Empower your team to deliver world-class results.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <button
                                    onClick={() => setShowPopup(true)}
                                    className='bg-primary text-white hover:bg-secondary py-5 px-10 rounded-full text-[15px] font-semibold transition-all shadow-2xl hover:-translate-y-1 active:scale-95 flex items-center gap-3 uppercase tracking-widest'
                                >
                                    Get Custom Quote
                                    <Icon icon='solar:arrow-right-up-bold' width={22} height={22} />
                                </button>
                                <Link href='/courses' className='bg-white text-midnight_text hover:bg-gray-50 py-5 px-10 rounded-full text-[15px] font-semibold transition-all shadow-lg border border-gray-100 flex items-center gap-3 uppercase tracking-widest'>
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
                                            <h6 className="text-gray-500">Trusted by</h6>
                                            <h3 className="leading-none md:leading-normal">5+ MNCs</h3>
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
                            <div key={idx} className="bg-white p-8 rounded-[2rem] text-center hover:bg-primary hover:text-white transition-all group duration-300">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary shadow-sm group-hover:rotate-12 transition-transform">
                                    <Icon icon={stat.icon} width={28} />
                                </div>
                                <h3 className="mb-2 group-hover:text-white">{stat.value}</h3>
                                <h6 className="opacity-60 group-hover:opacity-100">{stat.label}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Logos / Partnerships */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <h6 className="text-center text-gray-400 mb-12">Empowering Teams at Industry Leaders</h6>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 hover:grayscale-0 transition-all duration-500">
                        <Image src="/images/ai logo.webp" alt="Partner" width={120} height={40} className="h-8 object-contain opacity-80 hover:opacity-100 transition-all" />
                        <Image src="/images/cadd bim.png" alt="Partner" width={120} height={40} className="h-8 object-contain opacity-80 hover:opacity-100 transition-all" />
                        <Image src="/images/pixel-logo-site.png" alt="Partner" width={120} height={40} className="h-8 object-contain opacity-80 hover:opacity-100 transition-all" />
                        <Image src="/images/AI logo.png" alt="Partner" width={120} height={40} className="h-8 object-contain opacity-80 hover:opacity-100 transition-all" />
                    </div>
                </div>
            </section>

            {/* Why Choose Our Corporate Training */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="mb-6">
                            Why Choose <span className="text-primary">AI Skill Up</span> For Your Team?
                        </h2>
                        <p className="max-w-2xl mx-auto">We don't just teach tools; we build capabilities that drive business impact in Coimbatore.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {corporateHighlights.map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Icon icon={item.icon} width={32} />
                                </div>
                                <h3 className="mb-4">{item.title}</h3>
                                <p className="font-medium">{item.desc}</p>
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
                             <h2 className="mb-8 leading-tight">
                                Specialised <span className="text-primary">Corporate</span> Modules
                            </h2>
                            <div className="space-y-6">
                                {trainingPrograms.map((program, idx) => (
                                    <div key={idx} className="flex gap-6 p-6 rounded-3xl border border-gray-100 hover:border-primary/30 transition-all bg-white">
                                        <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary shrink-0 shadow-sm">
                                            <Icon icon={program.icon} width={28} />
                                        </div>
                                        <div>
                                            <h4 className="mb-2">{program.title}</h4>
                                            <p className="font-medium">{program.desc}</p>
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
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_rgba(37,99,235,0.05),transparent)]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <Icon icon="tabler:quote" width={60} className="text-primary mx-auto mb-6 opacity-20" />
                        <h2 className="">Trusted by <span className="text-primary">Industry Leaders</span></h2>
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
                                <div className="bg-white border border-gray-100 p-10 rounded-[2.5rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                                    <p className="mb-10 flex-grow font-medium">
                                        "{t.quote}"
                                    </p>
                                    <div className="flex items-center gap-4 border-t border-gray-100 pt-8 mt-auto">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center font-black text-primary text-xl">
                                            {t.initials}
                                        </div>
                                        <div>
                                            <h4 className="">{t.name}</h4>
                                            <h6 className="text-primary">{t.role}, {t.company}</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-white relative border-t border-gray-100">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-48 -mb-48"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="mb-8">Ready to Upskill Your <span className="text-primary underline decoration-success/20 decoration-8 underline-offset-12">Team?</span></h2>
                    <p className="mb-12 max-w-2xl mx-auto font-bold">Let's discuss how we can tailor our programs for your organizational success.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button
                            onClick={() => setShowPopup(true)}
                            className='bg-primary text-white hover:bg-primary/90 py-6 px-16 rounded-full text-[15px] font-semibold transition-all shadow-xl shadow-primary/20 hover:-translate-y-2 active:scale-95 flex items-center gap-3 uppercase tracking-widest'
                        >
                            Get Started
                            <Icon icon='solar:heart-bold' width={24} height={24} />
                        </button>
                        <Link href='tel:+919655422511' className='bg-success text-white hover:bg-success/90 py-6 px-16 rounded-full text-[15px] font-semibold transition-all shadow-xl shadow-success/20 hover:-translate-y-2 active:scale-95 flex items-center gap-3 uppercase tracking-widest'>
                            Call Expert
                            <Icon icon='solar:phone-bold' width={24} height={24} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
