import { User } from "@prisma/client";
import { prisma } from "~/server/api/db";

/**
 * @name readUserById
 * @description finds a user by ID
 * @param event
 */
export default defineEventHandler(async (event: H3Event) => {
  try {
    // @ts-ignore
    const id = event.context.params.id;
    console.log("id", id);
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
      // include: {
      //   following: true,
      //   followedBy: true
      // }
    });
    if (!user) {
      return sendError(
        event,
        createError({
          statusCode: 404,
          statusMessage: "User not found",
        })
      );
    }
    return user;
  } catch (e) {
    console.error(e);
    sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Error retrieving user",
      })
    );
  }
})