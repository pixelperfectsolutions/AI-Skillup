'use client'

import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const faqs = [
  {
    q: "Which is the best AI training institute in Coimbatore?",
    a: "AI Skill Up Academy is the top-rated AI-based software training institute in Coimbatore, offering industry-aligned courses with 100% placement support and hands-on training with modern AI tools."
  },
  {
    q: "Is there a No-Code course in Coimbatore?",
    a: "Yes, AI Skill Up Academy offers a specialized No-Code development course in Coimbatore that teaches students how to build professional apps and automate workflows using AI tools like Bubble and FlutterFlow without writing code."
  },
  {
    q: "Does AI Skill Up offer placement support?",
    a: "Absolutely. We provide 100% placement assistance, including ATS-optimized resume building, LinkedIn profile review, and multiple rounds of mock interviews with industry experts from our 200+ hiring partners."
  },
  {
    q: "What courses does AI Skill Up offer?",
    a: "We offer pre-packaged and customized courses in Full Stack Development, UI/UX Design using AI, No-Code AI Automation, Digital Marketing using AI, Python Programming, and Data Science."
  },
  {
    q: "Where is AI Skill Up located?",
    a: "Our academy is centrally located at 45, Gokhale Street, Ram Nagar, Near MK Residency, Coimbatore, Tamil Nadu 641009."
  },
  {
    q: "Do you offer online training?",
    a: "Yes, we provide flexible learning options. You can choose either on-premise classroom training at our Coimbatore hub or join our instructor-led live online batches from anywhere."
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-slate-50 border-t border-gray-100" id="faq">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-midnight_text mb-6">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <p className="text-lg text-black/60 font-medium">
            Everything you need to know about AI software training in Coimbatore.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-8 py-6 flex items-center justify-between"
              >
                <span className="text-xl font-bold text-midnight_text leading-tight">
                  {faq.q}
                </span>
                <span className={`transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <Icon icon="solar:alt-arrow-down-bold" className="text-primary text-2xl" />
                </span>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-black/70 text-lg leading-relaxed border-t border-gray-50 pt-6">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
