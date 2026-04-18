'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CourseType } from '@/app/types/course'
import CourseSkeleton from '../../Skeleton/Course'

const Courses = () => {
  const [course, setCourse] = useState<CourseType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        // Exclude Python and Data Science – they have dedicated hero pages
        // Also restore original images for Home Page slider as requested
        const filtered = (data.CourseData as CourseType[])
          .filter(
            (c) =>
              !c.slug?.includes('python-course') &&
              !c.slug?.includes('data-science-course')
          )
          .map((c) => {
            let originalImg = c.imgSrc;
            if (c.slug?.includes('full-stack')) originalImg = '/images/course-1.png';
            if (c.slug?.includes('ui-ux')) originalImg = '/images/course-2.png';
            if (c.slug?.includes('mobile-app')) originalImg = '/images/course-3.png';
            if (c.slug?.includes('no-code')) originalImg = '/images/course-4.png';
            if (c.slug?.includes('digital-marketing')) originalImg = '/images/course-5.png';
            return { ...c, imgSrc: originalImg };
          });
        setCourse(filtered)
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
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
    const fullStars = Math.floor(rating)
    const halfStars = rating % 1 >= 0.5 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStars

    return (
      <div className='flex'>
        {Array.from({ length: fullStars }).map((_, i) => (
          <Icon
            key={`full-${i}`}
            icon='tabler:star-filled'
            className='text-yellow-500 text-xl inline-block'
          />
        ))}
        {halfStars > 0 && (
          <Icon
            key='half'
            icon='tabler:star-half-filled'
            className='text-yellow-500 text-xl inline-block'
          />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Icon
            key={`empty-${i}`}
            icon='tabler:star-filled'
            className='text-gray-400 text-xl inline-block'
          />
        ))}
      </div>
    )
  }

  return (
    <section id='courses' className='scroll-mt-12 pb-20'>
      <div className='container'>
        <div className='sm:flex justify-between items-center mb-10'>
          <h2 className='text-midnight_text mb-5 sm:mb-0 capitalize'>
            Popular courses
          </h2>
          <Link
            href={'/courses'}
            className='text-primary text-lg font-medium hover:underline duration-500'>
            Explore all courses&nbsp;&gt;
          </Link>
        </div>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
              <CourseSkeleton key={i} />
            ))
            : course.map((items, i) => (
              <div key={i}>
                <div className='bg-white m-3 px-3 pt-3 pb-12 shadow-md rounded-2xl h-full border border-black/10 capitalize'>
                  <div className='relative rounded-3xl'>
                    <div className='rounded-2xl'>
                      <Image
                        src={items.imgSrc}
                        alt='course-image'
                        width={389}
                        height={262}
                        className='w-full rounded-2xl'
                      />
                    </div>
                    <div className='absolute right-5 -bottom-4'>
                      <Link
                        href={items.slug || '/courses'}
                        className='bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:bg-primary/90 transition-all active:scale-95 inline-flex items-center gap-1.5'
                      >
                        View Course
                        <Icon icon='solar:arrow-right-linear' className='text-base' />
                      </Link>
                    </div>
                  </div>

                  <div className='px-3 pt-6'>
                    <Link href='#'>
                      <h6 className='text-black max-w-75% inline-block hover:text-primary'>
                        {items.heading}
                      </h6>
                    </Link>
                    <Link
                      href='https://www.google.com/search?q=AI+SKILL+UP+Academy+Coimbatore#lrd=0x3ba8594767deeaf7:0x578b90b22a69fb4c,1'
                      target='_blank'
                      className='flex justify-between items-center py-6 border-b group/rating'>
                      <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                          <Icon icon='logos:google-icon' width={20} />
                          <p className='text-red-700 text-2xl font-bold'>
                            {items.rating.toFixed(1)}
                          </p>
                        </div>
                        <div className='flex flex-col'>
                          <div className='flex'>
                            {renderStars(items.rating)}
                          </div>
                          <p className='text-[10px] text-gray-400 font-bold uppercase tracking-wider group-hover/rating:text-primary transition-colors'>
                            Google Rating
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div className='flex justify-between pt-6'>
                      <div className='flex gap-4'>
                        <Icon
                          icon='solar:notebook-minimalistic-outline'
                          className='text-primary text-xl inline-block me-2'
                        />
                        <p className='text-base font-medium text-black/75'>
                          {items.classes} classes
                        </p>
                      </div>
                      <div className='flex gap-4'>
                        <Icon
                          icon='solar:users-group-rounded-linear'
                          className='text-primary text-xl inline-block me-2'
                        />
                        <p className='text-base font-medium text-black/75'>
                          {items.students} students
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  )
}

export default Courses
