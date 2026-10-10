export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

// Newest first
export const experience: Experience[] = [
  {
    id: "xictek",
    role: "AI/ML Intern",
    company: "XICTEK Systems",
    location: "Remote",
    period: "Oct 2026 - Present",
    current: true,
    bullets: [
      "Building AI-powered applications using Python, FastAPI, and LLM APIs such as Gemini, including a chatbot with a working demo and GitHub repository.",
      "Applying prompt engineering, API integration, and error handling to build reliable, user-friendly AI solutions.",
      "Working in a remote, structured team environment using GitHub, ClickUp, and Microsoft Teams, with regular implementation reviews and clear documentation.",
    ],
  },
  {
    id: "devsynt",
    role: "Full-Stack Web Development Intern",
    company: "DevSynt",
    location: "Rise Summer Internship 2026, Remote",
    period: "Summer 2026",
    bullets: [
      "Completed the DevSynt Rise Summer Internship 2026 in Full Stack Web Development and earned a Certificate of Completion (ID: DS-RISE-2026-C1-BA347D0C).",
      "Worked across the full-stack workflow: responsive front-end interfaces with React and Next.js, back-end APIs with FastAPI, and relational data storage with MySQL.",
      "Used Git and GitHub for version control and structured, collaborative development.",
    ],
  },
  {
    id: "scrollnecom",
    role: "Business Associate (Founder)",
    company: "Scroll'n Ecom",
    location: "Rawalpindi, Pakistan",
    period: "Jan 2025 - Apr 2026",
    bullets: [
      "Founded and managed an e-commerce startup: product sourcing, online store management, digital marketing, and customer relations.",
      "Applied data-driven decisions to pricing, marketing spend, customer engagement, and day-to-day operations.",
    ],
  },
];