"use client";

import type { ReactNode } from "react";
import { useNarrateOnView } from "@/hooks/useVoiceNarrator";

type Props = {
  sectionId: string;
  narrationId: string;
  text: string;
  className?: string;
  children: ReactNode;
};

export default function NarratedSection({
  sectionId,
  narrationId,
  text,
  className,
  children,
}: Props) {
  const ref = useNarrateOnView<HTMLElement>(narrationId, text);
  return (
    <section id={sectionId} ref={ref} className={className}>
      {children}
    </section>
  );
}