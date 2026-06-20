"use client";

import { useEffect, useRef, useState } from "react";

const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&";

function rand() {
  return POOL[Math.floor(Math.random() * POOL.length)];
}

interface ScrambleProps {
  text: string;
  startDelay?: number; // ms after the go-signal before this word begins
  duration?: number;   // ms for all chars to lock in
  style?: React.CSSProperties;
}

function ScrambleWord({ text, startDelay = 0, duration = 900, style }: ScrambleProps) {
  // Always init as real text — prevents SSR/hydration mismatch
  const [chars, setChars] = useState<string[]>(() => text.split(""));
  const rafRef = useRef<number>(0);
  const t0Ref  = useRef<number | null>(null);
  const ready  = useRef(false); // flips to true when loader-done fires

  useEffect(() => {
    const letters = text.split("");

    const run = () => {
      const frame = (now: number) => {
        if (t0Ref.current === null) t0Ref.current = now;
        const elapsed = now - t0Ref.current - startDelay;

        if (elapsed < 0) {
          rafRef.current = requestAnimationFrame(frame);
          return;
        }

        const progress = Math.min(elapsed / duration, 1);
        const locked   = Math.ceil(progress * letters.length);

        setChars(
          letters.map((ch, i) => {
            if (ch === " ") return " ";
            if (i < locked) return ch;
            return rand();
          })
        );

        if (progress < 1) rafRef.current = requestAnimationFrame(frame);
      };

      rafRef.current = requestAnimationFrame(frame);
    };

    const onLoaderDone = () => {
      ready.current = true;
      run();
    };

    // Listen for the loader's split-complete signal
    window.addEventListener("loader-done", onLoaderDone);

    // Fallback: if no loader (e.g. navigating between pages), start after a short delay
    const fallback = setTimeout(() => {
      if (!ready.current) run();
    }, 400);

    return () => {
      window.removeEventListener("loader-done", onLoaderDone);
      clearTimeout(fallback);
      cancelAnimationFrame(rafRef.current);
    };
  }, [text, startDelay, duration]);

  return <span style={style}>{chars.join("")}</span>;
}

export function HeroName() {
  return (
    <h1
      className="leading-[0.85]"
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        fontSize: "clamp(80px, 14vw, 180px)",
        color: "var(--text)",
        letterSpacing: "0.02em",
      }}
    >
      {/* "GIA" locks in first */}
      <ScrambleWord text="GIA" startDelay={0}   duration={750} />
      {" "}
      {/* "BAO" starts shortly after with red glow */}
      <ScrambleWord
        text="BAO"
        startDelay={220}
        duration={850}
        style={{
          color: "var(--red)",
          textShadow: "0 0 60px rgba(229,25,44,0.4), 0 0 120px rgba(229,25,44,0.15)",
        }}
      />
    </h1>
  );
}
