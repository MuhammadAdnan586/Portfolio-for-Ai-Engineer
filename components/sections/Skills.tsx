import { skillGroups } from "@/data/skills";
import { skillsNarration } from "@/data/narration";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";
import NarratedSection from "@/components/voice/NarratedSection";
import SectionReplay from "@/components/voice/SectionReplay";

const span: Record<string, string> = {
  "ai-agents": "lg:col-span-3",
  rag: "lg:col-span-3",
  "cv-ml": "lg:col-span-2",
  automation: "lg:col-span-2",
  conversational: "lg:col-span-2",
  fullstack: "lg:col-span-4",
  data: "lg:col-span-2",
};

export default function Skills() {
  return (
    <NarratedSection
      sectionId="skills"
      narrationId="skills"
      text={skillsNarration}
      className="relative py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="The stack behind the work"
          subtitle="Hover a logo to see its name. Skills without a logo appear as text chips."
        />
        <SectionReplay id="skills" text={skillsNarration} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((g, i) => (
            <Reveal key={g.id} delay={(i % 3) * 0.06} className={span[g.id] ?? "lg:col-span-2"}>
              <GlassCard className="h-full">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                  <span className="font-mono text-xs text-white/40">
                    {String(g.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {g.items.map((s) => (
                    <TechBadge key={s} name={s} />
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </NarratedSection>
  );
}