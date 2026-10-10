"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import Button from "@/components/ui/Button";
import VoiceToggle from "@/components/voice/VoiceToggle";

const navIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const sectionActive = useActiveSection(navIds);
  // On a project detail page, "Projects" is the active item
  const active = pathname.startsWith("/projects/") ? "projects" : sectionActive;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          M<span className="text-gradient">.</span>Adnan
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <Link
                  href={l.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-white/[0.08] text-white"
                      : "text-white/70 hover:bg-white/[0.06] hover:text-white",
                  )}
                >
                  {l.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <VoiceToggle />
          <Button
            href={profile.cvPath}
            download
            variant="outline"
            icon={<Download size={16} />}
            className="hidden px-4 py-2 sm:inline-flex"
          >
            Download CV
          </Button>
          <button
            type="button"
            className="rounded-full p-2 text-white/80 hover:bg-white/[0.06] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 pb-6">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === l.id ? "location" : undefined}
                    className={cn(
                      "block rounded-xl px-3 py-3 hover:bg-white/[0.06]",
                      active === l.id ? "bg-white/[0.08] text-white" : "text-white/80",
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href={profile.cvPath}
                  download
                  variant="primary"
                  icon={<Download size={16} />}
                  className="w-full"
                >
                  Download CV
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}