import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import PopupForm from '@/app/components/PopupForm'
import { Metadata } from 'next'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aiskillup.academy'),
  title: {
    default: 'AI SKILL UP | Leading Software Training Institute in Coimbatore',
    template: '%s | AI SKILL UP Academy'
  },
  description: 'AI SKILL UP is the premier software training institute in Coimbatore, offering courses in AI, Full Stack Development, UI/UX Design, and more.',
  icons: {
    icon: '/vite.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${font.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <PopupForm />
      </body>
    </html>
  )
}
