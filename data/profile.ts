export type Profile = {
  name: string;
  title: string;
  roles: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  cvPath: string;
  photo: string; // /public/images/profile.webp
  workPhoto: string; // /public/images/work-suit.webp
  summary: string;
};

export const profile: Profile = {
  name: "Muhammad Adnan",
  title: "AI Engineer | Agentic AI, RAG & LLM Application Developer",
  roles: ["Agentic AI Engineer", "RAG & LLM Application Developer", "Multi-Agent Systems Builder"],
  location: "Rawalpindi, Punjab, Pakistan",
  email: "adnank75586@gmail.com",
  phone: "+92-319-9398845",
  linkedin: "https://www.linkedin.com/in/m-adnan-12a816402/",
  github: "https://github.com/MuhammadAdnan586",
  cvPath: "/Muhammad_Adnan_CV.pdf",
  photo: "/images/profile.webp",
  workPhoto: "/images/work-suit.webp",
  summary:
    "Computer Science graduate and current AI/ML Intern at XICTEK Systems, specializing in agentic AI, LLM application development, and AI-driven automation.",
};