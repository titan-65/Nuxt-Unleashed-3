import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  // const config = useRuntimeConfig()
  // console.log("CONFIG: ", config)
  const client = serverSupabaseClient(event)
    const { data } = await client.from('beverageItem').select('*')

  return {
      beverages: data
  }
})
