"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Play, Square } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { heroContent } from "@/data/hero";
import { introNarration } from "@/data/narration";
import { profile } from "@/data/profile";
import { useNarrateOnView, useVoiceNarrator } from "@/hooks/useVoiceNarrator";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import RotatingText from "@/components/ui/RotatingText";

// Lazy-loaded, client only: keeps the background out of the critical path
const ParticleField = dynamic(() => import("@/components/ui/ParticleField"), { ssr: false });

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const socials = [
  { label: "GitHub", href: profile.github, icon: <FaGithub size={18} /> },
  { label: "LinkedIn", href: profile.linkedin, icon: <FaLinkedinIn size={18} /> },
  { label: "Email", href: `mailto:${profile.email}`, icon: <Mail size={18} /> },
];

export default function Hero() {
  const { started, replay, stop, speaking, activeId, supported } = useVoiceNarrator();
  const ref = useNarrateOnView<HTMLElement>("intro", introNarration, 0.4);
  const introPlaying = speaking && activeId === "intro";

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
      >
        <ParticleField />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.p
            variants={item}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-white/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            {heroContent.eyebrow}
          </motion.p>

          <motion.p variants={item} className="text-lg text-white/60 sm:text-xl">
            {heroContent.greeting}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-gradient text-gradient-animated font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div variants={item} className="mt-4 font-display text-lg sm:text-2xl">
            <RotatingText words={profile.roles} />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-base text-white/65 sm:text-lg">
            {heroContent.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button href="#projects" icon={<ArrowDown size={16} />}>
                View Projects
              </Button>
            </Magnetic>
            <Button
              href={profile.cvPath}
              download
              variant="outline"
              icon={<Download size={16} />}
            >
              Download CV
            </Button>
            {supported && started && (
              <Button
                variant="ghost"
                icon={introPlaying ? <Square size={14} /> : <Play size={16} />}
                onClick={() => (introPlaying ? stop("intro") : replay("intro", introNarration))}
              >
                {introPlaying ? "Stop intro" : "Play intro"}
              </Button>
            )}
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex items-center gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  target={s.label === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-all hover:-translate-y-0.5 hover:border-accent-cyan/50 hover:text-white"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
        >
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent-blue/40 via-accent-violet/30 to-accent-cyan/30 blur-3xl"
          />
          <div className="relative rounded-[2rem] bg-gradient-to-br from-accent-blue via-accent-violet to-accent-cyan p-[2px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.9rem] bg-bg">
              <Image
                src={profile.photo}
                alt="Portrait of Muhammad Adnan"
                fill
                priority
                sizes="(min-width: 1024px) 448px, 80vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"
              />
            </div>
          </div>
          <div className="glass absolute -bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-xs text-white/85">
            <MapPin size={14} className="text-accent-cyan" aria-hidden />
            {profile.location}
          </div>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:col-span-2"
        >
          {heroContent.stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-4 py-4">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold text-white sm:text-4xl">
                {s.value}
              </dd>
              <p aria-hidden className="mt-1 text-xs text-white/55 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}