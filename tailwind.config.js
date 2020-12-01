module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      screens: {
        'fhd': '1920px',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
      },
      colors: {
        'gray-blue': '#334155',
      }
    },
  },
  variants: {
    extend: {
      ringColor: ['hover'],
      ringOffsetColor: ['hover'],
      ringOffsetWidth: ['hover'],
      ringOpacity: ['hover'],
      ringWidth: ['hover'],
    },
  },
  plugins: [],
}