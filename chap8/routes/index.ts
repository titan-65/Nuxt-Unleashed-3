import express, { Request, Response, Express} from "express";
import { menu } from "~/lib/coffee";

interface Drink {
    id: number;
    name: string;
    type: string;
    size: Size[];
    image: string;
}

interface Size {
    name: string;
    price: number;
}

type Menu = Drink[];

const coffeeRouter = async (req: Request, res: Response) => {
    const coffeeMenu = await setTimeout(() => {
        return menu
    }, 4)
    res.json({
        message: 'Coffee Loaded',
        status: 200,
        data: coffeeMenu
    })
}

export { coffeeRouter }