import { NextResponse } from 'next/server'
import { HeaderData, TechGaintsData, CourseData, MentorData, TestimonialData, FooterLinkData } from '@/data/siteData'

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    TechGaintsData,
    CourseData,
    MentorData,
    TestimonialData,
    FooterLinkData,
  })
}
