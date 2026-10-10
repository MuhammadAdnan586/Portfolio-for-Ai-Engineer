export type HeroStat = { value: string; label: string };

export const heroContent = {
  eyebrow: "AI/ML Intern @ XICTEK Systems",
  greeting: "Hi, I'm",
  tagline:
    "I build agentic AI systems, RAG pipelines and LLM-powered products that turn messy business workflows into automation.",
  stats: [
    { value: "4", label: "AI projects built" },
    { value: "96.3%", label: "Leaf-deficiency model accuracy" },
    { value: "7", label: "Agents in one CrewAI pipeline" },
    { value: "3", label: "LLM providers integrated" },
  ] as HeroStat[],
};