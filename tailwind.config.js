/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'meri': ['merriweather', 'serif'] // Ensure fonts with spaces have " " surrounding it.
      },
      colors: {
        customYellow : "#FAF011",
        customGreen : "#21AF44"
      }
    },
  },
  plugins: [],
}