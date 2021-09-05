// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path')
export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: 'COVID 19 em Moçambique',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Faça o monitoramento diário do número de casos de Coronavirus COVID 19 em Moçambique. Resumo das Últimas 24 horas do Coronavirus em Moçambique. COVID 19 em Moçambique 🇲🇿'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.jsdelivr.net/npm/@css-pkg/circular-std@2.0.0/dist/woff.min.css'
      }
    ]
  },
  loadingIndicator: '~/components/loadingIndicator.html',

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
    'nuxt-i18n',
    'nuxt-leaflet',
    'nuxt-purgecss'
  ],

  i18n: {
    locales: [
      { code: 'pt', iso: 'pt-PT', file: 'pt.js' },
      { code: 'en', iso: 'en-US', file: 'en.js' }
    ],
    defaultLocale: 'pt',
    strategy: 'no_prefix',
    vueI18nLoader: true,
    langDir: './utils/i18n/locales',
    vueI18n: {
      fallbackLocale: 'pt'
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    }
  },
  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true,
    prefix: '/api/'
  },
  proxy: {
    '/api/': {
      target: process.env.API_HOST || 'http://localhost:8088',
      pathRewrite: { '^/api/': '/' }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.js')
      }
    },
    extractCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        maxSize: 256000
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production',
    whitelistPatterns: [/leaflet/]
  },
  manifest: {
    name: 'COVID-19 MOZ',
    short_name: 'COVID MOZ',
    display: 'standalone',
    background_color: '#282B2E'
  }
}
