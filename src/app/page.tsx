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
  title: "Best AI Course Training Institute in Coimbatore | AI Skill Up Academy",
  description: "AI Skill Up Academy — Coimbatore's #1 AI-native training institute. Learn Full Stack Development, UI/UX Design, No-Code AI Automation & Digital Marketing using AI. 100% Placement | 5.0 ★ Google Rating | Ram Nagar, Coimbatore.",
  keywords: [
    "AI course Coimbatore",
    "best AI training institute Coimbatore",
    "software training Coimbatore",
    "full stack development course Coimbatore",
    "UI UX design course Coimbatore",
    "no-code AI automation Coimbatore",
    "digital marketing course Coimbatore",
    "generative AI training Coimbatore",
    "AI tools for professionals Coimbatore"
  ],
  alternates: {
    canonical: 'https://www.aiskillup.in',
  },
  openGraph: {
    title: "Best AI Course Training Institute in Coimbatore | AI Skill Up Academy",
    description: "Coimbatore's #1 AI-native institute. Full Stack, UI/UX, No-Code AI Automation & Digital Marketing with real AI tools. 100% Placement.",
    url: 'https://www.aiskillup.in',
    images: [{ url: 'https://www.aiskillup.in/images/aiskillup-banner1.jpeg' }],
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

      {/* Why Choose AI Skill Up Academy — SEO-rich section */}
      <section id="why-choose-us" aria-label="Why choose AI Skill Up Academy" className="py-24 bg-white border-t border-gray-100">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h6 className="inline-block px-5 py-2 rounded-full mb-4 bg-primary/10 text-primary border border-primary/20">
              Coimbatore&apos;s Only AI-Native Academy
            </h6>
            <h2 className="mb-6">Why AI Skill Up Academy is Coimbatore&apos;s Best AI Training Institute</h2>
          </div>
          <p className="mb-6 text-base leading-relaxed text-black/70">
            Unlike general IT training institutes in Coimbatore, AI Skill Up Academy is built AI-first from the ground up.
            Every course — whether{" "}
            <a href="/courses/full-stack-development-course-coimbatore" className="text-primary hover:underline font-semibold">Full Stack Development</a>,{" "}
            <a href="/courses/ui-ux-design-course-coimbatore" className="text-primary hover:underline font-semibold">UI/UX Design</a>,{" "}
            <a href="/courses/digital-marketing-course-coimbatore" className="text-primary hover:underline font-semibold">Digital Marketing</a>, or{" "}
            <a href="/courses/no-code-ai-automation-coimbatore" className="text-primary hover:underline font-semibold">No-Code AI Automation</a>{" "}
            — is taught with real AI tools integrated into the curriculum. Our students in Coimbatore don&apos;t just learn theory;
            they build live projects using ChatGPT, Midjourney, GitHub Copilot, Bubble, Make.com, and other industry-standard AI platforms.
          </p>
          <p className="mb-8 text-base leading-relaxed text-black/70">
            Located at Ram Nagar, Coimbatore, AI Skill Up Academy offers flexible batch timings, one-on-one mentoring,
            ATS-optimized resume building, mock interviews, and a 200+ company hiring network — making us the top choice
            for students and working professionals looking to upskill with AI in Coimbatore.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
            {[
              "9,000+ students trained since inception",
              "5.0 ★ Google rating based on 83+ verified student reviews",
              "100% placement support with dedicated career mentors",
              "AI tools used in every class — not just theoretical AI concepts",
              "Both online and offline batches available from Coimbatore",
              "Corporate AI training for companies and government departments",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="mt-1 text-primary shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WorkshopShowcase />
      <Testimonial initialData={TestimonialData} />
      <FAQSection />
      <ContactForm />
      <TrainingGallery />
      <Newsletter />
    </main>
  );
}