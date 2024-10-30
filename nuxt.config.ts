// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: false,
  },
  icon: {
    serverBundle: {
      collections: ["uil"],
    },
  },
  sourcemap: {
    server: true,
    client: false,
  },
});
