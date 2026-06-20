import Link from "next/link";
import { ArrowRight, Github, Linkedin, MapPin, Zap, Gamepad2, Wrench } from "lucide-react";

function DiscordIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}
import { Footer } from "@/components/layout/Footer";
import { FeaturedProjectsTabs } from "@/components/FeaturedProjectsTabs";
import { HeroBackground } from "@/components/HeroBackground";
import { HeroProfileCard } from "@/components/HeroProfileCard";
import { HeroName } from "@/components/HeroName";
import { mockProjects } from "@/lib/mockData";

const stats = [
  { value: "4+", label: "Unity Titles" },
  { value: "1+", label: "Years Building" },
  { value: "2D/3D", label: "Genres" },
  { value: "HCM", label: "City, Vietnam" },
];

const webSkills  = ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Zustand", "Tailwind CSS", "Express", "REST API", "Zod"];
const gameSkills = ["Unity", "C#", "Photon Fusion", "Photon Voice", "2D", "3D", "NavMesh AI", "Animation State Machine", "URP"];
const toolSkills = ["Adobe Photoshop", "Adobe After Effects", "Adobe Audition", "Aseprite", "Figma", "GitHub"];

export default function HomePage() {
  const webProjects = mockProjects.filter((p) => p.category === "web");
  const gameProjects = mockProjects.filter((p) => p.category === "game");

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col pt-[60px] overflow-hidden">
        {/* Particle canvas background */}
        <HeroBackground />

        {/* Subtle line-grid on top of canvas */}
        <div className="absolute inset-0 line-grid pointer-events-none" style={{ opacity: 0.4 }} />

        {/* Red ambient glows */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top right, rgba(229,25,44,0.14) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at bottom left, rgba(229,25,44,0.07) 0%, transparent 65%)",
          }}
        />

        {/* Left accent line */}
        <div
          className="absolute left-0 top-[60px] bottom-0 w-px hidden lg:block"
          style={{
            background: "linear-gradient(to bottom, var(--red), transparent 70%)",
            opacity: 0.4,
          }}
        />

        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-[1fr_260px] gap-16 items-center">
            {/* LEFT */}
            <div>
              {/* Availability badge */}
              <div className="flex items-center gap-3 mb-8 fade-up">
                <div className="w-5 h-px" style={{ background: "var(--red)" }} />
                <span
                  className="flex items-center gap-2 text-[10px] tracking-[0.3em] font-bold"
                  style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--red)", boxShadow: "0 0 6px var(--red)" }}
                  />
                  AVAILABLE FOR WORK · 2026
                </span>
              </div>

              {/* Name */}
              <div className="mb-6 fade-up delay-100">
                <p
                  className="text-sm mb-1 tracking-[0.3em] font-bold"
                  style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                >
                  NGUYEN HOANG
                </p>
                <HeroName />
              </div>

              {/* Role pills */}
              <div className="flex flex-wrap gap-3 mb-8 fade-up delay-200">
                <span
                  className="flex items-center gap-2 px-4 py-2 border text-[11px] tracking-[0.1em] font-bold"
                  style={{
                    background: "rgba(255,122,0,0.06)",
                    borderColor: "rgba(255,122,0,0.28)",
                    color: "var(--web)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <Zap size={11} /> FULL-STACK DEVELOPER
                </span>
                <span
                  className="flex items-center gap-2 px-4 py-2 border text-[11px] tracking-[0.1em] font-bold"
                  style={{
                    background: "rgba(229,25,44,0.06)",
                    borderColor: "rgba(229,25,44,0.3)",
                    color: "var(--red)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <Gamepad2 size={11} /> UNITY GAME DEVELOPER
                </span>
              </div>

              {/* Bio */}
              <p
                className="text-[13px] leading-[1.85] max-w-lg mb-10 fade-up delay-300"
                style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
              >
                Game developer completing a diploma at VTC Academy, currently studying
                Computing at the University of Greenwich. Passionate about game
                development and the process of turning an idea into something that
                actually feels good to play.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10 fade-up delay-400">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 text-[11px] tracking-[0.15em] font-bold transition-all duration-200 hover:shadow-[0_0_32px_rgba(229,25,44,0.45)]"
                  style={{
                    background: "var(--red)",
                    color: "var(--bg)",
                    fontFamily: "var(--font-mono)",
                    clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
                  }}
                >
                  VIEW MY WORK
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[11px] tracking-[0.15em] font-bold border transition-all duration-200 hover:border-[var(--red)] hover:text-[var(--text)]"
                  style={{
                    borderColor: "var(--border-md)",
                    color: "var(--text-2)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  DOWNLOAD CV
                </Link>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-5 fade-up delay-500">
                {[
                  { href: "https://github.com/B4O2309", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/nguyễn-hoàng-gia-bảo-undefined-3727523ab/", icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="transition-colors duration-200 hover:text-[var(--red)]"
                    style={{ color: "var(--text-3)" }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
                <a
                  aria-label="Discord"
                  title="nhgbao239_"
                  className="transition-colors duration-200 hover:text-[var(--red)]"
                  style={{ color: "var(--text-3)", cursor: "default" }}
                >
                  <DiscordIcon size={16} />
                </a>
                <div className="w-px h-4" style={{ background: "var(--border-md)" }} />
                <span
                  className="flex items-center gap-1.5 text-[11px] tracking-[0.08em]"
                  style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                >
                  <MapPin size={11} /> Ho Chi Minh City, Vietnam
                </span>
              </div>
            </div>

            {/* RIGHT — 3D Profile Card */}
            <div className="slide-right delay-300 relative">
              <HeroProfileCard />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t" style={{ borderColor: "var(--border-md)" }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-5 px-4 flex flex-col gap-1 fade-up ${i < 3 ? "md:border-r" : ""}`}
                  style={{ borderColor: "var(--border-md)", animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <span
                    className="text-4xl"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      color: "var(--red)",
                      textShadow: "0 0 24px rgba(229,25,44,0.35)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[10px] tracking-[0.2em] font-bold"
                    style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────── */}
      <section className="relative py-24 overflow-hidden line-grid">
        {/* Aura bleed corners */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 50% at -5% 0%, rgba(229,25,44,0.07) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 45% at 105% 100%, rgba(229,25,44,0.05) 0%, transparent 65%)" }} />

        {/* Left accent line — continuation from hero */}
        <div className="absolute left-0 top-0 bottom-0 w-px hidden lg:block pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(229,25,44,0.25), rgba(229,25,44,0.08) 60%, transparent)" }} />


        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px" style={{ background: "var(--red)" }} />
              <span
                className="text-[10px] tracking-[0.3em] font-bold"
                style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}
              >
                SELECTED WORK
              </span>
            </div>
            <h2
              className="text-[clamp(40px,6vw,80px)]"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Featured Projects
            </h2>
          </div>

          <FeaturedProjectsTabs webProjects={webProjects} gameProjects={gameProjects} />
        </div>
      </section>

      {/* ── ABOUT / SKILLS ───────────────────────────────── */}
      <section
        className="relative py-20 border-y overflow-hidden dot-grid"
        style={{ borderColor: "var(--border-md)", background: "var(--bg-2)" }}
      >
        {/* Aura bleed corners */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 110% -10%, rgba(229,25,44,0.06) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 45% 55% at -10% 110%, rgba(229,25,44,0.05) 0%, transparent 65%)" }} />

        {/* Left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-px hidden lg:block pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(229,25,44,0.15) 30%, rgba(229,25,44,0.15) 70%, transparent)" }} />


        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px" style={{ background: "var(--red)" }} />
                <span className="text-[10px] tracking-[0.3em] font-bold" style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}>
                  ABOUT
                </span>
              </div>
              <h2
                className="text-[clamp(32px,4vw,56px)] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                About Me
              </h2>
              <p className="text-[13px] leading-[1.85] mb-8" style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}>
                Computing student at the University of Greenwich, currently completing
                a Game Programming diploma at VTC Academy. Shipped four Unity titles
                spanning 2D platformer, 2D top-down ARPG, and first-person 3D co-op
                survival, implementing gameplay systems including NavMesh-driven
                wildlife AI, melee combat with hitbox timing, and authoritative
                multiplayer networking via Photon Fusion in a 4-player co-op survival
                game. Seeking a game development internship or fresher role to
                contribute to shipped products in a professional team environment.
              </p>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] font-bold transition-colors hover:opacity-80"
                style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}
              >
                READ MY FULL RESUME <ArrowRight size={12} />
              </Link>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <div>
                <p className="text-[10px] tracking-[0.25em] mb-4 flex items-center gap-2 font-bold" style={{ color: "var(--web)", fontFamily: "var(--font-mono)" }}>
                  <Zap size={10} /> WEB DEVELOPMENT
                </p>
                <div className="flex flex-wrap gap-2">
                  {webSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-[11px] tracking-[0.08em] font-bold border transition-all duration-200 hover:border-[var(--web)] hover:text-[var(--web)] cursor-default"
                      style={{
                        background: "var(--bg-card)",
                        borderColor: "var(--border-md)",
                        color: "var(--text-2)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.25em] mb-4 flex items-center gap-2 font-bold" style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}>
                  <Gamepad2 size={10} /> GAME DEVELOPMENT
                </p>
                <div className="flex flex-wrap gap-2">
                  {gameSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-[11px] tracking-[0.08em] font-bold border transition-all duration-200 hover:border-[var(--red)] hover:text-[var(--red)] cursor-default"
                      style={{
                        background: "var(--bg-card)",
                        borderColor: "var(--border-md)",
                        color: "var(--text-2)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.25em] mb-3 flex items-center gap-2 font-bold" style={{ color: "var(--tool)", fontFamily: "var(--font-mono)" }}>
                  <Wrench size={10} /> TOOLS & PRODUCTION
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {toolSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[10px] tracking-[0.06em] border cursor-default transition-colors duration-200 hover:border-[var(--tool)] hover:text-[var(--tool)]"
                      style={{
                        background: "var(--tool-dim)",
                        borderColor: "rgba(201,150,63,0.18)",
                        color: "var(--text-2)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden line-grid" style={{ background: "var(--bg)" }}>
        {/* Centre glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(229,25,44,0.1) 0%, transparent 70%)" }} />
        {/* Aura bleed corners */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 50% at -5% 0%, rgba(229,25,44,0.06) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 50% at 105% 100%, rgba(229,25,44,0.06) 0%, transparent 65%)" }} />

        {/* Left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-px hidden lg:block pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(229,25,44,0.12), rgba(229,25,44,0.3) 50%, transparent)" }} />

        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "var(--red)" }} />
            <span className="text-[10px] tracking-[0.35em] font-bold" style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}>
              OPEN TO OPPORTUNITIES
            </span>
            <div className="w-8 h-px" style={{ background: "var(--red)" }} />
          </div>
          <h2
            className="text-[clamp(48px,8vw,110px)] leading-[0.88] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Let&apos;s Build
            <br />
            <span style={{ color: "var(--red)", textShadow: "0 0 60px rgba(229,25,44,0.35)" }}>
              Something Great.
            </span>
          </h2>
          <p
            className="text-[13px] mb-10 max-w-md mx-auto leading-relaxed"
            style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
          >
            Open to full-time roles, freelance projects, and creative collaborations —
            across web products and games.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-9 py-4 text-[11px] tracking-[0.15em] font-bold transition-all duration-300 glow-pulse hover:shadow-[0_0_48px_rgba(229,25,44,0.55)]"
            style={{
              background: "var(--red)",
              color: "var(--bg)",
              fontFamily: "var(--font-mono)",
              clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)",
            }}
          >
            GET IN TOUCH
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
