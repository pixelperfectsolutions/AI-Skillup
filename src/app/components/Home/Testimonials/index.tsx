'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { TestimonialType } from '@/app/types/testimonial'
import TestimonialSkeleton from '../../Skeleton/Testimonial'

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<TestimonialType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch.')
        const data = await res.json()
        setTestimonial(data.TestimonialData)
      } catch (error) {
        console.error('Error fetching service:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Icon key={i} icon="tabler:star-filled" className="text-xl" />
        ))}
      </div>
    )
  }

  const truncate = (str: string, length: number) => {
    if (str.length > length) {
      return str.substring(0, length) + '...'
    }
    return str
  }

  const MAX_CHAR = 150

  return (
    <section id='testimonial' className="pb-16 pt-8">
      <div className='container'>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className='text-midnight_text mb-4'>What Our Learners Say</h2>
            <p className="text-black/60 text-lg">Real stories from our students about their journey with AI Skill Up.</p>
          </div>

          {/* Google Review Card Summary */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 flex items-center gap-6 min-w-[320px]">
            <div className="bg-[#4285F4]/10 p-3 rounded-xl">
              <Icon icon="logos:google-icon" className="text-3xl" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-bold text-black">5.0</span>
                <div className="flex text-yellow-500 text-sm">
                  {[...Array(5)].map((_, i) => <Icon key={i} icon="tabler:star-filled" />)}
                </div>
              </div>
              <p className="text-sm text-black/50 font-medium">Based on 52 Google Reviews</p>
            </div>
            <a
              href="https://www.google.com/maps/place/Graphic,+UI+UX,+AI+Design+Academy/@11.0148355,76.9638168,17z/data=!4m18!1m9!3m8!1s0x3ba8594767deeaf7:0x578b90b22a69fb4c!2sGraphic,+UI+UX,+AI+Design+Academy!8m2!3d11.0148355!4d76.9638168!9m1!1b1!16s%2Fg%2F11xrc58944!3m7!1s0x3ba8594767deeaf7:0x578b90b22a69fb4c!8m2!3d11.0148355!4d76.9638168!9m1!1b1!16s%2Fg%2F11xrc58944?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto bg-black text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-black/80 transition-all active:scale-95"
            >
              Review
            </a>
          </div>
        </div>

        <Slider {...settings} className="testimonial-slider px-2">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
              <TestimonialSkeleton key={i} />
            ))
            : testimonial.map((items, i) => (
              <div key={i} className="pb-12 pt-6 px-3">
                <a
                  href={items.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='block group bg-white border border-black/10 shadow-sm rounded-2xl p-6 h-full relative transition-all duration-300 hover:shadow-md hover:border-primary/20'
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-1">
                        {renderStars(items.rating)}
                      </div>
                      <Icon icon="logos:google-icon" className="text-xl" />
                    </div>

                    <p className='text-base font-normal text-black/70 italic leading-relaxed mb-6 flex-grow'>
                      "{truncate(items.comment, MAX_CHAR)}"
                    </p>

                    <div className='border-t border-gray-50 pt-4'>
                      <p className='text-lg font-bold text-midnight_text group-hover:text-primary transition-colors'>
                        {items.name}
                      </p>
                      <p className='text-sm font-medium text-black/40'>
                        {items.profession}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </Slider>
      </div>

      <style jsx global>{`
        .testimonial-slider .slick-dots {
          bottom: -20px;
        }
        .testimonial-slider .slick-dots li button:before {
          color: var(--color-primary, #6556ff);
          font-size: 10px;
          opacity: 0.2;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: var(--color-primary, #6556ff);
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

export default Testimonial
