/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: { 400: "#ffc500", 500: "#ffb100", 50: "#fffbeb" },
      },
    },
  },
  plugins: [],
}
