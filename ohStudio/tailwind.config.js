/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      ...colors,
      gray: "#e8e5e480",
      darkGray: "#7f7f7f"
    },
    extend: {},
  },
  plugins: [],
}

