/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryCol" : "#0F282E",
        "secondaryCol" : "#99EFF8"
      }
    },
  },
  plugins: [],
}