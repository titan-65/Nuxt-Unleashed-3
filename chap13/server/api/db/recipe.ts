import {prisma} from "./index";
import {createError, H3Event} from "h3";
import {Recipe} from "../../types/recipe.types";

export const createRecipe = async (recipeDto: Partial<Recipe>) => {
    try {
        const { title, description, authorId } = recipeDto
        return await prisma.recipe.create({
            // @ts-ignore
            data: {
                title,
                description,
                authorId
            }
        })
    } catch (e) {
        console.error(e)
    }

}


export const readRecipes = async (event: H3Event, query?: string) => {
    try {
        const recipes = await prisma.recipe.findMany({
            where: {
                title: {
                    contains: query
                }
            },
            include: {
                author: true,
                comments: true,
                ranks: true
            }
        })
        if (!recipes) {
            return sendError(event, createError({
                statusCode: 404,
                statusMessage: "No recipes found"
            }))
        }
        return recipes
    } catch (e) {
        console.error(e)
        sendError(event, createError({
            statusCode: 500,
            statusMessage: "Error retrieving user"
        }))
    }

}

export const readRecipeById = async (event: H3Event) => {
    try {
        const id = event.context.params.id
        const recipe = await prisma.recipe.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                author: true,
                comments: true,
                ranks: true
            }
        })
        if (!recipe) {
            return sendError(event, createError({
                statusCode: 404,
                statusMessage: "Recipe not found"
            }))
        }

        return recipe
    } catch (e) {
        console.error(e)
        sendError(event, createError({
            statusCode: 500,
            statusMessage: "Error retrieving recipe"
        }))
    }
}

export const updateRecipe = async (recipeDto: Partial<Recipe>, event: H3Event) => {
   try {
       const {id, title, description, authorId } = recipeDto
       return await prisma.recipe.update({
           where: {
               id
           },
           data: {
               title,
               description,
               authorId
           }
       })
   } catch (e) {
       console.error(e)
       sendError(event, createError({
           statusCode: 500,
           statusMessage: "Error retrieving recipe"
       }))
   }

}

export const deleteRecipe = async (id, event) => {
    try {
        await prisma.recipe.delete({
            where: {
                id
            }
        })
        return "Recipe deleted successfully"
    } catch (e) {
        sendError(event, createError({
            statusCode: 500,
            statusMessage: "Error updating user"
        }))
    }
}
