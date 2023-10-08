import {createRecipe} from "../db/recipe";
import {readUserById} from "../db/user";
import {createError, H3Event} from "h3";
import {User} from "~/types/user.types";
import {requiredSignin} from "~/helpers/authHandler";

export default defineEventHandler(async (event: H3Event) => {
    try {

        const { title, description, ingredients, servingSize, prepTime, cookTime, totalTime }= await readBody(event)
        //const user = await readUserById(event)
        const authorId = await requiredSignin(event)
        // @ts-ignore
        const recipeDto = {
            title,
            description,
            ingredients,
            servingSize,
            prepTime,
            cookTime,
            totalTime,
            authorId
        }

        const recipe = await createRecipe(recipeDto)
        const status = setResponseStatus(event, 201)

        return {
            recipe,
            status
        }
    } catch (e) {
        console.error(e)
        return sendError(event, createError({
            statusCode: 404,
            statusMessage: "No recipes found"
        }))
    }

})
