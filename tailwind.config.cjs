const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '603px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'dosis': ['Dosis', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
