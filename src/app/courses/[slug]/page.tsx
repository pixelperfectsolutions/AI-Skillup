import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CourseData } from '@/data/siteData'
import HeroSub from '@/app/components/SharedComponent/HeroSub'
import CoursesGrid from '@/app/components/Home/Courses/CoursesGrid'
import FAQSection from '@/app/components/Home/FAQSection'
import Placement from '@/app/components/Home/Placement'

// Since the user is in a transition phase, I'll leverage the existing slugs
// But generate dynamic metadata as requested in Task 4

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

  // Format title: [Course Name] Course in Coimbatore | AI Skill Up Academy
  const title = `${course.heading} | AI Skill Up Academy`
  const description = `Enroll in the best ${course.heading} at AI Skill Up Academy, Coimbatore. 100% placement support, AI-powered curriculum, and industry certifications.`

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
    <main>
      <HeroSub 
        title={course.heading}
        subtitle="Learn with Coimbatore's only AI-native training institute. Master real-world skills with 100% placement support."
        breadcrumbs={[
          { label: 'Courses', href: '/courses' },
          { label: course.heading, href: `/courses/${slug}` }
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-midnight_text mb-6">
                Why choose our <span className="text-primary">{course.heading}</span>?
              </h2>
              <p className="text-lg text-black/60 leading-relaxed mb-8">
                Our curriculum is designed by industry experts to ensure you're learning exactly what the market demands. 
                In this course, we integrate advanced AI tools into your daily workflow, 
                making you 3x more productive than traditional developers.
              </p>
              <ul className="space-y-4">
                {["100% Placement Support", "NASSCOM Certification", "Live Industry Projects", "AI-Powered Coding Labs"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-midnight_text">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
               {/* Use a placeholder image or real image if available */}
               <img src={course.imgSrc} alt={course.heading} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Placement />
      <FAQSection />
      
      <section className="py-20 bg-gray-50">
        <div className="container">
           <h2 className="text-3xl font-black text-center mb-12">Related Courses</h2>
           <CoursesGrid initialData={CourseData.filter(c => !c.slug?.includes(slug)).slice(0, 3)} />
        </div>
      </section>
    </main>
  )
}
