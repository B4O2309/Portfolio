import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { formatDateShort } from "@/lib/utils";
import { mockBlogPosts } from "@/lib/mockData";

export const metadata = {
  title: "Blog — Nguyen Hoang Gia Bao",
  description: "Technical writing on web development, game dev, and the craft of building things.",
};

const readTimes: Record<string, string> = {
  "procedural-ocean-godot-4": "8 min",
  "monolith-to-microservices": "10 min",
  "goap-ai-game-enemies": "9 min",
  "web-devs-should-make-games": "6 min",
};

export default function BlogPage() {
  const featured = mockBlogPosts[0];
  const rest = mockBlogPosts.slice(1);

  return (
    <main className="min-h-screen pt-[60px]">
      <SectionHeader
        eyebrow="DEVLOG"
        title="Blog"
        description="Technical deep-dives, dev logs, and opinions on building web products and games. No filler — just things worth reading."
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16">
        {/* Featured post */}
        <div className="mb-10">
          <p
            className="text-[10px] tracking-[0.25em] mb-5"
            style={{ color: "var(--primary)", fontFamily: "var(--font-mono)" }}
          >
            LATEST POST
          </p>
          <Link href={`/blog/${featured.slug}`} className="block group">
            <div
              className="card p-8 border"
              style={{ borderColor: "var(--border-hi)" }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.map((tag) => (
                    <Tag key={tag} active>
                      {tag}
                    </Tag>
                  ))}
                </div>
                <div
                  className="flex items-center gap-1.5 text-[10px] shrink-0"
                  style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                >
                  <Calendar size={10} />
                  <time>{formatDateShort(featured.date)}</time>
                  {readTimes[featured.slug] && (
                    <span className="ml-1">· {readTimes[featured.slug]} read</span>
                  )}
                </div>
              </div>

              <h2
                className="text-3xl mb-3 group-hover:text-[var(--primary)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                {featured.title}
              </h2>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
              >
                {featured.summary}
              </p>
              <span
                className="flex items-center gap-2 text-[11px] tracking-[0.12em] transition-colors group-hover:text-[var(--primary)]"
                style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
              >
                READ ARTICLE <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-10"
          style={{ background: "var(--border-md)" }}
        />

        {/* Rest of posts */}
        <div className="space-y-4">
          {rest.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
              <div
                className="card border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <h2
                    className="text-lg mb-1 group-hover:text-[var(--primary)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-[12px] leading-relaxed"
                    style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
                  >
                    {post.summary.slice(0, 100)}…
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2 shrink-0">
                  <div
                    className="flex items-center gap-1.5 text-[10px]"
                    style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                  >
                    <Calendar size={10} />
                    <time>{formatDateShort(post.date)}</time>
                  </div>
                  {readTimes[post.slug] && (
                    <span
                      className="text-[10px]"
                      style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                    >
                      {readTimes[post.slug]} read
                    </span>
                  )}
                  <ArrowRight
                    size={13}
                    className="transition-colors duration-200 group-hover:text-[var(--primary)]"
                    style={{ color: "var(--text-3)" }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer maxWidth="max-w-5xl" />
    </main>
  );
}
