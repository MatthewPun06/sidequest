/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#AAA4FE",
        secondary: "#FFFD9D",
        text: "#000000",
        success: "#a4fead",
        fail: "#fea4a4",
        neutral: "#cad6e0"
      },


      fontFamily: {
        quicksand: ["Quicksand"],
        quicksandbold: ["QuicksandBold"],
        caveat: ["Caveat"],
        caveatbold: ["CaveatBold"],

      },
    },
  },
  plugins: [],
};