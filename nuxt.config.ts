// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/color-mode", "@nuxt/icon"],

  shadcn: {
    prefix: 'V',
  },
  colorMode: {
    classSuffix: ''
  },

  compatibilityDate: "2024-07-10"
})