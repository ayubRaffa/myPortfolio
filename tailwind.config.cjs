
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: '',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          100: "#cfcfd1",
          200: "#9ea0a3",
          300: "#6e7075",
          400: "#3d4147",
          500: "#0d1119",
          600: "#0a0e14",
          700: "#080a0f",
          800: "#05070a",
          900: "#030305"
        },
        navbar: "#161b22",
        tab: "#24292e",
        pink: "#561171",
      },
      fontFamily: {
        header: ['Milonga', 'monospace'],
        revalia: ['Revalia', 'cursive'],
        alcantera: ['alcantera', 'cursive'],
        PlayfairDisplayediumItalic: ['PlayfairDisplayediumItalic', 'cursive'],
      },

    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require("tailwind-heropatterns")({
      // as per tailwind docs you can pass variants
      variants: [],

      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: ["cutout"],

      // The foreground colors of the pattern
      colors: {
        default: "#9C92AC",
        "pink": "#410d5520",
        "blue": "#0d13555a",
        "gray": "#fff50",
        //also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: "0.4",
        "100": "1.0"
      }
    })
  ],
}