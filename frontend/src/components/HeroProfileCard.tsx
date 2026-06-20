"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Zap, Gamepad2, MapPin } from "lucide-react";

export function HeroProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, sx: 50, sy: 50 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let rafId: number;
    let target = { rx: 0, ry: 0, sx: 50, sy: 50 };
    let current = { rx: 0, ry: 0, sx: 50, sy: 50 };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      current.rx = lerp(current.rx, target.rx, 0.1);
      current.ry = lerp(current.ry, target.ry, 0.1);
      current.sx = lerp(current.sx, target.sx, 0.1);
      current.sy = lerp(current.sy, target.sy, 0.1);
      setTilt({ ...current });
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const maxT = 14;
      target.rx = -(dy / (rect.height / 2)) * maxT;
      target.ry = (dx / (rect.width / 2)) * maxT;
      target.sx = ((e.clientX - rect.left) / rect.width) * 100;
      target.sy = ((e.clientY - rect.top) / rect.height) * 100;
    };
    const onLeave = () => {
      target = { rx: 0, ry: 0, sx: 50, sy: 50 };
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="hidden lg:block"
      style={{ perspective: "900px", cursor: "default" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: "preserve-3d",
          transition: "box-shadow 0.3s ease",
          boxShadow: hovered
            ? "0 24px 60px rgba(229,25,44,0.25), 0 0 0 1px rgba(229,25,44,0.3)"
            : "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(229,25,44,0.12)",
          borderRadius: "2px",
          overflow: "hidden",
          background: "var(--bg-card)",
        }}
      >
        {/* ── Photo area ──────────────────────────────── */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "3/4", background: "var(--bg-2)" }}
        >
          {/* Profile photo */}
          <Image
            src="/profile.jpg"
            alt="Nguyen Hoang Gia Bao"
            fill
            className="object-cover object-top"
            priority
          />

          {/* Dark overlay for theme consistency */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(12,3,6,0.15) 0%, rgba(12,3,6,0.0) 50%, rgba(12,3,6,0.55) 100%)",
            }}
          />

          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)",
            }}
          />

          {/* Corner brackets */}
          {[
            { top: 10, left: 10, style: { borderTop: "2px solid var(--red)", borderLeft: "2px solid var(--red)" } },
            { top: 10, right: 10, style: { borderTop: "2px solid var(--red)", borderRight: "2px solid var(--red)" } },
            { bottom: 10, left: 10, style: { borderBottom: "2px solid var(--red)", borderLeft: "2px solid var(--red)" } },
            { bottom: 10, right: 10, style: { borderBottom: "2px solid var(--red)", borderRight: "2px solid var(--red)" } },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute"
              style={{ width: 18, height: 18, ...pos }}
            />
          ))}

          {/* Shine */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${tilt.sx}% ${tilt.sy}%, rgba(255,255,255,0.05) 0%, transparent 55%)`,
            }}
          />

          {/* AVAILABLE badge */}
          <div className="absolute top-3 right-3">
            <span
              className="flex items-center gap-1.5 px-2 py-1 text-[9px] tracking-[0.15em] font-bold border"
              style={{
                background: "rgba(229,25,44,0.1)",
                borderColor: "rgba(229,25,44,0.4)",
                color: "var(--red)",
                fontFamily: "var(--font-mono)",
                backdropFilter: "blur(4px)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--red)",
                  boxShadow: "0 0 5px var(--red)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              OPEN TO WORK
            </span>
          </div>
        </div>

        {/* ── Info area ───────────────────────────────── */}
        <div
          className="p-4"
          style={{ borderTop: "1px solid rgba(229,25,44,0.15)" }}
        >
          <p
            className="text-xs tracking-[0.05em] mb-2.5"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)", fontWeight: 700, fontSize: "1.1rem" }}
          >
            Nguyen Hoang Gia Bao
          </p>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span
              className="flex items-center gap-1 text-[9px] tracking-[0.1em] font-bold"
              style={{ color: "var(--web)", fontFamily: "var(--font-mono)" }}
            >
              <Zap size={8} /> WEB DEV
            </span>
            <span style={{ color: "var(--text-3)", fontSize: 10 }}>·</span>
            <span
              className="flex items-center gap-1 text-[9px] tracking-[0.1em] font-bold"
              style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}
            >
              <Gamepad2 size={8} /> GAME DEV
            </span>
          </div>
          <div
            className="flex items-center gap-1.5 text-[9px] tracking-[0.08em]"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            <MapPin size={9} /> Ho Chi Minh City, Vietnam
          </div>
        </div>

        {/* 3D depth layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, rgba(229,25,44,0.03) 0%, transparent 50%, rgba(229,25,44,0.02) 100%)`,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Glow shadow under card */}
      <div
        style={{
          position: "absolute",
          bottom: -20,
          left: "10%",
          right: "10%",
          height: 40,
          background: "radial-gradient(ellipse, rgba(229,25,44,0.2) 0%, transparent 70%)",
          filter: "blur(12px)",
          transition: "opacity 0.3s",
          opacity: hovered ? 1 : 0.4,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
