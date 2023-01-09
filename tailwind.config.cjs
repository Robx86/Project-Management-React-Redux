/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royalpurple: "#561D5E",
        yellowComplement: "#fbbf24",
        bestGray: "#242424",
        greenComplement: "#4ade80",
        redComplement: "#f87171",
      },
    },
  },
  plugins: [],
};
