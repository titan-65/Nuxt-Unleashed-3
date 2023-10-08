import { H3Event, defineEventHandler } from 'h3'
import {prisma} from "~/server/api/db";
import {readUserById} from "~/server/api/db/user";
import requireSignin from "~/server/events/auth/requireSignin";
export default defineEventHandler(async (event: H3Event) => {
    try {

        requireSignin(event)
        const body = await readBody(event)
        const { followingId, followerId } = body
        await addFollow(followingId, followerId)

    }
    catch (e) {
        console.error(e)
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Could not add follow"
        }))
    }
})

async function addFollow(followingId: number, followerId: number) {
            const existingFollow = await prisma.userFollows.findUnique({
                where: {
                    followingId_followerId: {
                        followingId: followingId,
                        followerId: followerId
                    }
                }
            })

            if (existingFollow) {
                throw new Error("Already following")
            }

            return prisma.userFollows.create({
                data: {
                    followingId: followingId,
                    followerId: followerId
                }
            })
}
