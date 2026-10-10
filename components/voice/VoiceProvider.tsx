"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createTTS } from "@/lib/tts";
import type { TTSEngine } from "@/lib/tts/types";

export type VoiceContextValue = {
  supported: boolean;
  started: boolean; // true once the page is ready in the browser
  muted: boolean; // true = voice is OFF (this is the default)
  speaking: boolean;
  caption: string;
  activeId: string | null;
  toggleMuted: () => void;
  narrate: (id: string, text: string, opts?: { force?: boolean }) => void;
  replay: (id: string, text: string) => void;
  stop: (id?: string) => void;
};

export const VoiceContext = createContext<VoiceContextValue | null>(null);

export default function VoiceProvider({ children }: { children: ReactNode }) {
  const engineRef = useRef<TTSEngine | null>(null);
  const playedRef = useRef<Set<string>>(new Set());
  const activeRef = useRef<string | null>(null);
  const activeSinceRef = useRef(0);
  const readyRef = useRef(false);
  const mutedRef = useRef(true);

  const [supported, setSupported] = useState(true);
  const [started, setStarted] = useState(false);
  // Browsers block speech until the visitor clicks something, so voice starts OFF.
  const [muted, setMutedState] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const [caption, setCaption] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);

  const applyMuted = useCallback((m: boolean) => {
    mutedRef.current = m;
    setMutedState(m);
  }, []);

  const clear = useCallback(() => {
    activeRef.current = null;
    setActiveId(null);
    setSpeaking(false);
    setCaption("");
  }, []);

  const stop = useCallback(
    (id?: string) => {
      if (id && activeRef.current !== id) return;
      // Stopped almost instantly (fast scroll): don't count it as "played".
      if (activeRef.current && Date.now() - activeSinceRef.current < 400) {
        playedRef.current.delete(activeRef.current);
      }
      engineRef.current?.stop();
      clear();
    },
    [clear],
  );

  const narrate = useCallback(
    (id: string, text: string, opts?: { force?: boolean }) => {
      const engine = engineRef.current;
      if (!engine || !engine.supported) return;
      if (!readyRef.current || mutedRef.current) return;
      if (!opts?.force && playedRef.current.has(id)) return;

      playedRef.current.add(id);
      activeRef.current = id;
      activeSinceRef.current = Date.now();
      setActiveId(id);
      setSpeaking(true);
      setCaption("");

      const finish = () => {
        if (activeRef.current === id) clear();
      };
      engine.speak(text, {
        onSentence: (s) => {
          if (activeRef.current === id) setCaption(s);
        },
        onEnd: finish,
        onError: finish,
      });
    },
    [clear],
  );

  // Replay / Play buttons also turn the voice on.
  const replay = useCallback(
    (id: string, text: string) => {
      if (mutedRef.current) applyMuted(false);
      narrate(id, text, { force: true });
    },
    [applyMuted, narrate],
  );

  const toggleMuted = useCallback(() => {
    const next = !mutedRef.current;
    applyMuted(next);
    if (next) stop();
    else engineRef.current?.prime?.();
  }, [applyMuted, stop]);

  useEffect(() => {
    const engine = createTTS();
    engineRef.current = engine;
    readyRef.current = true;
    setSupported(engine.supported);
    setStarted(true);

    const onHide = () => {
      if (document.hidden) stop();
    };
    document.addEventListener("visibilitychange", onHide);
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      engine.stop();
    };
  }, [stop]);

  const value = useMemo<VoiceContextValue>(
    () => ({
      supported,
      started,
      muted,
      speaking,
      caption,
      activeId,
      toggleMuted,
      narrate,
      replay,
      stop,
    }),
    [supported, started, muted, speaking, caption, activeId, toggleMuted, narrate, replay, stop],
  );

  return <VoiceContext.Provider value={value}>{children}</VoiceContext.Provider>;
}