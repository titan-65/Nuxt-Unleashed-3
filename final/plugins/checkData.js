export default defineNuxtPlugin(nuxtApp => {
    const { data } = nuxtApp.payload

    console.log(data)
    if (!data) {
        return "No data is present"
    }

})