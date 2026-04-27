import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CourseData, TestimonialData } from '@/data/siteData'
import CourseContent from '@/app/components/Courses/CourseContent'

type Props = {
  params: Promise<{ slug: string }>
}

// Curated SEO metadata per course slug
const courseMetaMap: Record<string, { title: string; description: string }> = {
  'full-stack-development-course-coimbatore': {
    title: 'Full Stack Development Course in Coimbatore Using AI — AI Skill Up',
    description: 'Learn Full Stack Development with AI tools in Coimbatore. React, Node.js, MongoDB + AI integration. 100% placement. Batches at Ram Nagar. Enroll now.',
  },
  'ui-ux-design-course-coimbatore': {
    title: 'UI UX Design Course in Coimbatore with AI Tools — AI Skill Up',
    description: 'Master UI/UX Design using Figma, Adobe XD, and AI design tools in Coimbatore. Industry projects, 1-on-1 mentoring, 100% placement. Join AI Skill Up.',
  },
  'mobile-app-development-course-coimbatore': {
    title: 'Mobile App Development Course Coimbatore — AI-Based Training',
    description: 'Build AI-powered mobile apps with Flutter, React Native & no-code tools. Hands-on mobile app development course in Coimbatore with placement support.',
  },
  'ai-based-mobile-app-development': {
    title: 'Mobile App Development Course Coimbatore — AI-Based Training',
    description: 'Build AI-powered mobile apps with Flutter, React Native & no-code tools. Hands-on mobile app development course in Coimbatore with placement support.',
  },
  'no-code-ai-automation-coimbatore': {
    title: 'No-Code AI Automation Course in Coimbatore — Build Apps Without Coding',
    description: "Coimbatore's only No-Code AI Automation course. Learn Bubble, FlutterFlow, Make.com & AI tools. Build real apps without writing code. 100% placement.",
  },
  'digital-marketing-course-coimbatore': {
    title: 'Digital Marketing Course in Coimbatore Using AI — AI Skill Up Academy',
    description: 'Learn AI-powered Digital Marketing in Coimbatore — SEO, Google Ads, Social Media, ChatGPT for content. Industry-certified course with 100% placement.',
  },
  'python-course-coimbatore': {
    title: 'Python Programming Course in Coimbatore with AI — AI Skill Up',
    description: 'Master Python programming with AI applications in Coimbatore. Data Science, automation, web dev. Expert trainers, real projects, 100% placement support.',
  },
  'data-science-course-coimbatore': {
    title: 'Data Science Course in Coimbatore with AI & ML — AI Skill Up Academy',
    description: 'Learn Data Science with Python, Machine Learning & AI in Coimbatore. Real datasets, industry projects, placement support. Enroll at AI Skill Up Academy.',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = CourseData.find(c => c.slug?.includes(slug))

  if (!course) {
    return {
      title: "Course Not Found | AI Skill Up Academy"
    }
  }

  const meta = courseMetaMap[slug]
  const title = meta?.title || `${course.heading} | Best AI Training in Coimbatore`
  const description = meta?.description || course.description || `Enroll in the best ${course.heading} at AI Skill Up Academy, Coimbatore. 100% placement support, AI-powered curriculum, and industry certifications.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.aiskillup.in/courses/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.aiskillup.in/courses/${slug}`,
      images: [{ url: 'https://www.aiskillup.in/images/aiskillup-banner1.jpeg' }],
    },
  }
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params
  const course = CourseData.find(c => c.slug?.includes(slug))

  if (!course) notFound()

  return (
    <CourseContent 
      course={course} 
      allCourses={CourseData} 
      testimonialData={TestimonialData} 
    />
  )
}
