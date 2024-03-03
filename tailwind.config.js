/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eb7525',
        secondery: '#f29e23',
        liteGreen: '#e605c3'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
