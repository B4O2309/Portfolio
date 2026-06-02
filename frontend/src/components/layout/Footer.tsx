interface FooterProps {
  maxWidth?: string;
  right?: React.ReactNode;
}

export function Footer({
  maxWidth = "max-w-6xl",
  right,
}: FooterProps) {
  return (
    <footer className="border-t py-8" style={{ borderColor: "#2a1818" }}>
      <div
        className={`${maxWidth} mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4`}
      >
        <span
          className="text-xs text-[#4a3f3f] tracking-[0.15em]"
          style={{ fontFamily: "DM Mono, monospace" }}
        >
          © 2026 NGUYEN HOANG GIA BAO — ALL RIGHTS RESERVED
        </span>
        {right && (
          <span
            className="text-xs text-[#4a3f3f] tracking-[0.12em]"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            {right}
          </span>
        )}
      </div>
    </footer>
  );
}
