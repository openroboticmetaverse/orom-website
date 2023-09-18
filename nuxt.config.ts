// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  target: 'static',
  head: {title:"Nuxt Template"},
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

})
