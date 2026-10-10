"use client";

import Image from "next/image";
import {
  Bot,
  Briefcase,
  Database,
  Eye,
  GraduationCap,
  MapPin,
  Play,
  Square,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { aboutContent } from "@/data/about";
import { aboutNarration } from "@/data/narration";
import { profile } from "@/data/profile";
import { useNarrateOnView, useVoiceNarrator } from "@/hooks/useVoiceNarrator";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  bot: Bot,
  database: Database,
  eye: Eye,
  workflow: Workflow,
  map: MapPin,
  school: GraduationCap,
  work: Briefcase,
};

export default function About() {
  const { started, supported, speaking, activeId, replay, stop } = useVoiceNarrator();
  const ref = useNarrateOnView<HTMLElement>("about", aboutNarration, 0.2);
  const playing = speaking && activeId === "about";

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={aboutContent.eyebrow} title={aboutContent.title} />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
              {aboutContent.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {supported && started && (
              <div className="mt-8">
                <Button
                  variant="outline"
                  icon={playing ? <Square size={14} /> : <Play size={16} />}
                  onClick={() => (playing ? stop("about") : replay("about", aboutNarration))}
                >
                  {playing ? "Stop narration" : "Play narration"}
                </Button>
              </div>
            )}

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {aboutContent.facts.map((f) => {
                const Icon = icons[f.icon];
                return (
                  <li key={f.label} className="glass rounded-xl p-4">
                    <Icon size={18} className="mb-2 text-accent-cyan" aria-hidden />
                    <p className="text-xs uppercase tracking-wider text-white/45">{f.label}</p>
                    <p className="mt-1 text-sm text-white/85">{f.value}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <Reveal className="lg:col-span-2">
            <figure className="glass overflow-hidden rounded-3xl p-1.5 lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
                <Image
                  src={profile.workPhoto}
                  alt="Muhammad Adnan coding at his dual-monitor desk"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                />
              </div>
              <figcaption className="px-4 pb-3 pt-3 text-sm text-white/60">
                At my desk, building AI applications.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.highlights.map((h, i) => {
            const Icon = icons[h.icon];
            return (
              <li key={h.title}>
                <Reveal delay={i * 0.07} className="h-full">
                  <GlassCard className="h-full">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/25 to-accent-violet/25 text-accent-cyan">
                      <Icon size={20} aria-hidden />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{h.text}</p>
                  </GlassCard>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}