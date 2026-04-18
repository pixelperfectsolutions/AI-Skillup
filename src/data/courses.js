// Centralized courses data used by Courses.jsx and ApplyForm.jsx
// Update this single source of truth to keep UI in sync across the app.

export const courses = [
  {
    slug: 'python-course-coimbatore',
    title: 'Python Programming Course in Coimbatore',
    description: '3 Months | Beginner to Advanced',
    image: '/images/courses/python.png',
    highlights: [
      'Python + AI Integration – Learn faster with AI-assisted coding',
      '100% Placement Support in Coimbatore IT hub',
      'Real-world Automation & AI Projects',
      'NASSCOM Certified Curriculum',
      'Hands-on training by industry experts',
    ],
    projects: [
      'Build an AI-powered automation script',
      'Create a Data Scraping tool',
      'Develop a Python-based AI agent',
    ],
  },
  {
    slug: 'data-science-course-coimbatore',
    title: 'Data Science Course in Coimbatore',
    description: '4 Months | Beginner to Advanced',
    image: '/images/courses/data-science.png',
    highlights: [
      'AI-Driven Data Science – Master predictive analytics',
      'Machine Learning & Deep Learning Foundations',
      'Data Visualization with Power BI & Tableau',
      'Real-time Industry Data Projects',
      'Placement assurance with top tech firms',
    ],
    projects: [
      'Predictive Analytics for Retail Hubs',
      'Customer Sentiment Analysis Model',
      'Healthcare Data Visualisation Dashboard',
    ],
  },
  {
    slug: 'full-stack-development-course-coimbatore',
    title: 'Full-Stack Development Course in Coimbatore',
    description: '4 Months | Level: Beginner to Advanced',
    image: '/images/course-1.png',
    highlights: [
      'AI-Assisted Coding – Use Cursor AI & GitHub Copilot for faster development',
      'Prompt Engineering for Developers – Write optimized code using AI prompts',
      'AI-Powered Debugging & Optimization – Fix errors instantly with AI',
      'Automated Frontend & Backend Development – Generate React, Node.js, Python code using AI',
      'Deploying AI-Enhanced Web Apps – Integrate OpenAI APIs, AI chatbots, and AI-driven analytics',
    ],
    projects: [
      'Build an AI-powered SaaS platform',
      'Create a real-time AI chatbot for websites',
      'Develop a personalized recommendation engine',
    ],
  },
  {
    slug: 'ui-ux-design-course-coimbatore',
    title: 'UI/UX Design Course in Coimbatore',
    description: '2 Months | Level: Beginner to Advanced',
    image: '/images/course-2.png',
    highlights: [
      'AI-Generated UI/UX Designs – Use Midjourney & Figma AI for rapid prototyping',
      'Automated Wireframing – Convert sketches into UI designs using Uizard',
      'AI-Driven User Research – Analyze user behavior with AI tools',
      'Personalized Design Systems – Generate color schemes, fonts, and layouts using AI',
      'Voice & Gesture-Based UI Design – Future-ready interfaces',
    ],
    projects: [
      'Design an AI-powered dashboard',
      'Create a voice-controlled app interface',
      'Build a personalized e-commerce UI',
    ],
  },
  {
    slug: 'mobile-app-development-course-coimbatore',
    title: 'Mobile App Development Course in Coimbatore',
    description: '4 Months | Level: Beginner to Advanced',
    image: '/images/course-3.png',
    highlights: [
      'AI-Generated App Code – Use Flutter AI & ChatGPT to write app logic',
      'Smart App Features – Integrate AI chatbots, voice recognition, and image processing',
      'No-Code/Low-Code AI Apps – Build apps with Appy Pie AI & Bubble.io',
      'AI-Powered Testing & Debugging – Automate QA with AI tools',
      'Deploy AI-Enhanced Mobile Apps – Publish apps with AI-driven analytics',
    ],
    projects: [
      'Build a personalized fitness AI coach app',
      'Develop an AI-based language translator app',
      'Create a smart shopping assistant',
    ],
  },
  {
    slug: 'no-code-ai-automation-coimbatore',
    title: 'No-Code AI Automation Course in Coimbatore',
    description: '3 Months | Level: Beginner to Advanced',
    image: '/images/course-4.png',
    highlights: [
      'Drag-and-Drop AI Development – Build web & mobile apps without coding',
      'AI Automation – Connect apps using Zapier & Make',
      'AI-Powered Business Logic – Use ChatGPT to automate workflows',
      'Deploy Scalable No-Code Apps – Launch SaaS platforms effortlessly',
      'Integrate AI APIs – Add ChatGPT, AI analytics, and smart databases',
    ],
    projects: [
      'Build a no-code e-commerce store with AI recommendations',
      'Create an AI-driven CRM system',
      'Develop an automated booking platform',
    ],
  },
  {
    slug: 'digital-marketing-course-coimbatore',
    title: 'Digital Marketing Course in Coimbatore',
    description: '2 Months | Level: Beginner to Advanced',
    image: '/images/course-5.png',
    highlights: [
      'AI-Generated Ad Copies & Content – Use ChatGPT & Jasper for high-conversion ads',
      'AI-Driven SEO & SEM – Automate keyword research & PPC campaigns',
      'AI-Powered Social Media Marketing – Generate posts & analyze trends',
      'Predictive Analytics for Marketing – Forecast sales using AI',
      'Automated Email & Chatbot Marketing – Build AI chatbots for customer engagement',
    ],
    projects: [
      'Run an AI-optimized Google Ads campaign',
      'Create a viral social media strategy using AI',
      'Build an AI-driven email marketing funnel',
    ],
  },
];

export const courseTitles = courses.map((c) => c.title);
