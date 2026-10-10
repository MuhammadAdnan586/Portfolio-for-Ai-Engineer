export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-agents",
    title: "AI & Agents",
    items: [
      "LLM Applications",
      "Agentic Workflows",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "OpenAI",
      "Anthropic",
      "Google Gemini",
    ],
  },
  {
    id: "rag",
    title: "RAG & AI Pipelines",
    items: [
      "RAG",
      "Vector Embeddings",
      "ChromaDB",
      "Data Extraction",
      "Classification",
      "Summarization",
      "AI Evaluation",
    ],
  },
  {
    id: "cv-ml",
    title: "Computer Vision & ML",
    items: ["CNN", "MobileNetV2", "OpenCV", "Scikit-learn", "TensorFlow", "Keras"],
  },
  {
    id: "automation",
    title: "Automation & Integration",
    items: [
      "Workflow Automation",
      "REST APIs",
      "Webhooks",
      "Tool/Function Calling",
      "Structured Outputs",
      "CRM Integrations",
    ],
  },
  {
    id: "conversational",
    title: "Conversational AI",
    items: ["Voice AI Agents", "Speech-to-Text"],
  },
  {
    id: "fullstack",
    title: "Full-Stack & Deployment",
    items: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "React Native",
      "Django",
      "Docker",
      "Railway",
      "Firebase",
    ],
  },
  {
    id: "data",
    title: "Data",
    items: ["Pandas", "NumPy", "SQL", "MySQL", "Power BI"],
  },
];