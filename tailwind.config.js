/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9FC",
        surface: "#FFFFFF",
        "surface-soft": "#F4F2F7",
        "surface-glass": "rgba(255, 255, 255, 0.72)",
        pastel: {
          50: "#FFF5F8",
          100: "#FFE4EE",
          200: "#FECDD6",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          pink: "#FFB3D1",
          lavender: "#E8D5FF",
          blush: "#FFE6F0",
          rose: "#FF85A2",
          accent: "#F472B6"
        },
        futuristic: {
          neon: "#FF2E93",
          cyan: "#38BDF8",
          purple: "#A855F7",
          dark: "#0F0C1B",
          text: "#181424",
          muted: "#6B6580",
          border: "rgba(244, 114, 182, 0.18)"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(244, 114, 182, 0.08)',
        'glass-hover': '0 20px 48px -12px rgba(244, 114, 182, 0.22)',
        'glow-pink': '0 0 35px -5px rgba(244, 114, 182, 0.35)',
        'glow-soft': '0 0 25px -3px rgba(255, 179, 209, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(244, 114, 182, 0.15)',
        'bento': '0 10px 30px -10px rgba(15, 12, 27, 0.05)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-x': 'gradientX 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientX: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
