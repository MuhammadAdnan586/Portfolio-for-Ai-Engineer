import { ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

type Props = { project: Project; size?: "sm" | "md"; className?: string };

export default function ProjectLinks({ project, size = "sm", className }: Props) {
  const sz = size === "sm" ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm";
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <Button
        href={project.githubUrl}
        external
        variant="outline"
        icon={<FaGithub size={14} />}
        className={sz}
        ariaLabel={`${project.title} on GitHub`}
      >
        GitHub
      </Button>
      <Button
        href={project.linkedinUrl}
        external
        variant="outline"
        icon={<FaLinkedinIn size={14} />}
        className={sz}
        ariaLabel={`${project.title} on LinkedIn`}
      >
        LinkedIn
      </Button>
      {project.liveUrl ? (
        <Button
          href={project.liveUrl}
          external
          icon={<ExternalLink size={14} />}
          className={sz}
          ariaLabel={`${project.title} live demo`}
        >
          Live Demo
        </Button>
      ) : null}
    </div>
  );
}