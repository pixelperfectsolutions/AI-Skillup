import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/privacy', '/terms', '/api/'],
      },
    ],
    sitemap: 'https://www.aiskillup.in/sitemap.xml',
  }
}
