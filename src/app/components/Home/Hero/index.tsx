import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  return (
    <section id='home-section' className='bg-slate-gray'>
      <div className='container pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-1 gap-10 items-center'>
          <div className='col-span-6 flex flex-col gap-8'>
            <div className='flex gap-2 mx-auto lg:mx-0 items-center'>
              <div className="bg-success/15 p-1 rounded-full">
                <Icon
                  icon='tabler:check'
                  className='text-success text-sm font-bold'
                />
              </div>
              <p className='text-success text-sm font-semibold'>
                Get 30% off on first enroll
              </p>
            </div>
            <h1 className='text-[#0F172A] lg:text-start text-center font-bold'>
              Top AI-Based Software Training Institute in Coimbatore
            </h1>
            <p className='text-black/70 text-lg lg:text-start text-center max-w-xl'>
              Build skills with our courses and mentor from world-class
              companies.
            </p>
            <div className='flex gap-4 lg:justify-start justify-center mt-4'>
              <Link href='/courses' className='bg-primary text-white hover:bg-primary/90 py-3 px-8 rounded-full text-lg font-semibold transition-all shadow-md active:scale-95 flex items-center gap-2'>
                Explore Courses
                <Icon icon='solar:arrow-right-linear' width={22} height={22} />
              </Link>
              <Link href='tel:+919655422511' className='bg-secondary text-white hover:bg-secondary/90 py-3 px-8 rounded-full text-lg font-semibold transition-all shadow-md active:scale-95 flex items-center gap-2'>
                <Icon icon='solar:phone-bold' width={22} height={22} />
                CALL NOW
              </Link>
            </div>
            <div className='flex items-center gap-10 pt-10 lg:pt-4 flex-wrap'>
              <div className='flex items-center gap-3'>
                <div className="bg-primary/10 p-1.5 rounded-full">
                  <Icon icon="tabler:check" className="text-primary text-xl" />
                </div>
                <p className='text-lg font-semibold text-black/80'>
                  Flexible
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className="bg-primary/10 p-1.5 rounded-full">
                  <Icon icon="tabler:check" className="text-primary text-xl" />
                </div>
                <p className='text-lg font-semibold text-black/80'>
                  Learning path
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className="bg-primary/10 p-1.5 rounded-full">
                  <Icon icon="tabler:check" className="text-primary text-xl" />
                </div>
                <p className='text-lg font-semibold text-black/80'>
                  Community
                </p>
              </div>
            </div>

          </div>
          <div className='col-span-6 flex justify-center'>
            <Image
              src='/images/banner/mahila.webp'
              alt='nothing'
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
