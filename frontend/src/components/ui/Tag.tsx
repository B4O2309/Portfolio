"use client";

import { useState } from "react";

interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  variant?: "web" | "game" | "default";
  className?: string;
}

export function Tag({ children, active, variant = "default", className }: TagProps) {
  const [hovered, setHovered] = useState(false);

  const base: Record<string, { bg: string; border: string; color: string }> = {
    web: {
      bg: "rgba(255,122,0,0.07)",
      border: "rgba(255,122,0,0.22)",
      color: "#ff7a00",
    },
    game: {
      bg: "rgba(229,25,44,0.07)",
      border: "rgba(229,25,44,0.25)",
      color: "#e8192c",
    },
    default: {
      bg: active ? "rgba(229,25,44,0.1)" : "rgba(220,20,45,0.05)",
      border: active ? "rgba(229,25,44,0.4)" : "rgba(220,20,45,0.15)",
      color: active ? "#e8192c" : "#8a6a72",
    },
  };

  const glowColor: Record<string, string> = {
    web: "rgba(255,122,0,0.35)",
    game: "rgba(229,25,44,0.35)",
    default: "rgba(229,25,44,0.2)",
  };

  const s = base[variant];

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`inline-block px-2.5 py-1 text-[10px] tracking-[0.1em] border leading-none select-none ${className ?? ""}`}
      style={{
        background: s.bg,
        borderColor: hovered
          ? variant === "web" ? "rgba(255,122,0,0.55)" : "rgba(229,25,44,0.55)"
          : s.border,
        color: s.color,
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        cursor: "default",
        transform: hovered ? "translateY(-2px) scale(1.07)" : "none",
        boxShadow: hovered ? `0 0 14px ${glowColor[variant]}, 0 4px 10px rgba(0,0,0,0.35)` : "none",
        filter: hovered ? "brightness(1.3)" : "none",
        transition: "transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease, border-color 0.15s ease",
      }}
    >
      {children}
    </span>
  );
}
