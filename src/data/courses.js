// Centralized courses data used by Courses.jsx and ApplyForm.jsx
// Update this single source of truth to keep UI in sync across the app.

export const courses = [
  {
    title: 'Full-Stack Web Development Using AI (Next-Gen Web Development)',
    description: 'Duration: 4 Months | 2 months course, 2 months internship. Level: Beginner to Advanced',
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
    title: 'UI/UX Design with AI (Smart Design Automation)',
    description: 'Duration: 2 Months | 1 month course, 1 month internship. Level: Beginner to Advanced',
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
    title: 'AI-Based Mobile App Development (Next-Level App Building)',
    description: 'Duration: 4 Months | 2 months course, 2 months internship. Level: Beginner to Advanced',
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
    title: 'No-Code Development Course (Build Without Coding)',
    description: 'Duration: 3 Months | Level: Beginner to Advanced',
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
    title: 'Digital Marketing Using AI (AI-Powered Growth Hacking)',
    description: 'Duration: 2 Months | 1 month course, 1 month internship. Level: Beginner to Advanced',
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
