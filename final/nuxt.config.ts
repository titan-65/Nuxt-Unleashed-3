// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@nuxt/image-edge'],
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
})
