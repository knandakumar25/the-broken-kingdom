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
        
        // Stitch design system tokens
        "surface-container-highest": "#353534",
        "on-primary-container": "#4e3700",
        "obsidian-base": "#050505",
        "background": "#131313",
        "primary-fixed-dim": "#e9c176",
        "blood-lust": "#b00000",
        "surface-container-lowest": "#0e0e0e",
        "primary-container": "#c5a059",
        "inverse-surface": "#e5e2e1",
        "surface": "#131313",
        "on-tertiary-fixed-variant": "#304671",
        "tertiary-container": "#8fa5d6",
        "secondary": "#ffb4a8",
        "primary": "#e9c176",
        "inverse-on-surface": "#313030",
        "surface-container-low": "#1c1b1b",
        "secondary-fixed": "#ffdad4",
        "surface-dim": "#131313",
        "on-surface": "#e5e2e1",
        "error-container": "#93000a",
        "tertiary-fixed": "#d8e2ff",
        "error": "#ffb4ab",
        "secondary-container": "#920703",
        "primary-fixed": "#ffdea5",
        "on-secondary-container": "#ff9a8a",
        "on-primary-fixed": "#261900",
        "on-primary": "#412d00",
        "on-primary-fixed-variant": "#5d4201",
        "tertiary": "#b0c6f9",
        "on-error-container": "#ffdad6",
        "on-tertiary-fixed": "#001a41",
        "inverse-primary": "#775a19",
        "outline": "#9a8f80",
        "surface-container": "#201f1f",
        "on-secondary-fixed-variant": "#920703",
        "on-secondary-fixed": "#410000",
        "secondary-fixed-dim": "#ffb4a8",
        "on-tertiary-container": "#233a65",
        "outline-variant": "#4e4639",
        "surface-bright": "#3a3939",
        "on-secondary": "#690000",
        "on-background": "#e5e2e1",
        "on-tertiary": "#173059",
        "tertiary-fixed-dim": "#b0c6f9",
        "surface-variant": "#353534",
        "etched-gold": "#e2c285",
        "surface-tint": "#e9c176",
        "spectral-gray": "#9ca3af",
        "surface-container-high": "#2a2a2a",
        "on-error": "#690005",
        "on-surface-variant": "#d1c5b4"
      },
      fontFamily: {
        gothic: ['"Pirata One"', 'cursive'],
        cinzel: ['"Cinzel"', 'serif'],
        serif: ['"Crimson Text"', 'serif'],
        // Stitch design system fonts
        "display-lg": ["Cinzel", "serif"],
        "headline-md": ["Cinzel", "serif"],
        "display-lg-mobile": ["Cinzel", "serif"],
        "body-md": ["Source Serif 4", "serif"],
        "body-lg": ["Source Serif 4", "serif"],
        "label-caps": ["Work Sans", "sans-serif"]
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
