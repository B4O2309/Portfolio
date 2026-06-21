"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Zap, Gamepad2, Images, Play } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { MediaModal } from "@/components/MediaModal";
import type { Project } from "@/types";

interface Props {
  webProjects: Project[];
  gameProjects: Project[];
}

export function FeaturedProjectsTabs({ webProjects, gameProjects }: Props) {
  const [tab, setTab] = useState<"web" | "game">("game");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const projects = tab === "web" ? webProjects : gameProjects;
  const isWeb = tab === "web";

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex items-center gap-2 mb-10">
        {(["game", "web"] as const).map((t) => {
          const active = tab === t;
          const color = t === "web" ? "var(--web)" : "var(--red)";
          const dimBg = t === "web" ? "rgba(255,122,0,0.07)" : "rgba(229,25,44,0.07)";
          const borderColor = t === "web" ? "rgba(255,122,0,0.35)" : "rgba(229,25,44,0.45)";
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex items-center gap-2 px-6 py-2.5 text-xs tracking-[0.15em] font-bold border transition-all duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                background: active ? dimBg : "transparent",
                borderColor: active ? borderColor : "var(--border-md)",
                color: active ? color : "var(--text-3)",
              }}
            >
              {t === "web" ? <Zap size={11} /> : <Gamepad2 size={11} />}
              {t === "web" ? "WEB APPS" : "GAMES"}
            </button>
          );
        })}
        <div className="h-px flex-1" style={{ background: "var(--border-md)" }} />
        <Link
          href={`/projects?tab=${tab}`}
          className="flex items-center gap-1.5 text-[11px] tracking-[0.1em] transition-colors hover:text-[var(--red)]"
          style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
        >
          ALL {isWeb ? "WEB" : "GAME"} PROJECTS <ArrowRight size={11} />
        </Link>
      </div>

      {/* Empty state */}
      {projects.length === 0 && (
        <div
          className="flex flex-col items-center justify-center py-20 border"
          style={{ background: "var(--bg-card)", borderColor: "var(--border-md)" }}
        >
          <span className="text-4xl mb-4">{tab === "game" ? "🎮" : "⚡"}</span>
          <p
            className="text-sm tracking-[0.15em] font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Coming Soon
          </p>
          <p
            className="text-[11px] tracking-[0.1em]"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            {tab === "game" ? "Game projects will appear here." : "Web projects will appear here."}
          </p>
        </div>
      )}

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((project) => {
          const media = project.media ?? [];
          const imageCount = media.filter((m) => m.type === "image").length;
          const videoCount = media.filter((m) => m.type === "video").length;
          const accent = isWeb ? "var(--web)" : "var(--red)";
          const accentBg = isWeb ? "rgba(255,122,0,0.07)" : "rgba(229,25,44,0.07)";
          const accentBorder = isWeb ? "rgba(255,122,0,0.35)" : "rgba(229,25,44,0.45)";

          return (
            <article
              key={project.id}
              className={`card group flex flex-col h-full overflow-hidden ${isWeb ? "card-web" : "card-game"}`}
              style={project.featured ? {
                borderColor: "rgba(201,169,110,0.55)",
                boxShadow: "0 0 0 1px rgba(201,169,110,0.18), 0 4px 32px rgba(201,169,110,0.08)",
              } : undefined}
            >
              {/* Featured top bar */}
              {project.featured && (
                <div
                  className="h-[2px] w-full shrink-0"
                  style={{ background: "linear-gradient(to right, rgba(201,169,110,0.8), rgba(201,169,110,0.2), transparent)" }}
                />
              )}
              {/* Image with gallery trigger overlay */}
              <div className="relative h-44 overflow-hidden shrink-0" style={{ background: "var(--bg-2)" }}>
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(6,3,6,0.95) 100%)" }}
                    />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "var(--bg-2)" }}>
                    <span className="text-[9px] tracking-[0.3em]" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>NO PREVIEW</span>
                  </div>
                )}

                {/* Category badge + Featured badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span
                    className="flex items-center gap-1 px-2 py-1 text-[9px] tracking-[0.15em] font-bold border"
                    style={{
                      background: accentBg,
                      borderColor: accentBorder,
                      color: accent,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {isWeb ? <Zap size={8} /> : <Gamepad2 size={8} />}
                    {isWeb ? "WEB" : "GAME"}
                  </span>
                  {project.featured && (
                    <span
                      className="px-2 py-1 text-[9px] tracking-[0.15em] font-bold border"
                      style={{ background: "rgba(201,169,110,0.12)", borderColor: "rgba(201,169,110,0.5)", color: "var(--gold)", fontFamily: "var(--font-mono)" }}
                    >
                      ★ FEATURED
                    </span>
                  )}
                </div>

                {/* Gallery button — appears on hover if media exists */}
                {media.length > 0 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setModalProject(project);
                    }}
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-bold border opacity-0 group-hover:opacity-100 transition-all duration-200 hover:border-[var(--red)] hover:text-[var(--red)]"
                    style={{
                      background: "rgba(6,3,6,0.82)",
                      borderColor: "var(--border-md)",
                      color: "var(--text-2)",
                      fontFamily: "var(--font-mono)",
                      backdropFilter: "blur(4px)",
                    }}
                    title="View gallery"
                  >
                    <Images size={11} />
                    {imageCount > 0 && <span>{imageCount}</span>}
                    {videoCount > 0 && (
                      <>
                        <Play size={9} style={{ color: "var(--red)" }} />
                        <span style={{ color: "var(--red)" }}>{videoCount}</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag} variant={isWeb ? "web" : "game"}>{tag}</Tag>
                  ))}
                </div>

                <Link href={`/projects/${project.slug}`}>
                  <h3
                    className="text-2xl leading-tight mb-2 transition-colors duration-200 group-hover:text-[var(--red)]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>
                </Link>

                <p
                  className="text-[12px] leading-relaxed flex-1 mb-4"
                  style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
                >
                  {project.description.slice(0, 100)}…
                </p>

                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-3">
                    {project.github && <Github size={12} style={{ color: "var(--text-3)" }} />}
                    {project.liveUrl && <ExternalLink size={12} style={{ color: "var(--text-3)" }} />}
                    {project.year && (
                      <span
                        className="text-[10px] tracking-[0.1em]"
                        style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                      >
                        {project.year}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Quick gallery button in footer too */}
                    {media.length > 0 && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setModalProject(project);
                        }}
                        className="flex items-center gap-1 text-[10px] tracking-[0.08em] transition-colors hover:text-[var(--red)]"
                        style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                      >
                        <Images size={10} /> {media.length}
                      </button>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-1 text-[10px] tracking-[0.12em] font-bold transition-colors hover:text-[var(--red)]"
                      style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                    >
                      VIEW <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Media Modal (portal) */}
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
