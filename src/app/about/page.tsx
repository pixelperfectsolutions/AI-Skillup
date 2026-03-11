import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us | AI SKILL UP",
    description: "Learn about AI SKILL UP — one of the leading software training institutes in Coimbatore. Discover our mission, vision, team, and values.",
};

const stats = [
    { value: "9K+", label: "Student Enrolled" },
    { value: "1", label: "Overall Branches" },
    { value: "5000+", label: "Placed Students" },
    { value: "6+", label: "Years of Experience" },
];

const team = [
    { name: "PRIYANGA M", title: "TRAINER", image: "/images/Faculty-1.png" },
    { name: "SESHU VARDAAN P", title: "TRAINER", image: "/images/Faculty-2.png" },
    { name: "ALDERIN C", title: "TRAINER", image: "/images/Faculty-3.png" },
    { name: "SNEKA T", title: "ADMIN", image: "/images/Faculty-4.png" },
];

const values = [
    { title: "Excellence", desc: "We strive for the highest standards in AI education" },
    { title: "Innovation", desc: "Continuously updating our curriculum with the latest AI advancements" },
    { title: "Community", desc: "Building a supportive network of AI enthusiasts" },
    { title: "Accessibility", desc: "Making AI education available to everyone" },
];

const whyChoose = [
    {
        title: "Industry Experienced Trainers",
        desc: "Nurturing talent with industry experts. Training led by experienced instructors with practical insights for real-world success.",
    },
    {
        title: "100% Practical Training",
        desc: "Hands-on sessions, workshops, and projects designed to build confidence through application-focused learning.",
    },
    {
        title: "Dedicated Placement Cell Support",
        desc: "End-to-end guidance to connect you with rewarding career opportunities and support your path to success.",
    },
];

const AboutPage = () => {
    return (
        <>
            <HeroSub
                title="About Us"
                subtitle="Learn who we are, what drives us, and how we empower the next generation of AI professionals."
                breadcrumbs={[{ label: 'About Us', href: '/about' }]}
            />


            {/* ===== Who We Are ===== */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        {/* Text */}
                        <div>
                            <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-primary/10 text-primary border border-primary/20">
                                About AI SKILL UP
                            </span>
                            <h2 className="text-4xl font-extrabold mb-6 leading-tight text-gray-900">
                                Who We Are
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                AI SKILL UP is one of the leading software training institutes in Coimbatore, which focuses on industry-applicable skills and knowledge for the people. Our courses are prepared in such a way that each student gets hands-on experiences and practical skills to work from day one. We provide the newest facilities, trained mentors, and student-centered methodologies to uphold excellence in education while creating a nurturing and innovative learning environment for all.
                            </p>
                            <Link
                                href="/courses"
                                className="inline-block px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:-translate-y-1 bg-primary hover:bg-primary/90 shadow-lg"
                            >
                                Learn More →
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: 440 }}>
                            <Image
                                src="/images/about-1.png"
                                alt="AI SkillUp Team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-4">
                                <span className="text-white font-bold text-sm px-4 py-2 rounded-full bg-primary/80 backdrop-blur-sm">
                                    AI SkillUp Team
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Mission & Vision ===== */}
            <section className="py-20 bg-slate-gray">
                <div className="container">
                    <div className="text-center mb-12">
                        <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4 bg-primary/10 text-primary border border-primary/20">
                            Purpose & Direction
                        </span>
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            Our Mission & Vision
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Mission */}
                        <div className="rounded-3xl p-8 bg-white border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h3>
                            <p className="leading-relaxed text-gray-600">
                                Our mission is to provide hands-on industrial training that equips learners with practical skills, fosters innovation, and enhances employability. To be a premier hub for industrial training, driving skill development, innovation, and workforce readiness.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="rounded-3xl p-8 bg-white border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Our Vision</h3>
                            <p className="leading-relaxed text-gray-600">
                                To empower learners with future-ready skills through practical, project-driven education and to become a trusted hub that bridges academia and industry with real-world expertise and career outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Stats ===== */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <div key={i} className="text-center rounded-3xl py-10 px-6 transition-all duration-300 hover:-translate-y-1 bg-slate-gray border border-gray-100 shadow-sm">
                                <div className="text-4xl font-black mb-1 text-primary">
                                    {s.value}
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Our Mission (Extended) ===== */}
            <section className="py-20 bg-slate-gray">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-primary/10 text-primary border border-primary/20">
                            AI Education
                        </span>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At AI SkillUp, we believe in democratizing AI education and making cutting-edge knowledge accessible to everyone. Our mission is to bridge the gap between theoretical knowledge and practical AI applications through comprehensive, industry-relevant courses. What sets us apart is our commitment to excellence in education. We provide state-of-the-art facilities, industry-experienced mentors, and a curriculum that&apos;s constantly updated to reflect the latest technological advancements.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== Why Choose AI SKILL UP ===== */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-14">
                        <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4 bg-primary/10 text-primary border border-primary/20">
                            WHY CHOOSE AI SKILL UP
                        </span>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
                            The Best Beneficial Side
                        </h2>
                        <p className="text-xl font-bold text-primary">of AI SkillUp</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {whyChoose.map((item, i) => (
                            <div key={i} className="rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 bg-slate-gray border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-extrabold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Meet Our Team ===== */}
            <section className="py-20 bg-slate-gray">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-primary/10 text-primary border border-primary/20">
                            Expert Faculty
                        </span>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-gray-500 leading-relaxed">
                            Our Team comprises four distinguished leaders, each an expert in their respective technologies. Their combined experience serves as a powerhouse, capable of profoundly shaping students&apos; careers and carving their potential. Together, they offer unmatched guidance and insights, ensuring our students&apos; success in the ever-evolving tech landscape.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {team.map((member, i) => (
                            <div key={i}
                                className="rounded-3xl overflow-hidden text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border border-gray-100 shadow-sm">
                                <div className="relative bg-gray-50 flex items-center justify-center" style={{ height: 240 }}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-5 bg-white">
                                    <h4 className="font-extrabold text-gray-900 text-base">{member.name}</h4>
                                    <p className="text-xs font-bold uppercase tracking-widest mt-1 text-primary">{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Our Values ===== */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-14">
                        <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4 bg-primary/10 text-primary border border-primary/20">
                            Core Principles
                        </span>
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            Our Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {values.map((v, i) => (
                            <div key={i}
                                className="rounded-3xl p-7 text-center transition-all duration-300 hover:-translate-y-2 bg-slate-gray border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-extrabold text-gray-900 mb-2">{v.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-500">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
