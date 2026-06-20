"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MediaGallery } from "@/components/MediaGallery";
import type { MediaItem } from "@/types";

interface Props {
  media: MediaItem[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
  startIndex?: number;
}

export function MediaModal({ media, title, isOpen, onClose, startIndex }: Props) {
  const [mounted, setMounted] = useState(false);

  // Only render portal client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9997] flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(6,3,6,0.96)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      {/* Title bar */}
      <div className="w-full max-w-5xl flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span
            className="text-sm tracking-[0.05em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text)",
              fontSize: "1.1rem",
            }}
          >
            {title}
          </span>
          <span
            className="text-[10px] tracking-[0.15em]"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            ESC or click outside to close
          </span>
        </div>

        {/* Gallery — stop propagation so clicking inside doesn't close modal */}
        <div onClick={(e) => e.stopPropagation()}>
          <MediaGallery
            media={media}
            title={title}
            onClose={onClose}
            startIndex={startIndex}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
