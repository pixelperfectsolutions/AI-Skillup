import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aiskillup.in'
  const lastModified = new Date()

  const staticRoutes = [
    '',
    '/about',
    '/courses',
    '/corporate-training',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const courses = [
    'full-stack-development-course-coimbatore',
    'ui-ux-design-course-coimbatore',
    'no-code-ai-automation-coimbatore',
    'digital-marketing-course-coimbatore',
    'python-course-coimbatore',
    'data-science-course-coimbatore',
    'ai-based-mobile-app-development'
  ].map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...courses]
}
