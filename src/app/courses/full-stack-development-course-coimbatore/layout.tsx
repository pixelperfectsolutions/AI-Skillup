import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advanced Full Stack Development Course in Chennai & Bangalore | AI-Skillup',
  description: 'Master Full Stack Development with our advanced certification program. Learn HTML, CSS, React, Node.js, and more. 100% placement assistance and industry-recognized certification.',
  keywords: 'full stack course, web development training, react js course, node js training, full stack certification, placement assurance, chennai, bangalore',
  openGraph: {
    title: 'Advanced Full Stack Development Course | AI-Skillup',
    description: 'Launch your career as a Full Stack Developer. Master front-end, back-end, and databases.',
    images: ['/images/course-1.png'],
  },
}

export default function FullStackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
