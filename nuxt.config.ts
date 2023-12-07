// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss',
  ],
  target: 'static',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "open robotic metaverse",
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: "Roboverse" },
        { name: 'theme-color', content: "#000000" },
        { name: 'description', content: 'A Nuxt 3 template with Tailwind CSS' },
        { name: 'msapplication-TileColor', content: '#000000' },
        { name: 'theme-color', content: '#000000' },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent'
        },
      ],
      link: [

        { rel: 'shortcut-icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png?v=askdnla23' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png?v=askdnla23' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png?v=askdnla23' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon-76x76.png?v=askdnla23' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-touch-icon-60x60.png?v=askdnla23' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=askdnla23' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=askdnla23' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }

      ],
    },


  },

})
