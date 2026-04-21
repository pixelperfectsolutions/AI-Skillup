'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { blogs } from '@/data/blogs'

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-[#F6FAFF] pt-32 pb-24">
      {/* Header Section */}
      <section className="container mb-16 text-center">
        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
          Academy Insights
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-midnight_text mb-6">
          Latest from <span className="text-primary italic">AI SKILL UP</span> Blog
        </h1>
        <p className="text-lg text-black/60 max-w-2xl mx-auto leading-relaxed">
          Stay ahead of the curve with our weekly insights on AI, No-Code development, 
          and modern software engineering trends in Coimbatore.
        </p>
      </section>

      {/* Blog Feed */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {blogs.map((post, index) => (
            <article 
              key={post.slug} 
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <Icon icon="solar:calendar-linear" /> {post.date}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <Icon icon="solar:clock-circle-linear" /> {post.readingTime}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-midnight_text mb-6 group-hover:text-primary transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-gray-500 text-lg leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon icon="solar:user-bold" />
                    </div>
                    <span className="text-sm font-bold text-midnight_text">{post.author}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 group/btn"
                  >
                    Read Full Article
                    <Icon icon="solar:arrow-right-up-bold" className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>
    </main>
  )
}

export default BlogPage
