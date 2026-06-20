"use client";

import { useEffect, useRef } from "react";

// ── Aura ──────────────────────────────────────────────────
interface Aura {
  x: number; y: number;
  ox: number; oy: number;
  r: number;
  opacity: number;
  phase: number;
  phaseSpeed: number;
}

const AURA_DEFS: Omit<Aura, "x" | "y">[] = [
  { ox: 0.72, oy: 0.28, r: 0.52, opacity: 0.38, phase: 0,           phaseSpeed: 0.0018 },
  { ox: 0.22, oy: 0.72, r: 0.44, opacity: 0.28, phase: Math.PI,     phaseSpeed: 0.0022 },
  { ox: 0.55, oy: 0.55, r: 0.30, opacity: 0.18, phase: Math.PI*0.5, phaseSpeed: 0.0014 },
];

// ── Particle ──────────────────────────────────────────────
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

export function HeroBackground() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const offRef      = useRef<HTMLCanvasElement | null>(null);
  const mouseRef    = useRef({ x: -9999, y: -9999 });
  const rafRef      = useRef<number>(0);
  const aurasRef    = useRef(AURA_DEFS.map(a => ({ ...a, x: a.ox, y: a.oy })));
  const partsRef    = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx  = canvas.getContext("2d")!;
    const off  = document.createElement("canvas");
    offRef.current = off;
    const octx = off.getContext("2d")!;

    const init = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      off.width     = canvas.width;
      off.height    = canvas.height;

      const count = Math.min(55, Math.floor((canvas.width * canvas.height) / 18000));
      partsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.45 + 0.08,
        pulsePhase: Math.random() * Math.PI * 2,
      }));
    };

    let t = 0;

    const draw = () => {
      const W  = canvas.width;
      const H  = canvas.height;
      const D  = Math.min(W, H);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const hasMouse = mx > -999;
      t++;

      // ────────────────────────────────────────────────────
      // 1. AURA PASS (offscreen → blur → main)
      // ────────────────────────────────────────────────────
      octx.clearRect(0, 0, W, H);

      for (const a of aurasRef.current) {
        a.phase += a.phaseSpeed;

        const wanderX = Math.sin(a.phase * 0.7) * 0.04;
        const wanderY = Math.cos(a.phase * 0.5) * 0.03;
        let fx = a.ox + wanderX;
        let fy = a.oy + wanderY;

        if (hasMouse) {
          fx += (mx / W - fx) * 0.06;
          fy += (my / H - fy) * 0.06;
        }

        a.x += (fx - a.x) * 0.012;
        a.y += (fy - a.y) * 0.012;

        const breathe = 0.88 + Math.sin(a.phase) * 0.12;
        const finalOp = a.opacity * breathe;

        let boost = 0;
        if (hasMouse) {
          const dx = mx / W - a.x;
          const dy = my / H - a.y;
          boost = Math.max(0, 1 - Math.sqrt(dx*dx + dy*dy) / 0.55) * 0.22;
        }

        const cx = a.x * W;
        const cy = a.y * H;
        const radius = a.r * D;
        const op = Math.min(finalOp + boost, 0.95);

        const grad = octx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0,    `rgba(229,25,44,${op.toFixed(3)})`);
        grad.addColorStop(0.40, `rgba(210,18,36,${(op*0.50).toFixed(3)})`);
        grad.addColorStop(0.75, `rgba(180,12,28,${(op*0.15).toFixed(3)})`);
        grad.addColorStop(1,    "rgba(180,12,28,0)");

        octx.beginPath();
        octx.arc(cx, cy, radius, 0, Math.PI * 2);
        octx.fillStyle = grad;
        octx.fill();
      }

      ctx.clearRect(0, 0, W, H);
      ctx.filter = "blur(80px)";
      ctx.drawImage(off, 0, 0);
      ctx.filter = "none";
      ctx.globalAlpha = 0.35;
      ctx.filter = "blur(24px)";
      ctx.drawImage(off, 0, 0);
      ctx.filter = "none";
      ctx.globalAlpha = 1;

      // ────────────────────────────────────────────────────
      // 2. PARTICLE PASS (drawn directly on main canvas)
      // ────────────────────────────────────────────────────

      // Connection lines
      const pts = partsRef.current;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(229,25,44,${(1 - d/140) * 0.13})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Mouse glow
      if (hasMouse) {
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 180);
        grd.addColorStop(0, "rgba(229,25,44,0.07)");
        grd.addColorStop(1, "rgba(229,25,44,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, W, H);
      }

      // Particles
      for (const p of pts) {
        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 110 && d > 0) {
          const f = ((110 - d) / 110) * 0.7;
          p.vx += (dx/d) * f;
          p.vy += (dy/d) * f;
        }

        p.vx *= 0.97;
        p.vy *= 0.97;
        p.x  += p.vx;
        p.y  += p.vy;

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const pulse      = Math.sin(t * 0.001 + p.pulsePhase) * 0.15 + 0.85;
        const finalOp    = p.opacity * pulse;
        const proximity  = Math.max(0, 1 - d / 150);
        const glowR      = p.radius * (1 + proximity * 2.5);
        const glowA      = finalOp  * (1 + proximity * 1.5);

        if (proximity > 0.1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowR * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(229,25,44,${proximity * 0.1})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229,25,44,${Math.min(glowA, 0.9)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    init();
    rafRef.current = requestAnimationFrame(draw);

    const section  = canvas.parentElement;
    const onMove   = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave  = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onResize = () => init();

    section?.addEventListener("mousemove", onMove);
    section?.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      section?.removeEventListener("mousemove", onMove);
      section?.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.88 }}
    />
  );
}
