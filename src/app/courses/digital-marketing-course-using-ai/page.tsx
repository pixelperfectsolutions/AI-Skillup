"use client";

import HeroSub from '@/app/components/SharedComponent/HeroSub'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useState } from 'react'

const highlights = [
    { title: "Universal Marketing Skills", desc: "Master SEO, SEM, SMM, and AI-driven content marketing strategies." },
    { title: "Dedicated career services", desc: "Interview preparation and lifetime placement support with agency partners." },
    { title: "Learn from the Best", desc: "Certified digital marketing experts with proven ROI-driven strategies." },
    { title: "Hands on learning", desc: "Live projects with real budgets to practice SEO and PPC campaigns." },
    { title: "AI-Powered Strategy", desc: "Learn to use AI for content creation, ad optimization, and customer insights." }
];

const syllabusSEO = [
    {
        title: "SEO & Content Strategy",
        details: [
            "Introduction to Search Engines & Ranking Factors",
            "Keyword Research & Competitor Analysis",
            "On-Page SEO: Meta tags, H-tags, Image optimization",
            "Technical SEO: XML Sitemaps, Robots.txt, 301 Redirections",
            "Off-Page SEO: Link building & Social bookmarking"
        ]
    },
    {
        title: "SEM & Paid Advertising",
        details: [
            "Google Ads (PPC) Account & Campaign management",
            "Bidding Strategies & Budget Optimization",
            "Search, Display, and Video Ad types",
            "Remarketing & Tracking Script implementation",
            "Performance monitoring & Analytics reports"
        ]
    }
];

const syllabusSMM = [
    {
        title: "Social Media Mastery",
        details: [
            "Facebook Marketing: Business Pages, Ads, and Insights",
            "Instagram Strategy: Influencer marketing & Reels ads",
            "LinkedIn for Business: Branding & Lead generation",
            "Twitter & Pinterest for niche marketing",
            "Social Media Automation and Scheduling tools"
        ]
    },
    {
        title: "Analytics & Lead Gen",
        details: [
            "Google Analytics 4 (GA4) setup & navigation",
            "Conversion Rate Optimization (CRO) techniques",
            "Email Marketing: Mailchimp for automated campaigns",
            "Lead generation strategies for B2B and B2C",
            "Building high-converting landing pages"
        ]
    }
];

const syllabusAI = [
    {
        title: "AI in Digital Marketing",
        details: [
            "Generative AI for Content Marketing (ChatGPT/Gemini)",
            "AI-driven SEO & Keyword analysis tools",
            "Automating Ad copy and Image creation",
            "Predictive analytics for customer behavior",
            "AI Chatbots for automated lead nurturing"
        ]
    }
];

const testimonials = [
    { name: "Suresh", text: "AI-Skillup changed my perspective on marketing. The AI modules saved me so much time in content creation." },
    { name: "Vinitha", text: "I ran a live Google Ads campaign during the course. The practical knowledge is exactly what I needed to start my agency." },
    { name: "Vikram", text: "The SEO module is very detailed. My website is already ranking for competitive keywords in Coimbatore." },
    { name: "Lakshmi", text: "Top-notch training! The industry mentors share real-world case studies that books don't cover." }
];

const faqs = [
    { q: "What is Digital Marketing Using AI?", a: "It's the practice of using traditional digital marketing channels (SEO, SMM) enhanced by AI tools to improve efficiency and results." },
    { q: "Do I need technical skills?", a: "No. Our course is designed for beginners. If you know how to use the internet, we'll teach you the rest." },
    { q: "Will I get live projects?", a: "Yes, you will work on live SEO and PPC projects with dummy budgets to get real experience." },
    { q: "What is the duration of the course?", a: "The comprehensive program typically takes 2.5 to 3 months including the internship phase." }
];

const AccordionItem = ({ title, content }: { title: string, content: string | any[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <button
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-gray-900 text-lg md:text-xl">{title}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <Icon icon="solar:alt-arrow-down-linear" className="text-primary" width={28} />
                </span>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-5 bg-white border-t border-gray-100 text-gray-700">
                    {Array.isArray(content) ? (
                        <ul className="list-disc pl-5 space-y-3">
                            {content.map((item, i) => (
                                <li key={i} className="leading-relaxed">{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="leading-relaxed text-lg">{content}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function DigitalMarketingCourse() {
    const [activeMainTab, setActiveMainTab] = useState<'seo' | 'smm' | 'ai'>('seo');
    const [activeSubTab, setActiveSubTab] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const curriculumData = {
        seo: { title: "SEO-SEM", sections: syllabusSEO },
        smm: { title: "SMM-Analytics", sections: syllabusSMM },
        ai: { title: "AI Marketing", sections: syllabusAI }
    };

    const currentSections = curriculumData[activeMainTab].sections;

    const stats = [
        { label: "Students Enrolled", value: "9K+", icon: "solar:users-group-rounded-bold" },
        { label: "Overall Branches", value: "1", icon: "solar:map-point-bold" },
        { label: "Placed Students", value: "5000+", icon: "solar:medal-ribbons-star-bold" },
        { label: "Years of Experience", value: "6+", icon: "solar:history-bold" }
    ];

    const trainingTypes = [
        {
            title: "Physical Classroom",
            icon: "solar:home-smile-bold",
            desc: "Expert-led sessions in our Coimbatore center with personalized mentorship."
        },
        {
            title: "Live Virtual Training",
            icon: "solar:laptop-minimalistic-bold",
            desc: "Join live online classes with full interaction and real-time screen sharing."
        },
        {
            title: "Self-Paced Learning",
            icon: "solar:play-bold",
            desc: "Quality video modules with lifetime access and dedicated doubt-clearing sessions."
        }
    ];

    const combos = [
        { title: "Digital Marketing + Web Design", level: "Agency Mastery", duration: "120 Days", learners: "1800+", price: "16,500" },
        { title: "SEO + Content AI", level: "Content specialist", duration: "45 Days", learners: "2200+", price: "8,500" },
        { title: "Paid Ads + Analytics", level: "ROI Expert", duration: "60 Days", learners: "1900+", price: "12,500" }
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* Download Syllabus Popup */}
            {showPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowPopup(false)}></div>
                    <div className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-500 transform scale-100 translate-y-0">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors z-10"
                        >
                            <Icon icon="material-symbols:close-rounded" width={24} />
                        </button>

                        <div className="flex flex-col md:flex-row h-full">
                            {/* Image/Decoration Section */}
                            <div className="hidden md:flex md:w-1/3 bg-primary bg-gradient-to-br from-primary to-blue-600 p-8 flex-col justify-end text-white">
                                <div className="mb-4 bg-white/20 p-3 rounded-2xl w-fit">
                                    <Icon icon="solar:rocket-bold-duotone" width={40} />
                                </div>
                                <h3 className="text-2xl font-black leading-tight">Launch Your Career</h3>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 p-8 md:p-10">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-black text-gray-900 mb-2">Apply Now</h2>
                                    <p className="text-gray-500 font-bold">Get 30% off on first enroll</p>
                                </div>

                                <form className="space-y-4" onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const name = formData.get('name');
                                    const phone = formData.get('phone');
                                    const course = formData.get('course');
                                    const message = `Name: ${name}\nPhone: ${phone}\nCourse: ${course || 'Digital Marketing'}\nRequest: Syllabus Download`;
                                    window.open(`https://wa.me/919655422511?text=${encodeURIComponent(message)}`, '_blank');
                                    setShowPopup(false);
                                }}>
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium text-gray-900"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            required
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium text-gray-900"
                                        />
                                    </div>
                                    <div>
                                        <select
                                            name="course"
                                            defaultValue="Digital Marketing"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium text-gray-500 focus:text-gray-900"
                                        >
                                            <option value="">Select Interested Course</option>
                                            <option value="Full-Stack Development">Full-Stack Development</option>
                                            <option value="UI & UX Design">UI & UX Design</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="No-Code Development">No-Code Development</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                        </select>
                                    </div>

                                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-6">
                                        Submit Application
                                        <Icon icon="solar:arrow-right-up-bold" width={20} />
                                    </button>
                                </form>

                                <p className="mt-6 text-center text-gray-400 text-xs font-medium">
                                    By submitting, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms</Link> & <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-gray overflow-hidden">
                <div className="absolute inset-0 z-0 text-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mb-64"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-2 relative wow animate__animated animate__zoomIn">
                            {/* In Partnership With Section */}
                            <div className="mb-12">
                                <p className="text-gray-400 text-[10px] font-black text-center lg:text-left uppercase tracking-[0.2em] mb-4">In Partnership with</p>
                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 bg-white/50 backdrop-blur-md px-10 py-6 rounded-3xl border border-white">
                                    <Image src="/images/ai logo.webp" alt="AI Logo" width={140} height={50} className="h-8 w-auto object-contain" />
                                    <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                                    <Image src="/images/cadd bim.png" alt="CADD BIM" width={140} height={50} className="h-8 w-auto object-contain" />
                                    <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                                    <Image src="/images/pixel-logo-site.png" alt="Pixel Logo" width={140} height={50} className="h-8 w-auto object-contain" />
                                    <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                                    <Image src="/images/AI logo.png" alt="Ai Skill Logo" width={140} height={50} className="h-8 w-auto object-contain" />
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-2xl relative">
                                <Image
                                    src='/images/course-5.png'
                                    alt='Digital Marketing'
                                    width={800}
                                    height={600}
                                    className='rounded-2xl w-full'
                                />

                                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl hidden md:block border border-gray-100">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                                            <Icon icon="solar:verified-check-bold" width={32} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Certification</p>
                                            <p className="text-lg font-black text-gray-900">Google & Hubspot Certified</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-1 max-w-2xl text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full border border-success/20 mb-6 wow animate__animated animate__fadeInUp">
                                <Icon icon="tabler:check" className="text-success text-sm font-bold" />
                                <span className="text-success font-bold text-sm uppercase tracking-wider">#1 Ranked Digital Marketing Academy</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-midnight_text leading-tight mb-6 wow animate__animated animate__fadeInUp">
                                Master Digital Marketing with <span className="text-primary italic">AI Integration</span>
                            </h1>
                            <p className="text-xl text-black/70 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                Learn the art of SEO, social media, and paid ads using cutting-edge AI tools. Become a high-ROI marketer with international certifications.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                                <Link href='/contact' className='bg-primary text-white hover:bg-primary/90 py-4 px-6 md:px-10 rounded-full text-base md:text-lg font-bold transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center gap-3'>
                                    Enroll Now
                                    <Icon icon='solar:arrow-right-up-bold' width={22} height={22} />
                                </Link>
                                <button
                                    onClick={() => setShowPopup(true)}
                                    className='bg-white text-midnight_text hover:bg-gray-50 py-4 px-6 md:px-10 rounded-full text-base md:text-lg font-bold transition-all shadow-lg border border-gray-100 flex items-center gap-3'
                                >
                                    Download Syllabus
                                    <Icon icon='solar:download-bold' width={22} height={22} />
                                </button>
                            </div>

                            {/* Tech Stack Icons */}
                            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 items-center wow animate__animated animate__fadeInUp" data-wow-delay="0.25s">
                                <p className="text-gray-500 text-xs font-black uppercase tracking-widest w-full mb-2">Tools you will master:</p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <Icon icon="logos:google-ads" width={32} />
                                    <Icon icon="logos:facebook" width={32} />
                                    <Icon icon="logos:google-analytics" width={32} />
                                    <Icon icon="logos:mailchimp-freddie" width={32} />
                                    <Icon icon="logos:semrush" width={100} />
                                    <Icon icon="logos:openai-icon" width={32} />
                                </div>
                            </div>

                            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-200 pt-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                <Link
                                    href="https://www.google.com/maps/place/Graphic,+UI+UX,+AI+Design+Academy/@11.0148355,76.9638168,17z/data=!4m18!1m9!3m8!1s0x3ba8594767deeaf7:0x578b90b22a69fb4c!2sGraphic,+UI+UX,+AI+Design+Academy!8m2!3d11.0148355!4d76.9638168!9m1!1b1!16s%2Fg%2F11xrc58944!3m7!1s0x3ba8594767deeaf7:0x578b90b22a69fb4c!8m2!3d11.0148355!4d76.9638168!9m1!1b1!16s%2Fg%2F11xrc58944?entry=ttu"
                                    target="_blank"
                                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                                >
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                                        <Icon icon="logos:google-icon" width={24} />
                                    </div>
                                    <div className="text-left">
                                        <div className="flex text-yellow-500 mb-1">
                                            {[1, 2, 3, 4, 5].map(i => <Icon key={i} icon="solar:star-bold" width={16} />)}
                                        </div>
                                        <p className="text-midnight_text font-bold">4.9/5 Rating</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all group">
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                    <Icon icon={stat.icon} width={32} />
                                </div>
                                <h3 className="text-4xl font-black text-gray-900 mb-2">{stat.value}</h3>
                                <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.2em]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-6 italic underline decoration-blue-600 decoration-4 underline-offset-8 uppercase leading-tight'>Marketing <span className="text-blue-600 not-italic">Course Content</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Detailed curriculum covering from basics to AI-driven marketing.</p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="flex justify-center mb-12 gap-4">
                            {(Object.keys(curriculumData) as Array<keyof typeof curriculumData>).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => {
                                        setActiveMainTab(key);
                                        setActiveSubTab(0);
                                    }}
                                    className={`px-8 py-4 rounded-2xl font-black text-lg transition-all ${activeMainTab === key ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                                >
                                    {curriculumData[key].title}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-4">
                            {currentSections.map((section, idx) => (
                                <AccordionItem key={idx} title={section.title} content={section.details} />
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <button
                                onClick={() => setShowPopup(true)}
                                className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
                            >
                                <Icon icon="solar:file-download-bold" width={24} />
                                DOWNLOAD FULL SYLLABUS
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-4'>Trust from our <span className="text-primary italic">Graduates</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg pt-4 leading-relaxed">See how our marketing graduates are driving growth for their brands.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((test, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 p-10 rounded-[32px] hover:shadow-2xl transition-all group relative">
                                <div className="absolute top-10 right-10 text-primary opacity-10">
                                    <Icon icon="tabler:quote" width={80} />
                                </div>
                                <div className="flex text-yellow-500 mb-6">
                                    {[...Array(5)].map((_, i) => <Icon key={i} icon="solar:star-bold" width={20} />)}
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-10 italic text-xl">"{test.text}"</p>
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center font-black text-white text-3xl shadow-lg shadow-primary/30">
                                        {test.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xl text-gray-900">{test.name}</h4>
                                        <p className="text-sm text-primary font-black uppercase tracking-[0.15em] pt-1">Marketing Expert</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-6 italic underline decoration-blue-600 decoration-4 underline-offset-8'>Marketing <span className="text-blue-600 not-italic">FAQs</span></h2>
                        <p className="text-gray-500 text-lg pt-4 leading-relaxed">Answers to common digital marketing career questions.</p>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={`faq-${idx}`} title={faq.q} content={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-10 max-w-3xl mx-auto leading-tight italic">
                        Ready to dominated the <span className="text-gray-900 not-italic border-b-8 border-gray-900">Digital</span> World?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href='/contact' className='bg-gray-900 text-white hover:bg-black py-6 px-16 rounded-full text-xl font-black transition-all shadow-2xl hover:-translate-y-2 active:scale-95 flex items-center gap-3 uppercase tracking-widest'>
                            Join Now
                            <Icon icon='solar:arrow-right-up-bold' width={28} height={28} />
                        </Link>
                        <Link href='tel:+919655422511' className='bg-white text-primary hover:bg-gray-100 py-6 px-16 rounded-full text-xl font-black transition-all shadow-2xl hover:-translate-y-2 active:scale-95 flex items-center gap-3 uppercase tracking-widest border border-white/20'>
                            Enquire Now
                            <Icon icon='solar:phone-bold' width={28} height={28} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
