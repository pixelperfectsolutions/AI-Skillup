'use client'
import { useEffect, useState } from "react";

import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-999 flex flex-col items-center gap-4">
      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/919655422511"
        target="_blank"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 active:scale-95 duration-300"
        aria-label="Contact Us on WhatsApp"
      >
        <Icon icon="ic:baseline-whatsapp" width={32} height={32} />
      </Link>

      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="back-to-top flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-xl transition-all hover:scale-110 active:scale-95 duration-300"
        >
          <span className="mt-[4px] h-3.5 w-3.5 rotate-45 border-l-2 border-t-2 border-white"></span>
        </button>
      )}
    </div>
  );
}

