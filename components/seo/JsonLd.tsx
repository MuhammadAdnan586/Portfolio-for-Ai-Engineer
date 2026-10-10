import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "AI Engineer",
    description: profile.summary,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    worksFor: { "@type": "Organization", name: "XICTEK Systems" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Pir Mehr Ali Shah Arid Agriculture University",
    },
    knowsAbout: [
      "Agentic AI",
      "Retrieval-Augmented Generation",
      "Large Language Models",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "Computer Vision",
      "FastAPI",
      "Next.js",
    ],
    sameAs: [profile.linkedin, profile.github],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}