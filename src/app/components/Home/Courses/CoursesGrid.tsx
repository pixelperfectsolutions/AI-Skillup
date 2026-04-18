'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { CourseType } from '@/app/types/course'
import CourseSkeleton from '../../Skeleton/Course'

const CoursesGrid = () => {
  const [courses, setCourses] = useState<CourseType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setCourses(data.CourseData)
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const halfStars = rating % 1 >= 0.5 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStars
    return (
      <div className='flex'>
        {Array.from({ length: fullStars }).map((_, i) => (
          <Icon key={`full-${i}`} icon='tabler:star-filled' className='text-yellow-500 text-xl' />
        ))}
        {halfStars > 0 && <Icon icon='tabler:star-half-filled' className='text-yellow-500 text-xl' />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Icon key={`empty-${i}`} icon='tabler:star-filled' className='text-gray-300 text-xl' />
        ))}
      </div>
    )
  }

  return (
    <section className='pb-20'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <CourseSkeleton key={i} />)
            : courses.map((item, i) => (
                <div key={i} className='bg-white shadow-md rounded-2xl border border-black/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col'>
                  {/* Image */}
                  <div className='relative'>
                    <Image
                      src={item.imgSrc}
                      alt={item.heading}
                      width={480}
                      height={300}
                      className='w-full h-52 object-cover'
                    />
                    <div className='absolute bottom-3 right-3'>
                      <Link
                        href={item.slug ?? '/courses'}
                        className='bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-primary/90 transition-all active:scale-95 inline-flex items-center gap-1.5'
                      >
                        View Course
                        <Icon icon='solar:arrow-right-linear' className='text-base' />
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-5 flex flex-col flex-1'>
                    <Link href={item.slug ?? '/courses'}>
                      <h6 className='text-black font-semibold text-base hover:text-primary transition-colors leading-snug mb-4 capitalize'>
                        {item.heading}
                      </h6>
                    </Link>

                    <Link
                      href='https://www.google.com/search?q=AI+SKILL+UP+Academy+Coimbatore#lrd=0x3ba8594767deeaf7:0x578b90b22a69fb4c,1'
                      target='_blank' 
                      className='flex items-center gap-3 pb-4 border-b border-gray-100 group/rate'>
                      <div className='flex items-center gap-2'>
                        <Icon icon='logos:google-icon' width={18} />
                        <p className='text-red-600 text-xl font-bold'>{item.rating.toFixed(1)}</p>
                      </div>
                      <div className='flex flex-col'>
                        {renderStars(item.rating)}
                        <p className='text-[9px] text-gray-400 font-bold uppercase tracking-widest group-hover/rate:text-primary transition-colors'>Google Rating</p>
                      </div>
                    </Link>

                    <div className='flex justify-between pt-4 mt-auto'>
                      <div className='flex items-center gap-1.5 text-black/70'>
                        <Icon icon='solar:notebook-minimalistic-outline' className='text-primary text-lg' />
                        <span className='text-sm font-medium'>{item.classes} classes</span>
                      </div>
                      <div className='flex items-center gap-1.5 text-black/70'>
                        <Icon icon='solar:users-group-rounded-linear' className='text-primary text-lg' />
                        <span className='text-sm font-medium'>{item.students} students</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesGrid
