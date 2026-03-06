import HeroSub from '@/app/components/SharedComponent/HeroSub'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function MobileAppCourse() {
    return (
        <>
            <HeroSub
                title='AI-Based Mobile App Development'
                subtitle='Build powerful mobile apps powered by AI — React Native, Flutter, on-device ML, and smart APIs.'
                breadcrumbs={[
                    { label: 'Courses', href: '/courses' },
                    { label: 'AI-Based Mobile App Development' }
                ]}
            />
            <section className='py-20'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
                        <div className='lg:sticky lg:top-24'>
                            <Image
                                src='/images/course-3.png'
                                alt='AI-Based Mobile App Development'
                                width={800}
                                height={600}
                                className='rounded-3xl w-full shadow-2xl border-4 border-white'
                            />
                            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div className='bg-primary/5 p-6 rounded-2xl border border-primary/10'>
                                    <div className='text-primary mb-2'><Icon icon="solar:clock-circle-bold" width={32} /></div>
                                    <p className='text-sm text-gray-500 font-medium'>Duration</p>
                                    <p className='text-lg font-bold text-gray-900'>4 Months | 2 months course</p>
                                </div>
                                <div className='bg-blue-500/5 p-6 rounded-2xl border border-blue-500/10'>
                                    <div className='text-blue-500 mb-2'><Icon icon="solar:chart-square-bold" width={32} /></div>
                                    <p className='text-sm text-gray-500 font-medium'>Level</p>
                                    <p className='text-lg font-bold text-gray-900'>Beginner to Advanced</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-10'>
                            <div>
                                <h2 className='text-4xl font-black text-gray-900 mb-6'>Course Highlights</h2>
                                <div className='space-y-4'>
                                    {[
                                        "AI-Generated App Code – Use Flutter AI & ChatGPT to write app logic",
                                        "Smart App Features – Integrate AI chatbots, voice recognition, and image processing",
                                        "No-Code/Low-Code AI Apps – Build apps with Appy Pie AI & Bubble.io",
                                        "AI-Powered Testing & Debugging – Automate QA with AI tools",
                                        "Deploy AI-Enhanced Mobile Apps – Publish apps with AI-driven analytics"
                                    ].map((highlight, idx) => (
                                        <div key={idx} className='flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors'>
                                            <div className='bg-primary/10 p-1 rounded-full mt-1'>
                                                <Icon icon="solar:check-read-linear" className='text-primary' width={20} />
                                            </div>
                                            <p className='text-gray-700 font-medium'>{highlight}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className='text-4xl font-black text-gray-900 mb-6'>Projects</h2>
                                <div className='grid grid-cols-1 gap-4'>
                                    {[
                                        "Build a personalized fitness AI coach app",
                                        "Develop an AI-based language translator app",
                                        "Create a smart shopping assistant"
                                    ].map((project, idx) => (
                                        <div key={idx} className='group flex items-center gap-4 bg-gray-900 p-6 rounded-2xl text-white hover:bg-primary transition-all duration-300 shadow-xl'>
                                            <div className='bg-white/10 p-3 rounded-xl group-hover:scale-110 transition-transform'>
                                                <Icon icon="solar:smartphone-2-bold" width={24} />
                                            </div>
                                            <p className='text-lg font-bold !text-white'>{project}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='bg-slate-gray p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm'>
                                <h3 className='text-2xl font-bold text-gray-900 mb-4'>The Future of Mobile Apps is AI</h3>
                                <p className='text-gray-600 leading-relaxed mb-6'>
                                    Don't just build apps; build intelligent digital assistants. As the <strong>best mobile app development training in Coimbatore</strong>, we teach you how to integrate <strong>LLMs, computer vision, and voice AI</strong> directly into Android and iOS applications. Master the art of <strong>AI-driven mobile development</strong> to create apps that can see, hear, and think.
                                </p>
                                <ul className='grid grid-cols-1 gap-4'>
                                    {[
                                        { primary: "Build", highlight: "Hybrid Apps with React Native & Flutter" },
                                        { primary: "Integrate", highlight: "OpenAI APIs & Firebase ML Kit" },
                                        { primary: "Focus on", highlight: "Smart UI/UX for Mobile AI" }
                                    ].map((item, idx) => (
                                        <li key={idx} className='grid grid-cols-[auto_1fr] gap-4 items-start bg-white/50 p-3 rounded-xl border border-transparent hover:border-gray-100 transition-all'>
                                            <div className='mt-1 bg-yellow-500/10 p-1 rounded-lg'>
                                                <Icon icon="solar:star-bold" className='text-yellow-500' width={18} />
                                            </div>
                                            <p className='text-gray-700 font-medium leading-relaxed pt-0.5'>
                                                {item.primary} <strong>{item.highlight}</strong>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className='text-4xl font-black text-gray-900 mb-6'>Syllabus Overview</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    {[
                                        { title: "Cross-Platform Frameworks", desc: "Setting up Flutter and React Native for modern mobile development." },
                                        { title: "AI Integration", desc: "Adding chatbots, image analysis, and voice commands using AI APIs." },
                                        { title: "Backend Connectivity", desc: "Connecting apps to Node.js backends and Cloud Firebases." },
                                        { title: "App Store Optimization (ASO)", desc: "Learning how to rank your AI app on Play Store and App Store." }
                                    ].map((module, idx) => (
                                        <div key={idx} className='p-6 bg-white rounded-2xl border border-gray-100 shadow-sm'>
                                            <h4 className='font-bold text-primary mb-2'>{module.title}</h4>
                                            <p className='text-sm text-gray-600'>{module.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='flex flex-wrap gap-4 pt-6'>
                                <Link href='/contact' className='bg-primary text-white hover:bg-primary/90 py-4 px-10 rounded-full text-lg font-bold transition-all shadow-xl hover:-translate-y-1 active:scale-95 inline-flex items-center gap-3'>
                                    Start Your Mobile App Career
                                    <Icon icon='solar:arrow-right-up-bold' width={22} height={22} />
                                </Link>
                                <Link href='/courses' className='bg-gray-100 text-gray-700 hover:bg-gray-200 py-4 px-10 rounded-full text-lg font-bold transition-all inline-flex items-center gap-3'>
                                    <Icon icon='solar:arrow-left-linear' width={22} height={22} />
                                    View Other Courses
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
