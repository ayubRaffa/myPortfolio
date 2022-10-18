
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgound: "#0d1117",
        backgound2: "#0d1119",
        navbar: "#161b22",
        tab: "#24292e",
        blue: {
          100: "#ccdde7",
          200: "#99bbcf",
          300: "#669ab8",
          400: "#3378a0",
          500: "#005688",
          600: "#00456d",
          700: "#003452",
          800: "#002236",
          900: "#00111b"
        },
        pink: {
          100: "#d9cfdd",
          200: "#b39ebb",
          300: "#8d6e99",
          400: "#673d77",
          500: "#410d55",
          600: "#340a44",
          700: "#270833",
          800: "#1a0522",
          900: "#0d0311"
        },
      },
      fontFamily: {
        text: ['Comfortaa', 'cursive'],
        header: ['Milonga', 'monospace'],
        revalia: ['Revalia', 'cursive'],
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
      patterns: ["cutout", "tiny-checkers", "formal-invitation"],

      // The foreground colors of the pattern
      colors: {
        default: "#9C92AC",
        "pink": "#410d5520",
        "blue":"#0d13555a",
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