'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../Header/Logo'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FooterLinkType } from '@/app/types/footerlink'

const Footer = ({ initialData }: { initialData?: FooterLinkType[] }) => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>(initialData || [])

  useEffect(() => {
    if (initialData) return

    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [initialData])

  return (
    <footer className='bg-slate-gray pt-16 pb-8'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16'>

          {/* Logo & About */}
          <div>
            <div className='mb-6'>
              <Logo />
            </div>
            <p className='text-black/70 text-base mb-8 leading-relaxed'>
              AI SKILL UP Academy is a leading provider of AI-powered courses in Coimbatore, dedicated to preparing students for the future of technology.
            </p>
            <div className='flex items-center gap-5'>
              <Link href='https://www.facebook.com/AISKILLUP6/' target='_blank' rel='noopener noreferrer' className='text-black hover:text-primary text-2xl transition-all'>
                <Icon icon='tabler:brand-facebook' />
              </Link>
              <Link href='https://wa.me/919655422511' target='_blank' rel='noopener noreferrer' className='text-black hover:text-primary text-2xl transition-all'>
                <Icon icon='tabler:brand-whatsapp' />
              </Link>
              <Link href='https://www.instagram.com/academyaiskillup/' target='_blank' rel='noopener noreferrer' className='text-black hover:text-primary text-2xl transition-all'>
                <Icon icon='tabler:brand-instagram' />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            {footerlink.map((product, i) => (
              <div key={i}>
                <h6 className='mb-6'>
                  {product.section === 'Quick Links' ? 'Quick Links' : product.section}
                </h6>
                <ul className="space-y-3">
                  {product.links.map((item, j) => (
                    <li key={j}>
                      <Link
                        href={item.href}
                        className='text-black/60 hover:text-primary text-[15px] font-medium transition-colors'>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Courses Column */}
          <div>
            <h6 className='mb-6'>
              Our Courses
            </h6>
            <ul className="space-y-3">
              {[
                { label: 'Python Programming in Coimbatore', href: '/courses/python-course-coimbatore' },
                { label: 'Data Science in Coimbatore', href: '/courses/data-science-course-coimbatore' },
                { label: 'Full-Stack Development in Coimbatore', href: '/courses/full-stack-development-course-coimbatore' },
                { label: 'UI & UX Design in Coimbatore', href: '/courses/ui-ux-design-course-coimbatore' },
                { label: 'Mobile App Development in Coimbatore', href: '/courses/mobile-app-development-course-coimbatore' },
                { label: 'No-Code AI Automation in Coimbatore', href: '/courses/no-code-ai-automation-coimbatore' },
                { label: 'Digital Marketing in Coimbatore', href: '/courses/digital-marketing-course-coimbatore' },
              ].map((course, i) => (
                <li key={i}>
                  <Link
                    href={course.href}
                    className='text-black/60 hover:text-primary text-[15px] font-medium transition-colors leading-snug'>
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h6 className='mb-6'>
              Reach Us
            </h6>
            <div className='flex flex-col gap-5'>
              <div className='flex items-start gap-4'>
                <div className='bg-white p-2 rounded-lg shadow-sm text-primary shrink-0'>
                  <Icon icon='solar:point-on-map-perspective-bold' width={24} height={24} />
                </div>
                <p className='text-black/80 text-[15px] font-medium leading-relaxed pt-1'>
                  45/2, Gokhale St, opposite to Senthil kumaran theatre, Ram Nagar, Coimbatore, TN 641009.
                </p>
              </div>
              <Link href='tel:+919655422511' className='flex items-center gap-4 group'>
                <div className='bg-white p-2 rounded-lg shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0'>
                  <Icon icon='solar:phone-bold' width={24} height={24} />
                </div>
                <p className='text-black/60 group-hover:text-primary text-[15px] font-bold transition-colors'>
                  +91 96554 22511
                </p>
              </Link>
              <Link href='mailto:info@aiskillup.in' className='flex items-center gap-4 group'>
                <div className='bg-white p-2 rounded-lg shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0'>
                  <Icon icon='solar:mailbox-bold' width={24} height={24} />
                </div>
                <p className='text-black/60 group-hover:text-primary text-[15px] font-bold transition-colors'>
                  info@aiskillup.in
                </p>
              </Link>
              <div className='mt-1 rounded-xl overflow-hidden shadow-sm border border-white/20 h-32 w-full'>
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.316868602607!2d76.9638168!3d11.0148355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8594767deeaf7%3A0x578b90b22a69fb4c!2sAI%20SKILLUP%20-%20Graphic%2C%20UI%20UX%2C%20FULL%20STACK%20Academy!5e0!3m2!1sen!2sin!4v1773291625999!5m2!1sen!2sin">
                </iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Searches — Internal SEO links */}
        <div className='pb-10 border-b border-black/10'>
          <p className='text-black/40 text-xs font-semibold uppercase tracking-widest mb-4'>Popular Searches</p>
          <div className='flex flex-wrap gap-2'>
            {[
              { label: 'AI Course Coimbatore', href: '/' },
              { label: 'Full Stack Course Coimbatore', href: '/courses/full-stack-development-course-coimbatore' },
              { label: 'UI UX Design Course Coimbatore', href: '/courses/ui-ux-design-course-coimbatore' },
              { label: 'No-Code AI Course Coimbatore', href: '/courses/no-code-ai-automation-coimbatore' },
              { label: 'Digital Marketing Course Coimbatore', href: '/courses/digital-marketing-course-coimbatore' },
              { label: 'Python Course Coimbatore', href: '/courses/python-course-coimbatore' },
              { label: 'Data Science Course Coimbatore', href: '/courses/data-science-course-coimbatore' },
              { label: 'Mobile App Development Coimbatore', href: '/courses/mobile-app-development-course-coimbatore' },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className='text-black/50 hover:text-primary text-[12px] font-medium border border-black/10 rounded-full px-3 py-1 hover:border-primary/30 transition-colors'
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* SEO-rich footer paragraph */}
        <div className='py-6 border-b border-black/10'>
          <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.4)', lineHeight: '1.7', maxWidth: '680px' }}>
            AI Skill Up Academy is a leading AI-based software training institute in Coimbatore, Tamil Nadu.
            We offer industry-aligned courses in{' '}
            <Link href='/courses/full-stack-development-course-coimbatore' className='hover:text-primary transition-colors'>Full Stack Development</Link>,{' '}
            <Link href='/courses/ui-ux-design-course-coimbatore' className='hover:text-primary transition-colors'>UI/UX Design</Link>,{' '}
            <Link href='/courses/no-code-ai-automation-coimbatore' className='hover:text-primary transition-colors'>No-Code AI Automation</Link>,{' '}
            <Link href='/courses/digital-marketing-course-coimbatore' className='hover:text-primary transition-colors'>Digital Marketing</Link>,{' '}
            <Link href='/courses/mobile-app-development-course-coimbatore' className='hover:text-primary transition-colors'>Mobile App Development</Link>,{' '}
            <Link href='/courses/python-course-coimbatore' className='hover:text-primary transition-colors'>Python Programming</Link>, and{' '}
            <Link href='/courses/data-science-course-coimbatore' className='hover:text-primary transition-colors'>Data Science</Link>{' '}
            — all taught with modern AI tools and real-world projects. Located at Ram Nagar, Coimbatore, we serve students,
            freshers, working professionals, and corporate teams across Tamil Nadu.{' '}
            Read our{' '}
            <a href='https://aiskillup.wordpress.com' rel='me' title='AI Skill Up Academy — AI Training Blog Coimbatore' className='hover:text-primary transition-colors'>AI training blog</a>{' '}
            for course updates, student stories, and the latest in AI education.
          </p>
        </div>

        <div className='pt-8 flex flex-col lg:flex-row items-center justify-between gap-4'>
          <p className='text-black/40 text-sm font-medium'>
            &copy; {new Date().getFullYear()} AI SKILL UP Academy. All rights reserved.
            <span className="mx-2 hidden lg:inline">|</span>
            <span className="block lg:inline mt-2 lg:mt-0">
              Designed by <Link href='https://pixelperfectsolutions.in' target='_blank' rel='noopener noreferrer' className='hover:text-primary underline decoration-primary/30'>Pixel Perfect Software Solutions</Link>
            </span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
