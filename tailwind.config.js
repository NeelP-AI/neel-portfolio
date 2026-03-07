/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A5F',
        'navy-dark': '#162D4A',
        'navy-light': '#2A4F7A',
        charcoal: '#1C1F26',
        gold: '#B8860B',
        'gold-light': '#D4A017',
        'gold-dark': '#8B6508',
      },
      fontFamily: {
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
