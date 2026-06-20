import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { marked } from "marked";
import { notFound } from "next/navigation";
import { Tag } from "@/components/ui/Tag";
import { Footer } from "@/components/layout/Footer";
import { formatDate } from "@/lib/utils";
import { mockBlogPosts, mockBlogContent } from "@/lib/mockData";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return mockBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = mockBlogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Nguyen Hoang Gia Bao`,
    description: post.summary,
  };
}

const readTimes: Record<string, string> = {
  "procedural-ocean-godot-4": "8 min",
  "monolith-to-microservices": "10 min",
  "goap-ai-game-enemies": "9 min",
  "web-devs-should-make-games": "6 min",
};

export default function BlogPostPage({ params }: Props) {
  const post = mockBlogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const rawContent = mockBlogContent[params.slug] ?? "";
  const html = marked(rawContent) as string;

  return (
    <main className="min-h-screen pt-[60px]">
      {/* Header */}
      <div
        className="relative border-b py-16 line-grid overflow-hidden"
        style={{ borderColor: "var(--border-md)" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(56,189,248,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] mb-8 transition-colors hover:text-[var(--primary)]"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            <ArrowLeft size={11} /> BACK TO BLOG
          </Link>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.map((tag) => (
              <Tag key={tag} active>
                {tag}
              </Tag>
            ))}
          </div>

          <h1
            className="text-[clamp(32px,6vw,72px)] leading-[0.92] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            {post.title}
          </h1>

          <p
            className="text-sm leading-relaxed mb-6 max-w-xl"
            style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
          >
            {post.summary}
          </p>

          <div
            className="flex items-center gap-5 text-[10px] tracking-[0.1em] flex-wrap"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            <span className="flex items-center gap-1.5">
              <Calendar size={11} />
              <time>{formatDate(post.date)}</time>
            </span>
            <span style={{ color: "var(--border-md)" }}>—</span>
            <span>{post.author}</span>
            {readTimes[params.slug] && (
              <>
                <span style={{ color: "var(--border-md)" }}>—</span>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} />
                  {readTimes[params.slug]} read
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Divider accent */}
      <div
        className="h-px"
        style={{
          background: "linear-gradient(to right, var(--primary), transparent 60%)",
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-16">
        <div
          className="text-sm leading-[1.9] space-y-4 blog-content"
          style={{ fontFamily: "var(--font-mono)" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>

      {/* Footer nav */}
      <div
        className="border-t py-8"
        style={{ borderColor: "var(--border-md)" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[11px] tracking-[0.12em] transition-colors hover:text-[var(--primary)]"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            <ArrowLeft size={11} /> ALL POSTS
          </Link>
          <span
            className="text-[10px] tracking-[0.1em]"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            NGUYEN HOANG GIA BAO · 2025
          </span>
        </div>
      </div>

      <Footer maxWidth="max-w-3xl" />
    </main>
  );
}
