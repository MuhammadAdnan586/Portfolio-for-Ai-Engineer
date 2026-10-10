import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic foundation" />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.08}>
              <GlassCard className="h-full">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/25 to-accent-blue/25 text-accent-cyan">
                    <GraduationCap size={22} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{e.degree}</h3>
                    <p className="mt-1 text-white/75">{e.institution}</p>
                    <p className="text-sm text-white/50">{e.location}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="glass rounded-full px-3 py-1 font-mono text-xs text-white/70">
                    {e.period}
                  </span>
                  <span className="rounded-full bg-accent-cyan/10 px-3 py-1 text-xs font-medium text-accent-cyan">
                    {e.result}
                  </span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}