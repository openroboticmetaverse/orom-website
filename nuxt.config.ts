// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  target: 'static',

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Roboverse",
       htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'description', content: 'A Nuxt 3 template with Tailwind CSS'
        }
      ],
      link: [
        { rel: 'icon', sizes: '180x180', href: '/icon.png'}
      ]
    },


  },

})
