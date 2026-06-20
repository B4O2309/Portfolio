"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Zap, Gamepad2, LayoutGrid, Images, Play } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { MediaModal } from "@/components/MediaModal";
import type { Project } from "@/types";

interface Props {
  projects: Project[];
  initialTab: "web" | "game";
}

export function ProjectsGrid({ projects, initialTab }: Props) {
  const [tab, setTab] = useState<"web" | "game" | "all">(initialTab);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filtered =
    tab === "all" ? projects : projects.filter((p) => p.category === tab);

  const tabs = [
    { key: "web" as const,  label: "Web Apps",     icon: Zap,         color: "var(--web)",  bg: "rgba(255,122,0,0.07)",  border: "rgba(255,122,0,0.35)" },
    { key: "game" as const, label: "Games",         icon: Gamepad2,    color: "var(--red)",  bg: "rgba(229,25,44,0.07)",  border: "rgba(229,25,44,0.45)" },
    { key: "all" as const,  label: "All Projects",  icon: LayoutGrid,  color: "var(--text)", bg: "rgba(245,234,236,0.05)", border: "rgba(245,234,236,0.12)" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
      {/* Tab bar */}
      <div className="flex items-center gap-2 mb-12 pb-5 border-b" style={{ borderColor: "var(--border-md)" }}>
        {tabs.map(({ key, label, icon: Icon, color, bg, border }) => {
          const active = tab === key;
          const count = key === "all" ? projects.length : projects.filter((p) => p.category === key).length;
          return (
            <button
              key={key}
              onClick={() => setTab(key)}
              className="flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.1em] font-bold border transition-all duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                background: active ? bg : "transparent",
                borderColor: active ? border : "var(--border-md)",
                color: active ? color : "var(--text-3)",
                borderRadius: "1px",
              }}
            >
              <Icon size={11} />
              {label}
              <span
                className="px-1.5 py-0.5 text-[9px]"
                style={{
                  background: active ? "rgba(255,255,255,0.08)" : "var(--border)",
                  color: active ? color : "var(--text-3)",
                  borderRadius: "1px",
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div
          className="flex flex-col items-center justify-center py-24 border"
          style={{ background: "var(--bg-card)", borderColor: "var(--border-md)" }}
        >
          <span className="text-5xl mb-4">{tab === "game" ? "🎮" : "⚡"}</span>
          <p
            className="text-2xl mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Coming Soon
          </p>
          <p
            className="text-[11px] tracking-[0.1em]"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            More projects will be added here soon.
          </p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => {
          const isWeb = project.category === "web";
          const accent = isWeb ? "var(--web)" : "var(--red)";
          const accentBg = isWeb ? "rgba(255,122,0,0.07)" : "rgba(229,25,44,0.07)";
          const accentBorder = isWeb ? "rgba(255,122,0,0.35)" : "rgba(229,25,44,0.45)";

          return (
            <article
              key={project.id}
              className={`card group flex flex-col overflow-hidden ${isWeb ? "card-web" : "card-game"}`}
            >
              {/* Cover image */}
              <div className="relative h-52 overflow-hidden shrink-0" style={{ background: "var(--bg-2)" }}>
                <Link href={`/projects/${project.slug}`} className="block absolute inset-0">
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(6,3,6,0.94) 100%)" }}
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2" style={{ background: "var(--bg-2)" }}>
                      <span className="text-[9px] tracking-[0.3em]" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>NO PREVIEW</span>
                    </div>
                  )}
                </Link>

                {/* Category pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[9px] tracking-[0.15em] font-bold border"
                    style={{ background: accentBg, borderColor: accentBorder, color: accent, fontFamily: "var(--font-mono)" }}
                  >
                    {isWeb ? <Zap size={9} /> : <Gamepad2 size={9} />}
                    {isWeb ? "WEB APP" : "GAME"}
                  </span>
                </div>

                {/* Gallery button */}
                {(project.media ?? []).length > 0 && (
                  <button
                    onClick={() => setModalProject(project)}
                    className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-bold border opacity-0 group-hover:opacity-100 transition-all duration-200 hover:border-[var(--red)] hover:text-[var(--red)]"
                    style={{
                      background: "rgba(6,3,6,0.82)",
                      borderColor: "var(--border-md)",
                      color: "var(--text-2)",
                      fontFamily: "var(--font-mono)",
                      backdropFilter: "blur(4px)",
                    }}
                    title="Open gallery"
                  >
                    <Images size={11} />
                    {(project.media ?? []).filter(m => m.type === "image").length > 0 && (
                      <span>{(project.media ?? []).filter(m => m.type === "image").length}</span>
                    )}
                    {(project.media ?? []).filter(m => m.type === "video").length > 0 && (
                      <><Play size={9} style={{ color: "var(--red)" }} /><span style={{ color: "var(--red)" }}>{(project.media ?? []).filter(m => m.type === "video").length}</span></>
                    )}
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  {project.role && (
                    <span className="text-[10px] tracking-[0.1em]" style={{ color: accent, fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                      {project.role}
                    </span>
                  )}
                  {project.team && (
                    <span className="text-[10px]" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
                      · {project.team}
                    </span>
                  )}
                  {project.duration && (
                    <span className="text-[10px]" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
                      · {project.duration}
                    </span>
                  )}
                </div>

                <Link href={`/projects/${project.slug}`}>
                  <h2
                    className="text-[28px] leading-tight mb-3 transition-colors duration-200 group-hover:text-[var(--red)]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                  >
                    {project.title}
                  </h2>
                </Link>

                <p
                  className="text-[12px] leading-relaxed flex-1 mb-5"
                  style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <Tag key={tag} variant={isWeb ? "web" : "game"}>{tag}</Tag>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] tracking-[0.1em] transition-colors hover:text-[var(--red)]"
                      style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
                    >
                      <Github size={12} /> SOURCE
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] tracking-[0.1em] font-bold transition-colors hover:opacity-80"
                      style={{ color: accent, fontFamily: "var(--font-mono)" }}
                    >
                      <ExternalLink size={12} /> {isWeb ? "LIVE DEMO" : "PLAY"}
                    </a>
                  )}
                  <div className="flex-1" />
                  <div className="flex items-center gap-3">
                    {(project.media ?? []).length > 0 && (
                      <button
                        onClick={() => setModalProject(project)}
                        className="flex items-center gap-1 text-[10px] tracking-[0.08em] transition-colors hover:text-[var(--red)]"
                        style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                        title="Open gallery"
                      >
                        <Images size={10} /> {(project.media ?? []).length}
                      </button>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-1.5 text-[10px] tracking-[0.12em] font-bold transition-colors hover:text-[var(--red)]"
                      style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                    >
                      DETAILS <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Media Modal */}
      {modalProject && (
        <MediaModal
          media={modalProject.media ?? []}
          title={modalProject.title}
          isOpen={!!modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </div>
  );
}
