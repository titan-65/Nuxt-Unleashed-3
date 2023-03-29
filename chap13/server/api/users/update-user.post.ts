import {H3Event, send} from "h3";
import { updateUser } from "../db/user";
import {prisma} from "../db";

export default defineEventHandler(async (event) => {
    // @ts-ignore
    const { id } = event.context.params.id
    const body = await readBody(event)
    const { password, confirmPassword, firstName, lastName } = body

    const user = await prisma.user.findUnique({
        where: { id: parseInt(id)}
    })
    if (!user) {
        return sendError(event, createError({
            statusCode: 404,
            statusMessage: "User not found"
        }))
    }

    const updateUserDto = {
        password,
        firstName,
        lastName,
        confirmPassword
    }

    await updateUser(updateUserDto)

    return {
        message: "User data updated",
        updateUserDto
    }
})
