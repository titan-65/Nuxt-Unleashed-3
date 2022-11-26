export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  // console.log('CONFIG: ', config.public.cookies)
  // console.log('New request: ' + event.req.url)
  console.log('New request: ' + event.req.url)
  console.log('Context', event.context)

})
