import { H3Event } from "h3";
import { prisma } from "../db";

export default defineEventHandler(async (event) => {
    const recipes = await prisma.recipe.findMany();
    const status = getResponseStatus(event)

    return {
            recipes,
            status
    }
})
