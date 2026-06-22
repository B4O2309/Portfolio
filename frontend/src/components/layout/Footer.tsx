import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

function ItchIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.328 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.945.795a2.8 2.8 0 0 1-1.94-.788l-.005-.005a2.84 2.84 0 0 1-.475-.604c-.16.282-.373.526-.622.72-.428.33-.963.526-1.543.526-.31 0-.61-.054-.89-.158-.085.992-.124 1.94-.138 2.624v.005l-.001.062c-.005.295-.008.408-.008.97 0 .564.018.97.018 1.227.04 2.083.276 4.16.483 5.142.146.69.667 1.227 1.343 1.395 1.787.443 5.13.633 8.69.633s6.91-.19 8.694-.633a1.83 1.83 0 0 0 1.34-1.395c.208-.984.443-3.06.483-5.142v-.005c.005-.257.022-.663.022-1.227 0-.563-.004-.676-.008-.97v-.058c-.015-.685-.054-1.638-.14-2.633a2.79 2.79 0 0 1-.89.16 2.48 2.48 0 0 1-1.542-.526 2.45 2.45 0 0 1-.624-.72 2.84 2.84 0 0 1-.476.605l-.004.005a2.8 2.8 0 0 1-1.94.788 2.79 2.79 0 0 1-1.943-.795 2.74 2.74 0 0 1-.47-.602 2.71 2.71 0 0 1-.466.602c-.5.49-1.19.795-1.943.795-.027 0-.054-.002-.08-.003h-.008c-.026.001-.053.003-.08.003-.755 0-1.444-.305-1.943-.795a2.71 2.71 0 0 1-.467-.602zm-2.985 3.583v.005c.78 0 1.47.452 1.84 1.142.37-.69 1.057-1.142 1.835-1.142 1.142 0 2.13.97 2.13 2.187 0 1.793-2.13 3.467-3.967 3.467s-3.972-1.674-3.972-3.467c0-1.218.988-2.187 2.13-2.187z"/>
    </svg>
  );
}

interface FooterProps {
  maxWidth?: string;
}

export function Footer({ maxWidth = "max-w-6xl" }: FooterProps) {
  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: "var(--border-md)", background: "var(--bg-2)" }}
    >
      <div className={`${maxWidth} mx-auto px-6 lg:px-12`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-7 h-7 flex items-center justify-center text-xs font-bold"
                style={{
                  background: "var(--primary)",
                  color: "var(--bg)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  borderRadius: "2px",
                }}
              >
                GB
              </div>
              <span
                className="text-xs tracking-[0.15em]"
                style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
              >
                NGUYEN HOANG GIA BAO
              </span>
            </div>
            <p
              className="text-[11px] mt-3"
              style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
            >
              © 2026 · Game Developer · Ho Chi Minh City, VN
            </p>
          </div>

          {/* Right: links + socials */}
          <div className="flex flex-col items-start sm:items-end gap-4">
            <nav className="flex items-center gap-5">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/blog", label: "Blog" },
                { href: "/resume", label: "Resume" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[11px] tracking-[0.1em] transition-colors hover:text-[var(--primary)]"
                  style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              {[
                { href: "https://github.com/B4O2309", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/nguyễn-hoàng-gia-bảo-undefined-3727523ab/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:bao.nhgia05@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="transition-colors hover:text-[var(--primary)]"
                  style={{ color: "var(--text-3)" }}
                >
                  <Icon size={15} />
                </a>
              ))}
              <a
                href="https://b4o2309.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="itch.io"
                title="b4o2309 on itch.io"
                className="transition-colors hover:text-[var(--primary)]"
                style={{ color: "var(--text-3)" }}
              >
                <ItchIcon size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
