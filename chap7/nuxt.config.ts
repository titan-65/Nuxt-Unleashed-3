// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@inkline/nuxt'
    ],
    inkline: {
        components: {},
        icons: {},
        colorMode: 'system',
        locale: 'en',
        validateOn: ['input', 'blur'],
        color: '',
        size: '',
        routerComponent: 'router-link',
        componentOptions: {}
    }
})
