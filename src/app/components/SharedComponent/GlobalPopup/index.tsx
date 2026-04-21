'use client'

import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { CourseData } from '@/data/siteData'

export default function GlobalPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if it's already been shown in this session
    const shown = sessionStorage.getItem('popup_shown')
    
    if (!shown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('popup_shown', 'true')
      }, 7000) // 7 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-500" 
        onClick={() => setIsOpen(false)}
      ></div>
      
      <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white animate-in zoom-in-95 duration-500">
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-success/10 rounded-full blur-3xl"></div>

        <div className="p-8 md:p-10 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all border border-slate-100"
          >
            <Icon icon="material-symbols:close-rounded" width={24} />
          </button>

          <div className="mb-8">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                   <Icon icon="solar:globus-bold" width={20} />
                </div>
                <span className="px-3 py-1 rounded-full bg-success/10 text-success text-[10px] font-black uppercase tracking-widest border border-success/10">Limited Seats Available</span>
             </div>
             <h2 className="text-3xl font-black text-black">Transform Your Career</h2>
             <p className="text-black/50 font-bold">Leave your details for a <span className="text-primary italic">Free Career Counseling</span> session.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const course = formData.get('course');
            const message = `Website Inquiry\nName: ${name}\nPhone: ${phone}\nInterested Course: ${course}`;
            window.open(`https://wa.me/919655422511?text=${encodeURIComponent(message)}`, '_blank');
            setIsOpen(false);
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <Icon icon="solar:user-bold" className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" width={18} />
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    required 
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:bg-white outline-none font-bold transition-all text-slate-700" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <div className="relative">
                  <Icon icon="solar:phone-bold" className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" width={18} />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="+91 00000 00000" 
                    required 
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:bg-white outline-none font-bold transition-all text-slate-700" 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Course</label>
              <div className="relative">
                <Icon icon="solar:folder-open-bold" className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" width={18} />
                <select 
                  name="course" 
                  required 
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:bg-white outline-none font-bold transition-all text-slate-700 appearance-none cursor-pointer"
                >
                  <option value="">Select Your Course</option>
                  {CourseData.map((course, i) => (
                    <option key={i} value={course.heading}>{course.heading.replace(' Course in Coimbatore', '')}</option>
                  ))}
                </select>
                <Icon icon="solar:alt-arrow-down-bold" className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" width={16} />
              </div>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-primary/90 py-5 rounded-2xl text-white font-black text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 mt-4 group">
              <Icon icon="logos:whatsapp-icon" width={24} className="brightness-0 invert p-0.5" />
              TALK TO OUR EXPERT
            </button>
          </form>

          <p className="mt-8 text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
             Certified Training • 100% Placement Support
          </p>
        </div>
      </div>
    </div>
  )
}
