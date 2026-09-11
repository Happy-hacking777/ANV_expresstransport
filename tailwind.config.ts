import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14130F",
        paper: "#FAFAF8",
        surface: "#F1EFE9",
        line: "#E1DDD3",
        muted: "#5B5750",
        accent: {
          DEFAULT: "#C2410C",
          dark: "#8F3009",
          tint: "#FBE4D5",
        },
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "-apple-system", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-display)", "var(--font-archivo)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        sm: "3px",
        DEFAULT: "6px",
      },
    },
  },
  plugins: [],
};

export default config;
