/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "input-fill": "#F9FAFB",
        "input-outline": "#D1D5DB",
        "dark-purple": "#A90836",
        "dark-alat-purple": "#5A074C",
        "light-purple": "#FBF3F5",
        "light-white": "rgba(255, 255, 255, 0.18",
      },
      scrollbar: {},
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
