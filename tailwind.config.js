/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "2262": "2262px",
      },
      colors: {
        'custom-green':'#4DFF54',
        'custom-red':'rgba(254, 30, 0, 0.70)',
      }
    },
  },
  plugins: [],
}

