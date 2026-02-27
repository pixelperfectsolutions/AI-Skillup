'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const trainingSessions = [
    '/images/geo tag/g1.jpeg',
    '/images/geo tag/g2.jpeg',
    '/images/geo tag/g3.jpeg',
    '/images/geo tag/g4.jpeg',
    '/images/geo tag/g5.jpeg',
    '/images/geo tag/g6.jpeg',
    '/images/geo tag/g7.jpeg',
    '/images/geo tag/g8.jpeg',
    '/images/geo tag/g9.jpeg',
]

const studentProjects = [
    '/images/geo tag/g10.jpeg',
    '/images/geo tag/g11.jpeg',
    '/images/geo tag/g12.jpeg',
    '/images/geo tag/g13.jpeg',
    '/images/geo tag/g14.jpeg',
    '/images/geo tag/g15.jpeg',
    '/images/geo tag/g16.jpeg',
    '/images/geo tag/g17.jpeg',
    '/images/geo tag/g18.jpeg',
    '/images/geo tag/g19.jpeg',
]

const TrainingGallery = () => {
    const [activeTab, setActiveTab] = useState<'sessions' | 'projects'>('sessions')

    return (
        <section className='pb-24 pt-8' id='gallery'>
            <div className='container'>
                <div className="text-center mb-12">
                    <h2 className='text-midnight_text mb-4'>Our Training Gallery</h2>
                    <p className="text-black/60 text-lg max-w-2xl mx-auto">
                        A glimpse into our vibrant learning ecosystem, featuring hands-on training sessions and remarkable student achievements.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center gap-4 mb-10">
                    <button
                        onClick={() => setActiveTab('sessions')}
                        className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'sessions'
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-white text-black/60 hover:bg-primary/5 border border-black/5'
                            }`}
                    >
                        Training Sessions & Workshops
                    </button>
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'projects'
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-white text-black/60 hover:bg-primary/5 border border-black/5'
                            }`}
                    >
                        Student Projects & Activities
                    </button>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
                    {(activeTab === 'sessions' ? trainingSessions : studentProjects).map((img, i) => (
                        <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                            <Image
                                src={img}
                                alt={`Gallery image ${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
        </section>
    )
}

export default TrainingGallery
