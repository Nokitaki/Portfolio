/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-bg': '#0f0c29', 
        'neon-purple': '#b02bf2',
        'neon-blue': '#3a8bfd',
        'accent-pink': '#ff007f', 
      },
    },
  },
  plugins: [],
}