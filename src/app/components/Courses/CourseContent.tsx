'use client'

import React, { useState } from 'react'
import { CourseType } from '@/app/types/course'
import { TestimonialType } from '@/app/types/testimonial'
import FAQSection from '@/app/components/Home/FAQSection'
import Placement from '@/app/components/Home/Placement'
import Testimonials from '@/app/components/Home/Testimonials'
import CoursesGrid from '@/app/components/Home/Courses/CoursesGrid'
import { Icon } from '@iconify/react'
import Link from 'next/link'

type Props = {
  course: CourseType
  allCourses: CourseType[]
  testimonialData: TestimonialType[]
}

export default function CourseContent({ course, allCourses, testimonialData }: Props) {
  const [activeTab, setActiveTab] = useState(0)
  const [activeSyllabusSection, setActiveSyllabusSection] = useState(0)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Standardized defaults
  const whyChooseDefault = {
    marketDemand: "The demand for AI-integrated technical roles is growing at 35% year-over-year.",
    salaryInsights: "Professionals with these skills earn 40% higher than traditional roles.",
    careerRoles: ["Senior AI Developer", "Solution Architect", "Technical Lead"]
  }

  const defaultSyllabus = [
    {
      tabName: 'Foundations',
      sections: [
        { title: "Module 1: Getting Started", modules: ["Fundamental concepts", "Installation & Setup", "Project Structure"] }
      ]
    },
    {
      tabName: 'Advanced',
      sections: [
        { title: "Module 2: Mastery", modules: ["Advanced architecture", "AI System Integration", "Deployment & Optimization"] }
      ]
    }
  ]

  const syllabus = course.syllabus || defaultSyllabus

  return (
    <main className="bg-white">
      {/* 0. Inquiry Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsPopupOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white animate-in zoom-in-95 duration-300">
            <div className="p-10 md:p-12 relative bg-white">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-8 right-8 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 transition-colors"
              >
                <Icon icon="material-symbols:close-rounded" width={24} />
              </button>

              <div className="mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">Enrollment Open</span>
                <h2 className="text-3xl font-black text-black mb-2">Book Your Slot</h2>
                <p className="text-black/50 font-bold">Interested in {course.heading}? Leave your details and get instant counseling.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const phone = formData.get('phone');
                const selectedCourse = formData.get('course');
                const message = `Course Enrollment Inquiry\nName: ${name}\nPhone: ${phone}\nCourse: ${selectedCourse}`;
                window.open(`https://wa.me/919655422511?text=${encodeURIComponent(message)}`, '_blank');
                setIsPopupOpen(false);
              }}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" required className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none font-bold transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                  <input type="tel" name="phone" placeholder="+91 00000 00000" required className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none font-bold transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Confirm Course</label>
                  <select 
                    name="course" 
                    required 
                    defaultValue={course.heading} 
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white outline-none font-bold transition-all appearance-none cursor-pointer"
                  >
                    {allCourses.map((c, i) => (
                      <option key={i} value={c.heading}>{c.heading.replace(' Course in Coimbatore', '')}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 py-5 rounded-xl text-white font-black text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 mt-6">
                  <Icon icon="logos:whatsapp-icon" width={24} className="brightness-0 invert" />
                  CONFIRM ON WHATSAPP
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white text-black py-20 lg:py-24 border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-success/10 rounded-full blur-[100px] -ml-24 -mb-24"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="flex flex-wrap gap-3 mb-8">
                 <div className="flex gap-2 items-center bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                    <Icon icon='tabler:star-filled' className='text-primary text-xs' />
                    <p className="text-primary text-xs font-black uppercase tracking-widest">
                      {course.aiPositioning || "AI-Powered Training"}
                    </p>
                 </div>
                 <div className="flex gap-2 items-center bg-success/5 px-4 py-2 rounded-full border border-success/10">
                    <Icon icon='solar:star-bold' className='text-success text-xs' />
                    <p className="text-success text-xs font-black uppercase tracking-widest">
                      Google Rating 5.0
                    </p>
                 </div>
               </div>
               
               <h1 className="text-4xl lg:text-7xl font-black mb-8 leading-tight text-black">
                 {course.heading}
               </h1>
               <p className="text-xl lg:text-2xl text-black/70 font-bold mb-10 max-w-2xl border-l-4 border-success pl-6">
                 {course.placementPromise || "Master industry-standard tools with 100% placement support in Coimbatore."}
               </p>
               <div className="flex flex-wrap gap-5">
                  <button 
                    onClick={() => setIsPopupOpen(true)}
                    className="bg-primary text-white hover:bg-primary/90 py-5 px-10 rounded-full text-lg font-black transition-all flex items-center gap-3 uppercase tracking-widest shadow-xl shadow-primary/20"
                  >
                     Enroll Now
                     <Icon icon="solar:arrow-right-up-bold" width={22} />
                  </button>
                  <button 
                    onClick={() => setIsPopupOpen(true)}
                    className="bg-success text-white hover:bg-success/90 py-5 px-10 rounded-full text-lg font-black transition-all flex items-center gap-3 uppercase tracking-widest shadow-xl shadow-success/20"
                  >
                     Book Free Demo
                  </button>
               </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-3 scale-105"></div>
               <img src={course.imgSrc} alt={course.heading} className="relative z-10 w-full h-auto rounded-[3rem] shadow-2xl border border-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why This Course */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
              Why Choose AI Skill Up for <span className="text-primary italic">{course.heading}</span>?
            </h2>
            <p className="text-black/60 font-bold max-w-xl mx-auto text-lg underline decoration-success decoration-2 underline-offset-4 italic">Gain a competitive edge in Coimbatore's booming tech landscape with our 100% placement-oriented training.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "Market Demand", desc: course.whyChoose?.marketDemand || whyChooseDefault.marketDemand, icon: "solar:graph-up-bold", color: "primary" },
               { title: "Salary Insights", desc: course.whyChoose?.salaryInsights || whyChooseDefault.salaryInsights, icon: "solar:wad-of-money-bold", color: "success" },
               { title: "Career Roles", roles: course.whyChoose?.careerRoles || whyChooseDefault.careerRoles, icon: "solar:user-speak-bold", color: "primary" }
             ].map((item, i) => (
               <div key={i} className={`p-10 rounded-[2.5rem] border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group`}>
                  <div className={`w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-sm`}>
                    <Icon icon={item.icon} width={28} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-black">{item.title}</h3>
                  {item.desc ? (
                    <p className="text-black/70 font-bold leading-relaxed">{item.desc}</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                       {item.roles?.map((role, j) => (
                         <span key={j} className="text-[10px] font-black bg-success/10 text-success px-4 py-1.5 rounded-full border border-success/10 uppercase tracking-widest">{role}</span>
                       ))}
                    </div>
                  )}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 2.5 Detailed Course Overview (SEO SECTION) */}
      {course.longFormContent && course.longFormContent.length > 0 && (
        <section className="py-24 bg-slate-50/50 border-t border-gray-100">
          <div className="container max-w-5xl">
            <div className="text-left mb-16">
               <h2 className="text-3xl lg:text-4xl font-black text-black mb-6 uppercase tracking-wider">Expert Guide to Mastering <span className="text-primary italic">{course.name}</span></h2>
               <div className="h-2 w-24 bg-success rounded-full mb-8"></div>
            </div>
            <div className="space-y-8">
               {course.longFormContent.map((para, i) => (
                 <p key={i} className="text-lg md:text-xl text-black/70 leading-relaxed font-bold border-l-4 border-primary/20 pl-8">
                   {para}
                 </p>
               ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Course Syllabus */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-4xl lg:text-5xl font-black mb-6 italic underline decoration-success decoration-4 underline-offset-8 uppercase leading-tight text-black">Expert-Led <span className="text-primary not-italic">Curriculum</span></h2>
             <p className="text-lg text-black/60 font-medium italic underline decoration-success decoration-2 underline-offset-4">Comprehensive industry-aligned content covering everything from scratch to AI integration.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tabs Header */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
               {syllabus.map((tab, i) => (
                 <button 
                   key={i}
                   onClick={() => { setActiveTab(i); setActiveSyllabusSection(0); }}
                   className={`px-8 py-4 rounded-2xl font-black text-lg transition-all ${activeTab === i ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' : 'bg-white text-gray-400 hover:bg-gray-100 border border-gray-100'}`}
                 >
                   {tab.tabName}
                 </button>
               ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
               {syllabus[activeTab].sections.map((section, i) => (
                 <div key={i} className="bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button 
                      onClick={() => setActiveSyllabusSection(activeSyllabusSection === i ? -1 : i)}
                      className={`w-full text-left px-8 py-6 flex items-center justify-between transition-colors ${activeSyllabusSection === i ? 'bg-primary/5 text-primary' : 'hover:bg-gray-50'}`}
                    >
                       <h4 className="text-xl font-black flex items-center gap-4 text-black">
                         <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${activeSyllabusSection === i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>{i+1}</span>
                         {section.title}
                       </h4>
                       <Icon icon={activeSyllabusSection === i ? "solar:minus-circle-bold" : "solar:add-circle-bold"} width={24} className={activeSyllabusSection === i ? 'text-primary' : 'text-gray-400'} />
                    </button>
                    {activeSyllabusSection === i && (
                      <div className="p-8 bg-white border-t border-gray-50 animate-in fade-in slide-in-from-top-4 duration-300">
                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {section.modules.map((module, j) => (
                              <li key={j} className="flex items-center gap-4 text-black/70 font-bold group">
                                 <Icon icon="solar:check-circle-bold" className="text-success group-hover:scale-125 transition-transform shrink-0" />
                                 {module}
                              </li>
                            ))}
                         </ul>
                      </div>
                    )}
                 </div>
               ))}
            </div>
            
            <div className="mt-12 text-center">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20"
              >
                 <Icon icon="solar:file-download-bold" width={24} />
                 DOWNLOAD FULL SYLLABUS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tools & Technologies Covered + Detailed Descriptions */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-20">
             <h2 className="text-3xl lg:text-4xl font-black text-black mb-6 uppercase tracking-wider">The Professional <span className="text-primary italic">Tool Stack</span></h2>
             <p className="text-black/50 font-bold max-w-2xl mx-auto text-lg underline decoration-success decoration-2 underline-offset-4">We don't just teach the software; we master the ecosystem used by industry leaders in Coimbatore.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-24">
             {(course.tools || [
               { name: 'Git', icon: 'logos:git-icon' },
               { name: 'VS Code', icon: 'logos:visual-studio-code' },
               { name: 'Figma', icon: 'logos:figma' }
             ]).map((tool, i) => (
               <div key={i} className="flex flex-col items-center gap-4 group bg-slate-50 p-8 rounded-3xl border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all w-32 md:w-40">
                  <Icon icon={tool.icon} className="w-12 h-12 transition-transform group-hover:scale-125" />
                  <p className="font-black text-[10px] uppercase tracking-widest text-black/60 group-hover:text-primary">{tool.name}</p>
               </div>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {(course.tools || []).map((tool, i) => (
               <div key={i} className="bg-slate-50/50 p-10 rounded-[2.5rem] border border-gray-100 flex flex-col gap-4">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon icon={tool.icon} className="w-8 h-8" />
                    <h4 className="text-xl font-black text-black">{tool.name} in {course.heading}</h4>
                  </div>
                  <p className="text-black/60 font-bold leading-relaxed italic border-l-4 border-success pl-4">
                    Mastering {tool.name} is essential for {course.heading}. At AI Skill Up, we focus on hands-on practicals ensuring you can build industry-grade projects with high efficiency and collaborative workflows.
                  </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Projects Section */}
      <section className="py-24 bg-success relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]"></div>
        <div className="container relative z-10">
           <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl text-white">
                 <h2 className="text-4xl lg:text-5xl font-black mb-6 italic underline decoration-white decoration-4 underline-offset-8 text-white uppercase leading-tight">Build a Killer <span className="text-white not-italic underline-none">Portfolio</span></h2>
                 <p className="text-lg text-white font-bold leading-relaxed italic">
                   Work on real-world industry use cases specifically designed for Coimbatore's competitive software market.
                 </p>
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(course.projects || [
                { title: "AI-Powered Solution", description: "Develop a robust system with integrated AI modules focused on real business impact." },
                { title: "Enterprise Application", description: "Design and build a responsive analytics platform with modern architecture." }
              ]).map((proj, i) => (
                <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-white/10 hover:shadow-2xl transition-all group">
                   <div className="w-16 h-16 bg-primary/10 text-primary rounded-[20px] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <Icon icon="solar:folder-path-connect-bold" width={32} />
                   </div>
                   <h3 className="text-2xl font-black mb-4 text-black">{proj.title}</h3>
                   <p className="text-black/60 leading-relaxed font-black">
                     {proj.description}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. Placement Support */}
      <Placement />

      {/* 7. Pricing / Combos Section */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 italic underline decoration-primary decoration-4 underline-offset-8 uppercase leading-tight text-black">Master <span className="text-success not-italic">Combos</span></h2>
            <p className="text-lg text-black/60 font-medium italic underline decoration-success decoration-2 underline-offset-4">Accelerate your career growth with our special dual-certification tracks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {(course.combos || [
                { title: "Python + AI Data Science", level: "Data Track", duration: "90 Days", learners: "1800+", price: "14,500" },
                { title: "Python + AI Full Stack", level: "Dev Track", duration: "120 Days", learners: "2100+", price: "18,000" },
                { title: "Python + Machine Learning", level: "AI Track", duration: "60 Days", learners: "950+", price: "12,500" }
             ]).map((combo, i) => (
               <div key={i} className="bg-white rounded-[3rem] border border-gray-200 shadow-sm hover:shadow-2xl transition-all group p-10 flex flex-col h-full overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5 -mr-8 -mt-8 rotate-12 group-hover:rotate-0 transition-transform">
                     <Icon icon="solar:star-shine-bold" width={100} className="text-success" />
                  </div>
                  <div className="text-[10px] font-black bg-success/10 text-success px-4 py-1.5 rounded-full w-fit mb-8 uppercase tracking-widest border border-success/10">{combo.level}</div>
                  <h3 className="text-2xl font-black text-black mb-6">{combo.title}</h3>
                  <div className="flex items-center gap-6 text-gray-400 mb-10 border-b border-gray-50 pb-8 mt-auto">
                      <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                        <Icon icon="solar:clock-circle-bold" width={18} className="text-primary/40" />
                        {combo.duration}
                      </div>
                      <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                        <Icon icon="solar:users-group-rounded-bold" width={18} className="text-primary/40" />
                        {combo.learners}
                      </div>
                  </div>
                  <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Fee Starts From</p>
                        <p className="text-3xl font-black text-black leading-none">₹{combo.price}</p>
                      </div>
                      <button 
                        onClick={() => setIsPopupOpen(true)}
                        className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center group-hover:bg-success transition-all hover:scale-110 active:scale-95 shadow-xl shadow-primary/20"
                      >
                        <Icon icon="solar:arrow-right-bold" width={24} />
                      </button>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 8. Student Testimonials */}
      <Testimonials initialData={testimonialData} />

      {/* 9. FAQ Section */}
      <FAQSection items={course.faqs} />

      {/* Related AI Courses */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container">
           <div className="flex justify-between items-center mb-16 text-black">
              <h2 className="text-3xl lg:text-4xl font-black leading-tight">Related AI <span className="text-primary italic underline decoration-success decoration-4 underline-offset-8">Courses</span></h2>
              <Link href="/courses" className="text-primary font-black uppercase tracking-widest text-sm hover:underline flex items-center gap-2">
                View All <Icon icon="solar:alt-arrow-right-bold" />
              </Link>
           </div>
           <CoursesGrid initialData={allCourses.filter(c => c.slug !== course.slug).slice(0, 3)} />
        </div>
      </section>

      {/* Final Inquiry CTA */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white text-center relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.1),transparent)]"></div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 relative z-10 italic">Ready to transform your <span className="text-white not-italic border-b-8 border-white underline-offset-12">career?</span></h2>
            <p className="text-xl lg:text-2xl text-white/80 mb-12 relative z-10 font-bold">Join Coimbatore's leading AI-Native academy today and bridge the gap to success.</p>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-white text-primary py-6 px-16 rounded-full text-xl font-black uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-2 relative z-10"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
