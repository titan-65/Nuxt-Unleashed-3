import { Recipe } from "./recipe.types";
import { Comment } from "./comment.types";
import { Rank } from "./rank.type"

export interface User {
    id: number;
    firstName?: string;
    lastName?: string;
    email: string;
    username: string;
    password: string;
    profileImage: string;
    recipes: Recipe[]
    comments: Comment[]
    rank: Rank[]
    passwordHash?: string
}
