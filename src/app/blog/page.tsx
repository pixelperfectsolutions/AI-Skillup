import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { blogs } from '@/data/blogs'
import HeroSub from "@/app/components/SharedComponent/HeroSub"

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-white pb-24">
      <HeroSub 
        title="Latest from AI SKILL UP Blog"
        subtitle="Stay ahead of the curve with our weekly insights on AI, No-Code development, and modern software engineering trends in Coimbatore."
        breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
      />


      {/* Blog Feed */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                  <h6 className="bg-white/90 backdrop-blur-md text-primary px-4 py-2 rounded-2xl shadow-sm">
                    {post.category}
                  </h6>
                </div>
              </div>

              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h6 className="text-gray-400 flex items-center gap-1">
                    <Icon icon="solar:calendar-linear" /> {post.date}
                  </h6>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <h6 className="text-gray-400 flex items-center gap-1">
                    <Icon icon="solar:clock-circle-linear" /> {post.readingTime}
                  </h6>
                </div>

                <h4 className="mb-6 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem] font-bold">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h4>

                <p className="mb-8 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50 gap-4">
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon icon="solar:user-bold" width={16} />
                    </div>
                    <span className="text-[13px] font-bold text-midnight_text uppercase tracking-wider">Vasanth</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-primary font-bold uppercase tracking-widest text-[11px] flex items-center gap-1.5 group/btn whitespace-nowrap"
                  >
                    Read Full Article
                    <Icon icon="solar:arrow-right-up-bold" width={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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
