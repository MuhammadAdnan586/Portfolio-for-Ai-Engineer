"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useVoiceNarrator } from "@/hooks/useVoiceNarrator";
import Waveform from "./Waveform";

export default function CaptionBar() {
  const { speaking, caption, stop } = useVoiceNarrator();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
      <AnimatePresence>
        {speaking && (
          <motion.div
            key="captions"
            role="region"
            aria-label="Live captions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="glass pointer-events-auto flex w-full max-w-2xl items-center gap-3 rounded-2xl bg-black/60 px-4 py-3 shadow-2xl"
          >
            <Waveform active />
            <motion.p
              key={caption}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="min-h-[1.5rem] flex-1 text-sm leading-snug text-white/90 sm:text-base"
            >
              {caption}
            </motion.p>
            <button
              type="button"
              onClick={() => stop()}
              aria-label="Stop narration"
              className="rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}