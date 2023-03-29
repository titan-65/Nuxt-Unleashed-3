import {prisma} from "../db";
import {comparePasswords, generateToken} from "~/helpers/authHandler";
import {setHeader, createRouter, defineEventHandler, useBase, H3Event} from "h3";
import {User} from "~/types/user.types";


const router = createRouter()


router.post('/signin', defineEventHandler(async (event: H3Event) => {
    try {
        const { email, password } = await readBody(event)

        //TODO: Remove this and add to the prisma/db/user.ts
        const user: Partial<User | null> = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "Invalid credentials | No user found"
            }))
        }
        const { passwordHash } = user
        // @ts-ignore
        const  matchPassword = await comparePasswords(password, passwordHash)

        if (!matchPassword) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "Invalid credentials | Wrong Password"
            }))
        }
        const token = generateToken(user)
        setHeader(event, 'Authorization', token)
        setCookie(event, 'token', token, {
            maxAge: 60 * 24 * 24,
            expires: new Date()
        })
        return {
            token,
            user: {
                _id: user.id,
                username: user.username,
                email: user.email
            }
        }

    } catch (e) {
        console.error(e)
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Something went wrong! Could not sign in!"
        }))
    }
}))

router.get('/signout', defineEventHandler(async (event: H3Event) => {
    // Clear cookie
    deleteCookie(event, 'token')
    const status = getResponseStatus(event)
    return {
        status,
        message: "Signed Out"
    }
}))

export default useBase('/api/auth', router.handler)

// export default defineEventHandler(async (event) => {
//     try {
//         const { email, password } = await readBody(event)
//
//         //TODO: Remove this and add to the prisma/db/user.ts
//         const user = await prisma.user.findUnique({
//             where: {
//                 email
//             }
//         })
//         if (!user) {
//             return sendError(event, createError({
//                 statusCode: 400,
//                 statusMessage: "Invalid credentials | No user found"
//             }))
//         }
//
//         const  matchPassword = await comparePasswords(password, user.passwordHash)
//
//         if (!matchPassword) {
//             return sendError(event, createError({
//                 statusCode: 400,
//                 statusMessage: "Invalid credentials | Wrong Password"
//             }))
//         }
//         const token = generateToken(user)
//         setHeader(event, 'Authorization', token)
//         setCookie(event, 'token', token, {
//             maxAge: 60 * 24 * 24,
//             expires: new Date()
//         })
//         return {
//             token,
//             user: {
//                 _id: user.id,
//                 username: user.username,
//                 email: user.email
//             }
//         }
//
//     } catch (e) {
//         console.error(e)
//         return sendError(event, createError({
//             statusCode: 401,
//             statusMessage: "Something went wrong! Could not sign in!"
//         }))
//     }
// })
