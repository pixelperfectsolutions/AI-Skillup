export interface SyllabusSection {
  title: string;
  details: string[];
}

export interface CourseDetail {
  slug: string;
  title: string;
  h1: string;
  description: string;
  heroImage: string;
  partnerLogos: string[];
  stats: { label: string; value: string; icon: string }[];
  seoSections: { h3: string; content: string }[];
  syllabus: { [key: string]: { title: string; sections: SyllabusSection[] } };
  testimonials: { name: string; role: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export const courseDetails: { [key: string]: CourseDetail } = {
  "python-course-coimbatore": {
    slug: "python-course-coimbatore",
    title: "Master Python Programming with AI — Coimbatore's Best Course",
    h1: "Master Python Programming with AI",
    description: "Learn Python from scratch to advanced AI integration. Build real projects, earn NASSCOM certification, and land your dream job with 100% placement guarantee.",
    heroImage: "/images/courses/python.png",
    partnerLogos: ["/images/ai logo.webp", "/images/cadd bim.png", "/images/pixel-logo-site.png"],
    stats: [
      { label: "Students Enrolled", value: "2K+", icon: "solar:users-group-rounded-bold" },
      { label: "Placement Rate", value: "95%", icon: "solar:medal-ribbons-star-bold" },
      { label: "Live Projects", value: "10+", icon: "solar:checklist-bold" },
      { label: "Years of Experience", value: "6+", icon: "solar:history-bold" },
    ],
    seoSections: [
      { h3: "Why Python for AI & Automation in Coimbatore?", content: "Python is the undisputed language of Artificial Intelligence and automation. At AI SKILL UP Coimbatore, we go beyond syntax — teaching you how modern developers use AI tools like ChatGPT and GitHub Copilot to build faster." },
      { h3: "Python Career Scope in Coimbatore", content: "Coimbatore's IT & manufacturing sector is rapidly adopting automation and data-driven solutions. Python developers are among the most sought-after professionals." },
    ],
    syllabus: {
      core: {
        title: "Core Python",
        sections: [
          { title: "Introduction to Python & Setup", details: ["History, Features & Applications of Python", "Installing Python, Pip & VS Code IDE", "Understanding the Python Interpreter"] },
          { title: "Python Variables & Data Types", details: ["Numbers, Strings, Booleans & Type Casting", "Lists, Tuples, Sets & Dictionaries"] }
        ]
      },
      advanced: {
        title: "Advanced Python",
        sections: [
          { title: "File Handling & Databases", details: ["Reading & Writing Files (txt, csv, json)", "SQLite & MySQL with Python"] }
        ]
      }
    },
    testimonials: [
      { name: "Rahul Sharma", role: "Python Developer", text: "The Python course at AI-Skillup in Coimbatore is top-notch." }
    ],
    faqs: [
      { q: "Is Python the best programming language to learn in 2025?", a: "Yes. Python is ranked #1 for AI, Machine Learning, and Automation." }
    ]
  },
  "full-stack-development-course-coimbatore": {
    slug: "full-stack-development-course-coimbatore",
    title: "Best Full Stack Development Course in Coimbatore with AI",
    h1: "Full Stack Development using AI",
    description: "Become a job-ready full stack developer in Coimbatore. Master React, Node.js, and AI-powered coding with 100% placement support.",
    heroImage: "/images/courses/fullstack.png",
    partnerLogos: ["/images/ai logo.webp", "/images/cadd bim.png", "/images/pixel-logo-site.png"],
    stats: [
      { label: "Graduates", value: "3K+", icon: "solar:users-group-rounded-bold" },
      { label: "Avg Salary", value: "6 LPA", icon: "solar:medal-ribbons-star-bold" },
      { label: "Projects", value: "15+", icon: "solar:checklist-bold" },
      { label: "Partner Firms", value: "200+", icon: "solar:history-bold" },
    ],
    // ... more data would go here
    seoSections: [], syllabus: {}, testimonials: [], faqs: []
  }
}
