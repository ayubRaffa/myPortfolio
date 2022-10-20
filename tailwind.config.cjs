
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d1117",
        background2: "#0d1119",
        navbar: "#161b22",
        tab: "#24292e",
        pink: {
          100: "#ddcfe3",
          200: "#bba0c6",
          300: "#9a70aa",
          400: "#78418d",
          500: "#561171",
          600: "#450e5a",
          700: "#340a44",
          800: "#22072d",
          900: "#110317"
        },
        blue: {
          100: "#d4dce3",
          200: "#a9b8c7",
          300: "#7e95ac",
          400: "#537190",
          500: "#284e74",
          600: "#203e5d",
          700: "#182f46",
          800: "#101f2e",
          900: "#081017"
        },
      },
      fontFamily: {
        text: ['Revalia', 'cursive'],
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