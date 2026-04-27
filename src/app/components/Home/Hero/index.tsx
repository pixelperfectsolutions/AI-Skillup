import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  return (
    <section id='home-section' className='bg-white relative overflow-hidden'>
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 z-0"></div>

      <div className='container pt-20 lg:pt-32 pb-20 relative z-10'>
        <div className="mb-12 text-center lg:text-left flex flex-col gap-6">
          <div className='flex gap-2 items-center bg-primary/5 w-fit px-4 py-2 rounded-full border border-primary/10 mx-auto lg:mx-0'>
            <div className="bg-primary/20 p-1 rounded-full">
              <Icon icon='tabler:star-filled' className='text-primary text-[10px]' />
            </div>
            <h6 className='text-primary'>
              Coimbatore's #1 AI Native Academy
            </h6>
          </div>
          <h1 className='w-full'>
            Top <span className="text-primary">AI-Based</span> Software Training Institute in <span className="text-success">Coimbatore</span>
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-start'>
          <div className='col-span-12 lg:col-span-7 flex flex-col gap-8'>
            <h5 className='font-bold text-black/80 leading-relaxed max-w-2xl text-center lg:text-left'>
              Learn{' '}
              <a href="/courses/full-stack-development-course-coimbatore" className="text-primary hover:underline">Full Stack Development</a>,{' '}
              <a href="/courses/ui-ux-design-course-coimbatore" className="text-primary hover:underline">UI/UX Design</a>,{' '}
              <a href="/courses/digital-marketing-course-coimbatore" className="text-primary hover:underline">Digital Marketing</a>{' '}{'&'}{' '}
              <a href="/courses/no-code-ai-automation-coimbatore" className="text-primary hover:underline">No-Code AI Automation</a>{' '}
              with Real AI Tools — 100% Placement Support
            </h5>

            <div className='max-w-2xl text-center lg:text-left'>
              <p>
                In today&apos;s fast-evolving IT landscape, traditional skills are no longer enough.
                As the best software training institute Coimbatore with placement providers, we bridge this gap by integrating artificial intelligence into every module.
                Our AI-based software training institute in Coimbatore prepares you for the high-demand jobs of 2025.
                Whether you&apos;re looking for a full stack development course Coimbatore, an industry-leading UI UX design course Coimbatore,
                or a future-proof no code development course Coimbatore, our academy at Ram Nagar provides the hands-on expertise you need.
              </p>
            </div>

            <div className='flex flex-wrap gap-5 mt-4 justify-center lg:justify-start'>
              <Link href='/courses' className='bg-primary text-white hover:bg-primary/90 py-4 px-10 rounded-full text-[15px] font-semibold transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 flex items-center gap-3 uppercase tracking-widest'>
                Explore Courses
                <Icon icon='solar:arrow-right-up-bold' width={22} height={22} />
              </Link>
              <Link href='tel:+919655422511' className='bg-white text-midnight_text hover:bg-gray-50 py-4 px-10 rounded-full text-[15px] font-semibold transition-all shadow-lg border border-gray-100 hover:-translate-y-1 active:scale-95 flex items-center gap-3 uppercase tracking-widest'>
                <Icon icon='solar:phone-bold' width={22} height={22} />
                CALL NOW
              </Link>
            </div>

            {/* Stat Bar SSR Rendered */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-black/5 mt-8'>
              <div>
                <h3 className="mb-1 text-center lg:text-left">9K+</h3>
                <h6 className="text-gray-400 text-center lg:text-left">Students Trained</h6>
              </div>
              <div>
                <h3 className="mb-1 text-center lg:text-left">5.0</h3>
                <h6 className="text-gray-400 text-center lg:text-left">Google Rating</h6>
              </div>
              <div>
                <h3 className="mb-1 text-center lg:text-left">100%</h3>
                <h6 className="text-gray-400 text-center lg:text-left">Placement</h6>
              </div>
              <div>
                <h3 className="mb-1 text-center lg:text-left">7+</h3>
                <h6 className="text-gray-400 text-center lg:text-left">AI Courses</h6>
              </div>
            </div>
          </div>

          <div className='col-span-12 lg:col-span-5 relative flex justify-center lg:justify-end'>
            <div className="absolute inset-0 bg-primary/10 rounded-[4rem] rotate-6 scale-95 -z-10 -translate-y-6"></div>
            <Image
              src='/images/aiskillup-banner1.jpeg'
              alt='AI Skill Up Academy classroom training session in Coimbatore'
              width={600}
              height={500}
              priority
              fetchPriority="high"
              className="rounded-[3rem] object-cover shadow-2xl -translate-y-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
