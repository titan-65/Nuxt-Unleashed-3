import { createRouter, defineEventHandler, useBase, H3Event} from "h3";
import {deleteRecipe, readRecipeById, updateRecipe} from "~/server/api/db/recipe";
import { Recipe } from "~/types/recipe.types";
import {authorization, authorizeUser} from "../db/user";
import {NitroSign} from "~/helpers/nitro-sign";

const router = createRouter()

/*

 */
router.get('/:id', defineEventHandler(async (event) => {
    // const user = await NitroSign(event)
    // console.log(user)
    return await readRecipeById(event)
}))

router.put('/:id', defineEventHandler(async (event): Promise<Partial<Recipe | undefined>> => {
    const recipe = await readRecipeById(event)
    console.log("Recipe ", recipe)
    // @ts-ignore
    const { id } = recipe
    const { title, description, authorId} = await readBody(event)
    const recipeDto: Partial<Recipe> = {
        id, title, description, authorId
    }
    return await updateRecipe(recipeDto, event)
}))

router.delete('/:id', defineEventHandler(async (event) => {
    const { id } = await readRecipeById(event)
    return await deleteRecipe(id, event)

}))

export default useBase('/api/recipes', router.handler)
