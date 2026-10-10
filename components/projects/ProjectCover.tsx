"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CoverArt from "./CoverArt";

type Props = {
  slug: string;
  src: string | null;
  title: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

// Shows /public/projects/<slug>/cover.webp when it exists,
// otherwise the generated SVG art underneath stays visible.
export default function ProjectCover({ slug, src, title, className, sizes, priority }: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // onError can fire before hydration, so also check once on mount
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={cn("relative aspect-video w-full overflow-hidden bg-bg", className)}>
      <CoverArt slug={slug} />
      {!failed && src && (
        <Image
          ref={ref}
          src={src}
          alt={`${title} cover`}
          fill
          priority={priority}
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}