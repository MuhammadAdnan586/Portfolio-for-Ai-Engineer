export type Certification = {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  image?: string; // /public/certs/... (placeholder shown if missing)
  file?: string; // optional PDF version
};

export const certifications: Certification[] = [
  {
    id: "devsynt",
    title: "Full Stack Web Development",
    issuer: "DevSynt",
    platform: "Rise Summer Internship 2026",
    date: "25 Sep 2026",
    credentialId: "DS-RISE-2026-C1-BA347D0C",
    verifyUrl: "https://verify.devsynt.com/c/MGcPHICmknt-w5YiUmeESFqJ",
    image: "/certs/devsynt-fullstack.jpg",
    file: "/certs/devsynt-fullstack.pdf",
  },
  {
    id: "ibm-ds",
    title: "Data Science Orientation",
    issuer: "IBM",
    platform: "Coursera",
    date: "18 Jan 2025",
    verifyUrl: "https://www.credly.com/go/8pFSlSEH",
    image: "/certs/ibm-data-science.jpg",
  },
  {
    id: "bcgx-genai",
    title: "GenAI Job Simulation",
    issuer: "BCG X",
    platform: "Forage",
    date: "16 Aug 2026",
    image: "/certs/bcgx-genai.jpg",
  },
  {
    id: "datacom-agent",
    title: "Automation AI Accelerator: From Co-pilot to Autonomous Agent",
    issuer: "Datacom",
    platform: "Forage",
    date: "16 Aug 2026",
    image: "/certs/datacom-autonomous-agent.jpg",
  },
];