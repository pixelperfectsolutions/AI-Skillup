import './globals.css'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import { HeaderData, FooterLinkData } from '@/data/siteData'
import SchemaOrg from './components/Common/SchemaOrg'
import { Metadata } from 'next'
import GlobalPopup from './components/SharedComponent/GlobalPopup'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aiskillup.in'),
  title: {
    default: "Best AI Course Training Institute in Coimbatore | AI Skill Up Academy",
    template: "%s | AI Skill Up Academy"
  },
  description: "AI Skill Up Academy — Coimbatore's #1 AI-native training institute. Learn Full Stack Development, UI/UX Design, No-Code AI Automation & Digital Marketing using AI. 100% Placement | 5.0 ★ Google Rating | Ram Nagar, Coimbatore.",
  keywords: [
    "AI course Coimbatore",
    "best AI training institute Coimbatore",
    "software training Coimbatore",
    "full stack development course Coimbatore",
    "UI UX design course Coimbatore",
    "no-code AI automation Coimbatore",
    "digital marketing course Coimbatore",
    "generative AI training Coimbatore",
    "AI tools for professionals Coimbatore",
    "AI-based software training institute in Coimbatore",
    "best software training institute Coimbatore with placement",
    "IT training institute Ram Nagar Coimbatore"
  ],
  alternates: {
    canonical: 'https://www.aiskillup.in',
  },
  openGraph: {
    title: "Best AI Course Training Institute in Coimbatore | AI Skill Up Academy",
    description: "AI Skill Up Academy — Coimbatore's #1 AI-native training institute. Learn Full Stack Development, UI/UX Design, No-Code AI Automation & Digital Marketing using AI. 100% Placement | 5.0 ★ Google Rating.",
    url: 'https://www.aiskillup.in',
    siteName: 'AI Skill Up Academy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.aiskillup.in/images/aiskillup-banner1.jpeg',
        width: 1200,
        height: 630,
        alt: 'AI Skill Up Academy classroom training session in Coimbatore',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best AI Course Training Institute in Coimbatore | AI Skill Up Academy",
    description: "Coimbatore's #1 AI-native training institute. Full Stack, UI/UX, No-Code AI Automation & Digital Marketing. 100% Placement support.",
    images: ['https://www.aiskillup.in/images/aiskillup-banner1.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Performance: Preconnect hints for Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <SchemaOrg />
      </head>
      <body className="antialiased">
        <Header initialData={HeaderData} />
        {children}
        <Footer initialData={FooterLinkData} />
        <GlobalPopup />
      </body>
    </html>
  )
}
