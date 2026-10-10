import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

const socials = [
  { label: "GitHub", href: profile.github, icon: <FaGithub size={18} /> },
  { label: "LinkedIn", href: profile.linkedin, icon: <FaLinkedinIn size={18} /> },
  { label: "Email", href: `mailto:${profile.email}`, icon: <Mail size={18} /> },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-white/50">
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind and
          Framer Motion.
        </p>
        <ul className="flex items-center gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                title={s.label}
                target={s.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white hover:border-accent-cyan/50"
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}