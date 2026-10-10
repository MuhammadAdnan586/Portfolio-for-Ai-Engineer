"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Download,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { contactItems, formspreeId } from "@/data/contact";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import CopyButton from "@/components/ui/CopyButton";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const iconFor: Record<string, ReactNode> = {
  email: <Mail size={18} />,
  phone: <Phone size={18} />,
  linkedin: <FaLinkedinIn size={18} />,
  github: <FaGithub size={18} />,
  location: <MapPin size={18} />,
};

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent-cyan/60 focus:bg-white/[0.06]";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill this hidden field
    if (data.get("_gotcha")) {
      setStatus("sent");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setStatus("error");
      setNote("Please fill in your name, email and message.");
      return;
    }

    if (formspreeId) {
      setStatus("sending");
      setNote("");
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error("bad response");
        setStatus("sent");
        setNote("Thanks! Your message was sent. I'll get back to you soon.");
        form.reset();
      } catch {
        setStatus("error");
        setNote(`Something went wrong. Please email me directly at ${profile.email}.`);
      }
      return;
    }

    // No Formspree ID yet: fall back to the visitor's email app
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n- ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setNote("Your email app should open with the message ready to send.");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something with AI"
          subtitle="Have a project, role or idea in mind? Send a message or reach out directly."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-3 lg:col-span-2">
            {contactItems.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.05}>
                <GlassCard hover={false} className="flex items-center gap-3 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/25 to-accent-violet/25 text-accent-cyan">
                    {iconFor[c.id]}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-white/45">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.id === "linkedin" || c.id === "github" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block truncate text-sm text-white/90 hover:text-accent-cyan"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="truncate text-sm text-white/90">{c.value}</p>
                    )}
                  </div>
                  <CopyButton text={c.copy} label={c.label} />
                </GlassCard>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <Button
                href={profile.cvPath}
                download
                icon={<Download size={16} />}
                className="mt-2 w-full"
              >
                Download CV
              </Button>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-3">
            <GlassCard hover={false} className="h-full p-6 sm:p-8">
              <form onSubmit={onSubmit} noValidate={false} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="mb-2 block text-sm text-white/70">
                      Name
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      required
                      maxLength={80}
                      autoComplete="name"
                      placeholder="Your name"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-2 block text-sm text-white/70">
                      Email
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      maxLength={120}
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={field}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-message" className="mb-2 block text-sm text-white/70">
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    required
                    rows={6}
                    maxLength={2000}
                    placeholder="Tell me about your project or role..."
                    className={`${field} resize-y`}
                  />
                </div>

                {/* honeypot */}
                <div className="hidden" aria-hidden>
                  <label>
                    Leave this empty
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    icon={
                      status === "sending" ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Send size={16} />
                      )
                    }
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </Button>

                  <p
                    role="status"
                    aria-live="polite"
                    className={
                      status === "error"
                        ? "flex items-center gap-2 text-sm text-red-400"
                        : "flex items-center gap-2 text-sm text-accent-cyan"
                    }
                  >
                    {status === "sent" && <CheckCircle2 size={16} aria-hidden />}
                    {status === "error" && <AlertCircle size={16} aria-hidden />}
                    {note}
                  </p>
                </div>

                {!formspreeId && (
                  <p className="text-xs text-white/35">
                    This form opens your email app to send the message.
                  </p>
                )}
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}