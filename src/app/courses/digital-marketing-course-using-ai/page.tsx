import HeroSub from '@/app/components/SharedComponent/HeroSub'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function DigitalMarketingCourse() {
    return (
        <>
            <HeroSub
                title='Digital Marketing Course Using AI'
                subtitle='Transform your marketing career with AI-powered SEO, paid ads, social media, and content automation.'
                breadcrumbs={[
                    { label: 'Courses', href: '/courses' },
                    { label: 'Digital Marketing Using AI' }
                ]}
            />
            <section className='py-20'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
                        <div className='sticky top-24'>
                            <Image
                                src='/images/course-5.png'
                                alt='Digital Marketing Course Using AI'
                                width={800}
                                height={600}
                                className='rounded-3xl w-full shadow-2xl border-4 border-white'
                            />
                            <div className='mt-8 grid grid-cols-2 gap-4'>
                                <div className='bg-primary/5 p-6 rounded-2xl border border-primary/10'>
                                    <div className='text-primary mb-2'><Icon icon="solar:clock-circle-bold" width={32} /></div>
                                    <p className='text-sm text-gray-500 font-medium'>Duration</p>
                                    <p className='text-lg font-bold text-gray-900'>2 Months | 1 month course</p>
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
                                        "AI-Generated Ad Copies & Content – Use ChatGPT & Jasper for high-conversion ads",
                                        "AI-Driven SEO & SEM – Automate keyword research & PPC campaigns",
                                        "AI-Powered Social Media Marketing – Generate posts & analyze trends",
                                        "Predictive Analytics for Marketing – Forecast sales using AI",
                                        "Automated Email & Chatbot Marketing – Build AI chatbots for customer engagement"
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
                                        "Run an AI-optimized Google Ads campaign",
                                        "Create a viral social media strategy using AI",
                                        "Build an AI-driven email marketing funnel"
                                    ].map((project, idx) => (
                                        <div key={idx} className='group flex items-center gap-4 bg-gray-900 p-6 rounded-2xl text-white hover:bg-primary transition-all duration-300 shadow-xl'>
                                            <div className='bg-white/10 p-3 rounded-xl group-hover:scale-110 transition-transform'>
                                                <Icon icon="solar:target-bold" width={24} />
                                            </div>
                                            <p className='text-lg font-bold !text-white'>{project}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='bg-slate-gray p-8 rounded-3xl border border-gray-100 shadow-sm'>
                                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Master AI-Powered Marketing</h3>
                                <p className='text-gray-600 leading-relaxed mb-6'>
                                    Stop guessing and start predicting. Our <strong>best digital marketing course in Coimbatore</strong> teaches you how to leverage <strong>big data and AI algorithms</strong> to dominate search engines and social media. From <strong>AI-driven SEO</strong> to automated content creation with Jasper and ChatGPT, you'll learn the techniques used by top 1% agencies.
                                </p>
                                <ul className='space-y-3'>
                                    <li className='flex items-center gap-3 text-gray-700 font-medium'>
                                        <Icon icon="solar:star-bold" className='text-yellow-500' />
                                        Advanced <strong>SEO & SEM with AI Analyics</strong>
                                    </li>
                                    <li className='flex items-center gap-3 text-gray-700 font-medium'>
                                        <Icon icon="solar:star-bold" className='text-yellow-500' />
                                        Social Media Automation & <strong>Viral Growth Hacking</strong>
                                    </li>
                                    <li className='flex items-center gap-3 text-gray-700 font-medium'>
                                        <Icon icon="solar:star-bold" className='text-yellow-500' />
                                        Master <strong>High-Conversion Ad Copywriting</strong>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className='text-4xl font-black text-gray-900 mb-6'>Syllabus Overview</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    {[
                                        { title: "Search Engine Optimization", desc: "Keyword research, on-page, and technical SEO using AI tools." },
                                        { title: "Performance Marketing", desc: "Running ROI-focused Google Ads and Meta Ads campaigns." },
                                        { title: "Content Automation", desc: "Scaling blog and social media production with AI writing assistants." },
                                        { title: "Data Analytics & AI", desc: "Tracking conversions and using predictive analytics for better ROI." }
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
                                    Boost Your Marketing Career
                                    <Icon icon='solar:arrow-right-up-bold' width={22} height={22} />
                                </Link>
                                <Link href='/courses' className='bg-gray-100 text-gray-700 hover:bg-gray-200 py-4 px-10 rounded-full text-lg font-bold transition-all inline-flex items-center gap-3'>
                                    <Icon icon='solar:arrow-left-linear' width={22} height={22} />
                                    Explore Courses
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
