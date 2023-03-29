import {readUserById} from "../db/user";
import {H3Event} from "h3";
import {User} from "@prisma/client";

export default defineEventHandler(async (event: H3Event) => {
    try {
        const user: void | User = await readUserById(event)
        const status = getResponseStatus(event)
        const cookies = setCookie(event, "randomacts", "Cookies are good")

        return {
            user,
            status,
            cookies
        }
    } catch (e) {
        console.error(e)
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Could not retrieve user"
        }))
    }



})
