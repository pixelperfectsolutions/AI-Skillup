'use client'

import React, { useState } from 'react'
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Icon } from '@iconify/react'

const courses = [
    'Full-Stack Development Using AI',
    'UI and UX Design Course Using AI',
    'AI-Based Mobile App Development',
    'No-Code Development Course',
    'Digital Marketing Course Using AI',
]

const WHATSAPP_NUMBER = '919655422511'

const ContactView = () => {
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
            `*Name:* ${formData.fullname}\n` +
            `*Mobile:* ${formData.mobile}\n` +
            `*Email:* ${formData.email}\n` +
            `*Interested Course:* ${formData.course}`
        )
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    }

    return (
        <>
            <HeroSub
                title="Contact Us"
                subtitle="Get in touch with us — we're here to help you start your AI learning journey."
                breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
            />

            <section className="py-20 bg-gray-50/10">
                <div className="container">
                    {/* Top Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {/* Address Card */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Icon icon="solar:point-on-map-perspective-bold" className="text-3xl" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">Our Location</h4>
                            <p className="text-black/60 leading-relaxed">
                                45, Gokhale Street, Ram Nagar,<br />
                                Near MK Residency, Coimbatore,<br />
                                Tamil Nadu 641009
                            </p>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Icon icon="solar:mailbox-bold" className="text-3xl" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">Email Us</h4>
                            <a href="mailto:info@aiskillup.com" className="text-black/60 hover:text-primary transition-colors block mb-1 font-medium">info@aiskillup.com</a>
                            <p className="text-sm text-black/40">Drop us a line anytime!</p>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Icon icon="solar:phone-bold" className="text-3xl" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">Call Us</h4>
                            <a href="tel:+919655422511" className="text-black/60 hover:text-primary transition-colors block mb-1 font-bold">+91 96554 22511</a>
                            <p className="text-sm text-black/40">Mon - Sat, 10am - 7pm</p>
                        </div>
                    </div>

                    {/* Form & Map Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Form Column */}
                        <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-extrabold text-midnight_text mb-8">Enroll at AI SKILL UP – Apply Today</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-black/70 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        placeholder="Enter Full Name"
                                        className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-black/70 mb-2">Mobile Number</label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            placeholder="Enter Mobile Number"
                                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-black/70 mb-2">Email ID</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter Your Email ID"
                                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-black/70 mb-2">Interested Course</label>
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all bg-white cursor-pointer"
                                        required
                                    >
                                        <option value="">-- Select Course --</option>
                                        {courses.map((c, i) => (
                                            <option key={i} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isFormValid}
                                    className={`flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-[0.98] ${isFormValid
                                        ? 'bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-lg'
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    <Icon icon="tabler:brand-whatsapp" className="text-2xl" />
                                    Request via WhatsApp
                                </button>
                            </form>
                        </div>

                        {/* Map Column */}
                        <div className="h-full min-h-[500px] lg:min-h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.316868602607!2d76.9638168!3d11.0148355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8594767deeaf7%3A0x578b90b22a69fb4c!2sAI%20SKILLUP%20-%20Graphic%2C%20UI%20UX%2C%20FULL%20STACK%20Academy!5e0!3m2!1sen!2sin!4v1773291625999!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '500px' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-2xl"
                            ></iframe>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactView
