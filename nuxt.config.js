export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Burjo King / Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
     // Import scss files
    '~assets/scss/main.scss'
  ],

  styleResources: {
    scss: [
      // Import colour pallete
      '~assets/scss/base/_colours.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/capitalize.js',
    '~plugins/currency.js',
    '~plugins/encrypt.js',
  ],

  loading: '~/components/Loader.vue',

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // proxyHeaders: false
  },

  // Firebase module configuration (https://firebase.nuxtjs.org/guide/getting-started)
  firebase: {
    config: {
      apiKey: "AIzaSyD0d9cD2HymYvZMWFIH0bRXWE19D69ph1g",
      authDomain: "pubsub-sister-d4eed.firebaseapp.com",
      projectId: "pubsub-sister-d4eed",
      storageBucket: "pubsub-sister-d4eed.appspot.com",
      messagingSenderId: "443359975101",
      appId: "1:443359975101:web:2f82bfb760939c629dc9d4",
      measurementId: "G-G69QG8Q6NF"
    },
    services: {
      firestore: true,
      messaging: true
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, { isDev, isClient }) {
 
      config.node = {
        fs: 'empty'
      } 
    }
  }
}
