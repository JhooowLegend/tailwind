/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        graphic: ['Graphic', 'sans-serif'],
        'graphic-bold': ['Graphic-bold', 'sans-serif']
      },
      colors: {
        primary: '#2091F9',
        text: '#252B42',
        secondText: '#37454',
        darkBackground: '#252B42'
      }
    },

  },
  plugins: [],
}

