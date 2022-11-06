// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@nuxt/image-edge',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  supabase: {
    url: 'https://bfdniyeecvvmqcwoquzi.supabase.co',
    key: process.env.NUXT_SUPABASE_KEY,
  },
  runtimeConfig: {
    supabaseAnonKey: process.env.NUXT_SUPABASE_KEY,
    public: {
      supabaseUrl: process.env.NUXT_SUPABASE_URL,
    },
  },
  routeRules: {
    cors: true
  }
})
