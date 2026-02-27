import HeroSub from '@/app/components/SharedComponent/HeroSub'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function UiUxCourse() {
    return (
        <>
            <HeroSub
                title='UI and UX Design Course Using AI'
                subtitle='Design stunning user interfaces and experiences with Figma, AI design tools, and modern UX principles.'
                breadcrumbs={[
                    { label: 'Courses', href: '/courses' },
                    { label: 'UI & UX Design Using AI' }
                ]}
            />
            <section className='py-20'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
                        <div className='sticky top-24'>
                            <Image
                                src='/images/course-2.png'
                                alt='UI and UX Design Course Using AI'
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
                                <div className='bg-purple-500/5 p-6 rounded-2xl border border-purple-500/10'>
                                    <div className='text-purple-500 mb-2'><Icon icon="solar:chart-square-bold" width={32} /></div>
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
                                        "AI-Generated UI/UX Designs – Use Midjourney & Figma AI for rapid prototyping",
                                        "Automated Wireframing – Convert sketches into UI designs using Uizard",
                                        "AI-Driven User Research – Analyze user behavior with AI tools",
                                        "Personalized Design Systems – Generate color schemes, fonts, and layouts using AI",
                                        "Voice & Gesture-Based UI Design – Future-ready interfaces"
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
                                        "Design an AI-powered dashboard",
                                        "Create a voice-controlled app interface",
                                        "Build a personalized e-commerce UI"
                                    ].map((project, idx) => (
                                        <div key={idx} className='group flex items-center gap-4 bg-gray-900 p-6 rounded-2xl text-white hover:bg-primary transition-all duration-300 shadow-xl'>
                                            <div className='bg-white/10 p-3 rounded-xl group-hover:scale-110 transition-transform'>
                                                <Icon icon="solar:palette-bold" width={24} />
                                            </div>
                                            <p className='text-lg font-bold !text-white'>{project}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='flex flex-wrap gap-4 pt-6'>
                                <Link href='/contact' className='bg-primary text-white hover:bg-primary/90 py-4 px-10 rounded-full text-lg font-bold transition-all shadow-xl hover:-translate-y-1 active:scale-95 inline-flex items-center gap-3'>
                                    Apply Course
                                    <Icon icon='solar:arrow-right-up-bold' width={22} height={22} />
                                </Link>
                                <Link href='/courses' className='bg-gray-100 text-gray-700 hover:bg-gray-200 py-4 px-10 rounded-full text-lg font-bold transition-all inline-flex items-center gap-3'>
                                    <Icon icon='solar:arrow-left-linear' width={22} height={22} />
                                    Back to Courses
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
