'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'

const PHONE = '+919655422511'
const WHATSAPP = 'https://wa.me/919655422511'

export const openEnquiryPopup = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('open-enquiry-popup'))
  }
}

export default function FloatingActions() {
  return (
    <div className='fixed bottom-6 right-3 z-[999] flex flex-col items-end gap-3'>
      {/* Enquiry Now — opens the popup form */}
      <button
        onClick={openEnquiryPopup}
        aria-label='Enquiry Now'
        className='group flex items-center gap-2 rounded-full bg-primary py-3 pl-4 pr-5 text-white shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95'
      >
        <Icon icon='solar:chat-round-dots-bold' width={22} height={22} />
        <span className='text-sm font-bold uppercase tracking-wide'>Enquiry</span>
      </button>

      {/* Call CTA */}
      <Link
        href={`tel:${PHONE}`}
        aria-label='Call Us'
        className='flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-all hover:scale-110 active:scale-95'
      >
        <Icon icon='solar:phone-bold' width={26} height={26} />
      </Link>

      {/* WhatsApp CTA */}
      <Link
        href={WHATSAPP}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chat on WhatsApp'
        className='flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all hover:scale-110 active:scale-95'
      >
        <Icon icon='ic:baseline-whatsapp' width={28} height={28} />
      </Link>
    </div>
  )
}
