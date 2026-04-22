'use client'

import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const workshopImages = [
  '/images/workshop/Aiskillup-workshop (1).jpeg',
  '/images/workshop/Aiskillup-workshop (2).jpeg',
  '/images/workshop/Aiskillup-workshop (3).jpeg',
  '/images/workshop/Aiskillup-workshop (4).jpeg',
  '/images/workshop/Aiskillup-workshop (5).jpeg',
  '/images/workshop/Aiskillup-workshop (6).jpeg',
  '/images/workshop/Aiskillup-workshop (7).jpeg',
  '/images/workshop/Aiskillup-workshop (8).jpeg',
]

const WorkshopShowcase = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className='bg-white pt-20 pb-24 scroll-mt-12' id='mentor'>
      <div className='container'>
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className='mb-6'>
            Railway Department <span className="text-primary">Workshop</span>
          </h2>
          <p>
            A streamlined showcase of how AI tools helped the railway team prepare decks and trackers faster, making PowerPoint & Excel work easy in Coimbatore.
          </p>
        </div>

        <div className="relative group">
          <Slider {...settings} className="workshop-slider">
            {workshopImages.map((img, i) => (
              <div key={i} className="px-3 outline-none">
                <div className='relative overflow-hidden rounded-3xl shadow-lg bg-white aspect-[4/3] group-hover:shadow-xl transition-all duration-500'>
                  <Image
                    src={img}
                    alt={`Railway Department Workshop - ${i + 1}`}
                    fill
                    className='object-cover transform hover:scale-110 transition-all duration-700'
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .workshop-slider .slick-dots {
          bottom: -40px;
        }
        .workshop-slider .slick-dots li button:before {
          color: #2D4156;
          font-size: 10px;
          opacity: 0.15;
        }
        .workshop-slider .slick-dots li.slick-active button:before {
          color: #2D4156;
          opacity: 0.8;
        }
      `}</style>
    </section>
  )
}

export default WorkshopShowcase
