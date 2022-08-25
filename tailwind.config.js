/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      text:{
        primaryPink: '#ef8374',
        primaryDark: '#454E54',
        primaryLight: "#6E7F89",
        white: '#ffffff',
        primaryGreen: '#1aaea8',
        primaryGreen: "#5EA62E"
        
      },
      background:{
        primary: '#ef8374',
        primaryLight: "#ffe9e7",
        primaryGreen2: "#ebf5eb",
        footer: '#6E7F89',
      }
    },
  },
  plugins: [],
}
