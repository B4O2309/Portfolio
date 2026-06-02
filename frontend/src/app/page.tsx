import Link from "next/link";
import { ArrowRight, Gamepad2} from "lucide-react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { getFeaturedProjects } from "@/lib/api";
import { Tag } from "../components/ui/Tag";
import { Footer } from "../components/layout/Footer";
import type { Project } from "@/types";

const stats = [
  { value: "6", label: "GAMES SHIPPED" }, 
  { value: "5+", label: "YEARS XP" },
  { value: "3", label: "ENGINES" },
  { value: "2", label: "STUDIOS" },
];

const skills = [
  "UNREAL ENGINE 5",
  "UNITY",
  "C++",
  "C#",
  "BLUEPRINTS",
  "HLSL / GLSL",
  "PROCEDURAL GEN",
  "GAMEPLAY SYSTEMS",
  "NARRATIVE DESIGN",
  "LEVEL DESIGN",
  "VFX / SHADERS",
];

// Server Component — data fetched at request time (ISR)
export default async function HomePage() {
  let featuredProjects: Project[] = [];

  try {
    featuredProjects = await getFeaturedProjects();
  } catch {
    // Graceful fallback — show empty projects section
  }

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col pt-14 grid-bg overflow-hidden">
        {/* Radial glows */}
        <div
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(204,34,34,0.18) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(204,34,34,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Vertical red accent line */}
        <div
          className="absolute left-0 top-14 bottom-0 w-px hidden lg:block"
          style={{ background: "linear-gradient(to bottom, #cc2222, transparent)" }}
        />

        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            {/* LEFT — Main content */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4 animate-fade-slide-up">
                <div className="w-6 h-px" style={{ background: "#cc2222" }} />
                <span
                  className="text-xs tracking-[0.3em] text-[#cc2222]"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  INDIE DEVELOPER
                </span>
              </div>

              {/* Name */}
              <p
                className="text-[#7a6e6e] text-sm tracking-[0.25em] mb-3 animate-fade-slide-up delay-100"
                style={{ fontFamily: "DM Mono, monospace" }}
              >
                NGUYEN HOANG GIA BAO
              </p>

              {/* Hero headline */}
              <h1
                className="text-[clamp(72px,12vw,148px)] leading-[0.9] tracking-[0.02em] mb-6 animate-fade-slide-up delay-200"
                style={{
                  fontFamily: "Bebas Neue, Impact, sans-serif",
                  color: "#ede8e3",
                }}
              >
                GAME
                <br />
                <span
                  style={{
                    color: "#cc2222",
                    textShadow: "0 0 60px rgba(204,34,34,0.35)",
                  }}
                >
                  DEVELOPER
                </span>
              </h1>

              {/* Tagline */}
              <p
                className="text-[#7a6e6e] text-sm leading-relaxed max-w-md mb-10 animate-fade-slide-up delay-300"
                style={{ fontFamily: "DM Mono, monospace" }}
              >
                Crafting immersive game worlds and dynamic player experiences.
                <br />
                Specializing in Unity C# development, scalable gameplay systems,
                <br />
                and robust core mechanics.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-slide-up delay-400">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-3 px-7 py-3 text-xs tracking-[0.15em] font-medium transition-all duration-300 hover:shadow-[0_0_24px_rgba(204,34,34,0.45)]"
                  style={{
                    background: "#cc2222",
                    color: "#ede8e3",
                    fontFamily: "DM Mono, monospace",
                    clipPath: "polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)",
                  }}
                >
                  VIEW PROJECTS
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs tracking-[0.15em] border transition-all duration-300 hover:border-[#cc2222] hover:text-[#ede8e3]"
                  style={{
                    borderColor: "#2a1818",
                    color: "#7a6e6e",
                    fontFamily: "DM Mono, monospace",
                  }}
                >
                  DOWNLOAD CV
                </Link>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-5 mt-8 animate-fade-slide-up delay-500">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a3f3f] hover:text-[#cc2222] transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a3f3f] hover:text-[#cc2222] transition-colors duration-200"
                  aria-label="Discord"
                >
                  <FaDiscord size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a3f3f] hover:text-[#cc2222] transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>

            {/* RIGHT — Geometric decoration */}
            <div className="hidden lg:flex flex-col items-center gap-4 animate-fade-slide-left delay-300">
              <div className="relative w-48 h-64">
                <div
                  className="absolute inset-0 border"
                  style={{
                    borderColor: "rgba(204,34,34,0.25)",
                    transform: "rotate(8deg)",
                  }}
                />
                <div
                  className="absolute inset-3 border flex items-center justify-center"
                  style={{
                    borderColor: "rgba(204,34,34,0.4)",
                    background: "rgba(204,34,34,0.06)",
                  }}
                >
                  <Gamepad2 size={48} style={{ color: "rgba(204,34,34,0.5)" }} />
                </div>
                <div
                  className="absolute top-0 right-0 w-5 h-5 border-t border-r"
                  style={{ borderColor: "#cc2222", transform: "translate(4px,-4px)" }}
                />
                <div
                  className="absolute bottom-0 left-0 w-5 h-5 border-b border-l"
                  style={{ borderColor: "#cc2222", transform: "translate(-4px,4px)" }}
                />
              </div>
              <div
                className="text-[10px] tracking-[0.35em] text-[#4a3f3f]"
                style={{
                  fontFamily: "DM Mono, monospace",
                  writingMode: "vertical-rl",
                }}
              >
                INTERACTIVE · EXPERIENCES
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t" style={{ borderColor: "#2a1818" }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-5 px-4 flex flex-col gap-1 animate-fade-slide-up ${
                    i < 3 ? "md:border-r" : ""
                  }`}
                  style={{
                    borderColor: "#2a1818",
                    animationDelay: `${0.5 + i * 0.1}s`,
                  }}
                >
                  <span
                    className="text-3xl"
                    style={{ fontFamily: "Bebas Neue, sans-serif", color: "#cc2222" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[10px] tracking-[0.2em] text-[#4a3f3f]"
                    style={{ fontFamily: "DM Mono, monospace" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED GAMES ──────────────────────────────── */}
      <section className="py-24 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-px" style={{ background: "#cc2222" }} />
              <span
                className="text-[10px] tracking-[0.3em] text-[#cc2222]"
                style={{ fontFamily: "DM Mono, monospace" }}
              >
                SELECTED WORK
              </span>
            </div>
            <h2
              className="text-5xl"
              style={{ fontFamily: "Bebas Neue, sans-serif", color: "#ede8e3" }}
            >
              FEATURED GAMES
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-xs tracking-[0.15em] text-[#7a6e6e] hover:text-[#cc2222] transition-colors duration-200"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            ALL PROJECTS <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project, i) => (
            <Link href={`/projects/${project.slug}`} key={project.id}>
              <div
                className="card-hover group relative flex flex-col border p-6 cursor-pointer h-full"
                style={{ background: "#111", borderColor: "#2a1818" }}
              >
                {/* Project number */}
                <span
                  className="absolute top-4 right-5 text-4xl opacity-10"
                  style={{ fontFamily: "Bebas Neue, sans-serif", color: "#cc2222" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <h3
                  className="text-2xl mb-3 group-hover:text-[#cc2222] transition-colors duration-200"
                  style={{ fontFamily: "Bebas Neue, sans-serif", color: "#ede8e3" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs leading-relaxed text-[#7a6e6e] flex-1"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  {project.description}
                </p>

                <div className="flex items-center gap-2 mt-5 text-[#cc2222]">
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span
                    className="text-[10px] tracking-[0.15em]"
                    style={{ fontFamily: "DM Mono, monospace" }}
                  >
                    VIEW PROJECT
                  </span>
                </div>

                {/* Bottom border reveal */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "#cc2222" }}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────── */}
      <section
        className="py-20 border-y"
        style={{ borderColor: "#2a1818", background: "#0e0e0e" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-5 h-px" style={{ background: "#cc2222" }} />
            <span
              className="text-[10px] tracking-[0.3em] text-[#cc2222]"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              TECHNICAL SKILLS
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group px-4 py-2 border cursor-default transition-all duration-200 hover:border-[#cc2222] hover:bg-[#1a0e0e]"
                style={{ borderColor: "#2a1818", background: "#131313" }}
              >
                <span
                  className="text-[11px] tracking-[0.18em] text-[#7a6e6e] group-hover:text-[#cc2222] transition-colors duration-200"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#0b0b0b" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(204,34,34,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center relative">
          <h2
            className="text-[clamp(40px,7vw,96px)] leading-[0.9] mb-6"
            style={{ fontFamily: "Bebas Neue, sans-serif", color: "#ede8e3" }}
          >
            READY TO BUILD
            <br />
            <span style={{ color: "#cc2222" }}>SOMETHING EPIC?</span>
          </h2>

          <p
            className="text-sm text-[#7a6e6e] mb-10 max-w-md mx-auto"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            Open to freelance projects, studio collaborations, and full-time
            opportunities.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.15em] font-medium transition-all duration-300 hover:shadow-[0_0_32px_rgba(204,34,34,0.5)]"
            style={{
              background: "#cc2222",
              color: "#ede8e3",
              fontFamily: "DM Mono, monospace",
              clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
            }}
          >
            GET IN TOUCH
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <Footer right="INDIE GAME DEVELOPER" />
    </main>
  );
}
