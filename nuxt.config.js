import pkg from './package'
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
    title: 'COVID-19 MOZ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
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
    'nuxt-leaflet',
    'nuxt-purgecss',
    '@nuxtjs/firebase'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
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
  firebase: {
    config: {
      apiKey: 'AIzaSyDlm8ZeIzo0I_zClTrNAkFgJti3I-oGX0w',
      authDomain: 'covid-19-tracker-moz.firebaseapp.com',
      databaseURL: 'https://covid-19-tracker-moz.firebaseio.com',
      projectId: 'covid-19-tracker-moz',
      storageBucket: 'covid-19-tracker-moz.appspot.com',
      messagingSenderId: '536171650610',
      appId: '1:536171650610:web:26cad8c7e170c2a9f7262b',
      measurementId: 'G-8GZ5N5EZS4'
    },
    services: {
      messaging: {
        createServiceWorker: true
      }
    }
  },
  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: true
    }
  },
  manifest: {
    name: 'COVID-19 MOZ',
    short_name: 'COVID MOZ',
    display: 'standalone',
    background_color: '#282B2E',
    gcm_sender_id: '536171650610'
  }
}
