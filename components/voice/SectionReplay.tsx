"use client";

import { Play, Square } from "lucide-react";
import { useVoiceNarrator } from "@/hooks/useVoiceNarrator";
import Button from "@/components/ui/Button";

export default function SectionReplay({ id, text }: { id: string; text: string }) {
  const { supported, started, speaking, activeId, replay, stop } = useVoiceNarrator();
  if (!supported || !started) return null;
  const playing = speaking && activeId === id;

  return (
    <div className="-mt-6 mb-10">
      <Button
        variant="outline"
        icon={playing ? <Square size={14} /> : <Play size={16} />}
        onClick={() => (playing ? stop(id) : replay(id, text))}
      >
        {playing ? "Stop narration" : "Play narration"}
      </Button>
    </div>
  );
}