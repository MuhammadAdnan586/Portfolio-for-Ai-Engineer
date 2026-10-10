import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { resolveCover } from "@/lib/screens";
import TechBadge from "@/components/ui/TechBadge";
import ProjectCover from "./ProjectCover";
import ProjectLinks from "./ProjectLinks";

const MAX_BADGES = 6;

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shown = project.techStack.slice(0, MAX_BADGES);
  const extra = project.techStack.length - shown.length;

  return (
    <article className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40 hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.55)]">
      <div className="relative">
        <ProjectCover slug={project.slug} src={resolveCover(project.slug, project.cover)} title={project.title} />
        <span className="glass absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
          {project.category}
        </span>
        <span className="absolute right-3 top-3 font-mono text-xs text-white/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug">
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{project.tagline}</p>

        <div className="relative z-10 mt-4 flex flex-wrap items-center gap-2">
          {shown.map((t) => (
            <TechBadge key={t} name={t} size="sm" />
          ))}
          {extra > 0 && (
            <span className="font-mono text-xs text-white/45">+{extra}</span>
          )}
        </div>

        <div className="relative z-10 mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <ProjectLinks project={project} />
          <span
            aria-hidden
            className="inline-flex items-center gap-1 text-xs text-white/50 transition-colors group-hover:text-accent-cyan"
          >
            Case study <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </article>
  );
}