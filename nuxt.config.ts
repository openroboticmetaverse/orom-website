// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  
  
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@dargmuesli/nuxt-cookie-control",
      {
        barPosition: "bottom-full",
        colors: {
          barTextColor: "#fff",
          modalOverlay: "#000",
          barBackground: "#000",
          barButtonColor: "#000",
          modalTextColor: "#000",
          modalBackground: "#fff",
          modalOverlayOpacity: 0.8,
          modalButtonColor: "#fff",
          modalUnsavedColor: "#fff",
          barButtonHoverColor: "#fff",
          barButtonBackground: "#fff",
          modalButtonHoverColor: "#fff",
          modalButtonBackground: "#000",
          controlButtonIconColor: "#000",
          controlButtonBackground: "#fff",
          barButtonHoverBackground: "#333",
          checkboxActiveBackground: "#21E259",
          checkboxInactiveBackground: "#000",
          modalButtonHoverBackground: "#333",
          checkboxDisabledBackground: "#ddd",
          controlButtonIconHoverColor: "#fff",
          controlButtonHoverBackground: "#000",
          checkboxActiveCircleBackground: "#fff",
          checkboxInactiveCircleBackground: "#fff",
          checkboxDisabledCircleBackground: "#fff",
        },
        text: {
          barTitle: "Cookies",
          barDescription:
            "We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.",
          acceptAll: "Accept all",
          declineAll: "Delete all",
          manageCookies: "Manage cookies",
          unsaved: "You have unsaved settings",
          close: "Close",
          save: "Save",
          necessary: "Necessary cookies",
          optional: "Optional cookies",
          functional: "Functional cookies",
          blockedIframe: "To see this, please enable functional cookies",
          here: "here",
        },
        cookies: {
          
          
        },
      },
    ],
    "nuxt-jsonld",
    "@nuxt/image-edge",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-F81S4B8YPP',
    initialConsent: false
  },
  cookieControl: {
    localeTexts: {
      en: {
        accept: 'Accept',
        decline: "Accept only necessary",
        acceptAll: 'Accept all',
        declineAll: 'Accept only necessary',
        bannerDescription:
        "We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies. Read our privacy policy for more information.",

      },
      
    },
    cookies:{
      necessary: [
        {
          //if multilanguage
          name: {
            en: "Default Cookies",
          },
          //else
          name: "Default Cookies",
          //if multilanguage
          description: {
            en: "Used for cookie control.",
          },
          //else
          description:
            "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.",
          cookies: [
            "cookie_control_consent",
            "cookie_control_enabled_cookies",
          ],
          links: {
            '/privacy': 'Read our privacy policy for more information',
          },
        },
      ],
      optional: [
        {
          id: 'google-analytics',
          name: { en: 'google-analytics' },
          //if you don't set identifier, slugified name will be used
          //if multilanguage
          identifier: 'ga',
          description: {
            en: "Google Analytics cookies are used on our website to collect data about visitor interactions. These cookies enable us to understand and analyze website traffic and usage patterns, assisting us in enhancing our website's functionality and user experience.",
          },
          //else
          initialState: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-F81S4B8YPP",
          async: true,
          cookies: ["_ga", "_gat", "_gid"],
          accepted: () => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
          },
          declined: () => {},
        },
      ],
  }
  },
  googleFonts: {
    families: {
      "Nunito+Sans": [400, 700], // Feel free to change the weights to match your fabulousness
    },
  },
  content: {
    highlight: {
      theme: "solarized-light",
    },
  },
  imports: {
    dirs: ["stores"],
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dilan3qfq/image/upload/",
    },
  },
  target: "static",
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "open robotic metaverse",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "apple-mobile-web-app-title", content: "Roboverse" },
        { name: "theme-color", content: "#000000" },
        { name: "description", content: "Robots are coming" },
        { name: "msapplication-TileColor", content: "#000000" },
        { name: "theme-color", content: "#000000" },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
      link: [
        { rel: "shortcut-icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "180x180",
          href: "/apple-touch-icon.png?v=askdnla23",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/apple-touch-icon-152x152.png?v=askdnla23",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/apple-touch-icon-120x120.png?v=askdnla23",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/apple-touch-icon-76x76.png?v=askdnla23",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/apple-touch-icon-60x60.png?v=askdnla23",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png?v=askdnla23",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png?v=askdnla23",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    },
  },
});
