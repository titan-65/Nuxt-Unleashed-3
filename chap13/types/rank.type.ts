import {Recipe} from "./recipe.types";
import {User} from "./user.types";

export interface Rank {
    id: number
    rank: number;
    recipeId: number;
    recipe: Recipe;
    userId: number;
    user: User
}
