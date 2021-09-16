const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['"Roboto"']
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      primary: '#388669',
      current: '#459A9E',  
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
