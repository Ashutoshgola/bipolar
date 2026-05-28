/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // This is the key line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          neon: '#f25f2c', // Your brand orange
        }
      }
    },
  },
  plugins: [],
}