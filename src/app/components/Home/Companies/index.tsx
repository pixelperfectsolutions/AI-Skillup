'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// CAROUSEL SETTINGS
const Companies = ({ initialData }: { initialData?: { imgSrc: string }[] }) => {
  const [techGaint, setTechGaint] = useState<{ imgSrc: string }[]>(initialData || [])

  useEffect(() => {
    if (initialData) return

    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setTechGaint(data.TechGaintsData)
      } catch (error) {
        console.error('Error fetching service:', error)
      }
    }
    fetchData()
  }, [initialData])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  return (
    <section className='text-center'>
      <div className='container'>
        <div className='py-7 border-b border-t border-black/5 mt-10'>
          <Slider {...settings}>
            {techGaint.map((item, i) => (
              <div key={i} className='px-4 outline-none'>
                <Image
                  src={item.imgSrc}
                  alt={`Hiring partner of AI Skill Up Academy Coimbatore`}
                  width={90}
                  height={30}
                  loading="lazy"
                  className='mx-auto max-h-[35px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300'
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* About Section */}
      <div className='container mt-28'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          {/* Left Column: Image + Companies Tied Up */}
          <div className='flex flex-col gap-12'>
            <div className='relative flex justify-center'>
              <div className='absolute inset-0 bg-primary/5 rounded-[2rem] transform -rotate-3 scale-105 z-0'></div>
              <Image
                src='/images/geo tag/g12.jpeg'
                alt='AI Skill Up Academy training facility Coimbatore — session 12'
                width={600}
                height={500}
                loading="lazy"
                className='rounded-2xl relative z-10 shadow-lg object-cover max-h-[350px] w-full'
              />
            </div>

            {/* Companies Tied Up Section inside Left Column */}
            <div className='text-left'>
              <h5 className='mb-8 font-bold text-gray-400 uppercase tracking-widest text-[11px]'>
                Companies Tied Up with AI Skillup
              </h5>
              <div className='flex flex-wrap items-center gap-10'>
                <a href='https://pixelperfect.co.in/' target='_blank' rel='noopener noreferrer' className='flex items-center justify-center hover:opacity-80 transition-opacity duration-300'>
                  <Image
                    src='/images/pixel-logo-site.png'
                    alt='Pixel Perfect Software Solutions'
                    width={140}
                    height={50}
                    className='object-contain max-h-[45px] w-auto'
                  />
                </a>
                <a href='https://1dot.ai/' target='_blank' rel='noopener noreferrer' className='flex items-center justify-center hover:opacity-80 transition-opacity duration-300'>
                  <Image
                    src='/images/ai logo.webp'
                    alt='1dot.ai — hiring partner of AI Skill Up Academy Coimbatore'
                    width={140}
                    height={50}
                    loading="lazy"
                    className='object-contain max-h-[45px] w-auto'
                  />
                </a>
                <a href='https://caddbimtechnologies.com/' target='_blank' rel='noopener noreferrer' className='flex items-center justify-center hover:opacity-80 transition-opacity duration-300'>
                  <Image
                    src='/images/cadd bim.png'
                    alt='CADD BIM Technologies — hiring partner of AI Skill Up Academy Coimbatore'
                    width={140}
                    height={50}
                    loading="lazy"
                    className='object-contain max-h-[45px] w-auto'
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className='flex flex-col gap-6 text-left'>
            <h6 className='inline-block bg-primary/10 text-primary px-4 py-2 rounded-full w-fit'>
              About AI Skill Up
            </h6>
            <h2 className='leading-[1.2]'>
              We create <span className="text-primary">Industry Ready</span> Engineers
            </h2>
            <p className='max-w-xl'>
              At AI Skill Up, we provide industry-aligned training that turns learners into job‑ready professionals. Our programs combine expert‑led classes, hands‑on projects, mentoring, certifications, internships, and dedicated placement support.
              <br /><br />
              We also deliver corporate upskilling, real‑time workshops, and customized learning paths across in‑demand technologies to help you build a strong, future‑proof career.
            </p>
            <div className='pt-4 flex'>
              <a href="/about" className='bg-primary text-white hover:bg-primary/90 py-3.5 px-8 rounded-full text-[15px] font-semibold transition-all shadow-md active:scale-95 inline-flex items-center gap-2 uppercase tracking-widest'>
                About AI SKILL UP
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.712.288L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies
