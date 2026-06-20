import { Download, MapPin, Calendar, GraduationCap, Gamepad2, Target, Wrench } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { Footer } from "@/components/layout/Footer";
import { mockEducation } from "@/lib/mockData";

export const metadata = {
  title: "Resume — Nguyen Hoang Gia Bao",
  description: "Game developer resume of Nguyen Hoang Gia Bao — Unity, C#, Photon Fusion.",
};

const gameSkills = ["Unity", "C#", "Photon Fusion", "Photon Voice", "2D", "3D", "NavMesh AI", "Animation State Machine", "URP"];
const toolSkills = ["Adobe Photoshop", "Adobe After Effects", "Adobe Audition", "Aseprite", "Figma", "GitHub"];

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-[60px]">
      {/* ── HEADER ──────────────────────────────────────── */}
      <div
        className="relative border-b py-20 line-grid overflow-hidden"
        style={{ borderColor: "var(--border-md)" }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(56,189,248,0.09) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px" style={{ background: "var(--primary)" }} />
                <span
                  className="text-[10px] tracking-[0.3em]"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-mono)" }}
                >
                  CAREER HISTORY
                </span>
              </div>
              <h1
                className="text-[clamp(52px,9vw,110px)] leading-[0.88] mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Resume
              </h1>
            </div>

            <a
              href="#"
              className="flex items-center gap-2 px-5 py-3 border text-[11px] tracking-[0.12em] transition-all duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)] mt-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-2)",
                borderColor: "var(--border-md)",
                borderRadius: "2px",
              }}
            >
              <Download size={12} /> DOWNLOAD PDF
            </a>
          </div>

          {/* Bio strip */}
          <div
            className="mt-8 pt-8 border-t"
            style={{ borderColor: "var(--border-md)" }}
          >
            <h2
              className="text-2xl mb-1"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Nguyen Hoang Gia Bao
            </h2>
            <p
              className="text-xs tracking-[0.12em] mb-4"
              style={{ color: "var(--primary)", fontFamily: "var(--font-mono)" }}
            >
              UNITY GAME DEVELOPER · HO CHI MINH CITY, VIETNAM
            </p>
            <p
              className="text-sm leading-[1.85] max-w-2xl"
              style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
            >
              Computing student at the University of Greenwich, currently completing a
              Game Programming diploma at VTC Academy. Shipped four Unity titles spanning 2D platformer,
              2D top-down ARPG, and first-person 3D co-op survival, implementing gameplay
              systems including NavMesh-driven wildlife AI, melee combat with hitbox
              timing, and authoritative multiplayer networking via Photon Fusion in a
              4-player co-op survival game. Seeking a game development internship or
              fresher role to contribute to shipped products in a professional team
              environment.
            </p>

            <div className="flex items-center gap-5 mt-4">
              <span
                className="flex items-center gap-1.5 text-[11px]"
                style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
              >
                <MapPin size={11} /> Ho Chi Minh City, Vietnam
              </span>
              <span
                className="flex items-center gap-1.5 text-[11px]"
                style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
              >
                bao.nhgia05@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">

        {/* ── SKILLS ──────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: "var(--primary)" }} />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Skills
            </h2>
          </div>

          <div
            className="p-6 border"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border-md)",
              borderRadius: "2px",
            }}
          >
            <p
              className="text-[10px] tracking-[0.25em] mb-4 flex items-center gap-2"
              style={{ color: "var(--game)", fontFamily: "var(--font-mono)" }}
            >
              <Gamepad2 size={10} /> GAME DEVELOPMENT
            </p>
            <div className="flex flex-wrap gap-2">
              {gameSkills.map((s) => (
                <Tag key={s} variant="game">{s}</Tag>
              ))}
            </div>
          </div>

          <div
            className="mt-6 p-6 border"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border-md)",
              borderRadius: "2px",
            }}
          >
            <p
              className="text-[10px] tracking-[0.25em] mb-4 flex items-center gap-2"
              style={{ color: "var(--tool)", fontFamily: "var(--font-mono)" }}
            >
              <Wrench size={10} /> TOOLS & PRODUCTION
            </p>
            <div className="flex flex-wrap gap-2">
              {toolSkills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 text-[11px] tracking-[0.06em] border transition-colors duration-200 hover:border-[var(--tool)] hover:text-[var(--tool)]"
                  style={{
                    background: "var(--tool-dim)",
                    borderColor: "rgba(201,150,63,0.18)",
                    color: "var(--text-2)",
                    fontFamily: "var(--font-mono)",
                    borderRadius: "2px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── GOALS ────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: "var(--primary)" }} />
            <Target size={16} style={{ color: "var(--primary)" }} />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Goals
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div
              className="p-7 border"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-md)",
                borderRadius: "2px",
              }}
            >
              <p
                className="text-[10px] tracking-[0.25em] mb-5"
                style={{ color: "var(--primary)", fontFamily: "var(--font-mono)" }}
              >
                SHORT-TERM
              </p>
              <ul className="space-y-3">
                {[
                  "Land an internship or fresher role at a game studio, contributing to a live title reaching real players",
                  "Deepen Unity and C# expertise in gameplay systems, AI, and networked multiplayer in a production environment",
                  "Apply skills built across solo and team projects — NavMesh AI, Photon Fusion, melee combat systems — to real shipped products",
                  "Grow from building things independently into a developer capable of shipping games as part of a team",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] leading-relaxed" style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}>
                    <span style={{ color: "var(--primary)", flexShrink: 0 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-7 border"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-md)",
                borderRadius: "2px",
              }}
            >
              <p
                className="text-[10px] tracking-[0.25em] mb-5"
                style={{ color: "var(--primary)", fontFamily: "var(--font-mono)" }}
              >
                LONG-TERM
              </p>
              <ul className="space-y-3">
                {[
                  "Ship a game reaching real players, built with polished gameplay systems and a world worth exploring",
                  "Grow into a senior gameplay programmer specialising in game feel, AI, and systems design",
                  "Lead development on an original title, either inside a studio or built independently",
                  "Keep making games leaving a lasting impression on the people who play them",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] leading-relaxed" style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}>
                    <span style={{ color: "var(--primary)", flexShrink: 0 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: "var(--primary)" }} />
            <Gamepad2 size={16} style={{ color: "var(--primary)" }} />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Projects
            </h2>
          </div>

          <div className="space-y-5">

            {/* Eden Isle */}
            <div
              className="border p-7"
              style={{ background: "var(--bg-card)", borderColor: "var(--border-md)", borderRadius: "2px" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <h3 className="text-xl" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                  Eden Isle
                </h3>
                <span className="text-[10px] tracking-[0.2em]" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
                  2026 · ~3 months (ongoing)
                </span>
              </div>
              <p className="text-[11px] mb-1" style={{ color: "var(--game)", fontFamily: "var(--font-mono)" }}>
                Game Developer · 3-person Team
              </p>
              <p className="text-[11px] mb-4" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
                Unity · C# · Photon Fusion · Photon Voice · 3D URP
              </p>
              <ul className="space-y-2.5">
                {[
                  "Built a first-person player controller covering walk, sprint, crouch, and jump with acceleration curves, networked across all 4 clients via Photon Fusion, with footstep sound emission scaled to movement speed to feed directly into the animal AI perception system.",
                  "Implemented 5 wildlife species (Wolf, Bear, Deer, Rabbit, Toucan) on a shared C# state-machine base (Wander → Suspect → Flee/Chase) structured so each species overrides only the behaviour it needs, with runtime day/night multipliers shifting vision range, hearing sensitivity, and activity patterns per-animal without duplicating state logic.",
                  "Solved the networked tree-fall problem by building a spatial-grid index for near-O(1) nearest-tree lookup across hundreds of terrain trees, spawning proxy mesh objects animated in sync on all clients from a single network tick, and designing a late-join snapshot letting players connecting mid-session see the world as-is with no animations replaying.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] leading-relaxed" style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}>
                    <span style={{ color: "var(--game)", flexShrink: 0, marginTop: 1 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The World Rift */}
            <div
              className="border p-7"
              style={{ background: "var(--bg-card)", borderColor: "var(--border-md)", borderRadius: "2px" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <h3 className="text-xl" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                  The World Rift: Shadow of Chaos
                </h3>
                <span className="text-[10px] tracking-[0.2em]" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
                  2025 · ~3 months
                </span>
              </div>
              <p className="text-[11px] mb-1" style={{ color: "var(--game)", fontFamily: "var(--font-mono)" }}>
                Game Developer & Designer · 2-person Team
              </p>
              <p className="text-[11px] mb-4" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
                Unity · C# · 2D Top-down ARPG
              </p>
              <ul className="space-y-2.5">
                {[
                  "Owned the entire non-combat progression loop by implementing shop buy/sell transaction logic, an NPC dialogue system with branching trees and boss cutscene hooks, and a chest system with randomised loot quality driving the gold economy across 4 distinct regions.",
                  "Wrote the main narrative and 2 branching endings, designed 3 boss encounters (Infernal Hydra, Darian, Sir Kael), and built all environment scenes for Elyndra Village, The Dungeon, and The Inner Abyss in Unity's tilemap system, freeing the one other team member to focus entirely on the combat and character controller systems.",
                  "Designed the Warrior class end-to-end: defined lore, visual direction, and all attack patterns (basic attack, parry/block, 3 active skills), then configured purchased VFX and SFX assets to match each skill's timing and impact feel, and designed the Warrior HUD covering HP/MP orbs, skill hotbar, and EXP bar.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] leading-relaxed" style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}>
                    <span style={{ color: "var(--game)", flexShrink: 0, marginTop: 1 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ashen's Blade */}
            <div
              className="border p-7"
              style={{ background: "var(--bg-card)", borderColor: "var(--border-md)", borderRadius: "2px" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <h3 className="text-xl" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                  Ashen&apos;s Blade
                </h3>
                <span className="text-[10px] tracking-[0.2em]" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
                  2025 · ~1 month
                </span>
              </div>
              <p className="text-[11px] mb-1" style={{ color: "var(--game)", fontFamily: "var(--font-mono)" }}>
                Solo Developer
              </p>
              <p className="text-[11px] mb-4" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
                Unity · C# · 2D Side-scrolling Platformer
              </p>
              <ul className="space-y-2.5">
                {[
                  "Shipped a complete 3-map, 3-boss 2D platformer solo in ~1 month, delivering a full game loop from Main Menu through boss fights to Win Screen using purchased asset store assets integrated and configured entirely in-engine.",
                  "Built a charge-based skill system (Dash, Heal, Power Burst) with independent cooldown timers and a composable HUD prefab reused unchanged across all 3 maps, reducing per-scene setup to asset swaps only.",
                  "Implemented multi-layer parallax scrolling and a click-driven NPC dialogue system as standalone C# components, both shipping unchanged across all 3 maps and 2 NPC interactions without modification.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] leading-relaxed" style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}>
                    <span style={{ color: "var(--game)", flexShrink: 0, marginTop: 1 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* ── EDUCATION ────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: "var(--primary)" }} />
            <GraduationCap size={16} style={{ color: "var(--primary)" }} />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Education
            </h2>
          </div>

          <div className="space-y-5">
            {mockEducation.map((edu) => (
              <div
                key={edu.id}
                className="group border p-7 transition-all duration-200 hover:border-[var(--border-hi)]"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-md)",
                  borderRadius: "2px",
                }}
              >
                <h3
                  className="text-xl mb-1 group-hover:text-[var(--primary)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {edu.school}
                </h3>
                <div
                  className="flex items-center gap-1.5 text-[11px] mb-4"
                  style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                >
                  <Calendar size={10} />
                  {edu.startDate} — {edu.endDate ?? "Present"}
                </div>
                <p
                  className="text-[12px] leading-relaxed mb-4"
                  style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
                >
                  {edu.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer maxWidth="max-w-5xl" />
    </main>
  );
}
