/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        readex: ["var(--font-readex)", "sans-serif"],
      },
      colors: {
        code: {
          white: "#ffffff",
          black: "#110f1d",
          purple: "#a779ff",
          gray: "#e2e8f6",
          yellow: "#ffefa7",
          green: "#7fac8d",
          lime: "#dcf49e",
          lightgreen: "#e4f2cf",
          blue: "#99c8fc",
          pink: "#ebb7f9",
          lightpink: "#f6d6e5",
          lightpurple: "#c9adff",
          darkpurple: "#3b3555",
          darkerpurple: "#221e30",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        code: {
          primary: "#ffefa7",

          secondary: "#dcf49e",

          accent: "#f6d6e5",

          neutral: "#ebb7f9",

          "base-100": "#F3F3F7",

          info: "#99c8fc",

          success: "#ebb7f9",

          warning: "#E0990B",

          error: "#FA4A33",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
