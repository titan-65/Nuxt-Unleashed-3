import {getHeader, H3Event} from "h3";
import jwt from "jsonwebtoken"
import {prisma} from "../db";
export default defineEventHandler(async (event: H3Event) => {
    const config = useRuntimeConfig()
    console.log(config)
    const token = getCookie(event, 'token')

    if (!token) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Unauthorized access"
        }))
    }

    try {
        const { id } = jwt.verify(token, config.secretKey)
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        if (!user) {
            return sendError(event, createError({
                statusCode: 401,
                statusMessage: "Unauthorized access"
            }))
        }
        return {
            message: `Welcome, ${user.username}`
        }
    } catch (e) {
        console.error(e)
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Unauthorized access"
        }))
    }
})
