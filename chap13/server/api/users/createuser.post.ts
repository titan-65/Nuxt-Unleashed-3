import {getResponseStatus, H3Event} from "h3";
import { createUser } from "../db/user";
import {User} from "../../types/user.types";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    try {
        const { email, username, password, confirmPassword, firstName, lastName, profileImage } = body

        if (!email || !password) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "Email, Password are not found"
            }))
        }

        const userDto: Partial<User> = {
            email,
            username,
            password,
            firstName,
            lastName,
            profileImage
        }

        await createUser(userDto)
        const status = getResponseStatus(event)

        return {
            status,
            message: "User data created",
            userDto
        }
    } catch (e) {
        console.error(e)
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "User not created!"
        }))
    }

})
