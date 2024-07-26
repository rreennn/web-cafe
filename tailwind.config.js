/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        logo: ["Fasthand", "sans-serif"],
      },
      colors: {
        primary: "#F9E4D4",
        secondary: "#D67D3E",
        lightshade: "#9C0F48",
        darkshade: "#470D21",
      },
    },
  },
  plugins: [],
};
