import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import CoverArt from "./CoverArt";

function NavCard({ project, dir }: { project: Project; dir: "prev" | "next" }) {
  const isNext = dir === "next";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group glass flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/40",
        isNext && "flex-row-reverse text-right",
      )}
    >
      <span className="relative hidden h-16 w-28 shrink-0 overflow-hidden rounded-lg sm:block">
        <CoverArt slug={project.slug} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-accent-cyan">
          {isNext ? null : <ArrowLeft size={12} aria-hidden />}
          {isNext ? "Next project" : "Previous project"}
          {isNext ? <ArrowRight size={12} aria-hidden /> : null}
        </span>
        <span className="mt-1 block truncate font-display text-base font-semibold">
          {project.title}
        </span>
      </span>
    </Link>
  );
}

export default function ProjectNav({ prev, next }: { prev: Project; next: Project }) {
  return (
    <nav aria-label="More projects" className="grid gap-4 md:grid-cols-2">
      <NavCard project={prev} dir="prev" />
      <NavCard project={next} dir="next" />
    </nav>
  );
}