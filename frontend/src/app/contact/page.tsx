"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail, Gamepad2, MapPin, Clock } from "lucide-react";
import { submitContact } from "@/lib/api";
import { Footer } from "@/components/layout/Footer";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

const contactInfo = [
  { icon: Mail, label: "Email", value: "bao.nhgia05@gmail.com", href: "mailto:bao.nhgia05@gmail.com" },
  { icon: Gamepad2, label: "itch.io", value: "b4o2309.itch.io", href: "https://b4o2309.itch.io" },
  { icon: MapPin, label: "Location", value: "Ho Chi Minh City, Vietnam", href: null },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function fieldStyle(name: string) {
    const isFocused = focused === name;
    return {
      background: isFocused ? "var(--bg-card-h)" : "var(--bg-card)",
      borderColor: isFocused ? "var(--primary)" : "var(--border-md)",
      color: "var(--text)",
      fontFamily: "var(--font-mono)",
      fontSize: "13px",
      outline: "none",
      transition: "border-color 0.2s ease, background 0.2s ease",
      borderRadius: "2px",
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await submitContact(form);
      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  if (submitted) {
    return (
      <main className="min-h-screen pt-[60px] flex items-center justify-center">
        <div className="text-center max-w-sm mx-auto px-6">
          <div
            className="w-16 h-16 flex items-center justify-center mx-auto mb-6 border"
            style={{
              background: "var(--web-dim)",
              borderColor: "rgba(52,211,153,0.3)",
              borderRadius: "2px",
            }}
          >
            <CheckCircle size={28} style={{ color: "var(--web)" }} />
          </div>
          <h2
            className="text-4xl mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Message Sent!
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
          >
            Thanks for reaching out. I&apos;ll review your message and get back
            to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-7 py-3 text-xs tracking-[0.12em] border transition-all duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            style={{
              fontFamily: "var(--font-mono)",
              borderColor: "var(--border-md)",
              color: "var(--text-2)",
              borderRadius: "2px",
            }}
          >
            SEND ANOTHER
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-[60px]">
      {/* Header */}
      <div
        className="relative border-b py-20 line-grid overflow-hidden"
        style={{ borderColor: "var(--border-md)" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(56,189,248,0.09) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "var(--primary)" }} />
            <span
              className="text-[10px] tracking-[0.3em]"
              style={{ color: "var(--primary)", fontFamily: "var(--font-mono)" }}
            >
              GET IN TOUCH
            </span>
          </div>
          <h1
            className="text-[clamp(52px,8vw,108px)] leading-[0.88] mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Contact
          </h1>
          <p
            className="text-sm max-w-lg leading-relaxed"
            style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
          >
            Whether you have a project in mind, a job opportunity, or just want to talk
            about web architecture or game design — I&apos;m always happy to connect.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Left — Contact details */}
          <aside className="space-y-8">
            <div>
              <h3
                className="text-lg mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Ways to Reach Me
              </h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon size={14} style={{ color: "var(--primary)", marginTop: 1, flexShrink: 0 }} />
                    <div>
                      <p
                        className="text-[9px] tracking-[0.2em] mb-0.5"
                        style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                      >
                        {label.toUpperCase()}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-xs transition-colors hover:text-[var(--primary)]"
                          style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p
                          className="text-xs"
                          style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="pt-6 border-t"
              style={{ borderColor: "var(--border-md)" }}
            >
              <p
                className="text-[10px] tracking-[0.18em] mb-2"
                style={{ color: "var(--web)", fontFamily: "var(--font-mono)" }}
              >
                AVAILABILITY
              </p>
              <p
                className="text-[12px] leading-relaxed"
                style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}
              >
                Currently open to full-time roles and freelance projects. Happy to discuss
                remote-friendly opportunities worldwide.
              </p>
            </div>

            {/* Decorative card */}
            <div
              className="relative h-28 border overflow-hidden"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-md)",
                borderRadius: "2px",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(56,189,248,0.07) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute top-3 right-3 w-4 h-4 border-t border-r"
                style={{ borderColor: "var(--primary)" }}
              />
              <div
                className="absolute bottom-3 left-3 w-4 h-4 border-b border-l"
                style={{ borderColor: "var(--primary)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[10px] tracking-[0.25em] text-center"
                  style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                >
                  LET&apos;S BUILD
                  <br />
                  SOMETHING GREAT
                </span>
              </div>
            </div>
          </aside>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div
                className="px-4 py-3 border text-xs"
                style={{
                  borderColor: "rgba(248,113,113,0.4)",
                  background: "rgba(248,113,113,0.08)",
                  color: "#f87171",
                  fontFamily: "var(--font-mono)",
                  borderRadius: "2px",
                }}
              >
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-[10px] tracking-[0.18em] block"
                  style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="First Last"
                  className="w-full px-4 py-3 border"
                  style={fieldStyle("name")}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[10px] tracking-[0.18em] block"
                  style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border"
                  style={fieldStyle("email")}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-[10px] tracking-[0.18em] block"
                style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
              >
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry / Job opportunity / Collaboration..."
                className="w-full px-4 py-3 border"
                style={fieldStyle("subject")}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-[10px] tracking-[0.18em] block"
                style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={7}
                placeholder="Tell me about your project, opportunity, or idea..."
                className="w-full px-4 py-3 border resize-none"
                style={fieldStyle("message")}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.12em] font-semibold transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: "var(--primary)",
                color: "var(--bg)",
                fontFamily: "var(--font-mono)",
                borderRadius: "2px",
              }}
            >
              <Send size={13} />
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>

      <Footer maxWidth="max-w-6xl" />
    </main>
  );
}
