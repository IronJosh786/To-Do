/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'darker': '#67729D',
      'dark': '#BB9CC0',
      'light': '#E7BCDE',
      'lighter': '#FED9ED',
    },
  },
  plugins: [],
}

