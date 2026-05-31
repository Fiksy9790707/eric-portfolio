import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
      colors: {
        ink: "#0b0d10",
        panel: "#12161b",
        line: "rgba(216, 243, 220, 0.12)",
        mint: "#d8f3dc",
        cyan: "#5eead4",
        amber: "#f0c674",
        plum: "#b8a7ff",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
} satisfies Config;
