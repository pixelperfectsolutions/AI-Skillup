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
    alternates: {
      canonical: `https://www.aiskillup.in/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://www.aiskillup.in/blog/${slug}`,
      images: [{ url: post.image || 'https://www.aiskillup.in/images/aiskillup-banner1.jpeg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || 'https://www.aiskillup.in/images/aiskillup-banner1.jpeg'],
    },
  }
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

import HeroSub from "@/app/components/SharedComponent/HeroSub"

const BlogDetail = async ({ params }: PageProps) => {
  const { slug } = await params
  const post = blogs.find(b => b.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen pb-24 bg-white">
      {/* Article + BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image || "https://www.aiskillup.in/images/aiskillup-banner1.jpeg",
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "AI Skill Up Academy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.aiskillup.in/images/logo/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.aiskillup.in/blog/${post.slug}`
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aiskillup.in" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aiskillup.in/blog" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.aiskillup.in/blog/${post.slug}` }
            ]
          }
        ]) }}
      />

      <HeroSub 
        title={post.title}
        subtitle={`${post.author} • ${post.date} • ${post.readingTime}`}
        breadcrumbs={[
            { label: 'Blog', href: '/blog' },
            { label: post.category }
        ]}
        bgImage={post.image}
      />

      {/* Article Content */}
      <div className="container max-w-4xl mt-20">
        <div 
          className="prose prose-lg md:prose-xl prose-slate max-w-none 
          prose-headings:font-black prose-headings:text-black prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:tracking-tight
          prose-p:text-black/70 prose-p:leading-10 prose-p:mb-10 prose-p:text-lg md:prose-p:text-xl
          prose-strong:text-black prose-strong:font-black
          prose-ul:list-disc prose-ul:ml-6 prose-li:text-black/70 prose-li:mb-4
          prose-img:rounded-[3rem] prose-img:shadow-2xl prose-img:my-20"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Author Bio Box */}
        <div className="mt-24 p-10 bg-slate-50 rounded-[3rem] border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
           <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl text-primary shadow-sm shrink-0 border border-gray-100">
             <Icon icon="solar:user-bold" />
           </div>
           <div>
              <h4 className="text-xl font-black text-black mb-2">Written by {post.author}</h4>
              <p className="text-black/60 leading-relaxed font-medium">
                Our editorial team brings you the most relevant insights from the intersection of AI, design, and development. 
                Based in the heart of Coimbatore, we are committed to bridging the technology gap for freshers and professionals alike.
              </p>
           </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="container max-w-5xl mt-32 text-center">
         <div className="p-16 bg-slate-50 rounded-[4rem] text-black border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-success/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 italic relative z-10">Ready to learn <span className="text-primary not-italic underline decoration-success decoration-8 underline-offset-12">{post.category}?</span></h2>
            <p className="text-black/60 mb-10 max-w-xl mx-auto text-xl font-bold relative z-10">
              Join AI SKILL UP Academy today and master the skills mentioned in this article with hands-on labs and expert mentorship.
            </p>
            <Link 
              href="/courses" 
              className="bg-primary text-white py-5 px-14 rounded-full font-black uppercase tracking-widest text-sm inline-block shadow-2xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all relative z-10"
            >
              Explore Courses
            </Link>
         </div>
      </section>
    </article>
  )
}

export default BlogDetail
