const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        body: '#F4F4FB',
        gold: '#F6C879',
        brownLight: '#282B2E'
      },
      screens: {
        reading: '992px',
        xxl: '1600px'
      },
      textColor: theme => ({
        default: theme('colors').gray['600']
      }),
      boxShadow: {
        default: '0 0 0.6rem rgba(159,181,226, 0.3)',
        xl: '0px 0px 10px 5px rgba(195, 195, 231, 0.3)'
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        display: ['Inter']
      },
      fontWeight: ['hover', 'focus']
    }
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
  build: {
    extend: config => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      })
    }
  }
}
