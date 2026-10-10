import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { getScreenshots, resolveCover } from "@/lib/screens";
import ProjectDetail from "@/components/projects/ProjectDetail";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  const title = `${p.title} | Muhammad Adnan`;
  const description = `${p.tagline}. ${p.problem}`;
  const url = `/projects/${p.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: "article", url, images: [{ url: "/og.png", width: 1200, height: 630 }] },
  };
}

export default function ProjectPage({ params }: Props) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const screenshots = getScreenshots(project.slug, project.screenshots);
  const cover = resolveCover(project.slug, project.cover);

  return (
    <ProjectDetail
      project={project}
      screenshots={screenshots}
      cover={cover}
      prev={prev}
      next={next}
      index={index}
      total={projects.length}
    />
  );
}