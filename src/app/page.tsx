import React from "react";
import Hero from "@/app/components/Home/Hero";
import Companies from "@/app/components/Home/Companies";
import Courses from "@/app/components/Home/Courses";
import WorkshopShowcase from "@/app/components/Home/Mentor";
import Testimonial from "@/app/components/Home/Testimonials";
import ContactForm from "@/app/components/ContactForm";
import TrainingGallery from "@/app/components/Home/TrainingGallery";
import Newsletter from "@/app/components/Home/Newsletter";
import { CourseData, TechGaintsData, TestimonialData } from "@/data/siteData";
import { Metadata } from "next";

import FAQSection from "@/app/components/Home/FAQSection";

export const metadata: Metadata = {
  title: "AI Skill Up Academy — Best AI-Based Software Training Institute in Coimbatore",
  description: "Join AI Skill Up Academy, Coimbatore's #1 AI-based software training centre at Ram Nagar. Courses in Full Stack, UI/UX, No-Code, Digital Marketing & Data Science. 9000+ students. 100% placement support. Enroll now!",
  keywords: [
    "AI-based software training institute in Coimbatore",
    "best software training institute Coimbatore with placement",
    "full stack development course Coimbatore",
    "UI UX design course Coimbatore",
    "no code development course Coimbatore",
    "digital marketing course using AI Coimbatore",
    "IT training institute Ram Nagar Coimbatore"
  ],
  alternates: {
    canonical: 'https://aiskillup.in',
  },
};

export default function Home() {
  // Pre-filter data for the homepage to ensure SSR HTML is exactly what we want Crawler to see
  const filteredCourses = CourseData
    .filter((c) => !c.slug?.includes("python-course") && !c.slug?.includes("data-science-course"))
    .map((c) => {
      // Restore original images if they were changed
      let originalImg = c.imgSrc;
      if (c.slug?.includes("full-stack")) originalImg = "/images/course-1.png";
      if (c.slug?.includes("ui-ux")) originalImg = "/images/course-2.png";
      if (c.slug?.includes("mobile-app")) originalImg = "/images/course-3.png";
      if (c.slug?.includes("no-code")) originalImg = "/images/course-4.png";
      if (c.slug?.includes("digital-marketing")) originalImg = "/images/course-5.png";
      return { ...c, imgSrc: originalImg };
    });

  return (
    <main>
      <Hero />
      <Companies initialData={TechGaintsData} />
      <Courses initialData={filteredCourses} />
      <WorkshopShowcase />
      <Testimonial initialData={TestimonialData} />
      <FAQSection />
      <ContactForm />
      <TrainingGallery />
      <Newsletter />
    </main>
  );
}