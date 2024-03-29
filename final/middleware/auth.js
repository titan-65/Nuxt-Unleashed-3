export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()

    if (!user.value) {
        return navigateTo('/account/login')
    }
    return navigateTo('/')
})