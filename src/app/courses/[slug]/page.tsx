import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CourseData, TestimonialData } from '@/data/siteData'
import CourseContent from '@/app/components/Courses/CourseContent'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = CourseData.find(c => c.slug?.includes(slug))

  if (!course) {
    return {
      title: "Course Not Found | AI Skill Up Academy"
    }
  }

  const title = `${course.heading} | Best AI Training in Coimbatore`
  const description = course.description || `Enroll in the best ${course.heading} at AI Skill Up Academy, Coimbatore. 100% placement support, AI-powered curriculum, and industry certifications.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://aiskillup.in/courses/${slug}`,
    }
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
