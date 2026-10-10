import { experience } from "@/data/experience";
import { experienceNarration } from "@/data/narration";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import NarratedSection from "@/components/voice/NarratedSection";
import SectionReplay from "@/components/voice/SectionReplay";

export default function ExperienceSection() {
  return (
    <NarratedSection
      sectionId="experience"
      narrationId="experience"
      text={experienceNarration}
      className="relative py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been building"
          subtitle="Internships and a startup I founded, newest first."
        />
        <SectionReplay id="experience" text={experienceNarration} />

        <ol className="relative ml-2 border-l border-white/10 sm:ml-4">
          {experience.map((e, i) => (
            <li key={e.id} className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
              <span
                aria-hidden
                className={cn(
                  "absolute -left-[7px] top-8 h-3.5 w-3.5 rounded-full ring-4 ring-bg",
                  e.current ? "glow-cyan animate-pulse bg-accent-cyan" : "bg-accent-violet",
                )}
              />
              <Reveal delay={i * 0.05}>
                <GlassCard>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                      <p className="mt-1 text-accent-cyan">{e.company}</p>
                    </div>
                    <div className="text-sm text-white/55 sm:text-right">
                      <p className="flex items-center gap-2 font-mono sm:justify-end">
                        {e.period}
                        {e.current && (
                          <span className="rounded-full bg-accent-cyan/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent-cyan">
                            Current
                          </span>
                        )}
                      </p>
                      <p>{e.location}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/70 sm:text-base">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </NarratedSection>
  );
}