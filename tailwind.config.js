/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        midnight: "#05060a",
        deepBlue: "#0a0f1f",
        neonCyan: "#22d3ee",
        neonBlue: "#38bdf8",
        neonPurple: "#7c3aed",
        glass: "rgba(9, 12, 24, 0.55)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(34, 211, 238, 0.35)",
        glowStrong: "0 0 40px rgba(34, 211, 238, 0.55)",
        neon: "0 10px 40px rgba(56, 189, 248, 0.35)",
      },
      backgroundImage: {
        hero:
          "radial-gradient(1200px 600px at 10% 10%, rgba(34, 211, 238, 0.18), transparent 55%), radial-gradient(900px 500px at 90% 20%, rgba(59, 130, 246, 0.18), transparent 55%), linear-gradient(135deg, #020617 0%, #0b1022 40%, #030712 100%)",
        glass:
          "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34, 211, 238, 0.35)" },
          "50%": { boxShadow: "0 0 40px rgba(34, 211, 238, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glowPulse 3.5s ease-in-out infinite",
        shimmer: "shimmer 12s linear infinite",
        fadeInUp: "fadeInUp 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};
