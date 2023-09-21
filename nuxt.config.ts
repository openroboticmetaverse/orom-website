// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss',
  ],
  target: 'static',
  buildModules: [
    '@nuxtjs/pwa',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Roboverse",
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: "roboverse" },
        { name: 'theme-color', content: "#E9B949" },
        { name: 'description', content: 'A Nuxt 3 template with Tailwind CSS' },
        { name: 'msapplication-TileColor', content: '#da532c' },
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
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-2048x2732.png", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-2732x2048.png", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1668x2388.png", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-2388x1668.png", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1536x2048.png", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-2048x1536.png", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1668x2224.png", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-2224x1668.png", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1620x2160.png", media: "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-2160x1620.png", media: "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1284x2778.png", media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-2778x1284.png", media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1170x2532.png", media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-2532x1170.png", media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1125x2436.png", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-2436x1125.png", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1242x2688.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-2688x1242.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-828x1792.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1792x828.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1080x1920.png", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1920x1080.png", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-750x1334.png", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1334x750.png", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-640x1136.png", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
        { rel: "apple-touch-startup-image", href: "/splashscreens/apple-splash-1136x640.png", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
        { rel: 'shortcut-icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png?v=0jfosdjpf' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ],
    },


  },

})
