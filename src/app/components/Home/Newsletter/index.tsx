import { Icon } from '@iconify/react'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <section className='pb-20'>
      <div className='container'>
        <div className='bg-primary/5 rounded-3xl p-8 lg:p-12 overflow-hidden relative'>
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
            <div>
              <h2 className='mb-6 lg:text-start text-center'>
                Experience the AI Skill Up Lifestyle
              </h2>
              <p className='lg:text-start text-center'>
                Step into a world where creativity meets cutting-edge technology. Our academy is more than just a training center—it's a vibrant hub for innovators. From hands-on workshops to collaborative design sessions, every moment at AI SKILL UP Academy is designed to inspire your best work and prepare you for a high-performance career in the modern industry.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-black/5 shadow-sm">
                  <Icon icon="solar:users-group-rounded-bold" className="text-primary text-xl" />
                  <h6 className="text-midnight_text">9K+ Students</h6>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-black/5 shadow-sm">
                  <Icon icon="solar:check-circle-bold" className="text-secondary text-xl" />
                  <h6 className="text-midnight_text">Live Projects</h6>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-4 pt-12'>
                <div className='rounded-2xl overflow-hidden shadow-xl transform hover:-rotate-2 transition-all duration-500'>
                  <Image
                    src="/images/Aiskillup-welcomepost.jpeg"
                    alt="AI Skill Up Welcome"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className='rounded-2xl overflow-hidden shadow-xl transform hover:rotate-2 transition-all duration-500'>
                  <Image
                    src="/images/Aiskillup-welcomepost1.jpeg"
                    alt="AI Skill Up Workshop"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className='flex items-center'>
                <div className='rounded-2xl overflow-hidden shadow-xl transform hover:rotate-2 transition-all duration-500'>
                  <Image
                    src="/images/Aiskillup-welcomepost2.jpeg"
                    alt="AI Skill Up Academy"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
