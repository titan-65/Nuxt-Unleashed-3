import { defineStore } from "pinia";


export const useUserStore = defineStore('user', () => {
    /* -------------------------------------------------------------------------- */
    /*                                    State                                   */
    /* -------------------------------------------------------------------------- */
    const trackUser = ref([])
    const sessionTracking = ref(null)
    const cookiesOptions = ref(null)
    const nuxtinUser = ref(null)


    /* -------------------------------------------------------------------------- */
    /*                                   Getters                                  */
    /* -------------------------------------------------------------------------- */

    const getTrackUser = computed(() => {
        return trackUser.value
    })

    const getNuxtinUser = computed(() => {
        return nuxtinUser.value
    })

    const getSessionTracking = computed(() => {
        return {
            session: sessionTracking.value,
            cookies: cookieOptions.value
        }
    })

    /* -------------------------------------------------------------------------- */
    /*                                   Actions                                  */
    /* -------------------------------------------------------------------------- */

    function addTrackUser(path) {
        trackUser.value.push({
            path,
            date: new Date().toJSON()
        })
    }

    function addNuxtinUser(user) {
        if (!user) {
            return 
        }

        nuxtinUser.value = user

    }

    function addSession({currentSession, cookieOptions}) {
        sessionTracking.value = currentSession
        cookiesOptions.value = cookieOptions
    }

    return {
        trackUser,
        cookiesOptions,
        sessionTracking,
        nuxtinUser,
        getTrackUser,
        addNuxtinUser,
        addSession,
        addTrackUser

    }
})