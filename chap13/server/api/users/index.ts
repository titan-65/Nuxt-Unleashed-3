import { findAllUser } from "../db/user";
import { prisma } from "../db";

export default defineEventHandler(async (event) => {

    const users = await prisma.user.findMany()
    const status = getResponseStatus(event)
    const cookies = setCookie(event, "randomacts", "Cookies are good", {
        maxAge: 60
    })



    // if (!users) {
    //     sendError(event, createError({
    //         statusCode: 404,
    //         statusMessage: "No users found"
    //     }))
    // }

    return {
            message: "Data successfully retrieved",
            status,
            users,
            cookies
    }
})
