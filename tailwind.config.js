/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serifTitle: ["'Playfair Display'", "serif"],
        sansBody: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
