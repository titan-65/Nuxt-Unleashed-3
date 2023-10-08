import { prisma } from '~/server/api/db'
import { H3Event } from 'h3'
import requireSignin from "~/server/events/auth/requireSignin";

export default defineEventHandler( async (event: H3Event) => {
    try {
        requireSignin(event)
        const body = await readBody(event)
        const { followingId, followerId } = body
        await removeFollow(followingId, followerId)
    }
    catch (e) {
        console.error(e)
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Could not remove follow"
        }))
    }

}
)

async function removeFollow(followerId: number, followingId: number) {
  // Check if the relationship exists
  const existingRelation = await prisma.userFollows.findUnique({
    where: {
      followingId_followerId: {
        followerId: followerId,
        followingId: followingId
      }
    }
  });

  if (!existingRelation) {
    throw new Error('Relationship does not exist');
  }

  // Delete the follower-following relationship
  return prisma.userFollows.delete({
      where: {
          followingId_followerId: {
              followerId: followerId,
              followingId: followingId
          }
      }
  });
}