'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const courses = [
  'Full-Stack Development Using AI',
  'UI and UX Design Course Using AI',
  'AI-Based Mobile App Development',
  'No-Code Development Course',
  'Digital Marketing Course Using AI',
]

const WHATSAPP_NUMBER = '919655422511'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    mobile: '',
    email: '',
    course: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const isFormValid =
    formData.fullname.trim() !== '' &&
    formData.mobile.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.course !== ''

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Hello AI Skill Up! 👋\n\n` +
      `I am interested in enrolling.\n\n` +
      `Name: ${formData.fullname}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Email: ${formData.email}\n` +
      `Interested Course: ${formData.course}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  return (
    <section id='contact' className='scroll-mt-12 pb-20'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='mb-9 text-midnight_text lg:text-start text-center'>Start Your AI Career Journey Today</h2>
            <div className='relative border px-6 py-8 rounded-2xl shadow-sm bg-white'>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-5 w-full'>

                {/* Full Name */}
                <div>
                  <label htmlFor='fullname' className='pb-2 inline-block text-base font-medium'>
                    Full Name
                  </label>
                  <input
                    id='fullname'
                    type='text'
                    name='fullname'
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder='Enter Full Name'
                    required
                    className='w-full text-base px-4 rounded-2xl py-2.5 border border-solid transition-all duration-500 focus:border-primary focus:outline-0'
                  />
                </div>

                {/* Mobile & Email side by side */}
                <div className='sm:flex gap-6'>
                  <div className='flex-1'>
                    <label htmlFor='mobile' className='pb-2 inline-block text-base font-medium'>
                      Mobile Number
                    </label>
                    <input
                      id='mobile'
                      type='tel'
                      name='mobile'
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder='Enter Mobile Number'
                      required
                      className='w-full text-base px-4 rounded-2xl py-2.5 border border-solid transition-all duration-500 focus:border-primary focus:outline-0'
                    />
                  </div>
                  <div className='flex-1 mt-5 sm:mt-0'>
                    <label htmlFor='email' className='pb-2 inline-block text-base font-medium'>
                      Email Address
                    </label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter Your Email ID'
                      required
                      className='w-full text-base px-4 rounded-2xl py-2.5 border border-solid transition-all duration-500 focus:border-primary focus:outline-0'
                    />
                  </div>
                </div>

                {/* Course Dropdown */}
                <div>
                  <label htmlFor='course' className='pb-2 inline-block text-base font-medium'>
                    Your Interested Course
                  </label>
                  <select
                    id='course'
                    name='course'
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className='w-full text-base px-4 rounded-2xl py-2.5 border border-solid transition-all duration-500 focus:border-primary focus:outline-0 bg-white cursor-pointer'
                  >
                    <option value=''>-- Select a Course --</option>
                    {courses.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <div className='mt-2'>
                  <button
                    type='submit'
                    disabled={!isFormValid}
                    className={`inline-flex items-center gap-2 border leading-none px-8 text-lg font-semibold py-3.5 rounded-full transition-all duration-300 w-full justify-center
                      ${!isFormValid
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-200'
                        : 'bg-[#25D366] border-[#25D366] text-white hover:bg-[#1ebe5d] cursor-pointer shadow-md active:scale-95'
                      }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='flex justify-center'>
            <Image
              src='/images/apply form-1.png'
              alt='Contact Us'
              width={600}
              height={500}
              className='rounded-3xl shadow-lg object-cover w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
