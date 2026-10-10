import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ScrollReset from "@/components/providers/ScrollReset";
import Background from "@/components/ui/Background";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VoiceProvider from "@/components/voice/VoiceProvider";

import CaptionBar from "@/components/voice/CaptionBar";
import JsonLd from "@/components/seo/JsonLd";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const title = "Muhammad Adnan | AI Engineer - Agentic AI, RAG & LLM Apps";
const description =
  "Portfolio of Muhammad Adnan, AI Engineer specializing in agentic AI, RAG pipelines and LLM application development. Multi-agent systems, computer vision and full-stack AI products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Muhammad Adnan Portfolio",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Muhammad Adnan",
    "AI Engineer",
    "Agentic AI",
    "RAG",
    "LLM applications",
    "LangChain",
    "LangGraph",
    "CrewAI",
    "FastAPI",
    "Next.js",
    "Pakistan",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Muhammad Adnan",
    title,
    description,
    locale: "en_US", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Muhammad Adnan, AI Engineer" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05060A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
        >
          Skip to content
        </a>
        <JsonLd />
        <ScrollReset />
        <SmoothScroll>
          <VoiceProvider>
            <Background />
            
            <Navbar />
            <div id="top" />
            {children}
            <Footer />
            <CaptionBar />
            
          </VoiceProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}