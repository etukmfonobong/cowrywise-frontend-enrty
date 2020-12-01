module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/App.vue',
      './src/views/Home.vue',
      './src/components/results/cardActive.vue',
      './src/components/results/cardLoading.vue',
      './src/components/results/cardPopup.vue',
      './src/components/results/resultsContainer.vue',
      './src/components/search/searchBar.vue',
      './src/components/search/searchContainer.vue',
    ]

  },
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