import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      title: '',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  css: ['vue-final-modal/style.css'],
  modules: [
    '@nuxtjs/device',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    'nuxt-swiper',
  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  googleFonts: {
    families: {
      Montserrat: {
        wght: [300, 400, 500, 600, 700, 800],
      },
      Gilroy: {
        wght: [700],
      },
    },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  eslint: {
    exclude: ['**/node_modules/**', '**/dist/**', '**/*.story.vue', '**/libs/**'],
  },
  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  convertColors: {
                    currentColor: true,
                  },
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      }),
    ],
  },
})
