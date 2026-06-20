"use client";

import { useEffect, useState } from "react";

const MIN_DISPLAY    = 1000; // ms — minimum loader visible time
const SLIDE_DURATION = 680;  // ms — curtain slide-up duration

type Phase = "visible" | "sliding" | "done";

export function PageLoader() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = Date.now();

    document.fonts.ready.then(() => {
      const wait = Math.max(0, MIN_DISPLAY - (Date.now() - start));

      setTimeout(() => {
        // Start slide-up
        setPhase("sliding");

        // After animation completes: restore scroll, signal HeroName
        setTimeout(() => {
          document.body.style.overflow = "";
          window.dispatchEvent(new CustomEvent("loader-done"));
          setPhase("done");
        }, SLIDE_DURATION + 40);
      }, wait);
    });

    return () => { document.body.style.overflow = ""; };
  }, []);

  if (phase === "done") return null;

  const sliding = phase === "sliding";

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        // ── Background — warm dark charcoal, distinct from homepage's cool #060306
        background: "#0e0c0a",
        transform: sliding ? "translateY(-100%)" : "translateY(0)",
        transition: sliding
          ? `transform ${SLIDE_DURATION}ms cubic-bezier(0.76, 0, 0.24, 1)`
          : "none",
        willChange: "transform",
        overflow: "hidden",
      }}
    >
      {/* --web orange glow top-right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 45% at 72% 8%, rgba(255,122,0,0.13) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* --red glow bottom-left — mirrors homepage hero accents */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 40% 35% at 18% 92%, rgba(229,25,44,0.08) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid — orange-tinted, same 48px size as homepage */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,122,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* Vignette — pull edges to near-black so GB stays as the focal point */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 85% 80% at 50% 50%, transparent 30%, rgba(4,3,2,0.82) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Center content ──────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          pointerEvents: "none",
        }}
      >
        {/* Corner brackets + initials */}
        <div style={{ position: "relative", padding: 24 }}>
          {(["tl", "tr", "bl", "br"] as const).map((pos, i) => (
            <span
              key={pos}
              style={{
                position: "absolute",
                width: 16,
                height: 16,
                ...(pos === "tl" && {
                  top: 0, left: 0,
                  borderTop: "2px solid var(--red)",
                  borderLeft: "2px solid var(--red)",
                }),
                ...(pos === "tr" && {
                  top: 0, right: 0,
                  borderTop: "2px solid var(--red)",
                  borderRight: "2px solid var(--red)",
                }),
                ...(pos === "bl" && {
                  bottom: 0, left: 0,
                  borderBottom: "2px solid var(--red)",
                  borderLeft: "2px solid var(--red)",
                }),
                ...(pos === "br" && {
                  bottom: 0, right: 0,
                  borderBottom: "2px solid var(--red)",
                  borderRight: "2px solid var(--red)",
                }),
                animation: `loaderBracket 0.35s ease both ${i * 55}ms`,
              }}
            />
          ))}

          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 72,
              lineHeight: 1,
              letterSpacing: "0.06em",
              display: "block",
              color: "var(--red)",
              textShadow:
                "0 0 40px rgba(229,25,44,0.6), 0 0 80px rgba(229,25,44,0.25)",
              animation:
                "loaderFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both 0.2s",
            }}
          >
            GB
          </span>
        </div>

        {/* Progress bar */}
        <div
          style={{
            width: 120,
            height: 1,
            background: "rgba(255,122,0,0.15)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "var(--red)",
              boxShadow: "0 0 8px var(--red)",
              transformOrigin: "left center",
              animation: `loaderBar ${MIN_DISPLAY}ms cubic-bezier(0.4, 0, 0.2, 1) both`,
            }}
          />
        </div>

        {/* Status label */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: "0.3em",
            color: "rgba(255,122,0,0.5)",
            animation: "loaderFadeUp 0.4s ease both 0.35s",
          }}
        >
          INITIALIZING
        </span>
      </div>
    </div>
  );
}
