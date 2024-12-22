/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#333333",
        tertiary: "#756745",
        card: "#F2F3F5"
      }
    },
  },
  plugins: [],
}

