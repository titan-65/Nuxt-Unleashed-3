// import {compareSync, hashSync} from "bcrypt";
import {prisma} from "~/server/api/db";
import jwt from "jsonwebtoken"
import bcrypt, { compareSync, hashSync} from "bcrypt"
import {H3Event} from "h3";
import {NitroSign} from "./nitro-sign";
import {readRecipeById} from "~/server/api/db/recipe";

const config = useRuntimeConfig()
export const generateToken = (user) => {
    return jwt.sign({userId: user.id}, config.secretKey ,{
        expiresIn: '1d'
    })
}

export const comparePasswords = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
}


// Helper function to generate a hashed password
export const hashPassword = (password: string) => {
    const saltRounds = 10
    return hashSync(password, saltRounds)
}

// Helper function to verify a password
export const verifyPassword = (password: string, passwordHash: string) => {
    return compareSync(password, passwordHash)
}



export const requiredSignin = async (event: H3Event) => {
    const config = useRuntimeConfig()

    const t = getCookie(event, 'token')
    console.log("TOKEN", t)
    if (!t) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Unauthorized access"
        }))
    }

    try {
        const { userId } = jwt.verify(t, config.secretKey)
        const user = await prisma.user.findUnique({
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
        return userId
    } catch (e) {
        console.error(e)
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Unauthorized access"
        }))
    }
}

export const hasAuthorization = async (event: H3Event) => {
    const user = await NitroSign(event)
    const recipe = await readRecipeById(event)
    const authorized = user.id === recipe.authorId
    if (!(authorized)) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Unauthorized"
        }))
    }

}
