'use client'
import Link from 'next/link'

import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderType } from '@/app/types/menu'
import { openEnquiryPopup } from '../../SharedComponent/FloatingActions'

const Header = ({ initialData }: { initialData?: HeaderType[] }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [navLink, setNavLink] = useState<HeaderType[]>(initialData || [])

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (initialData) return

    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setNavLink(data.HeaderData)
      } catch (error) {
        console.error('Error fetching service:', error)
      }
    }
    fetchData()
  }, [initialData])

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {

    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])


  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 bg-transparent ${sticky ? 'bg-white shadow-lg' : 'shadow-none'
        }`}>
      <div>
        {/* Top utility bar: phone number + social media */}
        {!sticky && (
          <div className='bg-primary text-white'>
            <div className='container flex items-center justify-between h-9 text-[13px]'>
              <Link
                href='tel:+919655422511'
                className='flex items-center gap-1.5 font-medium hover:opacity-90 transition-opacity whitespace-nowrap'
              >
                <Icon icon='solar:phone-bold' width={15} height={15} />
                +91 96554 22511
              </Link>
              <div className='flex items-center gap-3'>
                <Link
                  href='https://www.facebook.com/AISKILLUP6/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook'
                  className='hover:opacity-80 transition-opacity'
                >
                  <Icon icon='tabler:brand-facebook' width={17} height={17} />
                </Link>
                <Link
                  href='https://www.instagram.com/academyaiskillup/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'
                  className='hover:opacity-80 transition-opacity'
                >
                  <Icon icon='tabler:brand-instagram' width={17} height={17} />
                </Link>
                <Link
                  href='https://wa.me/919655422511'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='WhatsApp'
                  className='hover:opacity-80 transition-opacity'
                >
                  <Icon icon='tabler:brand-whatsapp' width={17} height={17} />
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className={`container flex items-center justify-between ${sticky ? 'py-2' : 'py-4'}`}>
          <Logo />
          <nav className='hidden lg:flex grow items-center lg:gap-5 xl:gap-8 justify-center'>
            {navLink.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className='flex items-center gap-4'>
            <Link
              href='tel:+919655422511'
              className='hidden lg:flex items-center gap-2 bg-primary text-white hover:bg-primary/90 py-2 px-8 rounded-full text-[15px] font-semibold transition-all shadow-md active:scale-95 whitespace-nowrap uppercase'
            >
              <Icon icon="solar:phone-bold" width={22} height={22} />
              CALL NOW
            </Link>

            <button
              onClick={openEnquiryPopup}
              className='flex lg:hidden items-center gap-1.5 bg-primary text-white py-2 px-4 rounded-full text-[13px] font-semibold shadow-md active:scale-95 transition-all whitespace-nowrap uppercase'
              aria-label='Open enquiry form'>
              <Icon icon='solar:chat-round-dots-bold' width={16} height={16} />
              Enquiry
            </button>

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg hover:cursor-pointer'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-black'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' onClick={() => setNavbarOpen(false)} />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs flex flex-col ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}>
          <div className='flex items-center justify-between gap-2 p-6 border-b shrink-0'>
            <div>
              <Logo />
            </div>
            <button
              onClick={() => setNavbarOpen(false)}
              className='hover:cursor-pointer'
              aria-label='Close menu Modal'>
              <Icon
                icon='material-symbols:close-rounded'
                width={28}
                height={28}
                className='text-black hover:text-primary'
              />
            </button>
          </div>
          <nav className='flex flex-col items-start p-6 flex-1 overflow-y-auto'>
            {navLink.map((item, index) => (
              <MobileHeaderLink
                key={index}
                item={item}
                closeNavbar={() => setNavbarOpen(false)}
              />
            ))}
            <div className='mt-8 w-full'>
              <Link
                href='tel:+919655422511'
                className='flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-semibold text-[15px] w-full active:scale-95 transition-all shadow-lg uppercase'
                onClick={() => setNavbarOpen(false)}
              >
                <Icon icon="solar:phone-bold" width={24} height={24} />
                CALL NOW
              </Link>
            </div>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default Header
