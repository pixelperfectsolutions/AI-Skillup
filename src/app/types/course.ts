export type CourseType = {
  heading: string
  imgSrc: string
  name: string
  students: number
  classes: number
  price: number
  rating: number
  slug: string
  description?: string
  aiPositioning?: string
  placementPromise?: string
  whyChoose?: {
    marketDemand: string
    salaryInsights: string
    careerRoles: string[]
  }
  syllabus?: {
    tabName: string
    sections: {
      title: string
      modules: string[]
    }[]
  }[]
  tools?: { name: string; icon: string }[]
  projects?: { title: string; description: string }[]
  faqs?: { q: string; a: string }[]
  combos?: {
    title: string
    level: string
    duration: string
    learners: string
    price: string
  }[]
  longFormContent?: string[]
}

