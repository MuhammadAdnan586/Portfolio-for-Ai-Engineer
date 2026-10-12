"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageOff, X } from "lucide-react";
import type { Screenshot } from "@/data/screenshots";

type Props = { images: Screenshot[]; title: string; slug: string };

export default function Gallery({ images, title, slug }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const count = images.length;

  const close = useCallback(() => {
    setOpen(null);
    trigger.current?.focus();
  }, []);

  const go = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + count) % count)),
    [count],
  );

  const isOpen = open !== null;

  useEffect(() => {
    if (!isOpen) return;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab") {
        const els = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!els || !els.length) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      html.style.overflow = prevOverflow;
    };
  }, [isOpen, close, go]);

  if (count === 0) {
    return (
      <div className="glass flex flex-col items-center justify-center gap-3 rounded-2xl border-dashed px-6 py-14 text-center">
        <ImageOff size={32} className="text-white/40" aria-hidden />
        <p className="font-display text-lg font-semibold">Screenshots coming soon</p>
        <p className="max-w-md text-sm text-white/50">
          Real screenshots of {title} will appear here.
        </p>
        <p className="font-mono text-xs text-white/30">public/projects/{slug}/screens/</p>
      </div>
    );
  }

  const shot = isOpen ? images[open as number] : null;
  const shotLabel = shot ? (shot.title ?? `Screenshot ${(open as number) + 1}`) : "";

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((s, i) => {
          const label = s.title ?? `Screenshot ${i + 1}`;
          return (
            <li key={s.src}>
              <button
                type="button"
                aria-label={`Open ${label}, ${i + 1} of ${count}`}
                onClick={(e) => {
                  trigger.current = e.currentTarget;
                  setOpen(i);
                }}
                className="group glass block h-full w-full overflow-hidden rounded-xl text-left transition-colors hover:border-accent-blue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
              >
                <span className="relative block aspect-video w-full overflow-hidden bg-black/40">
                  <Image
                    src={s.src}
                    alt={`${title}: ${label}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-black/65 px-2 py-0.5 font-mono text-[10px] text-white/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <span className="block p-4">
                  <span className="block font-display text-sm font-semibold text-white">
                    {label}
                  </span>
                  {s.description && (
                    <span className="mt-1 block text-xs leading-relaxed text-white/55">
                      {s.description}
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {isOpen && shot && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshots`}
          data-lenis-prevent
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 pb-28 backdrop-blur-md"
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          }}
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Close gallery"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="glass absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-white"
          >
            <X size={20} />
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous screenshot"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                className="glass absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white sm:left-6"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                aria-label="Next screenshot"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                className="glass absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white sm:right-6"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shot.src}
            alt={`${title}: ${shotLabel}`}
            className="max-h-[70vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute inset-x-0 bottom-4 mx-auto w-[min(92vw,40rem)] text-center">
            <p className="font-display text-base font-semibold text-white">{shotLabel}</p>
            {shot.description && (
              <p className="mt-1 text-sm text-white/65">{shot.description}</p>
            )}
            <p className="mt-2 font-mono text-xs text-white/50">
              {(open as number) + 1} / {count}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
