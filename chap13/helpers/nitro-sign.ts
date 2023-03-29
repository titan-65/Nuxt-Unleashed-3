import {H3Event} from "h3";
import jwt from "jsonwebtoken";
import {prisma} from "~/server/api/db";
import {User} from "~/types/user.types";

export async function NitroSign (event: H3Event): Promise<void | Partial<User>> {

    const config = useRuntimeConfig()
    const token = getCookie(event, 'token')
    if (!token) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Unauthorized access"
        }))
    }

    try {
        const { userId } = jwt.verify(token, config.secretKey)
        const user: Partial<User | null> = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        if (!user) {
            return sendError(event, createError({
                statusCode: 401,
                statusMessage: "Unauthorized access"
            }))
        }
        return user
    } catch (e) {
        console.error(e)
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Unauthorized access"
        }))
    }
}
