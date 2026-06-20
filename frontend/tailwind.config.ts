/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0b",
        foreground: "#ede8e3",
        primary: {
          DEFAULT: "#cc2222",
          foreground: "#ede8e3",
        },
        card: {
          DEFAULT: "#131313",
          foreground: "#ede8e3",
        },
        muted: {
          DEFAULT: "#1b1b1b",
          foreground: "#7a6e6e",
        },
        border: "#2a1818",
        input: "#1e1414",
        accent: {
          DEFAULT: "#2a1616",
          foreground: "#e03535",
        },
        secondary: {
          DEFAULT: "#1e1414",
          foreground: "#ede8e3",
        },
      },
      fontFamily: {
        mono: ["DM Mono", "Courier New", "monospace"],
        display: ["Bebas Neue", "Impact", "sans-serif"],
      },
      keyframes: {
        fadeSlideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeSlideLeft: {
          from: { opacity: "0", transform: "translateX(32px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        revealLine: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(204, 34, 34, 0.3)" },
          "50%": {
            boxShadow:
              "0 0 20px rgba(204, 34, 34, 0.25), 0 0 40px rgba(204, 34, 34, 0.1)",
          },
        },
        flickerIn: {
          "0%": { opacity: "0" },
          "10%": { opacity: "0.8" },
          "12%": { opacity: "0" },
          "20%": { opacity: "0.9" },
          "22%": { opacity: "0" },
          "35%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-slide-left":
          "fadeSlideLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "reveal-line": "revealLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        flicker: "flickerIn 0.9s steps(1) both",
      },
      animationDelay: {
        100: "0.1s",
        200: "0.2s",
        300: "0.3s",
        400: "0.4s",
        500: "0.5s",
        600: "0.6s",
        700: "0.7s",
        800: "0.8s",
        900: "0.9s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
