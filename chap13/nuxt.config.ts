// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
        secretKey: process.env.NUXT_SECRET_KEY
    }
})
