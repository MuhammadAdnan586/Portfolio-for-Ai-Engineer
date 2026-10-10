import fs from "node:fs";
import path from "node:path";

const IMAGE = /\.(png|jpe?g|webp|gif|avif)$/i;
const COVER_EXT = ["webp", "jpg", "jpeg", "png", "avif"];

// Priority: the screenshots array in data/projects.ts.
// If it is empty, auto-detect files in public/projects/<slug>/screens/.
export function getScreenshots(slug: string, fromData: string[]): string[] {
  if (fromData.length) return fromData;
  try {
    const dir = path.join(process.cwd(), "public", "projects", slug, "screens");
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/projects/${slug}/screens/${f}`);
  } catch {
    return [];
  }
}

// Finds the cover: the path from data/projects.ts, or public/projects/<slug>/cover.<webp|jpg|jpeg|png|avif>.
// Returns null when none exists, so the browser never requests a missing image.
export function resolveCover(slug: string, cover: string): string | null {
  try {
    const pub = path.join(process.cwd(), "public");
    if (fs.existsSync(path.join(pub, cover))) return cover;
    for (const ext of COVER_EXT) {
      const rel = `/projects/${slug}/cover.${ext}`;
      if (fs.existsSync(path.join(pub, rel))) return rel;
    }
    return null;
  } catch {
    return null;
  }
}