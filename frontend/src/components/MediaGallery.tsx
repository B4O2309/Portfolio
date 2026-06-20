"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  ImageIcon,
} from "lucide-react";
import type { MediaItem } from "@/types";

interface Props {
  media: MediaItem[];
  title: string;
  onClose?: () => void;
  startIndex?: number;
}

type Direction = "next" | "prev" | "jump";

function isYoutube(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function MediaDisplay({ item, title }: { item: MediaItem; title: string }) {
  if (item.type === "video") {
    if (isYoutube(item.url)) {
      return (
        <iframe
          src={`${item.url}?rel=0&modestbranding=1`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={item.caption ?? title}
          style={{ border: "none" }}
        />
      );
    }
    return (
      <video
        src={item.url}
        controls
        className="absolute inset-0 w-full h-full object-contain"
        style={{ background: "#000" }}
      />
    );
  }
  return (
    <Image
      src={item.url}
      alt={item.caption ?? title}
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, 90vw"
      priority
    />
  );
}

function ThumbnailItem({
  item,
  index,
  active,
  onClick,
}: {
  item: MediaItem;
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative shrink-0 overflow-hidden transition-all duration-200"
      style={{
        width: 72,
        height: 48,
        border: `2px solid ${active ? "var(--red)" : "var(--border-md)"}`,
        boxShadow: active ? "0 0 12px rgba(229,25,44,0.4)" : "none",
        borderRadius: "1px",
        background: "var(--bg-2)",
        transform: active ? "scale(1.05)" : "scale(1)",
      }}
      aria-label={`View media ${index + 1}`}
    >
      {item.type === "video" ? (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.7)" }}
        >
          {item.thumbnail && (
            <Image
              src={item.thumbnail}
              alt=""
              fill
              className="object-cover opacity-60"
              sizes="72px"
            />
          )}
          <Play size={16} style={{ color: "var(--red)", position: "relative", zIndex: 1 }} />
        </div>
      ) : (
        <Image src={item.url} alt="" fill className="object-cover" sizes="72px" />
      )}
      {active && (
        <div className="absolute inset-0" style={{ background: "rgba(229,25,44,0.15)" }} />
      )}
    </button>
  );
}

export function MediaGallery({ media, title, onClose, startIndex = 0 }: Props) {
  const [current, setCurrent] = useState(startIndex);
  const [direction, setDirection] = useState<Direction>("next");
  const [animKey, setAnimKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const isModal = !!onClose;

  // Navigate with direction tracking
  const navigate = useCallback(
    (newIndex: number, dir: Direction) => {
      setDirection(dir);
      setAnimKey((k) => k + 1);
      setCurrent(newIndex);
    },
    []
  );

  const prev = useCallback(
    () => navigate((current - 1 + media.length) % media.length, "prev"),
    [current, media.length, navigate]
  );

  const next = useCallback(
    () => navigate((current + 1) % media.length, "next"),
    [current, media.length, navigate]
  );

  const jumpTo = useCallback(
    (index: number) => {
      if (index === current) return;
      navigate(index, index > current ? "next" : "prev");
    },
    [current, navigate]
  );

  // Keyboard nav
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") {
        if (isFullscreen) setIsFullscreen(false);
        else onClose?.();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose, isFullscreen]);

  // Swipe handlers
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) delta < 0 ? next() : prev();
    touchStartX.current = null;
  }, [next, prev]);


  // Scroll active thumbnail into view
  useEffect(() => {
    if (!thumbsRef.current) return;
    const active = thumbsRef.current.children[current] as HTMLElement;
    active?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [current]);

  const item = media[current];
  const imageCount = media.filter((m) => m.type === "image").length;
  const videoCount = media.filter((m) => m.type === "video").length;
  const animClass = `media-enter-${direction}`;

  // ── Shared media view ──────────────────────────────────────
  const renderMainDisplay = (height?: string) => (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: height ? undefined : "16/9", height, background: "#000" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Animated wrapper — key changes trigger enter animation */}
      <div key={animKey} className={`absolute inset-0 ${animClass}`}>
        <MediaDisplay item={item} title={title} />
      </div>

      {/* Prev / Next */}
      {media.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-[var(--red)]"
            style={{
              background: "rgba(6,3,6,0.78)",
              border: "1px solid var(--border-md)",
              backdropFilter: "blur(4px)",
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={20} style={{ color: "var(--text)" }} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-[var(--red)]"
            style={{
              background: "rgba(6,3,6,0.78)",
              border: "1px solid var(--border-md)",
              backdropFilter: "blur(4px)",
            }}
            aria-label="Next"
          >
            <ChevronRight size={20} style={{ color: "var(--text)" }} />
          </button>
        </>
      )}

      {/* Counter — top for video (keeps native controls unobstructed), bottom for images */}
      <div
        className={`absolute ${item.type === "video" ? "top-3 left-3" : "bottom-3 left-3"} px-2.5 py-1 text-[10px] tracking-[0.1em] font-bold`}
        style={{
          background: "rgba(6,3,6,0.8)",
          color: "var(--text-2)",
          fontFamily: "var(--font-mono)",
          backdropFilter: "blur(4px)",
        }}
      >
        {current + 1} / {media.length}
        {item.type === "video" && (
          <span style={{ color: "var(--red)", marginLeft: 6 }}>▶ VIDEO</span>
        )}
      </div>

      {/* Fullscreen toggle (inline gallery only) — top for video, bottom for images */}
      {!isModal && !isFullscreen && (
        <button
          onClick={() => setIsFullscreen(true)}
          className={`absolute ${item.type === "video" ? "top-3 right-3" : "bottom-3 right-3"} w-8 h-8 flex items-center justify-center transition-all duration-200 hover:border-[var(--red)] hover:text-[var(--red)]`}
          style={{
            background: "rgba(6,3,6,0.8)",
            border: "1px solid var(--border-md)",
            color: "var(--text-2)",
            backdropFilter: "blur(4px)",
          }}
          aria-label="Fullscreen"
        >
          <Maximize2 size={13} />
        </button>
      )}

      {/* Close (modal only) */}
      {isModal && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center transition-all duration-200 hover:border-[var(--red)] hover:text-[var(--red)]"
          style={{
            background: "rgba(6,3,6,0.85)",
            border: "1px solid var(--border-md)",
            color: "var(--text-2)",
            backdropFilter: "blur(4px)",
          }}
          aria-label="Close"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );

  // ── Thumbnail strip ────────────────────────────────────────
  const renderThumbs = () =>
    media.length > 1 && (
      <div
        className="flex items-center justify-between px-4 py-3 gap-4"
        style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border-md)" }}
      >
        <div
          ref={thumbsRef}
          className="flex gap-2 overflow-x-auto thumb-scroll"
        >
          {media.map((m, i) => (
            <ThumbnailItem
              key={i}
              item={m}
              index={i}
              active={i === current}
              onClick={() => jumpTo(i)}
            />
          ))}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {imageCount > 0 && (
            <span
              className="flex items-center gap-1 text-[10px] tracking-[0.08em]"
              style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
            >
              <ImageIcon size={10} /> {imageCount}
            </span>
          )}
          {videoCount > 0 && (
            <span
              className="flex items-center gap-1 text-[10px] tracking-[0.08em]"
              style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}
            >
              <Play size={10} /> {videoCount}
            </span>
          )}
        </div>
      </div>
    );

  // ── Fullscreen overlay ─────────────────────────────────────
  if (isFullscreen) {
    return (
      <>
        {/* Inline gallery still visible behind overlay */}
        <div className="flex flex-col">
          {renderMainDisplay()}
          {item.caption && (
            <div
              className="px-4 py-2.5 text-[11px] leading-relaxed"
              style={{
                background: "var(--bg-card)",
                borderBottom: "1px solid var(--border-md)",
                color: "var(--text-2)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {item.caption}
            </div>
          )}
          {renderThumbs()}
        </div>

        {/* Fullscreen portal */}
        <div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(6,3,6,0.97)", backdropFilter: "blur(12px)" }}
          onClick={() => setIsFullscreen(false)}
        >
          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-3">
              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-2 text-[11px] tracking-[0.1em] font-bold transition-colors hover:text-[var(--red)]"
                style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
              >
                <X size={14} /> CLOSE FULLSCREEN
              </button>
            </div>

            {/* Fullscreen media with animation */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "16/9", background: "#000" }}
            >
              <div key={`fs-${animKey}`} className={`absolute inset-0 ${animClass}`}>
                <MediaDisplay item={item} title={title} />
              </div>

              {media.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-[var(--red)]"
                    style={{ background: "rgba(6,3,6,0.8)", border: "1px solid var(--border-md)" }}
                  >
                    <ChevronLeft size={24} style={{ color: "var(--text)" }} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-[var(--red)]"
                    style={{ background: "rgba(6,3,6,0.8)", border: "1px solid var(--border-md)" }}
                  >
                    <ChevronRight size={24} style={{ color: "var(--text)" }} />
                  </button>
                </>
              )}

              <div
                className="absolute bottom-3 left-3 px-2.5 py-1 text-[10px] tracking-[0.1em] font-bold"
                style={{ background: "rgba(6,3,6,0.8)", color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
              >
                {current + 1} / {media.length}
              </div>
            </div>

            {item.caption && (
              <p className="mt-3 text-center text-[12px]" style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}>
                {item.caption}
              </p>
            )}

            {media.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {media.map((m, i) => (
                  <ThumbnailItem key={i} item={m} index={i} active={i === current} onClick={() => jumpTo(i)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  // ── Normal / Modal view ───────────────────────────────────
  return (
    <div className="flex flex-col w-full">
      {renderMainDisplay()}

      {item.caption && (
        <div
          className="px-4 py-2.5 text-[11px] leading-relaxed"
          style={{
            background: "var(--bg-card)",
            borderBottom: "1px solid var(--border-md)",
            color: "var(--text-2)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {item.caption}
        </div>
      )}

      {renderThumbs()}
    </div>
  );
}
