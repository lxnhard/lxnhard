/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    fontFamily: {
      sans: ['"Source Sans 3"', 'sans-serif'],
      serif: ['Playfair', 'serif'],
      headline: ['"Josefin Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        tealsat: {
          700: '#00857b'
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
// #007A70