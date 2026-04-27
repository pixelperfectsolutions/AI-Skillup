import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aiskillup.in'
  const lastModified = new Date()

  const staticRoutes = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/courses`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/corporate-training`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.7 },
  ].map(r => ({ ...r, lastModified }))

  const courses = [
    'full-stack-development-course-coimbatore',
    'ui-ux-design-course-coimbatore',
    'mobile-app-development-course-coimbatore',
    'no-code-ai-automation-coimbatore',
    'digital-marketing-course-coimbatore',
    'python-course-coimbatore',
    'data-science-course-coimbatore',
  ].map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...courses]
}
