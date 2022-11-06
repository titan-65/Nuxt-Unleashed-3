import { useUserStore } from "../store/user"
export default defineNuxtRouteMiddleware((to, from) => {
    //Check if user is present
    const user = useSupabaseUser()
    const { addTrackUser, addNuxtinUser } = useUserStore()
    if (user) {
        addTrackUser(to.path)
        addNuxtinUser(user)
    }
    
})
