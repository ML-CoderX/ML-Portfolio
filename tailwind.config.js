/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon': {
          blue: '#00f3ff',
          purple: '#7b00ff',
          pink: '#ff00f7',
        },
        'cyber': {
          dark: '#0a0a0f',
          darker: '#050507',
          light: '#1a1a2f',
        }
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
        'tech': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff',
            boxShadow: '0 0 10px #00f3ff'
          },
          '100%': { 
            textShadow: '0 0 20px #7b00ff, 0 0 30px #7b00ff',
            boxShadow: '0 0 20px #7b00ff'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, #1a1a2f 1px, transparent 1px), linear-gradient(to bottom, #1a1a2f 1px, transparent 1px)',
        'cyber-dots': 'radial-gradient(circle, #1a1a2f 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber-grid': '4rem 4rem',
        'cyber-dots': '2rem 2rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 