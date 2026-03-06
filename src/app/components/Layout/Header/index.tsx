'use client'
import Link from 'next/link'

import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderType } from '@/app/types/menu'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [navLink, setNavLink] = useState<HeaderType[]>([])

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
  }, [])

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
      className={`fixed top-0 z-40 w-full transition-all duration-300 bg-transparent ${sticky ? 'bg-white shadow-lg py-2' : 'shadow-none py-4'
        }`}>
      <div>
        <div className='container flex items-center justify-between'>
          <Logo />
          <nav className='hidden lg:flex grow items-center lg:gap-5 xl:gap-8 justify-center'>
            {navLink.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className='flex items-center gap-4'>
            <Link
              href='tel:+919655422511'
              className='hidden lg:flex items-center gap-2 bg-primary text-white hover:bg-primary/90 py-2 px-8 rounded-full text-lg font-semibold transition-all shadow-md active:scale-95 whitespace-nowrap'
            >
              <Icon icon="solar:phone-bold" width={22} height={22} />
              CALL NOW
            </Link>

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
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}>
          <div className='flex items-center justify-between gap-2 p-6 border-b'>
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
          <nav className='flex flex-col items-start p-6'>
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
                className='flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold text-xl w-full active:scale-95 transition-all shadow-lg'
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
