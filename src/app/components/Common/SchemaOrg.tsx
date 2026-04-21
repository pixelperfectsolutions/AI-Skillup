import React from 'react'

const SchemaOrg = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": "https://aiskillup.in/#organization",
        "name": "AI Skill Up Academy",
        "url": "https://aiskillup.in",
        "logo": "https://aiskillup.in/images/ai-logo.webp",
        "image": "https://aiskillup.in/images/about-1.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "45, Gokhale Street, Ram Nagar, Near MK Residency",
          "addressLocality": "Coimbatore",
          "addressRegion": "TN",
          "postalCode": "641009",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 11.0148355,
          "longitude": 76.9638168
        },
        "telephone": "+91 96554 22511",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "83"
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
              "text": "AI Skill Up Academy is the top-rated AI-based software training institute in Coimbatore, offering industry-aligned courses with 100% placement support."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a No-Code course in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, AI Skill Up Academy offers a specialized No-Code development course in Coimbatore that teaches students how to build apps and automate workflows using AI tools without writing code."
            }
          },
          {
            "@type": "Question",
            "name": "Does AI Skill Up offer placement support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide 100% placement assistance, including resume building, mock interviews, and direct referrals to our 200+ hiring partners."
            }
          },
          {
            "@type": "Question",
            "name": "What courses does AI Skill Up offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer courses in Full Stack Development, UI/UX Design, No-Code AI Automation, Digital Marketing, Python Programming, and Data Science."
            }
          },
          {
            "@type": "Question",
            "name": "Where is AI Skill Up located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are located at 45, Gokhale Street, Ram Nagar, Near MK Residency, Coimbatore - 641009."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer online training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer both on-premise classroom training in Coimbatore and instructor-led live online sessions."
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
