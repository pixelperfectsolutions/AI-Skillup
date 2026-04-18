"use client";

import HeroSub from '@/app/components/SharedComponent/HeroSub'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import VideoGallery from '../../components/SharedComponent/VideoGallery'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const highlights = [
    { title: "Convenient learning format", desc: "Online/Offline hybrid format with hands-on AI tool integration." },
    { title: "Dedicated career services", desc: "Portfolio reviews, resume building, and placement support with top design firms." },
    { title: "Learn from the Best", desc: "Industry expert designers with 10+ years of UI/UX experience." },
    { title: "Structured program", desc: "Covers the entire design thinking process from empathy to testing." },
    { title: "Hands on learning", desc: "Build a professional portfolio with real-world case studies and AI projects." }
];

const syllabusUX = [
    {
        title: "UX Design Concepts",
        details: [
            "Difference between UX & UI Design",
            "Heuristic Evaluation & Competitive Research",
            "Conducting user interviews & research strategy",
            "Creating user personas & user scenarios",
            "Designing user experience for future technologies"
        ]
    },
    {
        title: "User Research & Mapping",
        details: [
            "Synthesizing user research results",
            "Developing journey maps & user flows",
            "Storyboarding & sketching techniques",
            "User testing methods & strategies",
            "Journey mapping & user behavior analysis"
        ]
    },
    {
        title: "UX Process & Workflows",
        details: [
            "Introduction to Design Thinking Process",
            "Ideation and Brainstorming techniques",
            "Conducting usability tests & analysis",
            "The Business of UX & Professional ethics",
            "Case Studies & Creative Briefs creation"
        ]
    }
];

const syllabusUI = [
    {
        title: "UI Fundamentals & FIGMA",
        details: [
            "Visual hierarchies & design patterns",
            "Typography, color schemes & layouts",
            "Working with Figma: Interface & Tools",
            "Creating UI designs & clickable prototypes",
            "Designing user interfaces for web & mobile apps"
        ]
    },
    {
        title: "UI Components & Patterns",
        details: [
            "Menus, Tabs, Buttons (CTA), Accordions",
            "Carousels, Breadcrumbs, Modals, Forms",
            "Learning from existing websites & apps",
            "Evaluating design patterns & structures",
            "UI Design & Visual Concepts valuation"
        ]
    },
    {
        title: "Responsive & Modern Design",
        details: [
            "Principles of Responsive Web Design (RWD)",
            "Mobile navigation & usability considerations",
            "Color harmonies & contrast accessibility",
            "Design Elements & trending patterns",
            "Idea to Design workflow: Best practices"
        ]
    }
];

const syllabusCareer = [
    {
        title: "Portfolio & Job Prep",
        details: [
            "Creating a strong UI/UX portfolio website",
            "Case study presentation & resume development",
            "1-on-1 feedback on portfolio & job readiness",
            "Mock interviews and design critiques",
            "Building your brand on Dribbble/Behance"
        ]
    }
];

const testimonials = [
    { name: "Ananya", text: "The UI/UX course here is exceptional. Integrating AI tools with Figma has saved me hours of work. The mentors are top-notch!" },
    { name: "Karthik", text: "I transition from development to design. AI-Skillup's curriculum is very practical and focus on what industry needs today." },
    { name: "Megha", text: "The journey from empathy mapping to final prototyping was so smooth. I now have a solid portfolio to show to recruiters." },
    { name: "Arjun", text: "Each concept was explained with real-world examples. The hands-on projects helped me land my first UX job." }
];

const faqs = [
    { q: "What is UI/UX?", a: "UI (User Interface) is about the visual look (colors, buttons), while UX (User Experience) is about how the user feels and interacts with the product to solve a problem." },
    { q: "Do I need to be good at drawing?", a: "No. While sketching helps in ideation, modern UI/UX is more about digital tools like Figma and user-centric problem solving." },
    { q: "Is this course NASSCOM certified?", a: "Yes, our UI/UX program is NASSCOM accredited and industry-recognized." },
    { q: "Will I learn AI design tools?", a: "Absolutely. We integrate AI tools like Midjourney and Uizard to accelerate your design workflow." }
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

export default function UiUxCourse() {
    const [activeMainTab, setActiveMainTab] = useState<'ux' | 'ui' | 'career'>('ux');
    const [activeSubTab, setActiveSubTab] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const curriculumData = {
        ux: { title: "UX Design", sections: syllabusUX },
        ui: { title: "UI Design", sections: syllabusUI },
        career: { title: "Job Readiness", sections: syllabusCareer }
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
            title: "Live Classroom Training",
            icon: "solar:home-smile-bold",
            desc: "Attend physical sessions in Coimbatore with hands-on labs and mentor support."
        },
        {
            title: "Instructor-Led Online",
            icon: "solar:laptop-minimalistic-bold",
            desc: "Join live virtual classes with real-time feedback and screen sharing."
        },
        {
            title: "Self-Paced Course",
            icon: "solar:play-bold",
            desc: "Learn design at your own pace with curated video modules and lifetime access."
        }
    ];

    const combos = [
        { title: "UI/UX + Frontend", level: "Complete Design", duration: "90 Days", learners: "1500+", price: "15,500" },
        { title: "Graphic + UI/UX", level: "Creative Master", duration: "60 Days", learners: "2100+", price: "12,200" },
        { title: "Adobe XD & Figma", level: "Tool Mastery", duration: "30 Days", learners: "4300+", price: "5,500" }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
                                    const message = `Name: ${name}\nPhone: ${phone}\nCourse: ${course || 'UI & UX Design'}\nRequest: Syllabus Download`;
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
                                            defaultValue="UI & UX Design"
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

            {/* Optimized Hero Section - Light Theme */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-gray overflow-hidden">
                <div className="absolute inset-0 z-0">
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
                                    <Image
                                        src="/images/ai logo.webp"
                                        alt="AI Logo"
                                        width={140}
                                        height={50}
                                        className="h-8 w-auto object-contain"
                                    />
                                    <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                                    <Image
                                        src="/images/cadd bim.png"
                                        alt="CADD BIM"
                                        width={140}
                                        height={50}
                                        className="h-8 w-auto object-contain"
                                    />
                                    <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                                    <Image
                                        src="/images/pixel-logo-site.png"
                                        alt="Pixel Logo"
                                        width={140}
                                        height={50}
                                        className="h-8 w-auto object-contain"
                                    />
                                    <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                                    <Image
                                        src="/images/AI logo.png"
                                        alt="Ai Skill Logo"
                                        width={140}
                                        height={50}
                                        className="h-8 w-auto object-contain"
                                    />
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-2xl relative">
                                <Image
                                    src='/images/courses/uiux.png'
                                    alt='UI/UX Design'
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
                                            <p className="text-lg font-black text-gray-900">NASSCOM Accredited</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-1 max-w-2xl text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full border border-success/20 mb-6 wow animate__animated animate__fadeInUp">
                                <Icon icon="tabler:check" className="text-success text-sm font-bold" />
                                <span className="text-success font-bold text-sm uppercase tracking-wider">Top Rated UI/UX Mastery Course</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-midnight_text leading-tight mb-6 wow animate__animated animate__fadeInUp">
                                Advanced Certification in <span className="text-primary italic">UI/UX Design</span> Strategy
                            </h1>
                            <p className="text-xl text-black/70 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                Master wireframing, prototyping, and user research. Learn modern tools including Figma and AI design assistants with 100% placement assurance.
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
                                <p className="text-gray-500 text-xs font-black uppercase tracking-widest w-full mb-2">Design Tools covered:</p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <Icon icon="logos:figma" width={32} />
                                    <Icon icon="logos:adobe-xd" width={32} />
                                    <Icon icon="logos:sketch" width={32} />
                                    <Icon icon="logos:framer" width={32} />
                                    <Icon icon="logos:invision-icon" width={32} />
                                    <Icon icon="logos:marvel" width={32} />
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
                                        <p className="text-midnight_text font-bold">4.8/5 Course Rating</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* In Partnership / Stats Section */}
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

            {/* Video Gallery Section */}
            <VideoGallery />

            {/* SEO Content Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col gap-16">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-4">
                                <h3 className="text-3xl font-black text-gray-900 border-l-8 border-primary pl-6">Design Principles</h3>
                            </div>
                            <div className="md:col-span-8">
                                <p className="text-gray-600 leading-relaxed text-xl">
                                    Great digital products start with exceptional <strong className="text-primary">UI UX design</strong>. Our course focuses on the fundamentals of visual communication and human-centered design. You'll master the art of creating intuitive layouts and implementing typography that enhances readability. By understanding <strong className="text-primary">user experience</strong>, you'll design products that are both beautiful and functional.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 border-t border-gray-50">
                            <div className="md:col-span-4 md:order-2">
                                <h3 className="text-3xl font-black text-gray-900 border-r-8 border-primary pr-6 text-right">Figma & AI Tools</h3>
                            </div>
                            <div className="md:col-span-8 md:order-1">
                                <p className="text-gray-600 leading-relaxed text-xl text-right md:text-left">
                                    Stay at the forefront by mastering <strong className="text-primary">Figma</strong> and cutting-edge <strong className="text-primary">AI design tools</strong>. We teach you how to create high-fidelity <strong className="text-primary">prototyping</strong> that brings your visions to life. Our curriculum integrates AI-powered plugins for generating assets and predicting user interaction patterns, ensuring you design at the speed of thought.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 border-t border-gray-50">
                            <div className="md:col-span-4">
                                <h3 className="text-3xl font-black text-gray-900 border-l-8 border-primary pl-6">Career Portfolio</h3>
                            </div>
                            <div className="md:col-span-8">
                                <p className="text-gray-600 leading-relaxed text-xl">
                                    Our program goes beyond technical skills to help you build a professional portfolio. We focus on real-world case studies where you'll apply design thinking to solve complex problems. From initial wireframing to final handoff, you'll document your process and showcase your ability to deliver results. This comprehensive <strong className="text-primary">UI UX course</strong> ensures you are job-ready.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Certificates Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
                            <div className="relative bg-[#fdfdfd] border-8 border-gray-50 p-1 rounded-2xl shadow-2xl">
                                <div className="border border-gray-200 p-8 rounded-xl h-[450px] flex flex-col items-center justify-center text-center">
                                    <div className="w-24 h-24 mb-6 text-gray-300">
                                        <Icon icon="solar:medal-ribbons-star-linear" width={96} />
                                    </div>
                                    <h4 className="text-2xl font-black text-gray-900 mb-2 italic">Certificate of Completion</h4>
                                    <div className="w-1/2 h-px bg-gray-200 my-6"></div>
                                    <p className="text-gray-500 italic mb-8">This is to certify that you have successfully completed the Advanced UI/UX Design Program</p>
                                    <div className="flex justify-between w-full mt-auto px-10">
                                        <div className="text-left border-t border-gray-200 pt-2 w-32">
                                            <p className="text-[10px] text-gray-400 uppercase font-black">Program Director</p>
                                        </div>
                                        <div className="text-right border-t border-gray-200 pt-2 w-32">
                                            <p className="text-[10px] text-gray-400 uppercase font-black">Date</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                Earn valuable <span className="text-primary">credentials</span> and recognition
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                Our industry-aligned UI/UX certification validates your expertise and helps you stand out in the competitive design market.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "NASSCOM Industry Certification", icon: "solar:verified-check-bold", desc: "Recognized by top tech firms globally." },
                                    { title: "Professional Design Portfolio", icon: "solar:document-bold", desc: "Build a polished portfolio to showcase your skills." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                                            <Icon icon={item.icon} width={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Types of Training */}
            <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-32 -mt-32"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 italic underline decoration-primary decoration-4 underline-offset-8">We Offer <span className="text-primary text-not-italic">Three</span> types of Training</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Choose the learning path that fits your schedule and lifestyle.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trainingTypes.map((item, idx) => (
                            <div key={idx} className="group p-10 bg-gray-50 border border-gray-200 rounded-[40px] hover:bg-white hover:shadow-2xl hover:border-primary transition-all duration-500">
                                <div className="w-20 h-20 bg-primary/10 rounded-[24px] flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                                    <Icon icon={item.icon} width={40} />
                                </div>
                                <h3 className="text-2xl font-black mb-6 leading-tight text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-10 text-lg group-hover:text-gray-800 transition-colors">{item.desc}</p>
                                <button className="inline-flex items-center gap-2 font-black text-primary uppercase tracking-widest text-sm transition-transform group-hover:translate-x-2">
                                    Enroll Now
                                    <Icon icon="solar:arrow-right-bold" width={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Highlights */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-4 italic underline decoration-primary decoration-4 underline-offset-8'>Program <span className="text-primary not-italic">Highlights</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg pt-4">Why choose AI-Skillup for your UI/UX Design journey?</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Icon icon="solar:star-fall-bold" width={28} className="text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Curriculum - Traditional "Old" style */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 wow animate__animated animate__fadeIn">
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-6 italic underline decoration-blue-600 decoration-4 underline-offset-8 uppercase leading-tight'>UI/UX Training <span className="text-blue-600 not-italic">Course Content</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Comprehensive design curriculum designed by industry experts.</p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        {/* Tab Switcher */}
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

                        {/* Traditional Accordion Style */}
                        <div className="space-y-4">
                            {currentSections.map((section, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden group">
                                    <button
                                        onClick={() => setActiveSubTab(activeSubTab === idx ? -1 : idx)}
                                        className={`w-full text-left px-8 py-6 flex items-center justify-between transition-all ${activeSubTab === idx ? 'bg-primary/5 text-primary' : 'hover:bg-gray-100'}`}
                                    >
                                        <h3 className="text-xl font-black">{section.title}</h3>
                                        <Icon
                                            icon={activeSubTab === idx ? "solar:minus-circle-bold" : "solar:add-circle-bold"}
                                            width={24}
                                            className={`${activeSubTab === idx ? 'text-primary' : 'text-gray-400'}`}
                                        />
                                    </button>

                                    {activeSubTab === idx && (
                                        <div className="p-8 bg-white border-t border-gray-50 animate__animated animate__fadeIn">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {section.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-center gap-3 text-gray-600 font-bold">
                                                        <Icon icon="solar:round-transfer-vertical-bold" width={16} className="text-primary/50" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
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

            {/* Recommended Combo Courses */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 italic">Recommended <span className="text-primary not-italic">Combo</span> Courses</h2>
                        <p className="text-gray-500 text-lg">Level up your design career with these complementary skillsets.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {combos.map((combo, idx) => (
                            <div key={idx} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all group p-8">
                                <div className="text-xs font-black bg-primary/10 text-primary px-3 py-1 rounded-full w-fit mb-6 uppercase tracking-widest">{combo.level}</div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">{combo.title}</h3>
                                <div className="flex items-center gap-4 text-gray-500 mb-8 border-b border-gray-100 pb-6">
                                    <div className="flex items-center gap-1">
                                        <Icon icon="solar:clock-circle-bold" width={16} />
                                        <span className="text-sm font-bold">{combo.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Icon icon="solar:users-group-rounded-bold" width={16} />
                                        <span className="text-sm font-bold">{combo.learners}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <div>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Fee Starts From</p>
                                        <p className="text-2xl font-black text-gray-900">₹{combo.price}</p>
                                    </div>
                                    <button className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <Icon icon="solar:arrow-right-bold" width={24} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-4'>Trust from our <span className="text-primary italic">Graduates</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg pt-4 leading-relaxed">Join the design community and build products that matter.</p>
                    </div>
                    <div className="max-w-6xl mx-auto testimonial-slider">
                        <Slider {...sliderSettings}>
                            {testimonials.map((test, idx) => (
                                <div key={idx} className="px-4">
                                    <div className="bg-gray-50 border border-gray-100 p-10 rounded-[32px] hover:shadow-2xl transition-all group relative h-full">
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
                                                <p className="text-sm text-primary font-black uppercase tracking-[0.15em] pt-1">UI/UX Student</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <style jsx global>{`
                    .testimonial-slider .slick-dots {
                        bottom: -40px;
                    }
                    .testimonial-slider .slick-dots li button:before {
                        color: #2563eb;
                        font-size: 12px;
                    }
                    .testimonial-slider .slick-dots li.slick-active button:before {
                        color: #2563eb;
                    }
                `}</style>
            </section>


            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-6 italic underline decoration-blue-600 decoration-4 underline-offset-8'>Curated <span className="text-blue-600 not-italic">FAQs</span></h2>
                        <p className="text-gray-500 text-lg pt-4 leading-relaxed">Answers to common design career questions.</p>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={`faq-${idx}`} title={faq.q} content={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Presence */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 italic underline decoration-primary decoration-4 underline-offset-8">Our <span className="text-primary not-italic">Presence</span></h2>
                        <p className="text-gray-500 text-lg">Join us at our Coimbatore studio for hands-on mentorship.</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-xl flex flex-col md:flex-row items-center gap-12 group transition-all hover:shadow-2xl">
                            <div className="w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-[32px] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Icon icon="solar:point-on-map-perspective-bold" width={80} className="text-primary group-hover:text-white transition-all" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-black text-gray-900 mb-4">AI SKILL UP Academy</h3>
                                <div className="flex items-start gap-4 mb-6">
                                    <Icon icon="solar:map-point-bold" className="text-primary mt-1 shrink-0" width={24} />
                                    <p className="text-xl text-gray-600 leading-relaxed font-bold">
                                        45, Gokhale Street, Ram Nagar, Near MK Residency, Coimbatore, TN 641009.
                                    </p>
                                </div>
                                <Link
                                    href="https://maps.google.com"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:shadow-lg active:scale-95"
                                >
                                    Get Directions
                                    <Icon icon="solar:map-arrow-square-bold" width={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-10 max-w-3xl mx-auto leading-tight italic">
                        Start your journey as a <span className="text-gray-900 not-italic border-b-8 border-gray-900">Professional</span> UI/UX Designer
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
