import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Outer warm canvas — cream sitting around the rounded shell
        canvas: {
          DEFAULT: "#F4EFE6",
          deep: "#EBE3D4",
        },
        // Inner shell surface
        shell: {
          DEFAULT: "#FBFAF7",
          alt: "#F4F1EA",
          line: "#E8E2D4",
        },
        ink: {
          DEFAULT: "#0C0C0C",
          soft: "#1A1A1A",
          mute: "#3A3A37",
          quiet: "#737373",
          faint: "#A8A29A",
        },
        accent: {
          // Warm, restrained — not the Assemble electric blue.
          // This brand is operational consulting; we shift hue slightly
          // toward an editorial deep ink-blue/teal that pairs with cream.
          primary: "#1B2A36",
          ember: "#C8612C",
          sand: "#E4D9C2",
          mist: "#D4DCDD",
        },
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
        display: ["var(--font-heebo)", "system-ui", "sans-serif"],
        serif: ["var(--font-frank)", "Georgia", "serif"],
      },
      fontSize: {
        // Editorial scale — generous Hebrew rhythm
        "display-xl": ["clamp(3rem, 6.4vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.018em" }],
        "display-md": ["clamp(2rem, 3.4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.012em" }],
        "h1": ["clamp(2.25rem, 4vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.018em" }],
        "h2": ["clamp(1.75rem, 2.8vw, 2.5rem)", { lineHeight: "1.18", letterSpacing: "-0.012em" }],
        "h3": ["clamp(1.25rem, 1.6vw, 1.625rem)", { lineHeight: "1.3" }],
        "lede": ["clamp(1.125rem, 1.35vw, 1.375rem)", { lineHeight: "1.6" }],
        "body": ["1.0625rem", { lineHeight: "1.75" }],
        "small": ["0.9375rem", { lineHeight: "1.6" }],
        "eyebrow": ["0.78125rem", { lineHeight: "1.4", letterSpacing: "0.14em" }],
      },
      borderRadius: {
        sharp: "0",
        subtle: "4px",
        soft: "8px",
        rounded: "12px",
        pill: "16px",
        shell: "28px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(20, 16, 8, 0.06)",
        raised: "0 2px 10px rgba(20, 16, 8, 0.08)",
        elevated: "0 8px 28px rgba(20, 16, 8, 0.10)",
        floating: "0 18px 48px rgba(20, 16, 8, 0.14)",
        shell: "0 30px 80px rgba(40, 30, 16, 0.12), 0 4px 16px rgba(40, 30, 16, 0.05)",
      },
      maxWidth: {
        shell: "1440px",
        prose: "68ch",
      },
      letterSpacing: {
        eyebrow: "0.14em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        haze: {
          "0%, 100%": { opacity: "0.65" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
        drift: "drift 8s ease-in-out infinite",
        haze: "haze 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
