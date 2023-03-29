import { User } from "./user.types";
import { Comment } from "./comment.types";
import { Rank } from "./rank.type";

export interface Recipe {
    id: number;
    title: string;
    description: string;
    authorId: number;
    author: User;
    comments: Comment[]
    ranks: Rank[]
}
