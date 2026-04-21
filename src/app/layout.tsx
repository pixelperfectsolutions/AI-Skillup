import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import { HeaderData, FooterLinkData } from '@/data/siteData'
import SchemaOrg from './components/Common/SchemaOrg'
import { Metadata } from 'next'
import GlobalPopup from './components/SharedComponent/GlobalPopup'

const font = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'] 
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aiskillup.in'),
  title: {
    default: "AI Skill Up Academy — Best AI-Based Software Training Institute in Coimbatore",
    template: "%s | AI Skill Up Academy"
  },
  description: "Join AI Skill Up Academy, Coimbatore's #1 AI-based software training centre at Ram Nagar. Courses in Full Stack, UI/UX, No-Code, Digital Marketing & Data Science. 9000+ students. 100% placement support. Enroll now!",
  keywords: [
    "AI-based software training institute in Coimbatore",
    "best software training institute Coimbatore with placement",
    "full stack development course Coimbatore",
    "UI UX design course Coimbatore",
    "no code development course Coimbatore",
    "digital marketing course using AI Coimbatore",
    "IT training institute Ram Nagar Coimbatore"
  ],
  alternates: {
    canonical: 'https://aiskillup.in',
  },
  openGraph: {
    title: "AI Skill Up Academy — Best AI-Based Software Training Institute in Coimbatore",
    description: "Join AI Skill Up Academy, Coimbatore's #1 AI-based software training centre at Ram Nagar. 9000+ students trained. 100% placement.",
    url: 'https://aiskillup.in',
    siteName: 'AI Skill Up Academy',
    locale: 'en_IN',
    type: 'website',
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <SchemaOrg />
      </head>
      <body className={`${font.className} antialiased`}>
        <Header initialData={HeaderData} />
        {children}
        <Footer initialData={FooterLinkData} />
        <GlobalPopup />
      </body>
    </html>
  )
}
