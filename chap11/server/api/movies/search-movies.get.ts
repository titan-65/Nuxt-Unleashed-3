import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
    const { query } = getQuery(event)
    const config = useRuntimeConfig()
    return await $fetch(`https://api.themoviedb.org/3/discover/movie?query=${config.apiKey}&primary_release_year=${year}&sort_by=popularity.desc`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${config.accessToken}`
        },
        // baseURL: config.public.apiBaseUrl
    })


})
