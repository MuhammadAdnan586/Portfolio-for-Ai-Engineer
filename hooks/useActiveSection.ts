"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Returns the id of the section currently crossing the middle of the viewport.
// Only ids listed in `ids` can become active; the hero clears the highlight.
export function useActiveSection(ids: string[]): string | null {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (!els.length) {
      setActive(null);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const id = e.target.id;
          if (ids.includes(id)) setActive(id);
          else if (id === "hero") setActive(null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids, pathname]);

  return active;
}