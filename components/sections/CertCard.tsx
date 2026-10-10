"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, BadgeCheck, FileText, Maximize2 } from "lucide-react";
import type { Certification } from "@/data/certifications";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function CertCard({ cert }: { cert: Certification }) {
  const [failed, setFailed] = useState(false);
  const showImage = !!cert.image && !failed;

  return (
    <GlassCard className="flex h-full flex-col gap-5 p-5 sm:flex-row">
      <div className="w-full max-w-[14rem] shrink-0 sm:w-44">
        {showImage ? (
          <a
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${cert.title} certificate full size`}
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
          >
            <Image
              src={cert.image as string}
              alt={`${cert.title} certificate from ${cert.issuer}`}
              fill
              sizes="(min-width: 640px) 176px, 224px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setFailed(true)}
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/55 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <Maximize2 size={20} aria-hidden />
            </span>
          </a>
        ) : (
          <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-gradient-to-br from-accent-blue/15 to-accent-violet/15 text-white/50">
            <Award size={28} aria-hidden />
            <p className="px-2 text-center text-xs">Image coming soon</p>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
          {cert.issuer}
          {cert.platform ? ` / ${cert.platform}` : ""}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{cert.title}</h3>
        <p className="mt-2 text-sm text-white/55">Issued {cert.date}</p>
        {cert.credentialId && (
          <p className="mt-1 break-all font-mono text-xs text-white/40">ID: {cert.credentialId}</p>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {cert.verifyUrl && (
            <Button
              href={cert.verifyUrl}
              external
              variant="outline"
              icon={<BadgeCheck size={14} />}
              className="px-4 py-2 text-xs"
            >
              Verify
            </Button>
          )}
          {cert.file && (
            <Button
              href={cert.file}
              external
              variant="ghost"
              icon={<FileText size={14} />}
              className="px-4 py-2 text-xs"
            >
              View PDF
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}