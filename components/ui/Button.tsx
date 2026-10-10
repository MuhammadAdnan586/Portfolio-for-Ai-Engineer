import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

type Props = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  external?: boolean;
  download?: boolean | string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent-blue to-accent-violet text-white glow-blue hover:brightness-110",
  outline: "glass text-white hover:border-white/25 hover:bg-white/[0.08]",
  ghost: "text-white/80 hover:text-white hover:bg-white/[0.06]",
};

export default function Button({
  children,
  variant = "primary",
  href,
  external,
  download,
  icon,
  className,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
    "transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );

  if (href) {
    const internal = href.startsWith("/") && !download && !external;
    if (internal) {
      return (
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {icon}
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        download={download}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon}
      {children}
    </button>
  );
}