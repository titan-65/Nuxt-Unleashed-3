import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
    const id = [...event.node.req.url?.split("/")].pop()
    const config = useRuntimeConfig()
    const movieData = await $fetch(`https://api.themoviedb.org/3/discover/movie?query=${config.apiKey}&primary_release_year=${year}&sort_by=popularity.desc`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${config.accessToken}`
        },
        // baseURL: config.public.apiBaseUrl
    })
    if (!movieData) {
        sendError(event, createError({
            statusCode: 400,
            statusMessage: "No data present"
        }))
    }
    const statusCode = getResponseStatus(event)

    return {
        statusCode,
        movieData
    }

})
