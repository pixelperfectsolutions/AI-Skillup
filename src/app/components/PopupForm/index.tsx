'use client'

import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const PopupForm = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Validation
        if (!formData.name || !formData.phone) {
            alert('Please fill in your name and phone number')
            return
        }

        const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nCourse: ${formData.course || 'Select Interested Course'}`
        const whatsappUrl = `https://wa.me/919655422511?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true)
            // Small delay to trigger animation
            setTimeout(() => setIsVisible(true), 10)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    const closePopup = () => {
        setIsVisible(false)
        setTimeout(() => setIsOpen(false), 300)
    }

    if (!isOpen) return null

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closePopup}></div>

            <div className={`relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-500 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-90 translate-y-12'}`}>
                {/* Close Button */}
                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors z-10"
                >
                    <Icon icon="material-symbols:close-rounded" width={24} />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Image/Decoration Section */}
                    <div className="hidden md:flex md:w-1/3 bg-primary bg-gradient-to-br from-primary to-blue-600 p-8 flex-col justify-end text-white">
                        <div className="mb-4 bg-white/20 p-3 rounded-2xl w-fit">
                            <Icon icon="solar:rocket-bold-duotone" width={40} />
                        </div>
                        <h3 className="text-2xl font-black leading-tight">Launch Your Career</h3>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-8 md:p-10">
                        <div className="mb-8">
                            <h2 className="text-3xl font-black text-gray-900 mb-2">Apply Now</h2>
                            <p className="text-gray-500 font-medium font-bold">Get 30% off on first enroll</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium text-gray-900"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium text-gray-900"
                                />
                            </div>
                            <div>
                                <select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleInputChange}
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium text-gray-500 focus:text-gray-900"
                                >
                                    <option value="">Select Interested Course</option>
                                    <option>Full-Stack Development</option>
                                    <option>UI & UX Design</option>
                                    <option>Mobile App Development</option>
                                    <option>No-Code Development</option>
                                    <option>Digital Marketing</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-6">
                                Submit Application
                                <Icon icon="solar:arrow-right-up-bold" width={20} />
                            </button>
                        </form>

                        <p className="mt-6 text-center text-gray-400 text-xs font-medium">
                            By submitting, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms</Link> & <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupForm
