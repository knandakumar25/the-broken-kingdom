/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0a0f',
        'royal-purple': '#3a0a4d',
        'decayed-gold': '#c5a059',
        'blood-red': '#660000',
        'ghost-white': '#d1d1d1',
      },
      fontFamily: {
        gothic: ['"Pirata One"', 'cursive'],
        cinzel: ['"Cinzel"', 'serif'],
        serif: ['"Crimson Text"', 'serif'],
      },
      animation: {
        'tremble': 'tremble 0.2s infinite alternate',
        'gradient-bg': 'gradientBG 15s ease infinite',
      },
      keyframes: {
        tremble: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(1px, 1px)' },
        },
        gradientBG: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        }
      }
    },
  },
  plugins: [],
}
