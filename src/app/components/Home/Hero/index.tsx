import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  return (
    <section id='home-section' className='bg-slate-gray relative overflow-hidden'>
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 z-0"></div>

      <div className='container pt-20 lg:pt-32 pb-20 relative z-10'>
        <div className="mb-12 text-center lg:text-left flex flex-col gap-6">
          <div className='flex gap-2 items-center bg-primary/5 w-fit px-4 py-2 rounded-full border border-primary/10 mx-auto lg:mx-0'>
            <div className="bg-primary/20 p-1 rounded-full">
              <Icon icon='tabler:star-filled' className='text-primary text-xs' />
            </div>
            <p className='text-primary text-xs font-black uppercase tracking-[0.2em]'>
              Coimbatore's #1 AI Native Academy
            </p>
          </div>
          <h1 className='text-4xl md:text-7xl font-black text-midnight_text leading-[1.1] w-full'>
            Top <span className="text-primary">AI-Based</span> Software Training Institute in <span className="text-success">Coimbatore</span>
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-start'>
          <div className='col-span-12 lg:col-span-7 flex flex-col gap-8'>
            <h2 className='text-xl md:text-2xl font-bold text-black/80 leading-relaxed max-w-2xl'>
              Learn Full Stack Development, UI/UX Design, Digital Marketing & No-Code AI Automation with Real AI Tools 100% Placement Support
            </h2>

            <div className='text-lg text-black/60 leading-relaxed max-w-2xl'>
              <p>
                In today's fast-evolving IT landscape, traditional skills are no longer enough.
                As the <strong>best software training institute Coimbatore with placement</strong> providers, we bridge this gap by integrating artificial intelligence into every module.
                Our <strong>AI-based software training institute in Coimbatore</strong> prepares you for the high-demand jobs of 2025.
                Whether you're looking for a <strong>full stack development course Coimbatore</strong>, an industry-leading <strong>UI UX design course Coimbatore</strong>,
                or a future-proof <strong>no code development course Coimbatore</strong>, our academy at Ram Nagar provides the hands-on expertise you need.
                We also offer a specialized <strong>digital marketing course using AI Coimbatore</strong> to help you master modern growth strategies.
                Join the most trusted <strong>IT training institute Ram Nagar Coimbatore</strong> and launch your career with confidence.
              </p>
            </div>

            <div className='flex flex-wrap gap-5 mt-4'>
              <Link href='/courses' className='bg-primary text-white hover:bg-primary/90 py-4 px-10 rounded-full text-lg font-black transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 flex items-center gap-3 uppercase tracking-widest'>
                Explore Courses
                <Icon icon='solar:arrow-right-up-bold' width={22} height={22} />
              </Link>
              <Link href='tel:+919655422511' className='bg-white text-midnight_text hover:bg-gray-50 py-4 px-10 rounded-full text-lg font-black transition-all shadow-lg border border-gray-100 hover:-translate-y-1 active:scale-95 flex items-center gap-3 uppercase tracking-widest'>
                <Icon icon='solar:phone-bold' width={22} height={22} />
                CALL NOW
              </Link>
            </div>

            {/* Stat Bar SSR Rendered */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-black/5 mt-4'>
              <div>
                <p className="text-3xl font-black text-midnight_text">9K+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Students Trained</p>
              </div>
              <div>
                <p className="text-3xl font-black text-midnight_text">5.0</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Google Rating</p>
              </div>
              <div>
                <p className="text-3xl font-black text-midnight_text">100%</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Placement</p>
              </div>
              <div>
                <p className="text-3xl font-black text-midnight_text">7+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">AI Courses</p>
              </div>
            </div>
          </div>

          <div className='col-span-12 lg:col-span-5 relative flex justify-center'>
            <div className="absolute inset-0 bg-primary/10 rounded-[4rem] rotate-6 scale-90 -z-10 -translate-y-2 lg:-translate-y-6"></div>
            <Image
              src='/images/aiskillup-banner1.jpeg'
              alt='AI Skillup Academy - Best AI Software Training in Coimbatore'
              width={600}
              height={500}
              priority
              className="rounded-[3rem] object-cover shadow-2xl -translate-y-2 lg:-translate-y-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
