import { CourseType } from '@/app/types/course'
import { FooterLinkType } from '@/app/types/footerlink'
import { MentorType } from '@/app/types/mentor'
import { HeaderType } from '@/app/types/menu'
import { TestimonialType } from '@/app/types/testimonial'
import { NextResponse } from 'next/server'

const HeaderData: HeaderType[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Courses',
    href: '/courses',
    submenu: [
      { label: 'Full-Stack Development Course', href: '/courses/full-stack-development-using-ai' },
      { label: 'UI & UX Design Course', href: '/courses/ui-and-ux-design-course-using-ai' },
      { label: 'Mobile App Development Course', href: '/courses/ai-based-mobile-app-development' },
      { label: 'No-Code Development Course', href: '/courses/no-code-development-course' },
      { label: 'Digital Marketing Course', href: '/courses/digital-marketing-course-using-ai' },
    ]
  },
  { label: 'Corporate Training', href: '/corporate-training' },
  { label: 'Contact', href: '/contact' },
]

const TechGaintsData: { imgSrc: string }[] = [
  {
    imgSrc: '/images/partner logo-1.png',
  },
  {
    imgSrc: '/images/partner logo-2.png',
  },
  {
    imgSrc: '/images/partner logo-3.png',
  },
  {
    imgSrc: '/images/partner logo-4.png',
  },
  {
    imgSrc: '/images/partner logo-5.png',
  },
  {
    imgSrc: '/images/partner logo-6.png',
  },
  {
    imgSrc: '/images/partner logo-7.png',
  },
]

const CourseData: CourseType[] = [
  {
    heading: 'Full-Stack Development Using AI',
    name: 'James Nolan',
    imgSrc: '/images/course-1.png',
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.8,
    slug: '/courses/full-stack-development-using-ai',
  },
  {
    heading: 'UI and UX Design course using AI',
    name: 'Elena Brooks',
    imgSrc: '/images/course-2.png',
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.9,
    slug: '/courses/ui-and-ux-design-course-using-ai',
  },
  {
    heading: 'AI-Based Mobile App Development',
    name: 'Aria Kim',
    imgSrc: '/images/course-3.png',
    students: 120,
    classes: 12,
    price: 20,
    rating: 5.0,
    slug: '/courses/ai-based-mobile-app-development',
  },
  {
    heading: 'No-Code Development Course',
    name: 'Marcus Lee',
    imgSrc: '/images/course-4.png',
    students: 180,
    classes: 12,
    price: 20,
    rating: 4.7,
    slug: '/courses/no-code-development-course',
  },
  {
    heading: 'Digital Marketing Course Using AI',
    name: 'Sophia Patel',
    imgSrc: '/images/course-5.png',
    students: 200,
    classes: 12,
    price: 20,
    rating: 4.9,
    slug: '/courses/digital-marketing-course-using-ai',
  },
]

const MentorData: MentorType[] = [
  {
    profession: 'Senior UX Designer',
    name: 'Shoo Thar Mien',
    imgSrc: '/images/mentor/user1.webp',
  },
  {
    profession: 'Product Design Lead',
    name: 'Lina Carter',
    imgSrc: '/images/mentor/user2.webp',
  },
  {
    profession: 'UI/UX Strategy Consultant',
    name: 'Ethan Nakamura',
    imgSrc: '/images/mentor/user3.webp',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    id: 1,
    name: 'Prema Prema',
    profession: '6 months ago',
    comment: 'Best UI UX, AI design institute in Coimbatore. One to one training, affordable fee, flexible timing, well educated staff, good learning atmosphere. I am really happy to share my experience and thank you for everyone.',
    imgSrc: '/images/testimonial/user1.webp',
    rating: 5,
    link: 'https://maps.app.goo.gl/VqPxnK6FDWsgo7Ev8'
  },
  {
    id: 2,
    name: 'monika dhandapani',
    profession: '4 months ago',
    comment: 'I’m very satisfied with the Graphic & AI Design course... It covers both fundamentals and modern AI tools. Quality teaching at such affordable fees is hard to find.',
    imgSrc: '/images/testimonial/user2.webp',
    rating: 5,
    link: 'https://maps.app.goo.gl/82uj56Ddywe4k7Gp6'
  },
  {
    id: 3,
    name: 'Alderin',
    profession: '2 months ago',
    comment: 'The institute provides excellent training in Graphic, Interior, UI/UX, and AI design, ensuring students gain both theoretical knowledge and practical skills. The faculty are highly experienced, supportive, and always ready to guide learners at every step. Their hands-on projects and real-world assignments make learning engaging and effective. The academy also offers top-notch resources and tools, helping students stay ahead in the industry. Overall, it is a professional, inspiring, and growth-oriented institute that I highly recommend.',
    imgSrc: '/images/testimonial/user3.webp',
    rating: 5,
    link: 'https://maps.app.goo.gl/tLUk7gTJgyy3GB2Q6'
  },
  {
    id: 4,
    name: 'kalai mani',
    profession: '1 month ago',
    comment: 'I am kalaimani. I completed graphic design courses like Figma, Adobe Photoshop, Adobe Illustrator, Adobe XD, Balsamiq. Flexible class timing. Fun and education balanced perfectly. Thank you for this amazing experience, would 100% recommend.',
    imgSrc: '/images/testimonial/user1.webp',
    rating: 5,
    link: 'https://maps.app.goo.gl/3CpLTPShjnV516PB8'
  },
  {
    id: 5,
    name: 'Sugumar M',
    profession: '3 weeks ago',
    comment: 'Best UI UX, AI design institute in Coimbatore. It is the best institute in Coimbatore for the upcoming future updates. Many students who studied here are good designers. All the designing update versions are taught. There is a proper fee. In the coming times, civil engineers and designers will get more opportunities. People are needed for design work. So the students who come here can utilize it properly. This institute is the best choice for that. Thank you.',
    imgSrc: '/images/testimonial/user2.webp',
    rating: 5,
    link: 'https://maps.app.goo.gl/MXt5WYf18dCSa76f6'
  },
  {
    id: 6,
    name: 'K R MURUKANANDHAM',
    profession: '2 weeks ago',
    comment: 'Best UI UX and Graphic Design AI Skillup institute. Completed Adobe Photoshop, Adobe Illustrator, Figma and Adobe XD. Digital Marketing course training also provided. Live project and internship-based training.',
    imgSrc: '/images/testimonial/user3.webp',
    rating: 5,
    link: 'https://maps.app.goo.gl/2o7xFVKsi2HSwiwP6'
  },
  {
    id: 7,
    name: 'T. Sneka',
    profession: '2 weeks ago',
    comment: 'I am Sneka, 2025 B.E Computer Science Engineering pass out. I chose a course in graphic design and UI/UX as I am interested in design. The ambience is so good and clean, staff are friendly, and the teaching is perfect and easy to understand.',
    imgSrc: '/images/testimonial/user1.webp',
    rating: 5,
    link: 'https://maps.app.goo.gl/L3Scf1NyHLMZpj3t7'
  },
  {
    id: 8,
    name: 'Madan S',
    profession: '1 week ago',
    comment: 'Hai I\'m Madan, from Dubai. I recently completed my UI/UX Design course here, and it was a great experience. The trainers were knowledgeable and very supportive throughout the journey. The sessions were practical, and I got hands-on exposure to real-time projects, which boosted my confidence. I really recommend this institution for anyone who wants to build a strong career in UI/UX design.',
    imgSrc: '/images/testimonial/user2.webp',
    rating: 5,
    link: 'https://maps.app.goo.gl/cjXJm7iotxasaRKA8'
  },
  {
    id: 9,
    name: 'Ariyvumozhi VP',
    profession: '4 days ago',
    comment: 'I learnt Photoshop and Illustrator courses. They provide UI/UX, interior design, Photoshop, Illustrator training in one-on-one classes, with flexible timing, skilled trainers, and a healthy atmosphere to learn designing courses at an affordable fee.',
    imgSrc: '/images/testimonial/user3.webp',
    rating: 5,
    link: 'https://maps.app.goo.gl/DL9DLYrUs7nWiZ8k7'
  },
  {
    id: 10,
    name: 'SURYA KRISHNAN',
    profession: '2 days ago',
    comment: 'Best place to learn, with technical drive and real-time, project data-based work.',
    imgSrc: '/images/testimonial/user1.webp',
    rating: 5,
    link: 'https://maps.app.goo.gl/AKp6ugJ922rgfTxM8'
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Courses', href: '/courses' },
      { label: 'Corporate Training', href: '/corporate-training' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },


    ],
  },
]

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
