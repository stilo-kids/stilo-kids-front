import { colors } from "./src/theme/colors"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};