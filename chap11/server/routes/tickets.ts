import Fastify from "fastify";
export default defineEventHandler(async (event) => {
    // const fastify = Fastify({
    //     logger: true
    // })
    //
    // fastify.get('/', async (request, reply) => {
    //     return { hello: "world"}
    // })

    /**
     * Run the server!
     */
    // const start = async () => {
    //     try {
    //         await fastify.listen()
    //     } catch (err) {
    //         fastify.log.error(err)
    //         process.exit(1)
    //     }
    // }
    //
    // await start()
    return {
        message: "Check server"
    }
})
