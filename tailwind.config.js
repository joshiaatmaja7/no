/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(148,163,184,0.15), 0 10px 30px rgba(2,6,23,0.45)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(148,163,184,0.12) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
