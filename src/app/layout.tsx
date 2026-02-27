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
  title: {
    default: 'AI SKILL UP Academy | Leading Software Training Institute',
    template: '%s | AI SKILL UP Academy'
  },
  description: 'AI SKILL UP is the premier software training institute in Coimbatore, offering courses in AI, Full Stack Development, UI/UX Design, and more.',
  icons: {
    icon: '/icon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
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
