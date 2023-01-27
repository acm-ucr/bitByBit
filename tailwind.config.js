/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
};
