/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        graphic: ['Graphic', 'sans-serif'],
        'graphic-bold': ['Graphic-bold', 'sans-serif']
      }
    },
  },
  plugins: [],
}

