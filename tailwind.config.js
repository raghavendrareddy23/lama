/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customPurple: '#7E22CE',
        darkPurple: '#211935',
      },
    },
  },
  plugins: [],
}

