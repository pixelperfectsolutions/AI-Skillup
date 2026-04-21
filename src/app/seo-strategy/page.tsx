'use client'

import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const SEOStrategyDashboard = () => {
  const [activeTab, setActiveTab] = useState('why-not-ranking')

  const tabs = [
    { id: 'why-not-ranking', name: 'Why Not Ranking', icon: 'solar:danger-triangle-linear' },
    { id: 'keyword-strategy', name: 'Keyword Strategy', icon: 'solar:key-linear' },
    { id: 'competitor-analysis', name: 'Competitor Analysis', icon: 'solar:chart-2-linear' },
    { id: 'page-content', name: 'Page Content', icon: 'solar:document-text-linear' },
    { id: 'schema-meta', name: 'Schema & Meta', icon: 'solar:code-circle-linear' },
    { id: 'nextjs-code', name: 'Next.js Code', icon: 'solar:programming-linear' },
    { id: 'diagnosis', name: 'Diagnosis', icon: 'solar:pulse-linear' },
  ]

  const metrics = [
    { label: 'Google Reviews', value: '83', trend: 'Excellent', color: 'text-success' },
    { label: 'Backlinks (est.)', value: '~0', trend: 'Critical', color: 'text-red-500' },
    { label: 'Pages Indexed', value: '7', trend: 'Low', color: 'text-orange-500' },
    { label: 'Domain Authority', value: 'Low', trend: 'Improving', color: 'text-blue-500' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
              Growth Strategy
            </span>
            <span className="text-gray-400 text-sm">Last Updated: April 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-midnight_text mb-4">
            AI Skill Up <span className="text-primary text-65">SEO & Content Strategy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Complete analysis and roadmap to dominate the AI training market in Coimbatore. 
            Transition from client-side rendering to SSR/SSG to unlock Google visibility.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-hover hover:shadow-md">
              <p className="text-sm font-medium text-gray-500 mb-1">{m.label}</p>
              <div className="flex items-end justify-between">
                <h3 className={`text-3xl font-bold ${m.color}`}>{m.value}</h3>
                <span className={`text-xs font-bold uppercase ${m.color} bg-opacity-10 px-2 py-0.5 rounded`}>
                  {m.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Main Area */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[600px]">
          {/* Sidebar Tabs */}
          <div className="w-full md:w-72 bg-gray-50 border-r border-gray-100 p-6">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon icon={tab.icon} className="text-xl" />
                  <span className="font-semibold">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 md:p-12 overflow-y-auto">
            {activeTab === 'why-not-ranking' && <WhyNotRanking />}
            {activeTab === 'keyword-strategy' && <KeywordStrategy />}
            {activeTab === 'competitor-analysis' && <CompetitorAnalysis />}
            {activeTab === 'page-content' && <PageContent />}
            {activeTab === 'schema-meta' && <SchemaMeta />}
            {activeTab === 'nextjs-code' && <NextJsCode />}
            {activeTab === 'diagnosis' && <Diagnosis />}
          </div>
        </div>
      </div>
    </div>
  )
}

const WhyNotRanking = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-3xl font-bold mb-8">7 Critical Ranking Gaps</h2>
    <div className="space-y-6">
      {[
        { 
          title: "1. No targeted landing pages per course", 
          desc: "Competitors like IIE and Upshot have individual pages for each course (e.g. /python-course-coimbatore). Your content is too thin for Google to parse keywords effectively." 
        },
        { 
          title: "2. Missing 'AI' keyword advantage", 
          desc: "You are 'AI Skill Up' but not ranking for 'AI-based software training Coimbatore'. This is a massive blue ocean keyword currently untapped by others." 
        },
        { 
          title: "3. Homepage has almost no crawlable text", 
          desc: "Next.js homepage renders course names via JS ('Loading...'). Google often fails to index JS-rendered content unless SSR or SSG is used." 
        },
        { 
          title: "4. No blog / knowledge content", 
          desc: "Missing top-of-funnel traffic from informational queries like 'best IT courses in Coimbatore 2025'." 
        },
        { 
          title: "5. Missing structured data (Schema.org)", 
          desc: "No EducationalOrganization, Course, or LocalBusiness schema. Competitors get rich snippets (star ratings) that increase CTR." 
        },
        { 
          title: "6. Google Business Profile not fully optimized", 
          desc: "Need to include 'Computer Training School' + 'Educational Institution' categories for better Local Pack visibility." 
        },
        { 
          title: "7. Weak internal linking & anchor text", 
          desc: "Footer links use course names but lack keyword-rich anchor text. PageRank isn't flowing contextually between pages." 
        }
      ].map((item, i) => (
        <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
            {i + 1}
          </div>
          <div>
            <h4 className="font-bold text-midnight_text mb-1">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const KeywordStrategy = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-3xl font-bold mb-8">18 Long-Tail Keywords (3 Tiers)</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
        <h4 className="text-blue-700 font-bold mb-4 flex items-center gap-2">
          <Icon icon="solar:star-fall-minimalistic-linear" /> Tier 1: High Intent
        </h4>
        <ul className="space-y-2 text-sm text-blue-900/80 font-medium">
          <li>• AI based software training Coimbatore</li>
          <li>• Best AI institute in Coimbatore</li>
          <li>• AI and Machine Learning course Coimbatore</li>
          <li>• Generative AI course for developers Coimbatore</li>
          <li>• Top-rated AI skill academy Coimbatore</li>
          <li>• Professional AI certification Coimbatore</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
        <h4 className="text-purple-700 font-bold mb-4 flex items-center gap-2">
          <Icon icon="solar:rocket-linear" /> Tier 2: Niche Growth
        </h4>
        <ul className="space-y-2 text-sm text-purple-900/80 font-medium">
          <li>• No-Code development course Coimbatore</li>
          <li>• UI/UX design with AI tools Coimbatore</li>
          <li>• Full stack web development with AI Coimbatore</li>
          <li>• Low-code application development India</li>
          <li>• Bubble.io training institute Coimbatore</li>
          <li>• Modern UI/UX career scope 2025</li>
        </ul>
      </div>
      <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
        <h4 className="text-emerald-700 font-bold mb-4 flex items-center gap-2">
          <Icon icon="solar:target-linear" /> Tier 3: Local Dominance
        </h4>
        <ul className="space-y-2 text-sm text-emerald-900/80 font-medium">
          <li>• Software training near me with placement</li>
          <li>• IT courses in Coimbatore for freshers</li>
          <li>• Job oriented computer courses Coimbatore</li>
          <li>• Python development course Coimbatore</li>
          <li>• Data science training Coimbatore fees</li>
          <li>• MERN stack training Coimbatore</li>
        </ul>
      </div>
    </div>
    <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
      <h5 className="font-bold text-amber-800 mb-2">🔥 Blue Ocean Opportunity</h5>
      <p className="text-amber-900/70">
        "AI-based software training Coimbatore" and "No-Code development course Coimbatore" have ZERO competitors targeting them explicitly. These should be your primary H1/H2 focuses.
      </p>
    </div>
  </div>
)

const CompetitorAnalysis = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-3xl font-bold mb-8">Head-to-Head Comparison</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-100">
            <th className="py-4 px-4 font-bold text-gray-400 uppercase text-xs">Institute</th>
            <th className="py-4 px-4 font-bold text-gray-400 uppercase text-xs">AI Courses</th>
            <th className="py-4 px-4 font-bold text-gray-400 uppercase text-xs">No-Code</th>
            <th className="py-4 px-4 font-bold text-gray-400 uppercase text-xs">Reviews</th>
            <th className="py-4 px-4 font-bold text-gray-400 uppercase text-xs">Unique Selling Point</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-50 bg-primary/5">
            <td className="py-4 px-4 font-bold text-primary">AI SKILL UP</td>
            <td className="py-4 px-4"><Icon icon="solar:check-circle-bold" className="text-success" /></td>
            <td className="py-4 px-4"><Icon icon="solar:check-circle-bold" className="text-success" /></td>
            <td className="py-4 px-4">5.0 (83)</td>
            <td className="py-4 px-4 text-sm font-medium">AI-First curriculum + No-Code</td>
          </tr>
          <tr className="border-b border-gray-50">
            <td className="py-4 px-4 font-bold">IIE Coimbatore</td>
            <td className="py-4 px-4 text-gray-300">Basic</td>
            <td className="py-4 px-4 text-red-400"><Icon icon="solar:close-circle-bold" /></td>
            <td className="py-4 px-4">4.8 (200+)</td>
            <td className="py-4 px-4 text-sm">Long established, legacy tech</td>
          </tr>
          <tr className="border-b border-gray-50">
            <td className="py-4 px-4 font-bold">Upshot</td>
            <td className="py-4 px-4 text-gray-300">Only Data Sci</td>
            <td className="py-4 px-4 text-red-400"><Icon icon="solar:close-circle-bold" /></td>
            <td className="py-4 px-4">4.7 (500+)</td>
            <td className="py-4 px-4 text-sm">Corporate focus</td>
          </tr>
          <tr className="border-b border-gray-50">
            <td className="py-4 px-4 font-bold">Pumo / Refinement</td>
            <td className="py-4 px-4 text-red-400"><Icon icon="solar:close-circle-bold" /></td>
            <td className="py-4 px-4 text-red-400"><Icon icon="solar:close-circle-bold" /></td>
            <td className="py-4 px-4">4.6 (1k+)</td>
            <td className="py-4 px-4 text-sm">High volume, general IT</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

const PageContent = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-3xl font-bold mb-8">Ready-to-Paste SEO Copy</h2>
    <div className="space-y-8">
      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h5 className="font-bold mb-4 text-primary uppercase text-xs tracking-widest">Homepage Hero H1</h5>
        <code className="block text-lg font-bold text-midnight_text mb-4">
          #1 AI-Based Software Training Institute in Coimbatore — Master Future-Ready Skills
        </code>
        <p className="text-gray-600 text-sm italic">
          Why: Directly targets the blue ocean "AI-based software training" while establishing local authority.
        </p>
      </div>

      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h5 className="font-bold mb-4 text-primary uppercase text-xs tracking-widest">About Section (Keyword Rich)</h5>
        <p className="text-gray-700 leading-relaxed">
          At <strong className="text-midnight_text">AI SKILL UP Academy Coimbatore</strong>, we bridge the gap between traditional IT education and the AI revolution. 
          Our <strong className="text-midnight_text">software training institute</strong> specialized in <strong className="text-midnight_text">AI-first development</strong>, 
          offering the most comprehensive <strong className="text-midnight_text">Full Stack Development course</strong> and <strong className="text-midnight_text">No-Code development programs</strong> in the city. 
          Whether you're a fresher looking for the <strong className="text-midnight_text">best IT courses in Coimbatore</strong> or a professional upskilling in <strong className="text-midnight_text">UI/UX design with AI tools</strong>, 
          our 100% lab-based training ensures you're industry-ready.
        </p>
      </div>

      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h5 className="font-bold mb-4 text-primary uppercase text-xs tracking-widest">Course Page Template</h5>
        <div className="space-y-2">
          <p><strong>H1:</strong> [Course Name] Course in Coimbatore | AI SKILL UP Academy</p>
          <p><strong>H2:</strong> Why Choose Our [Course Name] with AI Integration?</p>
          <p><strong>H2:</strong> Curriculum Designed for 2025 Job Market</p>
          <p><strong>H2:</strong> Student FAQs: [Course Name] Placement & Fees</p>
        </div>
      </div>
    </div>
  </div>
)

const SchemaMeta = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-3xl font-bold mb-8">Schema & Rich Snippets</h2>
    <div className="grid gap-6">
      <div className="p-6 bg-zinc-900 rounded-2xl overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider">LocalBusiness JSON-LD</span>
          <button className="text-zinc-400 hover:text-white flex items-center gap-1 text-xs">
            <Icon icon="solar:copy-linear" /> Copy
          </button>
        </div>
        <pre className="text-xs text-blue-300 font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "AI SKILL UP Academy",
  "url": "https://aiskillup.academy",
  "logo": "https://aiskillup.academy/images/logo.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "83"
  }
}`}
        </pre>
      </div>

      <div className="p-6 bg-zinc-900 rounded-2xl overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Course Schema</span>
          <button className="text-zinc-400 hover:text-white flex items-center gap-1 text-xs">
            <Icon icon="solar:copy-linear" /> Copy
          </button>
        </div>
        <pre className="text-xs text-emerald-300 font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Python for AI Development",
  "description": "Master Python with a focus on AI integrations and automation...",
  "provider": {
    "@type": "Organization",
    "name": "AI SKILL UP Academy",
    "sameAs": "https://aiskillup.academy"
  }
}`}
        </pre>
      </div>
    </div>
  </div>
)

const NextJsCode = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-3xl font-bold mb-8">Production-Ready Code</h2>
    <div className="space-y-6">
      <div>
        <h5 className="font-bold mb-3 text-gray-700">1. Server-Side Data Fetching (Fixing "Loading...")</h5>
        <div className="p-6 bg-zinc-900 rounded-2xl">
          <pre className="text-xs text-pink-300 font-mono overflow-x-auto">
{`// src/app/page.tsx
import Courses from '@/components/Home/Courses'
import { getCourses } from '@/utils/fetch'

export default async function Page() {
  const courses = await getCourses() // SSR
  return <Courses initialData={courses} />
}`}
          </pre>
        </div>
      </div>

      <div>
        <h5 className="font-bold mb-3 text-gray-700">2. Generate Static Params (for SEO)</h5>
        <div className="p-6 bg-zinc-900 rounded-2xl">
          <pre className="text-xs text-amber-300 font-mono overflow-x-auto">
{`// src/app/courses/[slug]/page.tsx
export async function generateStaticParams() {
   const courses = await getCourses()
   return courses.map(course => ({ slug: course.slug }))
}`}
          </pre>
        </div>
      </div>
    </div>
  </div>
)

const Diagnosis = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-3xl font-bold mb-8">Health Report</h2>
    <div className="bg-red-50 p-8 rounded-3xl border border-red-100 flex flex-col md:flex-row gap-8 items-center">
      <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
        <Icon icon="solar:shield-warning-bold" className="text-6xl" />
      </div>
      <div>
        <h3 className="text-red-700 font-extrabold mb-2 underline decoration-4 decoration-red-200">Critical Priority: JS Rendering</h3>
        <p className="text-red-900/70 text-lg leading-relaxed mb-4">
          Your homepage content is hidden behind a Client-Side <code className="bg-red-100 px-1 rounded text-red-700">useEffect</code>. 
          Google's crawler often gives up before your API data loads. 
        </p>
        <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full font-bold">
          <Icon icon="solar:check-circle-linear" />
          Implement SSR/SSG within 48 Hours
        </div>
      </div>
    </div>
  </div>
)

export default SEOStrategyDashboard
