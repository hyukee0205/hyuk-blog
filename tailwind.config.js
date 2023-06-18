/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkSub: "#8c8c8c",
        lightSub: "#696969",
      },
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
