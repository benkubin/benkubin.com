/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{html,js}',
      'index.html',
  ],
  theme: {
    extend: {
      backgroundColor: '#242425',
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      background: '#242425',
      mainPurple: '#BD48BF',
      lightAccent: '#F4E2F5',
      mediumAccent: '#D997DB',
      darkAccent: '#C155C4',
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"]
    }
  },
  plugins: [],
}

