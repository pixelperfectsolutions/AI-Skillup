import React from 'react'

const SchemaOrg = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.aiskillup.in/#organization",
        "name": "AI Skill Up Academy",
        "alternateName": "AI Skill Up",
        "url": "https://www.aiskillup.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.aiskillup.in/images/logo/logo.png"
        },
        "image": "https://www.aiskillup.in/images/aiskillup-banner1.jpeg",
        "description": "Coimbatore's #1 AI-native software training institute offering Full Stack Development, UI/UX Design, No-Code AI Automation, Mobile App Development, Digital Marketing, Python, and Data Science using AI tools.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "45, Gokhale Street, Ram Nagar, Near MK Residency",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641009",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.0148355",
          "longitude": "76.9638168"
        },
        "telephone": "+919655422511",
        "email": "info@aiskillup.in",
        "openingHours": "Mo-Sa 09:00-19:00",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "83",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://aiskillup.wordpress.com",
          "https://www.facebook.com/AISKILLUP6/",
          "https://www.instagram.com/academyaiskillup/",
          "https://www.google.com/maps/place/AI+SKILLUP+-+Graphic,+UI+UX,+FULL+STACK+Academy"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.aiskillup.in/#localbusiness",
        "name": "AI Skill Up Academy",
        "image": "https://www.aiskillup.in/images/aiskillup-banner1.jpeg",
        "priceRange": "\u20b9\u20b9",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "45, Gokhale Street, Ram Nagar",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641009",
          "addressCountry": "IN"
        },
        "telephone": "+919655422511",
        "url": "https://www.aiskillup.in"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.aiskillup.in/#website",
        "url": "https://www.aiskillup.in",
        "name": "AI Skill Up Academy",
        "description": "Best AI-based software training institute in Coimbatore",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.aiskillup.in/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best AI training institute in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Skill Up Academy is the top-rated AI-native software training institute in Coimbatore, located at Ram Nagar. We offer industry-aligned courses in Full Stack Development, UI/UX Design, No-Code AI Automation, and Digital Marketing with 100% placement support and a 5.0 Google rating from 83+ verified students."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a No-Code AI Automation course in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, AI Skill Up Academy offers Coimbatore's only dedicated No-Code AI Automation course. You will learn to build professional apps and automate business workflows using Bubble, FlutterFlow, Make.com, Zapier, and AI tools without writing a single line of code."
            }
          },
          {
            "@type": "Question",
            "name": "Does AI Skill Up Academy offer placement support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide 100% placement assistance including ATS-optimized resume building, mock interview preparation, and direct referrals to our 200+ hiring partners across Tamil Nadu and beyond."
            }
          },
          {
            "@type": "Question",
            "name": "What courses does AI Skill Up Academy offer in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer 7 AI-powered courses: Full Stack Development, UI/UX Design, No-Code AI Automation, Digital Marketing, Python Programming, Data Science with Machine Learning, and Mobile App Development. Every course integrates real AI tools like ChatGPT, GitHub Copilot, Midjourney, and Bubble."
            }
          },
          {
            "@type": "Question",
            "name": "Where is AI Skill Up Academy located in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Skill Up Academy is located at 45, Gokhale Street, Ram Nagar, Near MK Residency, Coimbatore - 641009, Tamil Nadu. You can reach us at +91 96554 22511."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer online training from Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, AI Skill Up Academy offers both on-site classroom training in Coimbatore and instructor-led live online sessions. Both formats use the same AI-integrated curriculum with hands-on projects."
            }
          },
          {
            "@type": "Question",
            "name": "What is the fee for AI courses at AI Skill Up Academy Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Skill Up Academy offers competitively priced AI courses in Coimbatore with flexible payment options. Contact us at +91 96554 22511 or visit our Ram Nagar centre for detailed fee structure and available scholarship options."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default SchemaOrg
