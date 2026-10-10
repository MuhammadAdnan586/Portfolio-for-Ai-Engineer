export type SpeakHandlers = {
  onSentence?: (sentence: string, index: number, total: number) => void;
  onEnd?: () => void;
  onError?: () => void;
};

// Any TTS provider (Web Speech, ElevenLabs, OpenAI...) just implements this.
export interface TTSEngine {
  readonly supported: boolean;
  speak(text: string, handlers?: SpeakHandlers): void;
  stop(): void;
  prime?(): void; // optional: unlock audio inside a user gesture
}