/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleBlue: "#304057",
        secondGray: "#6D6D6D",
        secondBlack: "#151515",
        linearBlue: "#cce4ff",
        lightBlue: "#637C95",
      },
    },
  },
  plugins: [],
}