import { useUserStore } from "../store/user";

export default defineNuxtRouteMiddleware((to, from) => {
    const state = useUserStore()
    
    

})