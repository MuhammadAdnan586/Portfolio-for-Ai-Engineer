const MAX_CHUNK = 170; // Chrome stops long utterances after ~15s, so keep chunks short

export function splitSentences(text: string): string[] {
  const base =
    text
      .replace(/\s+/g, " ")
      .trim()
      .match(/[^.!?]+[.!?]+(?:["')\]]+)?|[^.!?]+$/g) ?? [];

  const out: string[] = [];
  for (const raw of base) {
    const s = raw.trim();
    if (!s) continue;
    if (s.length <= MAX_CHUNK) {
      out.push(s);
      continue;
    }
    // Long sentence: split on commas/semicolons and re-pack into short chunks
    const pieces = s.split(/\s*[,;:]\s+/);
    let cur = "";
    for (const p of pieces) {
      if (!cur) cur = p;
      else if ((cur + ", " + p).length <= MAX_CHUNK) cur += ", " + p;
      else {
        out.push(cur);
        cur = p;
      }
    }
    if (cur) out.push(cur);
  }
  return out;
}