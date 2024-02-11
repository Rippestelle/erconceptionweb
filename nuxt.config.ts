// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: "https://er-conception-web.fr",
    trailingSlash: true,
  },
  vite: {
    assetsInclude: [/\.html/],
  },
  pages: true,
  css: ["~/assets/scss/app.scss"],
  build: {
    transpile: ["gsap"],
  },
  app: {
    head: {
      titleTemplate: "%s | ER-CONCEPTION-WEB",
      meta: [
        { name: "robots", content: "index, follow" },
        { name: "og:site_name", content: "ER-CONCEPTION-WEB" },
        { name: "og:locale", content: "fr_FR" },
        { name: "og:locale:alternate", content: "fr_FR" },
        { name: "og:type", content: "website" },
        { name: "og:email", content: "estelle.rippe.pro@gmail.com" },
        { name: "og:image", content: "https://er-conception-web.fr/cover.png" },
        {
          name: "twitter:image",
          content: "https://er-conception-web.fr/cover.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "google-site-verification",
          content: "tv9Tox7PgmOAi3cvYeS4VsaujMb-MSiHrxpBT3HY5LY",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg", href: "/favicon.svg" },
        { rel: "import", type: "text/html", href: "/form.html" },
      ],
      htmlAttrs: {
        lang: "fr",
      },
    },
  },
  modules: [
    "nuxt-simple-sitemap",
    "nuxt-gtag",
    "@dargmuesli/nuxt-cookie-control",
  ],
  gtag: {
    id: "G-VKWDTQEY37",
    initialConsent: false,
  },
  cookieControl: {
    locales: ["fr"],
    localeTexts: {
      fr: {
        bannerTitle: "Gestion des cookies",
        bannerDescription:
          "Ce site utilise des cookies et vous donne le contrôle sur ce que vous souhaitez activer.",
      },
    },
    barPosition: "bottom-left",
    colors: {
      barBackground: "var(--background-color-secondary)",
      barButtonBackground: "#fff",
      barButtonColor: "#000",
      barButtonHoverBackground: "#22d49e",
      barButtonHoverColor: "#fff",
      barTextColor: "var(--text-secondary-color)",
      checkboxActiveBackground: "rgb(88, 44, 145)",
      checkboxActiveCircleBackground: "#fff",
      checkboxDisabledBackground: "#ddd",
      checkboxDisabledCircleBackground: "#fff",
      checkboxInactiveBackground: "#000",
      checkboxInactiveCircleBackground: "#fff",
      controlButtonBackground: "#fff",
      controlButtonHoverBackground: "#000",
      controlButtonIconColor: "rgb(88, 44, 145)",
      controlButtonIconHoverColor: "#22d49e",
      focusRingColor: "#808080",
      modalButtonBackground: "#000",
      modalButtonHoverBackground: "#22d49e",
    },
    cookies: {
      necessary: [],
      optional: [
        {
          id: "google-analytics",
          name: "Google Analytics",
          links: {
            "https://policies.google.com/privacy":
              "Politique de confidentialité",
            "https://marketingplatform.google.com/about/analytics/terms/fr/":
              "Conditions d'utilisation",
          },
        },
      ],
    },
  },
});
