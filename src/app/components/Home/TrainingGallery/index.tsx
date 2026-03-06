'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

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
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const activeImages = activeTab === 'sessions' ? trainingSessions : studentProjects

    const openLightbox = (index: number) => {
        setActiveIndex(index)
        setLightboxOpen(true)
    }

    const closeLightbox = () => setLightboxOpen(false)

    const goPrev = useCallback(() => {
        setActiveIndex(i => (i - 1 + activeImages.length) % activeImages.length)
    }, [activeImages.length])

    const goNext = useCallback(() => {
        setActiveIndex(i => (i + 1) % activeImages.length)
    }, [activeImages.length])

    // Keyboard navigation
    useEffect(() => {
        if (!lightboxOpen) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowLeft') goPrev()
            if (e.key === 'ArrowRight') goNext()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [lightboxOpen, goPrev, goNext])

    // Prevent body scroll when modal open
    useEffect(() => {
        document.body.style.overflow = lightboxOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [lightboxOpen])

    return (
        <>
            <section className='pb-24 pt-8' id='gallery'>
                <div className='container'>
                    <div className="text-center mb-12">
                        <h2 className='text-midnight_text mb-4'>Our Training Gallery</h2>
                        <p className="text-black/60 text-lg max-w-2xl mx-auto">
                            A glimpse into our vibrant learning ecosystem, featuring hands-on training sessions and remarkable student achievements.
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
                        <button
                            onClick={() => setActiveTab('sessions')}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${activeTab === 'sessions'
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-white text-black/60 hover:bg-primary/5 border border-black/5'
                                }`}
                        >
                            Training Sessions &amp; Workshops
                        </button>
                        <button
                            onClick={() => setActiveTab('projects')}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${activeTab === 'projects'
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-white text-black/60 hover:bg-primary/5 border border-black/5'
                                }`}
                        >
                            Student Projects &amp; Activities
                        </button>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
                        {activeImages.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => openLightbox(i)}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in w-full"
                            >
                                <Image
                                    src={img}
                                    alt={`Gallery image ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                                        <Icon icon="solar:maximize-square-bold" width={22} />
                                    </div>
                                </div>
                                {/* Image counter badge */}
                                <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {i + 1} / {activeImages.length}
                                </div>
                            </button>
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

            {/* ===== Lightbox Modal ===== */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
                    onClick={closeLightbox}
                >
                    {/* Modal content — stop click propagation so clicking image doesn't close */}
                    <div
                        className="relative w-full max-w-5xl mx-4 flex flex-col items-center"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <Icon icon="solar:close-circle-bold" width={36} />
                        </button>

                        {/* Counter */}
                        <div className="absolute -top-12 left-0 text-white/60 text-sm font-semibold">
                            {activeIndex + 1} / {activeImages.length}
                        </div>

                        {/* Image */}
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/10' }}>
                            <Image
                                src={activeImages[activeIndex]}
                                alt={`Gallery image ${activeIndex + 1}`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 80vw"
                                priority
                            />
                        </div>

                        {/* Prev / Next Buttons */}
                        <button
                            onClick={goPrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-11 h-11 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                            aria-label="Previous"
                        >
                            <Icon icon="solar:arrow-left-bold" width={22} />
                        </button>
                        <button
                            onClick={goNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-11 h-11 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                            aria-label="Next"
                        >
                            <Icon icon="solar:arrow-right-bold" width={22} />
                        </button>

                        {/* Thumbnail Strip */}
                        <div className="flex gap-2 mt-4 overflow-x-auto pb-1 max-w-full">
                            {activeImages.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`flex-shrink-0 relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-200 ${i === activeIndex
                                        ? 'ring-2 ring-primary ring-offset-2 ring-offset-black/80 scale-110'
                                        : 'opacity-50 hover:opacity-80'
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumb ${i + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TrainingGallery
