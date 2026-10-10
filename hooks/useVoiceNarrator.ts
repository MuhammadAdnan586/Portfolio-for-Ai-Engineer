"use client";

import { useContext, useEffect, useRef } from "react";
import { VoiceContext, type VoiceContextValue } from "@/components/voice/VoiceProvider";

export function useVoiceNarrator(): VoiceContextValue {
  const ctx = useContext(VoiceContext);
  if (!ctx) throw new Error("useVoiceNarrator must be used inside <VoiceProvider>");
  return ctx;
}

/**
 * Narrates `text` when the returned ref's element reaches the middle of the
 * screen, and cancels when it leaves. `band` is the height of that middle
 * trigger zone as a fraction of the viewport (0.2 = middle 20%).
 * Works for tall sections too. Each id auto-plays once per session
 * (use `replay` for a manual replay).
 */
export function useNarrateOnView<T extends HTMLElement>(id: string, text: string, band = 0.2) {
  const ref = useRef<T>(null);
  const { narrate, stop, started, muted } = useVoiceNarrator();

  useEffect(() => {
    const el = ref.current;
    if (!el || !started || muted) return;

    const margin = ((1 - band) / 2) * 100;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (entry.isIntersecting) narrate(id, text);
        else stop(id);
      },
      { rootMargin: `-${margin}% 0px -${margin}% 0px`, threshold: 0 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stop(id);
    };
  }, [id, text, band, narrate, stop, started, muted]);

  return ref;
}