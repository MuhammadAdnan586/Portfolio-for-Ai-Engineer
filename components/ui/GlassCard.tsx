import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = { children: ReactNode; hover?: boolean; className?: string };

export default function GlassCard({ children, hover = true, className }: Props) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40 hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.5)]",
        className,
      )}
    >
      {children}
    </div>
  );
}