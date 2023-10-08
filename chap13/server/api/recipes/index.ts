import { H3Event } from "h3";
import { prisma } from "../db";

export default defineEventHandler(async (event) => {
  try {
    const recipes = await prisma.recipe.findMany();
    const status = getResponseStatus(event);
    if (!recipes) {
      // Send a sample recipe
      return {
        recipes: [
          {
            id: 1,
            title: "Sample Recipe",
            description: "This is a sample recipe",
            ingredients: [
              {
                id: 1,
                name: "Sample Ingredient",
                quantity: "1",
                unit: "cup",
              },
            ],
          },
        ],
      };
    }

    return {
      recipes,
      status,
    };
  } catch (error) {
    console.error(error);
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Something went wrong",
      })
    );
  }
});
