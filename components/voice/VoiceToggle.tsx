"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useVoiceNarrator } from "@/hooks/useVoiceNarrator";
import Waveform from "./Waveform";

export default function VoiceToggle() {
  const { supported, muted, speaking, toggleMuted } = useVoiceNarrator();
  if (!supported) return null;

  return (
    <button
      type="button"
      onClick={toggleMuted}
      aria-pressed={!muted}
      aria-label={muted ? "Turn voice narration on" : "Turn voice narration off"}
      title={muted ? "Turn voice narration on" : "Turn voice narration off"}
      className="glass relative inline-flex h-10 items-center gap-2 rounded-full px-3 text-white/80 transition-colors hover:border-white/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
    >
      {muted && (
        <span aria-hidden className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-cyan" />
        </span>
      )}
      {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      <span className="hidden text-xs sm:inline">{muted ? "Enable voice" : "Voice on"}</span>
      <Waveform
        bars={3}
        active={speaking && !muted}
        className="hidden h-3.5 sm:inline-flex"
      />
    </button>
  );
}