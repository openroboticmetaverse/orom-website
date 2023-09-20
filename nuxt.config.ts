// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss',
  ],
  target: 'static',
  buildModules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    icon: {
      source: './public/icon.png'
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Roboverse",
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'A Nuxt 3 template with Tailwind CSS' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#000000' }
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-touch-icon-57x57.png?v0jfosdjpf' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-touch-icon-72x72.png?v0jfosdjpf' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon-76x76.png?v0jfosdjpf' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-touch-icon-114x114.png?v0jfosdjpf' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png?v0jfosdjpf' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-touch-icon-144x144.png?v0jfosdjpf' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png?v0jfosdjpf' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png?v0jfosdjpf' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ],
    },


  },

})
