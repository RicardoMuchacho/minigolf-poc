import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          pink: "#FF10F0",
          blue: "#00F0FF",
          green: "#39FF14",
          purple: "#BF00FF",
          yellow: "#FFFF00",
          orange: "#FF6600",
        },
      },
      boxShadow: {
        'neon-pink': '0 0 5px #FF10F0, 0 0 20px #FF10F0, 0 0 40px #FF10F0',
        'neon-blue': '0 0 5px #00F0FF, 0 0 20px #00F0FF, 0 0 40px #00F0FF',
        'neon-green': '0 0 5px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14',
        'neon-purple': '0 0 5px #BF00FF, 0 0 20px #BF00FF, 0 0 40px #BF00FF',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
