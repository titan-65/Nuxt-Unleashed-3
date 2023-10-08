import { prisma } from "./index";
import { createError, H3Event } from "h3";
import { hashSync } from "bcrypt";
import { User } from "~/types/user.types";

/**
 * @name createUser
 * @param userDto
 * @description createUser function creates a user
 */
export const createUser = async (userDto: Partial<User | undefined>) => {
  // @ts-ignore
  const { email, username, firstName, lastName, password } = userDto;
  // Hash the user's password before saving to database
  const saltRounds = 10;
  const hashPassword = hashSync(password, saltRounds);
  await prisma.user.create({
    data: {
      email,
      username,
      firstName,
      lastName,
      password,
      passwordHash: hashPassword,
    },
  });
};

/**
 * @name findAllUser
 * @description finds all users in the database
 */
export const findAllUser = async () => {
  await prisma.user.findMany();
};

// /**
//  * @name readUserById
//  * @description finds a user by ID
//  * @param event
//  */
// export const readUserById = async (event: H3Event) => {
//   try {
//     // @ts-ignore
//     const id = event.context.params.id;
//     const user = await prisma.user.findUnique({
//       where: {
//         id: parseInt(id),
//       },
//       include: {
//         following: true,
//         followedBy: true
//       }
//     });
//     if (!user) {
//       return sendError(
//         event,
//         createError({
//           statusCode: 404,
//           statusMessage: "User not found",
//         })
//       );
//     }
//     return user;
//   } catch (e) {
//     console.error(e);
//     sendError(
//       event,
//       createError({
//         statusCode: 500,
//         statusMessage: "Error retrieving user",
//       })
//     );
//   }
// };

/**
 * @name updateUser
 * @param updateUserDto
 * @description updates the user
 */
export const updateUser = async (updateUserDto) => {
  const { id, firstName, lastName, password, about, profileImage } =
    updateUserDto;
  await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      firstName: firstName,
      lastName: lastName,
      password: password,
      about: about,
      profileImage,
    },
  });
};

/**
 * @name deleteUser
 * @param id
 * @param event
 * @description delete a user
 */
export const deleteUser = async (id, event) => {
  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });
    return "User deleted successfully";
  } catch (e) {
    sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Error updating user",
      })
    );
  }
};

export const authorization = async (event) => {
  // @ts-ignore
  const { id } = await readUserById(event);
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "User not found",
      })
    );
  }

};

export async function authorizeUser(req, res, next) {
  const userId = req.user.id; // Assumes you have already authenticated the user and stored their ID in the request object
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // if (user.role !== "admin") {
  //     return res.status(403).json({ message: "Forbidden" });
  // }
  // User is authorized, continue with the next middleware function
  next();
}
