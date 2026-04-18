"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import VideoGallery from '../../components/SharedComponent/VideoGallery'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const highlights = [
    { title: "Python + AI Powered Coding", desc: "Use GitHub Copilot, ChatGPT, and Cursor AI to build Python projects faster than ever." },
    { title: "100% Placement Support", desc: "Dedicated placement team with resume building, mock interviews, and exclusive job referrals." },
    { title: "NASSCOM Certified Program", desc: "Earn a globally recognized certification from India's top tech trade body." },
    { title: "Real-world Live Projects", desc: "Build automation tools, AI chatbots, data dashboards, and web scrapers." },
    { title: "Flexible Batch Timings", desc: "Weekday and weekend batches available. Offline classroom and live online options." },
    { title: "Industry Expert Trainers", desc: "Learn from Python developers with 8+ years of production-level experience." },
];

const syllabusCore = [
    { title: "Introduction to Python & Setup", details: ["History, Features & Applications of Python", "Installing Python, Pip & VS Code IDE", "Python vs Other Languages", "Writing & Running First Python Program", "Understanding the Python Interpreter"] },
    { title: "Python Variables & Data Types", details: ["Numbers, Strings, Booleans & Type Casting", "Lists, Tuples, Sets & Dictionaries", "Dynamic Typing & Memory Management", "Input/Output & String Formatting", "Mutable vs Immutable Objects"] },
    { title: "Control Flow & Functions", details: ["If-Elif-Else Conditionals", "For Loops, While Loops & Comprehensions", "User-Defined & Lambda Functions", "Args, Kwargs & Default Parameters", "Recursion & Higher-Order Functions"] },
    { title: "OOP & Modules", details: ["Classes, Objects & Constructors", "Inheritance, Polymorphism & Encapsulation", "Dunder Methods & Operator Overloading", "Modules, Packages & PIP Ecosystem", "Exception Handling & Custom Errors"] },
];

const syllabusAdvanced = [
    { title: "File Handling & Databases", details: ["Reading & Writing Files (txt, csv, json)", "Regular Expressions & Text Processing", "SQLite & MySQL with Python", "ORMs: SQLAlchemy Basics", "Environment Variables & Config Files"] },
    { title: "Python for Web & APIs", details: ["Flask & FastAPI Framework Basics", "Building REST APIs with Python", "Consuming External APIs with Requests", "Web Scraping with BeautifulSoup & Selenium", "Deploying Python Apps on Cloud"] },
    { title: "Data Science with Python", details: ["NumPy for Numerical Computing", "Pandas for Data Manipulation & Cleaning", "Data Visualization with Matplotlib & Seaborn", "Exploratory Data Analysis (EDA)", "Statistical Analysis & Hypothesis Testing"] },
    { title: "Machine Learning Foundations", details: ["Scikit-learn & ML Workflow", "Supervised vs Unsupervised Learning", "Linear Regression & Classification", "Model Evaluation Metrics", "Deploying ML Models with Flask"] },
];

const syllabusAI = [
    { title: "AI-Powered Python Development", details: ["Using ChatGPT & Copilot for Code Generation", "Prompt Engineering for Python Developers", "OpenAI & Gemini API Integration", "Building AI Chatbots with Python", "Automating Workflows with AI Scripts"] },
    { title: "Automation & Capstone Projects", details: ["Excel & PDF Automation with openpyxl", "Web Scraping Automation Projects", "Email & Notification Automation", "Capstone: AI-Powered Data Dashboard", "Portfolio Project Deployment & Walkthrough"] },
];

const testimonials = [
    { name: "Rahul Sharma", role: "Python Developer", text: "The Python course at AI-Skillup in Coimbatore is top-notch. The focus on AI-driven coding helped me understand how modern developers actually work in the industry." },
    { name: "Priya Mani", role: "Automation Engineer", text: "Best place in Coimbatore for Python training. I came from a non-tech background and now I'm building my own automation scripts and earning a great salary." },
    { name: "Suresh Kumar", role: "Data Analyst", text: "The placement support is excellent. I got placed in a top IT firm in Coimbatore right after completing my Python certification here." },
    { name: "Ananya R", role: "ML Engineer", text: "Learning Python with AI integration was a game-changer. The trainers are very knowledgeable and the projects are truly real-world." }
];

const faqs = [
    { q: "Is Python the best programming language to learn in 2025?", a: "Yes. Python is ranked #1 by IEEE and TIOBE. It's the go-to language for AI, Machine Learning, Data Science, Web Development, and Automation — making it the ideal first language." },
    { q: "Why choose AI-Skillup for Python training in Coimbatore?", a: "We combine traditional Python fundamentals with AI-powered development using tools like ChatGPT, GitHub Copilot, and OpenAI APIs — giving you a massive edge over traditional training institutes." },
    { q: "What is the duration of the Python programming course?", a: "The standard course runs for 2-3 months. We also offer fast-track batches for working professionals. Both classroom and live online modes are available." },
    { q: "Do I need any prior programming experience?", a: "No prior experience is needed. Our Python course starts from absolute basics and progresses to advanced topics like Machine Learning and AI integration." },
    { q: "What kind of jobs can I get after this course?", a: "You can apply for Python Developer, Data Analyst, Automation Engineer, ML Engineer, Backend Developer, and AI Developer roles in Coimbatore and across India." },
    { q: "Is there placement support after the Python course?", a: "Yes, we provide 100% placement assistance including resume preparation, LinkedIn profile optimization, and mock interview sessions with industry experts." },
    { q: "Will I get a certificate after completing the course?", a: "Yes. You will receive NASSCOM-certified completion certificate and a 6-month internship certificate upon completion of the program." },
];

const AccordionItem = ({ title, content }: { title: string; content: string | string[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <button className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-300" onClick={() => setIsOpen(!isOpen)}>
                <span className="font-bold text-gray-900 text-lg md:text-xl">{title}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <Icon icon="solar:alt-arrow-down-linear" className="text-primary" width={28} />
                </span>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-5 bg-white border-t border-gray-100 text-gray-700">
                    {Array.isArray(content) ? (
                        <ul className="list-disc pl-5 space-y-3">{content.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}</ul>
                    ) : (
                        <p className="leading-relaxed text-lg">{content}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function PythonCourse() {
    const [activeMainTab, setActiveMainTab] = useState<'core' | 'advanced' | 'ai'>('core');
    const [activeSubTab, setActiveSubTab] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const curriculumData = {
        core: { title: "Core Python", sections: syllabusCore },
        advanced: { title: "Advanced Python", sections: syllabusAdvanced },
        ai: { title: "AI & Automation", sections: syllabusAI },
    };
    const currentSections = curriculumData[activeMainTab].sections;

    const stats = [
        { label: "Students Enrolled", value: "2K+", icon: "solar:users-group-rounded-bold" },
        { label: "Placement Rate", value: "95%", icon: "solar:medal-ribbons-star-bold" },
        { label: "Live Projects", value: "10+", icon: "solar:checklist-bold" },
        { label: "Years of Experience", value: "6+", icon: "solar:history-bold" },
    ];

    const trainingTypes = [
        { title: "On-Premise Classroom Training", icon: "solar:home-smile-bold", desc: "Attend physical Python classes in Coimbatore with direct mentor interaction and hands-on labs." },
        { title: "Instructor-Led Live Online", icon: "solar:laptop-minimalistic-bold", desc: "Join live interactive sessions from anywhere with real-time doubt solving and recorded access." },
        { title: "Self-Paced Online Training", icon: "solar:play-bold", desc: "Learn at your own speed with pre-recorded videos and lifetime access to all course materials." },
    ];

    const combos = [
        { title: "Python + Data Science", level: "Data Track", duration: "90 Days", learners: "1800+", price: "14,500" },
        { title: "Python + Full Stack", level: "Dev Track", duration: "120 Days", learners: "2100+", price: "18,000" },
        { title: "Python + AI & ML", level: "AI Track", duration: "60 Days", learners: "950+", price: "12,500" },
    ];

    const sliderSettings = { dots: true, infinite: true, speed: 500, slidesToShow: 2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } }] };

    return (
        <div className="bg-white overflow-hidden">
            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowPopup(false)}></div>
                    <div className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden">
                        <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors z-10">
                            <Icon icon="material-symbols:close-rounded" width={24} />
                        </button>
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="hidden md:flex md:w-1/3 bg-gradient-to-br from-primary to-blue-600 p-8 flex-col justify-end text-white">
                                <div className="mb-4 bg-white/20 p-3 rounded-2xl w-fit"><Icon icon="solar:rocket-bold-duotone" width={40} /></div>
                                <h3 className="text-2xl font-black leading-tight">Start Your Python Journey</h3>
                            </div>
                            <div className="flex-1 p-8 md:p-10">
                                <h2 className="text-3xl font-black text-gray-900 mb-2">Apply Now</h2>
                                <p className="text-gray-500 font-bold mb-8">Get a free career counseling session</p>
                                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); const f = new FormData(e.currentTarget); window.open(`https://wa.me/919655422511?text=${encodeURIComponent(`Name: ${f.get('name')}\nPhone: ${f.get('phone')}\nCourse: Python Programming Course Coimbatore\nRequest: Syllabus Download`)}`, '_blank'); setShowPopup(false); }}>
                                    <input type="text" name="name" placeholder="Your Name" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary outline-none font-medium text-gray-900" />
                                    <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary outline-none font-medium text-gray-900" />
                                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-6">
                                        Submit Application <Icon icon="solar:arrow-right-up-bold" width={20} />
                                    </button>
                                </form>
                                <p className="mt-6 text-center text-gray-400 text-xs font-medium">By submitting, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms</Link> & <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 1. HERO */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-gray overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mb-64"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-2 relative">
                            <div className="mb-12">
                                <p className="text-gray-400 text-[10px] font-black text-center lg:text-left uppercase tracking-[0.2em] mb-4">In Partnership with</p>
                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 bg-white/50 backdrop-blur-md px-10 py-6 rounded-3xl border border-white">
                                    <Image src="/images/ai logo.webp" alt="AI Logo" width={140} height={50} className="h-8 w-auto object-contain" />
                                    <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                                    <Image src="/images/cadd bim.png" alt="CADD BIM" width={140} height={50} className="h-8 w-auto object-contain" />
                                    <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                                    <Image src="/images/pixel-logo-site.png" alt="Pixel Logo" width={140} height={50} className="h-8 w-auto object-contain" />
                                    <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                                    <Image src="/images/AI logo.png" alt="Ai Skill Up" width={140} height={50} className="h-8 w-auto object-contain" />
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-2xl relative">
                                <Image src='/images/courses/python.png' alt='Python Programming Course Coimbatore' width={800} height={600} className='rounded-2xl w-full' />
                                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl hidden md:block border border-gray-100">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500"><Icon icon="solar:verified-check-bold" width={32} /></div>
                                        <div><p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Placement</p><p className="text-lg font-black text-gray-900">100% Assurance</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-1 max-w-2xl text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full border border-success/20 mb-6">
                                <Icon icon="tabler:check" className="text-success text-sm font-bold" />
                                <span className="text-success font-bold text-sm uppercase tracking-wider">#1 Python Training Institute in Coimbatore</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-midnight_text leading-tight mb-6">
                                Master <span className="text-primary italic">Python Programming</span> with AI — Coimbatore's Best Course
                            </h1>
                            <p className="text-xl text-black/70 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                                Learn Python from scratch to advanced AI integration. Build real projects, earn NASSCOM certification, and land your dream job with 100% placement guarantee.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link href='/contact' className='bg-primary text-white hover:bg-primary/90 py-4 px-6 md:px-10 rounded-full text-base md:text-lg font-bold transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center gap-3'>
                                    Enroll Now <Icon icon='solar:arrow-right-up-bold' width={22} />
                                </Link>
                                <button onClick={() => setShowPopup(true)} className='bg-white text-midnight_text hover:bg-gray-50 py-4 px-6 md:px-10 rounded-full text-base md:text-lg font-bold transition-all shadow-lg border border-gray-100 flex items-center gap-3'>
                                    Download Syllabus <Icon icon='solar:download-bold' width={22} />
                                </button>
                            </div>
                            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                                <p className="text-gray-500 text-xs font-black uppercase tracking-widest w-full mb-2">Technologies you will master:</p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <Icon icon="logos:python" width={32} />
                                    <Icon icon="logos:numpy" width={32} />
                                    <Icon icon="logos:pandas-icon" width={32} />
                                    <Icon icon="logos:openai-icon" width={32} />
                                    <Icon icon="logos:flask" width={32} />
                                    <Icon icon="logos:visual-studio-code" width={32} />
                                    <Icon icon="logos:github-icon" width={32} />
                                </div>
                            </div>
                            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-200 pt-8">
                                <Link href="https://www.google.com/maps/place/AI+SKILLUP" target="_blank" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center"><Icon icon="logos:google-icon" width={24} /></div>
                                    <div className="text-left">
                                        <div className="flex text-yellow-500 mb-1">{[1,2,3,4,5].map(i => <Icon key={i} icon="solar:star-bold" width={16} />)}</div>
                                        <p className="text-midnight_text font-bold">5.0/5 Course Rating</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STATS */}
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

            {/* 3. VIDEO GALLERY */}
            <VideoGallery />

            {/* 4. SEO CONTENT */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col gap-16">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-4"><h3 className="text-3xl font-black text-gray-900 border-l-8 border-primary pl-6">Why Python for AI & Automation in Coimbatore?</h3></div>
                            <div className="md:col-span-8"><p className="text-gray-600 leading-relaxed text-xl">Python is the undisputed language of <strong className="text-primary">Artificial Intelligence</strong> and <strong className="text-primary">automation</strong>. At AI SKILL UP Coimbatore, we go beyond syntax — teaching you how modern developers use AI tools like ChatGPT and GitHub Copilot to build faster. Our <strong className="text-primary">Python training in Coimbatore</strong> is designed for both freshers and career-switchers aiming for high-paying IT roles.</p></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 border-t border-gray-50">
                            <div className="md:col-span-4 md:order-2"><h3 className="text-3xl font-black text-gray-900 border-r-8 border-primary pr-6 text-right">Python Career Scope in Coimbatore</h3></div>
                            <div className="md:col-span-8 md:order-1"><p className="text-gray-600 leading-relaxed text-xl">Coimbatore's IT & manufacturing sector is rapidly adopting automation and data-driven solutions. <strong className="text-primary">Python developers</strong> are among the most sought-after professionals. With our <strong className="text-primary">placement-focused curriculum</strong>, you'll be interview-ready for top companies hiring Python, Django, Flask, and ML engineers.</p></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 border-t border-gray-50">
                            <div className="md:col-span-4"><h3 className="text-3xl font-black text-gray-900 border-l-8 border-primary pl-6">AI-Driven Development</h3></div>
                            <div className="md:col-span-8"><p className="text-gray-600 leading-relaxed text-xl">Our program integrates <strong className="text-primary">AI-powered coding</strong> into every module. You'll use OpenAI APIs to build intelligent applications, leverage Copilot to generate boilerplate code 10x faster, and master prompt engineering for Python development. This <strong className="text-primary">AI-first approach</strong> ensures you're not just learning Python — you're learning how top engineers work.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CERTIFICATES */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
                            <div className="relative bg-[#fdfdfd] border-8 border-gray-50 p-1 rounded-2xl shadow-2xl">
                                <div className="border border-gray-200 p-8 rounded-xl h-[450px] flex flex-col items-center justify-center text-center">
                                    <div className="w-24 h-24 mb-6 text-gray-300"><Icon icon="solar:medal-ribbons-star-linear" width={96} /></div>
                                    <h4 className="text-2xl font-black text-gray-900 mb-2 italic">Certificate of Completion</h4>
                                    <div className="w-1/2 h-px bg-gray-200 my-6"></div>
                                    <p className="text-gray-500 italic mb-8">This is to certify that you have successfully completed the Advanced Python Programming with AI Course</p>
                                    <div className="flex justify-between w-full mt-auto px-10">
                                        <div className="text-left border-t border-gray-200 pt-2 w-32"><p className="text-[10px] text-gray-400 uppercase font-black">Program Director</p></div>
                                        <div className="text-right border-t border-gray-200 pt-2 w-32"><p className="text-[10px] text-gray-400 uppercase font-black">Date</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">Earn valuable <span className="text-primary">credentials</span> and recognition</h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">Our industry-aligned certification validates your Python expertise and gives you a competitive edge in the Coimbatore IT job market.</p>
                            <div className="space-y-6">
                                {[
                                    { title: "NASSCOM Future Skills Certification", icon: "solar:verified-check-bold", desc: "Recognized by top IT firms across India and globally." },
                                    { title: "Six Months Internship Certificate", icon: "solar:document-bold", desc: "Gain real-world Python experience through our partner companies." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0"><Icon icon={item.icon} width={24} /></div>
                                        <div><h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4><p className="text-gray-600 leading-relaxed">{item.desc}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TRAINING TYPES */}
            <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-32 -mt-32"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 italic underline decoration-primary decoration-4 underline-offset-8">We Offer <span className="text-primary not-italic">Three</span> Types of Training</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Choose the Python learning path that fits your schedule and learning style.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trainingTypes.map((item, idx) => (
                            <div key={idx} className="group p-10 bg-gray-50 border border-gray-200 rounded-[40px] hover:bg-white hover:shadow-2xl hover:border-primary transition-all duration-500">
                                <div className="w-20 h-20 bg-primary/10 rounded-[24px] flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110"><Icon icon={item.icon} width={40} /></div>
                                <h3 className="text-2xl font-black mb-6 leading-tight text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-10 text-lg">{item.desc}</p>
                                <button className="inline-flex items-center gap-2 font-black text-primary uppercase tracking-widest text-sm transition-transform group-hover:translate-x-2">Enroll Now <Icon icon="solar:arrow-right-bold" width={20} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. PROGRAM HIGHLIGHTS */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-4 italic underline decoration-primary decoration-4 underline-offset-8'>Program <span className="text-primary not-italic">Highlights</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg pt-4">Why AI-Skillup is Coimbatore's most recommended Python training institute.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300"><Icon icon="solar:star-fall-bold" width={28} className="text-primary group-hover:text-white" /></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CURRICULUM */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-6 italic underline decoration-blue-600 decoration-4 underline-offset-8 uppercase leading-tight'>Python Course <span className="text-blue-600 not-italic">Syllabus & Content</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Comprehensive, industry-aligned Python curriculum covering 40+ topics.</p>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap justify-center mb-12 gap-4">
                            {(Object.keys(curriculumData) as Array<keyof typeof curriculumData>).map((key) => (
                                <button key={key} onClick={() => { setActiveMainTab(key); setActiveSubTab(0); }} className={`px-8 py-4 rounded-2xl font-black text-lg transition-all ${activeMainTab === key ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                                    {curriculumData[key].title}
                                </button>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {currentSections.map((section, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                                    <button onClick={() => setActiveSubTab(activeSubTab === idx ? -1 : idx)} className={`w-full text-left px-8 py-6 flex items-center justify-between transition-all ${activeSubTab === idx ? 'bg-primary/5 text-primary' : 'hover:bg-gray-100'}`}>
                                        <h3 className="text-xl font-black">{section.title}</h3>
                                        <Icon icon={activeSubTab === idx ? "solar:minus-circle-bold" : "solar:add-circle-bold"} width={24} className={activeSubTab === idx ? 'text-primary' : 'text-gray-400'} />
                                    </button>
                                    {activeSubTab === idx && (
                                        <div className="p-8 bg-white border-t border-gray-50">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {section.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-center gap-3 text-gray-600 font-bold">
                                                        <Icon icon="solar:round-transfer-vertical-bold" width={16} className="text-primary/50" />{detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <button onClick={() => setShowPopup(true)} className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
                                <Icon icon="solar:file-download-bold" width={24} />DOWNLOAD FULL SYLLABUS
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. COMBO COURSES */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 italic">Recommended <span className="text-primary not-italic">Combo</span> Courses</h2>
                        <p className="text-gray-500 text-lg">Maximize your salary by coupling Python with these in-demand skills.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {combos.map((combo, idx) => (
                            <div key={idx} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all group p-8">
                                <div className="text-xs font-black bg-primary/10 text-primary px-3 py-1 rounded-full w-fit mb-6 uppercase tracking-widest">{combo.level}</div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">{combo.title}</h3>
                                <div className="flex items-center gap-4 text-gray-500 mb-8 border-b border-gray-100 pb-6">
                                    <div className="flex items-center gap-1"><Icon icon="solar:clock-circle-bold" width={16} /><span className="text-sm font-bold">{combo.duration}</span></div>
                                    <div className="flex items-center gap-1"><Icon icon="solar:users-group-rounded-bold" width={16} /><span className="text-sm font-bold">{combo.learners}</span></div>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <div><p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Fee Starts From</p><p className="text-2xl font-black text-gray-900">₹{combo.price}</p></div>
                                    <button className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-primary transition-colors"><Icon icon="solar:arrow-right-bold" width={24} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. TESTIMONIALS */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-4'>Trust from our <span className="text-primary italic">Graduates</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg pt-4 leading-relaxed">Hear how AI-Skillup's Python course transformed careers in Coimbatore.</p>
                    </div>
                    <div className="max-w-6xl mx-auto testimonial-slider">
                        <Slider {...sliderSettings}>
                            {testimonials.map((test, idx) => (
                                <div key={idx} className="px-4">
                                    <div className="bg-gray-50 border border-gray-100 p-10 rounded-[32px] hover:shadow-2xl transition-all group relative h-full">
                                        <div className="absolute top-10 right-10 text-primary opacity-10"><Icon icon="tabler:quote" width={80} /></div>
                                        <div className="flex text-yellow-500 mb-6">{[...Array(5)].map((_, i) => <Icon key={i} icon="solar:star-bold" width={20} />)}</div>
                                        <p className="text-gray-700 leading-relaxed mb-10 italic text-xl">"{test.text}"</p>
                                        <div className="flex items-center gap-5">
                                            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center font-black text-white text-3xl shadow-lg shadow-primary/30">{test.name.charAt(0)}</div>
                                            <div><h4 className="font-black text-xl text-gray-900">{test.name}</h4><p className="text-sm text-primary font-black uppercase tracking-[0.15em] pt-1">{test.role}</p></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <style jsx global>{`.testimonial-slider .slick-dots { bottom: -40px; } .testimonial-slider .slick-dots li button:before { color: #2563eb; font-size: 12px; } .testimonial-slider .slick-dots li.slick-active button:before { color: #2563eb; }`}</style>
            </section>

            {/* 11. FAQs */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-6 italic underline decoration-blue-600 decoration-4 underline-offset-8'>Python Course <span className="text-blue-600 not-italic">FAQs</span></h2>
                        <p className="text-gray-500 text-lg pt-4 leading-relaxed">Everything you need to know about our Python training program.</p>
                    </div>
                    <div className="space-y-6">{faqs.map((faq, idx) => <AccordionItem key={`faq-${idx}`} title={faq.q} content={faq.a} />)}</div>
                </div>
            </section>

            {/* 12. OUR PRESENCE */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 italic underline decoration-primary decoration-4 underline-offset-8">Our <span className="text-primary not-italic">Presence</span></h2>
                        <p className="text-gray-500 text-lg">Visit our Python training center in Coimbatore.</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-xl flex flex-col md:flex-row items-center gap-12 group hover:shadow-2xl transition-all">
                            <div className="w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-[32px] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500"><Icon icon="solar:point-on-map-perspective-bold" width={80} className="text-primary group-hover:text-white transition-all" /></div>
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-black text-gray-900 mb-4">AI SKILL UP Academy — Coimbatore</h3>
                                <div className="flex items-start gap-4 mb-6"><Icon icon="solar:map-point-bold" className="text-primary mt-1 shrink-0" width={24} /><p className="text-xl text-gray-600 leading-relaxed font-bold">45, Gokhale Street, Ram Nagar, Near MK Residency, Coimbatore, TN 641009.</p></div>
                                <Link href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:shadow-lg active:scale-95">
                                    Get Directions <Icon icon="solar:map-arrow-square-bold" width={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 13. FINAL CTA */}
            <section className="py-32 bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-10 max-w-3xl mx-auto leading-tight italic">
                        Ready to launch your <span className="text-gray-900 not-italic border-b-8 border-gray-900">career</span> as a Python Developer in Coimbatore?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href='/contact' className='bg-gray-900 text-white hover:bg-black py-6 px-16 rounded-full text-xl font-black transition-all shadow-2xl hover:-translate-y-2 active:scale-95 flex items-center gap-3 uppercase tracking-widest'>
                            Join Now <Icon icon='solar:arrow-right-up-bold' width={28} />
                        </Link>
                        <Link href='tel:+919655422511' className='bg-white text-primary hover:bg-gray-100 py-6 px-16 rounded-full text-xl font-black transition-all shadow-2xl hover:-translate-y-2 active:scale-95 flex items-center gap-3 uppercase tracking-widest border border-white/20'>
                            Enquire Now <Icon icon='solar:phone-bold' width={28} />
                        </Link>
                    </div>
                    <p className="mt-12 text-white/70 font-bold uppercase tracking-widest text-sm">Join 2,000+ Python students already learning at AI-Skillup Coimbatore</p>
                </div>
            </section>
        </div>
    );
}
