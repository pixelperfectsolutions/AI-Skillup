'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../Header/Logo'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FooterLinkType } from '@/app/types/footerlink'

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
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
  }, [])

  return (
    <footer className='bg-[#D5EFFA] pt-16 pb-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-16'>
          <div className='col-span-2'>
            <div className='mb-6'>
              <Logo />
            </div>
            <p className='text-black/70 text-base mb-8 leading-relaxed max-w-[300px]'>
              AI SKILL UP Academy is a leading provider of AI-powered courses, dedicated to preparing students for the future of technology.
            </p>
            <div className='flex items-center gap-5'>
              <Link href='https://www.facebook.com/AISKILLUP6/' target='_blank' className='text-black hover:text-primary text-2xl transition-all'>
                <Icon icon='tabler:brand-facebook' />
              </Link>
              <Link href='https://wa.me/919655422511' target='_blank' className='text-black hover:text-primary text-2xl transition-all'>
                <Icon icon='tabler:brand-whatsapp' />
              </Link>
              <Link href='https://www.instagram.com/academyaiskillup/' target='_blank' className='text-black hover:text-primary text-2xl transition-all'>
                <Icon icon='tabler:brand-instagram' />
              </Link>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='flex flex-wrap gap-10 lg:gap-24'>
              {footerlink.map((product, i) => (
                <div key={i} className='min-w-[120px]'>
                  <h4 className='mb-8'>
                    {product.section === 'Quick Links' ? 'Links' : product.section}
                  </h4>
                  <ul className="space-y-4">
                    {product.links.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className='text-black/60 hover:text-primary text-base font-medium transition-colors'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className='col-span-2 sm:col-span-6 md:col-span-2'>
            <h4 className='mb-8 font-bold text-[#000000] opacity-80 uppercase tracking-widest text-sm'>
              Reach Us
            </h4>
            <div className='flex flex-col gap-6'>
              <div className='flex items-start gap-4'>
                <div className='bg-white p-2 rounded-lg shadow-sm text-primary'>
                  <Icon icon='solar:point-on-map-perspective-bold' width={24} height={24} />
                </div>
                <p className='text-black/80 text-base font-medium leading-relaxed pt-1'>
                  45, Gokhale Street, Ram Nagar, Near MK Residency, Coimbatore, TN 641009.
                </p>
              </div>
              <Link href='tel:+919655422511' className='flex items-center gap-4 group text-nowrap'>
                <div className='bg-white p-2 rounded-lg shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all'>
                  <Icon icon='solar:phone-bold' width={24} height={24} />
                </div>
                <p className='text-black/60 group-hover:text-primary text-base font-bold transition-colors'>
                  +91 96554 22511
                </p>
              </Link>
              <Link href='mailto:info@aiskillup.example' className='flex items-center gap-4 group'>
                <div className='bg-white p-2 rounded-lg shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all'>
                  <Icon icon='solar:mailbox-bold' width={24} height={24} />
                </div>
                <p className='text-black/60 group-hover:text-primary text-base font-bold transition-colors'>
                  info@aiskillup.example
                </p>
              </Link>
              <div className='mt-2 rounded-xl overflow-hidden shadow-sm border border-white/20 h-32 w-full'>
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

        <div className='pt-8 border-t border-black/10 flex flex-col lg:flex-row items-center justify-between gap-4'>
          <p className='text-black/40 text-sm font-medium'>
            © {new Date().getFullYear()} AI SKILL UP Academy. All rights reserved.
            <span className="mx-2 hidden lg:inline">|</span>
            <span className="block lg:inline mt-2 lg:mt-0">
              Designed by <Link href='https://pixelperfectsolutions.in' target='_blank' className='hover:text-primary underline decoration-primary/30'>Pixel Perfect Software Solutions</Link>
            </span>
          </p>
        </div>

      </div>
    </footer>


  )
}

export default Footer
