import type { IconType } from "react-icons";
import {
  SiAnthropic,
  SiCrewai,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGooglegemini,
  SiKeras,
  SiLangchain,
  SiLanggraph,
  SiMysql,
  SiNextdotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiRailway,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";

export type TechIcon = { icon: IconType; color: string };

// Keys are normalized (lowercase, no spaces/dots/dashes). See normalize() below.
// Anything NOT in this map (ChromaDB, SHAP, CNN, RAG, Power BI...) becomes a text chip.
// To force a text chip for a tech, just delete its line.
const techIcons: Record<string, TechIcon> = {
  python: { icon: SiPython, color: "#4B8BBE" },
  fastapi: { icon: SiFastapi, color: "#05A38F" },
  nextjs: { icon: SiNextdotjs, color: "#FFFFFF" },
  react: { icon: SiReact, color: "#61DAFB" },
  reactnative: { icon: SiReact, color: "#61DAFB" },
  docker: { icon: SiDocker, color: "#2496ED" },
  tensorflow: { icon: SiTensorflow, color: "#FF6F00" },
  keras: { icon: SiKeras, color: "#D00000" },
  opencv: { icon: SiOpencv, color: "#5C3EE8" },
  django: { icon: SiDjango, color: "#44B78B" },
  firebase: { icon: SiFirebase, color: "#FFCA28" },
  scikitlearn: { icon: SiScikitlearn, color: "#F7931E" },
  pandas: { icon: SiPandas, color: "#8B7CF6" },
  numpy: { icon: SiNumpy, color: "#4DABCF" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  railway: { icon: SiRailway, color: "#FFFFFF" },
  streamlit: { icon: SiStreamlit, color: "#FF4B4B" },
  googlegemini: { icon: SiGooglegemini, color: "#8E75B2" },
  geminiapi: { icon: SiGooglegemini, color: "#8E75B2" },
  gemini: { icon: SiGooglegemini, color: "#8E75B2" },
  openai: { icon: RiOpenaiFill, color: "#FFFFFF" },
  anthropic: { icon: SiAnthropic, color: "#D97757" },
  langchain: { icon: SiLangchain, color: "#7FD3C0" },
  langgraph: { icon: SiLanggraph, color: "#7FD3C0" },
  crewai: { icon: SiCrewai, color: "#FF5A50" },
};

const normalize = (name: string) => name.toLowerCase().replace(/[\s.\-_]/g, "");

export function getTechIcon(name: string): TechIcon | undefined {
  const entry = techIcons[normalize(name)];
  return entry;
}