import {readUserById, updateUser} from "../db/user";
import {createError, H3Event} from "h3";
import {User} from "@prisma/client";

export default defineEventHandler(async (event: H3Event) => {
    try {
        const user: void | User = await readUserById(event)
        const status = getResponseStatus(event)
        const cookies = setCookie(event, "randomacts", "Cookies are good")

        const { firstName, lastName, password, about, profileImage } = await readBody(event)
        // @ts-ignore
        const { id } = user
        const updateUserDto = {
            id,
            firstName,
            lastName,
            password,
            about,
            profileImage
        }
        return await updateUser(updateUserDto)
    } catch (e) {
        console.error(e)
        sendError(event, createError({
            statusCode: 500,
            statusMessage: "Error updating user"
        }))
    }


})
