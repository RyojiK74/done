const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID
} = process.env;
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  env: {
    firebaseApiKey: FIREBASE_API_KEY,
    firebaseAuthDomain: FIREBASE_AUTH_DOMAIN,
    firebaseDatabaseUrl: FIREBASE_DATABASE_URL,
    firebaseProjectId: FIREBASE_PROJECT_ID,
    firebaseStorageBucket: FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: FIREBASE_APP_ID,
    firebaseMeasurementId: FIREBASE_MEASUREMENT_ID
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/dotenv'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    [
      'nuxt-env',
      {
        keys: [
          'FIREBASE_API_KEY',
          'FIREBASE_AUTH_DOMAIN',
          'FIREBASE_DATABASE_URL',
          'FIREBASE_PROJECT_ID',
          'FIREBASE_STORAGE_BUCKET',
          'FIREBASE_MESSAGING_SENDER_ID',
          'FIREBASE_APP_ID',
          'FIREBASE_MEASUREMENT_ID'
        ]
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /(node_modules)/
      });
    }
  }
};
