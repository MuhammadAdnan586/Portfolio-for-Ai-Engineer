import { WebSpeechEngine } from "./webSpeech";
import type { TTSEngine } from "./types";

// SWAP POINT: to use ElevenLabs / OpenAI TTS later, write a class that
// implements TTSEngine and return it here. No component changes needed.
export function createTTS(): TTSEngine {
  return new WebSpeechEngine();
}