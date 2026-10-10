import { getTechIcon } from "@/lib/techIcons";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const iconPx = { sm: 18, md: 24, lg: 32 } as const;
const boxCls = { sm: "h-9 w-9", md: "h-11 w-11", lg: "h-14 w-14" } as const;

export default function TechBadge({ name, size = "md", className }: Props) {
  const entry = getTechIcon(name);

  // No logo available -> styled text chip
  if (!entry) {
    return (
      <span
        className={cn(
          "glass inline-flex items-center rounded-full px-3 py-1.5 font-mono text-xs text-white/80",
          "transition-colors hover:border-accent-violet/50 hover:text-white",
          className,
        )}
      >
        {name}
      </span>
    );
  }

  // Logo only: name lives in tooltip + aria-label (no visible text)
  const Icon = entry.icon;
  return (
    <span
      role="img"
      aria-label={name}
      tabIndex={0}
      className={cn(
        "glass group relative inline-flex items-center justify-center rounded-xl",
        "transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan",
        boxCls[size],
        className,
      )}
    >
      <Icon size={iconPx[size]} color={entry.color} aria-hidden />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {name}
      </span>
    </span>
  );
}