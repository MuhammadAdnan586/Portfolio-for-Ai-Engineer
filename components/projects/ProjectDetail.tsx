"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Lightbulb,
  ListChecks,
  Play,
  Square,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/data/projects";
import type { Screenshot } from "@/data/screenshots";
import { useVoiceNarrator } from "@/hooks/useVoiceNarrator";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import TechBadge from "@/components/ui/TechBadge";
import Waveform from "@/components/voice/Waveform";
import Gallery from "./Gallery";
import ProjectCover from "./ProjectCover";
import ProjectLinks from "./ProjectLinks";
import ProjectNav from "./ProjectNav";

type Props = {
  project: Project;
  screenshots: Screenshot[];
  cover: string | null;
  prev: Project;
  next: Project;
  index: number;
  total: number;
};

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <GlassCard hover={false}>
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue/25 to-accent-violet/25 text-accent-cyan">
            <Icon size={18} aria-hidden />
          </span>
          <h2 className="font-display text-xl font-semibold">{title}</h2>
        </div>
        {children}
      </GlassCard>
    </Reveal>
  );
}

export default function ProjectDetail({
  project,
  screenshots,
  cover,
  prev,
  next,
  index,
  total,
}: Props) {
  const { started, muted, supported, speaking, activeId, narrate, stop, replay } =
    useVoiceNarrator();
  const id = `project:${project.slug}`;
  const playing = speaking && activeId === id;

  // Narrate when the project page opens (if voice is on); cancel when leaving / muting.
  useEffect(() => {
    if (!started || muted) return;
    narrate(id, project.narration);
    return () => stop(id);
  }, [id, project.narration, started, muted, narrate, stop]);

  return (
    <main id="main" className="pb-24 pt-28">
      <Container>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} aria-hidden /> All projects
        </Link>

        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="glass overflow-hidden rounded-3xl p-1.5">
            <ProjectCover
              slug={project.slug}
              src={cover}
              title={project.title}
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="rounded-[1.4rem]"
            />
          </div>

          <header>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
              {project.category} / {String(index + 1).padStart(2, "0")} of{" "}
              {String(total).padStart(2, "0")}
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-3 text-base text-white/65 sm:text-lg">{project.tagline}</p>
            <ProjectLinks project={project} size="md" className="mt-6" />
          </header>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Block icon={Target} title="Problem">
              <p className="leading-relaxed text-white/70">{project.problem}</p>
            </Block>
            <Block icon={Lightbulb} title="Solution">
              <p className="leading-relaxed text-white/70">{project.solution}</p>
            </Block>
            <Block icon={ListChecks} title="Key features">
              <ul className="space-y-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-3 text-white/70">
                    <Check size={18} className="mt-0.5 shrink-0 text-accent-cyan" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Block>
            <Block icon={TrendingUp} title="Results">
              <p className="leading-relaxed text-white/70">{project.impact}</p>
            </Block>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <GlassCard hover={false}>
                <h2 className="mb-4 font-display text-xl font-semibold">Tech stack</h2>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((t) => (
                    <TechBadge key={t} name={t} size="lg" />
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            {supported && started && (
              <Reveal delay={0.05}>
                <GlassCard hover={false}>
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="font-display text-xl font-semibold">Voice walkthrough</h2>
                    <Waveform active={playing} bars={4} />
                  </div>
                  <p className="mb-4 text-sm text-white/55">
                    {muted
                      ? "Voice is off. Press Play to hear the walkthrough."
                      : "Hear me explain this project in my own words."}
                  </p>
                  <Button
                    variant={playing ? "outline" : "primary"}
                    icon={playing ? <Square size={14} /> : <Play size={16} />}
                    onClick={() => (playing ? stop(id) : replay(id, project.narration))}
                    className="w-full"
                  >
                    {playing ? "Stop" : "Play"}
                  </Button>
                </GlassCard>
              </Reveal>
            )}
          </aside>
        </div>

        <section className="mt-16" aria-labelledby="shots-title">
          <Reveal>
            <h2 id="shots-title" className="mb-6 font-display text-2xl font-semibold sm:text-3xl">
              Screenshots
            </h2>
          </Reveal>
          <Gallery images={screenshots} title={project.title} slug={project.slug} />
        </section>

        <section className="mt-12" aria-label="Project links">
          <ProjectLinks project={project} size="md" />
        </section>

        <div className="mt-16">
          <ProjectNav prev={prev} next={next} />
        </div>
      </Container>
    </main>
  );
}