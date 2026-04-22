'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BreadcrumbItem {
    label: string
    href?: string
}

interface HeroSubProps {
    title: string
    subtitle?: string
    breadcrumbs?: BreadcrumbItem[]
    whiteTheme?: boolean
    bgImage?: string
}

const HeroSub: FC<HeroSubProps> = ({ title, subtitle, breadcrumbs, whiteTheme = false, bgImage = "/images/hero-banner-bg.png" }) => {
    if (whiteTheme) {
        return (
            <section
                className="relative flex items-center overflow-hidden lg:mt-24 sm:mt-24 mt-20 bg-white border-b border-gray-100"
                style={{ minHeight: 300 }}
            >
                {/* Decorative shining blobs */}
                <div
                    className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-50"
                    style={{
                        background: 'radial-gradient(circle, rgba(79,128,255,0.08), transparent 70%)',
                        transform: 'translate(-30%, -30%)',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-50"
                    style={{
                        background: 'radial-gradient(circle, rgba(67,198,57,0.08), transparent 70%)',
                        transform: 'translate(30%, 30%)',
                    }}
                />

                {/* Content */}
                <div className="container relative z-10 py-16">
                    {/* Breadcrumb */}
                    {breadcrumbs && breadcrumbs.length > 0 && (
                        <h6
                            aria-label="breadcrumb"
                            className="flex items-center gap-2 mb-6 flex-wrap"
                        >
                            <Link
                                href="/"
                                className="flex items-center gap-1.5 transition-colors duration-200 hover:text-primary text-gray-400"
                            >
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                                </svg>
                                Home
                            </Link>
                            {breadcrumbs.map((crumb, i) => (
                                <React.Fragment key={i}>
                                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" strokeWidth={4} className="text-gray-200">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                    {crumb.href && i < breadcrumbs.length - 1 ? (
                                        <Link
                                            href={crumb.href}
                                            className="transition-colors duration-200 hover:text-primary text-gray-400"
                                        >
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className="text-primary font-black">
                                            {crumb.label}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </h6>
                    )}

                    {/* Title */}
                    <h1 className="mb-6 text-black">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <h5 className="max-w-3xl text-black/60 leading-relaxed border-l-4 border-success pl-6">
                            {subtitle}
                        </h5>
                    )}

                    {/* Decorative line */}
                    <div className="mt-10 flex items-center gap-3">
                        <div className="h-1 w-20 rounded-full bg-primary shadow-lg shadow-primary/20" />
                        <div className="h-1 w-8 rounded-full bg-success/20" />
                        <div className="h-1 w-4 rounded-full bg-primary/10" />
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section
            className="relative flex items-center overflow-hidden lg:mt-24 sm:mt-24 mt-20"
            style={{ minHeight: 400 }}
        >
            {/* Background Image */}
            <Image
                src={bgImage}
                alt="Hero background"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Deep dark navy overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, rgba(7,16,31,0.92) 0%, rgba(13,27,62,0.88) 50%, rgba(10,24,54,0.92) 100%)',
                }}
            />

            {/* Decorative glowing blobs */}
            <div
                className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(79,128,255,0.18), transparent 70%)',
                    transform: 'translate(-30%, -30%)',
                }}
            />
            <div
                className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)',
                    transform: 'translate(30%, 30%)',
                }}
            />

            {/* Content */}
            <div className="container relative z-10 py-20">
                {/* Breadcrumb */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <h6
                        aria-label="breadcrumb"
                        className="flex items-center gap-2 mb-5 flex-wrap"
                    >
                        <Link
                            href="/"
                            className="flex items-center gap-1.5 transition-colors duration-200 hover:text-white"
                            style={{ color: '#a8c8ff' }}
                        >
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                            </svg>
                            Home
                        </Link>
                        {breadcrumbs.map((crumb, i) => (
                            <React.Fragment key={i}>
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth={2.5} style={{ color: 'rgba(168,200,255,0.45)', flexShrink: 0 }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                {crumb.href && i < breadcrumbs.length - 1 ? (
                                    <Link
                                        href={crumb.href}
                                        className="transition-colors duration-200 hover:text-white"
                                        style={{ color: '#a8c8ff' }}
                                    >
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span style={{ color: 'rgba(255,255,255,0.55)' }}>
                                        {crumb.label}
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </h6>
                )}

                {/* Title */}
                <h1
                    className="mb-4"
                    style={{
                        background: 'linear-gradient(135deg, #ffffff 30%, #a8c8ff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <h5 className="max-w-2xl" style={{ color: '#b8c9e8' }}>
                        {subtitle}
                    </h5>
                )}

                {/* Decorative line */}
                <div className="mt-5 flex items-center gap-3">
                    <div
                        className="h-1 w-16 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #4f80ff, #2563eb)' }}
                    />
                    <div
                        className="h-1 w-6 rounded-full"
                        style={{ background: 'rgba(168,200,255,0.3)' }}
                    />
                    <div
                        className="h-1 w-3 rounded-full"
                        style={{ background: 'rgba(168,200,255,0.15)' }}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSub