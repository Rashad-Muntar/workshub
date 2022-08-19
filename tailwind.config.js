/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: "1280px",
      md: "1087px",
      sm: "768px"

    },
    extend: {},
    colors: {
      primary: {
        default: '#ef8374',
        text: '#4a4a4a',
        100: '#ffe9e7',
        200: '#A4A4A4',
        300: '#1d3951b3',
      },
      secondary: {
        default: '#1aaea8',
        50: '#ebf5eb',
        100: '#DAF3F2',
        500: '#5EA62E',
      },
      background: '#e6edf2',
      btnBg: "#454E54",
      white: '#ffffff',
    },
  },
  plugins: [],
}
