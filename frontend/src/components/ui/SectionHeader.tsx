interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div
      className="relative border-b py-16 grid-bg overflow-hidden"
      style={{ borderColor: "#2a1818" }}
    >
      {/* Red corner glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(204,34,34,0.14) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-5 h-px" style={{ background: "#cc2222" }} />
          <span
            className="text-[10px] tracking-[0.3em] text-[#cc2222]"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            {eyebrow}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-[clamp(48px,8vw,100px)] leading-[0.9] mb-4"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            color: "#ede8e3",
          }}
        >
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p
            className="text-sm text-[#7a6e6e] max-w-lg"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
