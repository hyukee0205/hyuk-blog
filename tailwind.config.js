/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkSub: "#8c8c8c",
        lightSub: "#696969",
        darkSecond: "#2c2c2c",
        lightSecond: "#fff",
      },
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
