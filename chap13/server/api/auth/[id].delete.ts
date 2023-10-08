// import {H3Event} from "h3";
// import {User} from "@prisma/client";
// import {deleteUser, readUserById} from "../db/user";
//
// export default defineEventHandler(async (event: H3Event) => {
//     const user: void | User = await readUserById(event)
//     // @ts-ignore
//     const { id } = user
//     const response = await deleteUser(id, event)
//     const status = getResponseStatus(event)
//
//     return {
//         response,
//         status
//     }
//
// })
