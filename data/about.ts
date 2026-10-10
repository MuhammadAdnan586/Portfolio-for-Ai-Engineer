export type AboutHighlight = { icon: "bot" | "database" | "eye" | "workflow"; title: string; text: string };
export type AboutFact = { icon: "map" | "school" | "work"; label: string; value: string };

export const aboutContent = {
  eyebrow: "About",
  title: "Building AI that does real work",
  paragraphs: [
    "I'm a Computer Science graduate and current AI/ML Intern at XICTEK Systems, specializing in agentic AI, LLM application development, and AI-driven automation.",
    "I design and deploy LLM-powered applications and multi-agent systems with LangChain, LangGraph and CrewAI, integrating OpenAI, Anthropic and Google Gemini APIs. I build RAG pipelines with vector embeddings and ChromaDB, computer vision pipelines with CNN/MobileNetV2 and OpenCV, and connect AI systems to APIs, webhooks and databases to automate business processes end to end.",
    "I care about reliability: prompt engineering, structured outputs, tool/function calling and AI evaluation, plus voice/conversational AI and full-stack delivery with Python, FastAPI, Next.js and Docker.",
  ],
  highlights: [
    {
      icon: "bot",
      title: "Agentic systems",
      text: "Multi-agent workflows built with LangGraph and CrewAI.",
    },
    {
      icon: "database",
      title: "RAG pipelines",
      text: "Vector embeddings and ChromaDB for grounded, useful answers.",
    },
    {
      icon: "eye",
      title: "Computer vision",
      text: "CNN / MobileNetV2 with OpenCV, 96.3% accuracy on leaf images.",
    },
    {
      icon: "workflow",
      title: "End-to-end delivery",
      text: "FastAPI, Next.js and Docker, wired to APIs, webhooks and databases.",
    },
  ] as AboutHighlight[],
  facts: [
    { icon: "map", label: "Based in", value: "Rawalpindi, Pakistan" },
    { icon: "school", label: "Education", value: "B.Sc. Computer Science, CGPA 3.39 / 4.0" },
    { icon: "work", label: "Currently", value: "AI/ML Intern at XICTEK Systems" },
  ] as AboutFact[],
};