"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Users,
  Calendar,
  Clock,
  Zap,
  Gamepad2,
  Play,
} from "lucide-react";
import { marked } from "marked";
import { Footer } from "@/components/layout/Footer";
import { Tag } from "@/components/ui/Tag";
import { MediaGallery } from "@/components/MediaGallery";
import { MediaModal } from "@/components/MediaModal";
import type { Project } from "@/types";

interface Props {
  project: Project;
}

export function ProjectDetailClient({ project }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const isWeb = project.category === "web";
  const accent = isWeb ? "var(--web)" : "var(--red)";
  const accentDim = isWeb ? "rgba(255,122,0,0.07)" : "rgba(229,25,44,0.07)";
  const accentBorder = isWeb ? "rgba(255,122,0,0.28)" : "rgba(229,25,44,0.4)";

  const html = marked.parse(project.content, { async: false }) as string;
  const media = project.media ?? [];
  const imageCount = media.filter((m) => m.type === "image").length;
  const videoCount = media.filter((m) => m.type === "video").length;

  return (
    <main className="min-h-screen pt-[60px]">
      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <div
        className="relative border-b py-10 line-grid overflow-hidden"
        style={{ borderColor: "var(--border-md)" }}
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top right, ${accentDim.replace("0.07", "0.12")} 0%, transparent 60%)`,
          }}
        />

        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Back + category row */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-[11px] tracking-[0.15em] font-bold transition-colors hover:text-[var(--red)]"
              style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
            >
              <ArrowLeft size={12} /> PROJECTS
            </Link>
            <span
              className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] tracking-[0.15em] font-bold border"
              style={{
                background: accentDim,
                borderColor: accentBorder,
                color: accent,
                fontFamily: "var(--font-mono)",
              }}
            >
              {isWeb ? <Zap size={10} /> : <Gamepad2 size={10} />}
              {isWeb ? "WEB APPLICATION" : "GAME"}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-[clamp(40px,7vw,96px)] leading-[0.88] mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            {project.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-5 flex-wrap">
            {[
              { icon: Zap, value: project.role },
              { icon: Users, value: project.team },
              { icon: Calendar, value: project.year },
              { icon: Clock, value: project.duration },
            ].map(({ icon: Icon, value }) =>
              value ? (
                <span
                  key={value}
                  className="flex items-center gap-1.5 text-[11px] tracking-[0.08em]"
                  style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
                >
                  <Icon size={11} style={{ color: accent }} /> {value}
                </span>
              ) : null
            )}
            {media.length > 0 && (
              <button
                onClick={() => setLightboxOpen(true)}
                className="flex items-center gap-3 ml-auto text-[10px] tracking-[0.1em] border px-3 py-1.5 transition-all duration-200 hover:border-[var(--red)] hover:text-[var(--red)]"
                style={{
                  color: "var(--text-3)",
                  fontFamily: "var(--font-mono)",
                  borderColor: "var(--border-md)",
                  background: "var(--bg-card)",
                }}
              >
                {imageCount > 0 && <span>📸 {imageCount}</span>}
                {videoCount > 0 && <span style={{ color: "var(--red)" }}>▶ {videoCount}</span>}
                OPEN GALLERY
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── MEDIA GALLERY ───────────────────────────────── */}
      {media.length > 0 && (
        <div
          className="border-b"
          style={{ background: "#000", borderColor: "var(--border-md)" }}
        >
          <div className="max-w-6xl mx-auto">
            <MediaGallery media={media} title={project.title} />
          </div>
        </div>
      )}

      {/* ── CONTENT AREA ────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          {/* LEFT — Description + markdown */}
          <div>
            <p
              className="text-[14px] leading-[1.9] mb-8"
              style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag) => (
                <Tag key={tag} variant={isWeb ? "web" : "game"}>{tag}</Tag>
              ))}
            </div>

            <div
              className="w-full h-px mb-10"
              style={{
                background: `linear-gradient(to right, ${accent}, transparent)`,
                opacity: 0.35,
              }}
            />

            <div
              className="blog-content text-[13px]"
              style={{ fontFamily: "var(--font-mono)" }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          {/* RIGHT — Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24">
            {/* Project info */}
            <div
              className="p-6 border"
              style={{ background: "var(--bg-card)", borderColor: accentBorder }}
            >
              <h3
                className="text-lg mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)", fontWeight: 700 }}
              >
                Project Info
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Zap, label: "Role", value: project.role },
                  { icon: Users, label: "Team", value: project.team },
                  { icon: Calendar, label: "Year", value: project.year },
                  { icon: Clock, label: "Duration", value: project.duration },
                ].map(({ icon: Icon, label, value }) =>
                  value ? (
                    <div key={label} className="flex items-start gap-3">
                      <Icon size={13} style={{ color: accent, marginTop: 1, flexShrink: 0 }} />
                      <div>
                        <p
                          className="text-[9px] tracking-[0.22em] mb-0.5 font-bold"
                          style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                        >
                          {label.toUpperCase()}
                        </p>
                        <p className="text-[12px]" style={{ color: "var(--text)", fontFamily: "var(--font-mono)" }}>
                          {value}
                        </p>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>

            {/* Media summary */}
            {media.length > 0 && (
              <button
                onClick={() => setLightboxOpen(true)}
                className="w-full p-5 border text-center transition-all duration-200 hover:border-[var(--red)]"
                style={{ background: "var(--bg-card)", borderColor: "var(--border-md)" }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] mb-3 font-bold"
                  style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                >
                  MEDIA GALLERY
                </p>
                <div className="flex items-center justify-center gap-5">
                  {imageCount > 0 && (
                    <div>
                      <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                        {imageCount}
                      </p>
                      <p className="text-[9px] tracking-[0.15em]" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
                        PHOTO{imageCount > 1 ? "S" : ""}
                      </p>
                    </div>
                  )}
                  {imageCount > 0 && videoCount > 0 && (
                    <div className="w-px h-8" style={{ background: "var(--border-md)" }} />
                  )}
                  {videoCount > 0 && (
                    <div>
                      <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--red)" }}>
                        {videoCount}
                      </p>
                      <p className="text-[9px] tracking-[0.15em]" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
                        VIDEO{videoCount > 1 ? "S" : ""}
                      </p>
                    </div>
                  )}
                </div>
                <p className="mt-3 text-[10px] tracking-[0.12em]" style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}>
                  ↑ CLICK TO OPEN LIGHTBOX
                </p>
              </button>
            )}

            {/* Links */}
            <div className="space-y-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs tracking-[0.12em] font-bold border transition-all duration-200 hover:border-[var(--red)] hover:text-[var(--red)]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-2)",
                    borderColor: "var(--border-md)",
                    background: "var(--bg-card)",
                  }}
                >
                  <Github size={13} /> VIEW SOURCE CODE
                </a>
              ) : (
                <div
                  className="flex items-start gap-2.5 w-full px-3.5 py-3 border"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg-card)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <Github size={12} style={{ color: "var(--text-3)", flexShrink: 0, marginTop: 1 }} />
                  <p className="text-[10px] leading-[1.6]" style={{ color: "var(--text-3)" }}>
                    {project.category === "game"
                    ? "Private repo — contains licensed assets that cannot be redistributed publicly."
                    : "Private Repo"}
                  </p>
                </div>
              )}
              {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 text-xs tracking-[0.12em] font-bold transition-all duration-200 hover:opacity-90"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--bg)",
                      background: accent,
                    }}
                  >
                    <ExternalLink size={13} />
                    {isWeb ? "VIEW LIVE DEMO" : "PLAY GAME"}
                  </a>
              )}
            </div>

            <Link
              href="/projects"
              className="flex items-center gap-2 text-[11px] tracking-[0.1em] font-bold transition-colors hover:text-[var(--red)]"
              style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
            >
              <ArrowLeft size={11} /> All Projects
            </Link>
          </aside>
        </div>
      </div>

      {/* Fullscreen lightbox from sidebar button */}
      {media.length > 0 && (
        <MediaModal
          media={media}
          title={project.title}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      <Footer />
    </main>
  );
}
