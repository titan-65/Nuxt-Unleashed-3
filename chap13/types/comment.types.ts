import {Recipe} from "./recipe.types";
import {User} from "./user.types";

export interface Comment {
    id: string;
    content: string;
    recipeId: number;
    recipe: Recipe;
    authorId: number;
    author: User;
}

