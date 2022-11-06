import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const body = readBody(event)
    console.log(body)
    // const {email, password} = body
    // const client = serverSupabaseClient(event)

    // signInWithEmail(email, password, client)

})


const signInWithEmail = async (email, password, client) => {
  const { data, error } = await client.auth.signInWithPassword({
    email: email,
    password: password,
  })
}