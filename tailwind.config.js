/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: {
        100: "#f8f8f8",
        200: "#eeeeee",
        300: "#a1a2a4",
        400: "#202125" /** hello */,
      },
      green: {
        DEFAULT: "#5bcb02",
      },
    },
  },
  plugins: [],
};
