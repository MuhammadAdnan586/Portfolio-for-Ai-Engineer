import fs from "node:fs";
import path from "node:path";
import { screenshotInfo, type Screenshot } from "@/data/screenshots";

const IMAGE = /\.(png|jpe?g|webp|gif|avif)$/i;
const COVER_EXT = ["webp", "jpg", "jpeg", "png", "avif"];

const byName = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true });

function listScreens(slug: string): string[] {
  try {
    const dir = path.join(process.cwd(), "public", "projects", slug, "screens");
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE.test(f))
      .sort(byName)
      .map((f) => `/projects/${slug}/screens/${f}`);
  } catch {
    return [];
  }
}

// Screenshots in the order and with the captions from data/screenshots.ts.
// Any image not listed there is added at the end.
export function getScreenshots(slug: string, fromData: string[]): Screenshot[] {
  const all = fromData.length ? fromData : listScreens(slug);
  const used = new Set<string>();
  const result: Screenshot[] = [];

  for (const info of screenshotInfo[slug] ?? []) {
    const wanted = info.file.toLowerCase();
    const src = all.find((p) => (p.split("/").pop() ?? "").toLowerCase() === wanted);
    if (!src || used.has(src)) continue;
    used.add(src);
    result.push({ src, title: info.title, description: info.description });
  }
  for (const src of all) {
    if (!used.has(src)) result.push({ src });
  }
  return result;
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
