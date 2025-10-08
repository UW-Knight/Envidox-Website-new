import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: "#000000",
          foreground: "#ffffff",
          primary: {
            DEFAULT: "#0070f3",
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#7928ca",
            foreground: "#ffffff",
          },
          success: {
            DEFAULT: "#0070f3",
            foreground: "#ffffff",
          },
          warning: {
            DEFAULT: "#ff0080",
            foreground: "#ffffff",
          },
          danger: {
            DEFAULT: "#ff0080",
            foreground: "#ffffff",
          },
        },
      },
      light: {
        colors: {
          background: "#ffffff",
          foreground: "#000000",
          primary: {
            DEFAULT: "#0070f3",
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#7928ca",
            foreground: "#ffffff",
          },
          success: {
            DEFAULT: "#0070f3",
            foreground: "#ffffff",
          },
          warning: {
            DEFAULT: "#ff0080",
            foreground: "#ffffff",
          },
          danger: {
            DEFAULT: "#ff0080",
            foreground: "#ffffff",
          },
        },
      },
    },
  })],
}
