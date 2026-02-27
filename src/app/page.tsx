import React from "react";
import Hero from "@/app/components/Home/Hero";
import Companies from "@/app/components/Home/Companies";
import Courses from "@/app/components/Home/Courses";
import WorkshopShowcase from "@/app/components/Home/Mentor";
import Testimonial from "@/app/components/Home/Testimonials";
import ContactForm from "@/app/components/ContactForm";
import TrainingGallery from "@/app/components/Home/TrainingGallery";
import Newsletter from "@/app/components/Home/Newsletter";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI SKILL UP Academy",
  description: "Top AI-Based Software Training Institute",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Courses />
      <WorkshopShowcase />
      <Testimonial />
      <ContactForm />
      <TrainingGallery />
      <Newsletter />
    </main>
  );
}