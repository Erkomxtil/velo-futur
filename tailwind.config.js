/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*"
  ],
  theme: {
    screens: {
      'phone': '768px',
      'laptop': '1024px',
      'desktop': '1200px'
    },
    extend: {},
  },
  plugins: [],
}