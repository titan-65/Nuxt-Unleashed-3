export default defineNuxtPlugin(async (nuxtApp) => {
    const { data } = nuxtApp.payload

    if (!data) {
        return "No data is present"
    }
    const today = new Date()

    const { data: coin } = await useFetch('https://www.boredapi.com/api/activity')
    const { data: bitCoin } = await useFetch('https://api.coindesk.com/v1/bpi/currentprice.json')

    console.log(bitCoin)
})