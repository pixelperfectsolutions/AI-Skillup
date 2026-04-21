import React from 'react'
import { blogs } from '@/data/blogs'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

import Image from 'next/image'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogs.find(b => b.slug === slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | AI SKILL UP Academy Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    }
  }
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

const BlogDetail = async ({ params }: PageProps) => {
  const { slug } = await params
  const post = blogs.find(b => b.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen pt-32 pb-24 bg-white">
      {/* Article Header */}
      <header className="container max-w-4xl mb-16">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-primary font-bold mb-10 hover:-translate-x-2 transition-transform"
        >
          <Icon icon="solar:arrow-left-bold" /> Back to Blog
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-primary/5 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-primary/10">
            {post.category}
          </span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">{post.readingTime}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-midnight_text mb-8 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary text-2xl border border-slate-200">
            <Icon icon="solar:user-bold" />
          </div>
          <div>
            <p className="text-midnight_text font-bold leading-none mb-1">{post.author}</p>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">{post.date}</p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container max-w-5xl mb-20">
        <div className="aspect-video bg-slate-50 rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-100">
           <Image 
             src={post.image} 
             alt={post.title} 
             fill 
             className="object-cover" 
           />
        </div>
      </div>

      {/* Article Content */}
      <div className="container max-w-4xl">
        <div 
          className="prose prose-lg md:prose-xl prose-slate max-w-none 
          prose-headings:font-black prose-headings:text-midnight_text prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:tracking-tight
          prose-p:text-gray-600 prose-p:leading-10 prose-p:mb-10 prose-p:text-lg md:prose-p:text-xl
          prose-strong:text-midnight_text prose-strong:font-black
          prose-ul:list-disc prose-ul:ml-6 prose-li:text-gray-600 prose-li:mb-4
          prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Author Bio Box */}
        <div className="mt-24 p-10 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
           <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl text-primary shadow-sm shrink-0 border border-slate-200">
             <Icon icon="solar:user-bold" />
           </div>
           <div>
              <h4 className="text-xl font-black text-midnight_text mb-2">Written by {post.author}</h4>
              <p className="text-gray-500 leading-relaxed">
                Our editorial team brings you the most relevant insights from the intersection of AI, design, and development. 
                Based in the heart of Coimbatore, we are committed to bridging the technology gap for freshers and professionals alike.
              </p>
           </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="container max-w-5xl mt-32 text-center">
         <div className="p-16 bg-midnight_text rounded-[3rem] text-white relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to learn {post.category}?</h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg font-medium">
              Join AI SKILL UP Academy today and master the skills mentioned in this article with hands-on labs and expert mentorship.
            </p>
            <Link 
              href="/courses" 
              className="bg-primary text-white py-4 px-12 rounded-full font-black uppercase tracking-widest text-sm inline-block shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all"
            >
              Explore Courses
            </Link>
         </div>
      </section>
    </article>
  )
}

export default BlogDetail
