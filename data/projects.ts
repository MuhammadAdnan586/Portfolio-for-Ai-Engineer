import { profile } from "./profile";
import { projectNarration } from "./narration";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  features: string[];
  impact: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  linkedinUrl: string;
  cover: string;
  screenshots: string[];
  narration: string;
};

// TODO: replace every githubUrl repo name with your real repository name.
// TODO: replace linkedinUrl with your LinkedIn post link for each project (profile link used for now).
export const projects: Project[] = [
  {
    slug: "nexora-ai",
    title: "Nexora AI",
    tagline: "Agentic AI Commerce Intelligence Platform",
    category: "Agentic AI",
    problem:
      "E-commerce teams struggle to turn scattered sales, inventory, pricing and support data into fast operational decisions.",
    solution:
      "Multi-agent orchestration with LangGraph automates business analysis and decision-making. A RAG-powered AI copilot covers demand forecasting, inventory, pricing, promotions, logistics and customer support, and a Voice AI agent handles conversational customer interaction.",
    features: [
      "LangGraph multi-agent orchestration for business analysis",
      "RAG-powered copilot for forecasting, inventory, pricing and promotions",
      "Logistics and customer support insights in one place",
      "Voice AI agent for conversational customer interaction",
    ],
    impact:
      "Extends the platform beyond text-based workflows and turns scattered commerce data into faster, AI-assisted operational decisions.",
    techStack: ["LangGraph", "FastAPI", "RAG", "Voice AI", "LLMs", "Python"],
    githubUrl: "https://github.com/MuhammadAdnan586/Nexora-AI-Agentic-AI-Commerce-Intelligence-Platform",
    liveUrl: "",
    linkedinUrl: profile.linkedin, // TODO: replace with post link
    cover: "/projects/nexora-ai/cover.webp",
    screenshots: [],
    narration: projectNarration["nexora-ai"],
  },
  {
    slug: "fertilizer-deficiency-monitor",
    title: "AI-Based Fertilizer Deficiency Monitoring App",
    tagline: "My Final Year Project: real-time NPK deficiency detection from leaf photos",
    category: "Computer Vision",
    problem:
      "Farmers cannot easily or quickly identify NPK nutrient deficiencies in crops, leading to wrong fertilizer use and lower yield.",
    solution:
      "A mobile app that detects NPK deficiency from rice and maize leaf images in real time, with an end-to-end pipeline from image capture to CNN inference, REST API delivery and an actionable fertilizer recommendation.",
    features: [
      "Real-time NPK deficiency detection for rice and maize leaves",
      "CNN / MobileNetV2 classification model with OpenCV preprocessing",
      "React Native mobile app with Django REST API backend",
      "Actionable fertilizer recommendations after every scan",
    ],
    impact: "96.3% classification accuracy on rice and maize leaf images.",
    techStack: [
      "CNN",
      "MobileNetV2",
      "OpenCV",
      "TensorFlow",
      "React Native",
      "Django",
      "Firebase",
      "Python",
    ],
    githubUrl: "https://github.com/MuhammadAdnan586/Fertilizer_Deficiency_Detection",
    liveUrl: "",
    linkedinUrl: profile.linkedin, // TODO: replace with post link
    cover: "/projects/fertilizer-deficiency-monitor/cover.webp",
    screenshots: [],
    narration: projectNarration["fertilizer-deficiency-monitor"],
  },
  {
    slug: "automl-saas",
    title: "AI-Powered AutoML SaaS Platform",
    tagline: "Upload a dataset, get seven benchmarked models and explanations",
    category: "Full-Stack AI",
    problem:
      "Non-experts struggle to train, compare and understand ML models on their own datasets.",
    solution:
      "A full-stack SaaS that automatically trains and benchmarks seven ML models per uploaded dataset and ranks them on a live leaderboard, with a dataset-aware AI chatbot, a RAG documentation assistant, data-quality analysis, SHAP explainability, report generation and a no-code API generator.",
    features: [
      "Automatic training and benchmarking of seven ML models with a live leaderboard",
      "Dataset-aware AI chatbot and RAG documentation assistant (ChromaDB + Gemini)",
      "Data-quality analysis, SHAP explainability and report generation",
      "No-code API generator and role-based access control (RBAC)",
      "Dockerized, with production deployment on Railway",
    ],
    impact:
      "Lets non-experts go from raw dataset to ranked, explained and deployable models in one product.",
    techStack: [
      "FastAPI",
      "Next.js",
      "Python",
      "Google Gemini",
      "ChromaDB",
      "SHAP",
      "Docker",
      "Railway",
    ],
    githubUrl: "https://github.com/MuhammadAdnan586/AI-Powered-AutoML",
    liveUrl: "", // TODO: add Railway URL if public
    linkedinUrl: profile.linkedin, // TODO: replace with post link
    cover: "/projects/automl-saas/cover.webp",
    screenshots: [],
    narration: projectNarration["automl-saas"],
  },
  {
    slug: "job-search-assistant",
    title: "Job Search Assistant",
    tagline: "Multi-agent CrewAI system for job discovery, matching and summarization",
    category: "Multi-Agent AI",
    problem:
      "Job hunting means repetitive searching, filtering and matching across many listings.",
    solution:
      "A 7-agent CrewAI pipeline powered by Gemini that automates job discovery, matching and summarization, with a dark Streamlit UI and search filters.",
    features: [
      "7 specialized CrewAI agents working as one pipeline",
      "Gemini-powered matching and summarization of listings",
      "Live job discovery through SerpAPI",
      "Dark-themed Streamlit UI with search filters",
    ],
    impact:
      "Debugged SerpAPI integration and agent hallucination issues to improve the reliability and accuracy of agent outputs.",
    techStack: ["CrewAI", "Google Gemini", "SerpAPI", "Streamlit", "Python"],
    githubUrl: "https://github.com/MuhammadAdnan586/job_search_Assistant_Crew",
    liveUrl: "",
    linkedinUrl: profile.linkedin, // TODO: replace with post link
    cover: "/projects/job-search-assistant/cover.webp",
    screenshots: [],
    narration: projectNarration["job-search-assistant"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);