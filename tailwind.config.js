/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF8FA",
        surface: "#FFFFFF",
        "surface-soft": "#F5EFF4",
        "surface-glass": "rgba(255, 255, 255, 0.78)",
        royal: {
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F472B6",
          400: "#E11D48",
          500: "#DB2777",
          600: "#BE185D", // Rich Royal Dark Pink (Core)
          700: "#9D174D", // Deep Velvet Royal Pink
          800: "#831843", // Luxurious Dark Magenta Wine
          900: "#500724", // Ultra Deep Velvet
          pink: "#BE185D",
          vibrant: "#DB2777",
          deep: "#9D174D",
          wine: "#831843",
          light: "#FDF2F8",
          blush: "#FCE7F3"
        },
        futuristic: {
          dark: "#140914",
          text: "#19111E",
          muted: "#665C6B",
          border: "rgba(190, 24, 93, 0.18)"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(190, 24, 93, 0.08)',
        'glass-hover': '0 20px 48px -12px rgba(190, 24, 93, 0.25)',
        'glow-royal': '0 0 35px -5px rgba(190, 24, 93, 0.4)',
        'glow-soft': '0 0 25px -3px rgba(219, 39, 119, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(190, 24, 93, 0.12)',
        'bento': '0 10px 30px -10px rgba(25, 17, 30, 0.06)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.04)' },
        }
      }
    },
  },
  plugins: [],
}
