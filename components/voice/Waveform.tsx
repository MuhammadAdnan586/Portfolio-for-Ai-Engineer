import { cn } from "@/lib/utils";

type Props = { active?: boolean; bars?: number; className?: string };

export default function Waveform({ active = false, bars = 5, className }: Props) {
  return (
    <span aria-hidden className={cn("inline-flex h-5 items-end gap-[3px]", className)}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-full w-[3px] origin-bottom rounded-full bg-gradient-to-t from-accent-blue to-accent-cyan",
            active && "animate-wave",
          )}
          style={
            active
              ? {
                  animationDuration: `${0.7 + (i % 3) * 0.18}s`,
                  animationDelay: `${i * 0.1}s`,
                }
              : { transform: "scaleY(0.3)", opacity: 0.6 }
          }
        />
      ))}
    </span>
  );
}