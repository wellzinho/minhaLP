/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* shadcn/ui semantic colors */
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          gradient: {
            start: "#FF3385",
            end: "#FF8C66",
          },
          pink: "#FF4D8D",
          magenta: "#FF3385",
          cyan: "#00D4FF",
          "cyan-bright": "#22D3EE",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        /* Custom theme (page backgrounds, surface, typography) */
        page: {
          primary: "#050505",
          secondary: "#0A0A0A",
        },
        surface: {
          card: "rgba(20, 20, 20, 0.8)",
          "card-border": "#1F1F23",
        },
        typography: {
          primary: "#FFFFFF",
          secondary: "#d4d4d4",
          muted: "#a3a3a3",
        },
        "border-subtle": "#1F1F23",
        "border-light": "rgba(255, 255, 255, 0.1)",
        "cimento-queimado": "#1e1e1e",
        "cimento-queimado-hover": "#252525",
      },
      fontFamily: {
        sans: ["Archivo", "Inter", "system-ui", "sans-serif"],
        archivo: ["Archivo", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "Consolas", "monospace"],
      },
      fontSize: {
        "hero": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-lg": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section": ["2.5rem", { letterSpacing: "-0.01em" }],
        "subsection": ["1.5rem"],
        "label": ["0.75rem", { letterSpacing: "0.05em" }],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        "section": "8rem",
        "section-lg": "10rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        card: "1.5rem",
        button: "9999px",
        "button-alt": "0.75rem",
      },
      boxShadow: {
        neon: "0 0 20px rgba(255, 51, 133, 0.3)",
        "neon-hover": "0 0 30px rgba(255, 51, 133, 0.4)",
        "neon-cyan": "0 0 20px rgba(0, 212, 255, 0.3)",
        "border-glow": "0 0 0 1px rgba(255, 255, 255, 0.15)",
      },
      backdropBlur: {
        glass: "12px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite 1s",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
