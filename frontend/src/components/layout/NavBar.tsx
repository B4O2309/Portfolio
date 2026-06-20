"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", exact: true },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(6, 8, 14, 0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(148,163,184,0.07)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Home">
          <div
            className="w-9 h-9 flex items-center justify-center text-sm font-bold transition-all duration-300"
            style={{
              background: "var(--primary)",
              color: "var(--bg)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              borderRadius: "2px",
            }}
          >
            GB
          </div>
          <span
            className="hidden sm:block text-xs tracking-[0.15em] transition-colors duration-300 group-hover:text-[var(--text)]"
            style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
          >
            GIA BAO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href, link.exact);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-xs tracking-[0.1em] transition-colors duration-200 rounded-sm"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: active ? "var(--primary)" : "var(--text-2)",
                  background: active ? "var(--primary-dim)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="ml-4 px-5 py-2 text-xs tracking-[0.12em] font-medium transition-all duration-200 hover:opacity-90"
            style={{
              background: "var(--primary)",
              color: "var(--bg)",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              borderRadius: "2px",
            }}
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "var(--text-2)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ background: "var(--bg-2)", borderColor: "var(--border-md)" }}
        >
          {navLinks.map((link) => {
            const active = isActive(link.href, link.exact);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-4 text-sm tracking-[0.1em] border-b transition-colors"
                style={{
                  fontFamily: "var(--font-mono)",
                  borderColor: "var(--border)",
                  color: active ? "var(--primary)" : "var(--text-2)",
                  background: active ? "var(--primary-dim)" : "transparent",
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="p-4">
            <Link
              href="/contact"
              className="block text-center py-3 text-xs tracking-[0.12em] font-semibold"
              style={{
                background: "var(--primary)",
                color: "var(--bg)",
                fontFamily: "var(--font-mono)",
                borderRadius: "2px",
              }}
              onClick={() => setOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
