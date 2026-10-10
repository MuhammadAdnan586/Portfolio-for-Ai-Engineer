import { splitSentences } from "@/lib/text";
import type { SpeakHandlers, TTSEngine } from "./types";

const RATE = 0.97;

function score(v: SpeechSynthesisVoice): number {
  let s = 0;
  const name = v.name;
  if (/natural/i.test(name)) s += 50;
  if (/online/i.test(name)) s += 40;
  if (/google/i.test(name)) s += 30;
  if (/(aria|jenny|guy|sonia|ryan|samantha|daniel|serena)/i.test(name)) s += 20;
  if (/^en[-_]us/i.test(v.lang) || /^en[-_]gb/i.test(v.lang)) s += 10;
  if (!v.localService) s += 5;
  return s;
}

function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const english = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
  if (!english.length) return null;
  return english.slice().sort((a, b) => score(b) - score(a))[0];
}

export class WebSpeechEngine implements TTSEngine {
  readonly supported: boolean;
  private voice: SpeechSynthesisVoice | null = null;
  private token = 0;

  constructor() {
    this.supported = typeof window !== "undefined" && "speechSynthesis" in window;
    if (this.supported) {
      this.loadVoice();
      window.speechSynthesis.addEventListener("voiceschanged", () => this.loadVoice());
    }
  }

  private loadVoice() {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length) this.voice = pickVoice(voices);
  }

  prime() {
    if (!this.supported) return;
    const u = new SpeechSynthesisUtterance(" ");
    u.volume = 0;
    window.speechSynthesis.speak(u);
  }

  speak(text: string, handlers: SpeakHandlers = {}) {
    if (!this.supported) {
      handlers.onError?.();
      return;
    }
    this.stop();
    this.loadVoice();

    const synth = window.speechSynthesis;
    const chunks = splitSentences(text);
    const my = this.token;
    let i = 0;

    const next = () => {
      if (my !== this.token) return;
      if (i >= chunks.length) {
        handlers.onEnd?.();
        return;
      }
      const idx = i++;
      const u = new SpeechSynthesisUtterance(chunks[idx]);
      if (this.voice) {
        u.voice = this.voice;
        u.lang = this.voice.lang;
      } else {
        u.lang = "en-US";
      }
      u.rate = RATE;
      u.pitch = 1;
      u.onend = () => next();
      u.onerror = (e) => {
        if (my !== this.token) return;
        if (e.error === "canceled" || e.error === "interrupted") return;
        handlers.onError?.();
      };
      handlers.onSentence?.(chunks[idx], idx, chunks.length);
      synth.speak(u);
    };

    // small delay: Chrome can drop speak() right after cancel()
    window.setTimeout(next, 60);
  }

  stop() {
    this.token++;
    if (this.supported) window.speechSynthesis.cancel();
  }
}