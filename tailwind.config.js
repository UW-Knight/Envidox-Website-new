import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'rainbow-flow': 'rainbow-flow 6s linear infinite',
        'aurora': 'aurora 20s ease-in-out infinite',
        'edge-glow': 'edge-glow 8s ease-in-out infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#ff0080",
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#00b3ff",
            foreground: "#ffffff",
          },
          success: {
            DEFAULT: "#00ff80",
            foreground: "#000000",
          },
          warning: {
            DEFAULT: "#ffb300",
            foreground: "#000000",
          },
          danger: {
            DEFAULT: "#ff4d00",
            foreground: "#ffffff",
          },
        },
      },
      light: {
        colors: {
          primary: {
            DEFAULT: "#ff0080",
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#00b3ff",
            foreground: "#ffffff",
          },
          success: {
            DEFAULT: "#00ff80",
            foreground: "#000000",
          },
          warning: {
            DEFAULT: "#ffb300",
            foreground: "#000000",
          },
          danger: {
            DEFAULT: "#ff4d00",
            foreground: "#ffffff",
          },
        },
      },
    },
  })],
}
