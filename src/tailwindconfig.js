/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: { DEFAULT: '#4A101E', dark: '#360b15' },
        gold: { DEFAULT: '#C79A55', dark: '#A87F3F' },
        ivory: '#F5F1E9',
        charcoal: '#211B19',
        grey: { DEFAULT: '#77716D', deep: '#5E5854' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '80rem' },
      letterSpacing: { eyebrow: '0.22em' },
    },
  },
  plugins: [],
};