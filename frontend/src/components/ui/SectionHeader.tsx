interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div
      className="relative border-b py-20 line-grid overflow-hidden"
      style={{ borderColor: "var(--border-md)" }}
    >
      {/* Primary glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(56,189,248,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ background: "var(--primary)" }} />
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "var(--primary)", fontFamily: "var(--font-mono)" }}
          >
            {eyebrow}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-[clamp(52px,8vw,108px)] leading-[0.92] mb-5"
          style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
        >
          {title}
        </h1>

        {description && (
          <p
            className="text-sm leading-relaxed max-w-xl"
            style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
