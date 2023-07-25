import { findAllUser } from "../db/user";
import { prisma } from "../db";

export default defineCachedEventHandler(async (event) => {
  const users = await prisma.user.findMany();
  const status = getResponseStatus(event);
  const cookies = setCookie(event, "randomacts", "Cookies are good", {
    maxAge: 60,
  });

  if (!users) {
    return sendError(
      event,
      createError({
        statusCode: 404,
        statusMessage: "No users found",
      })
    );
  }

  return {
    message: "Data successfully retrieved",
    status,
    users,
    cookies,
  };
});
