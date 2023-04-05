import { IItems } from "~/types";

export const shoppingItems: IItems[] = [
    {
        category: 'Clothing',
        category_tag: 'New Arrival',
        status: 'In Progress',
        description_head: 'Premium T-Shirt',
        description: 'A high-quality, 100% cotton t-shirt with a comfortable fit.',
        cost: 19.99,
        progress: 50,
    },
    {
        category: 'Electronics',
        category_tag: 'Best Seller',
        status: 'Pending',
        description_head: 'Wireless Earbuds',
        description: 'Experience true wireless freedom with these high-quality earbuds.',
        cost: 99.99,
        progress: 25,
    },
    {
        category: 'Home Goods',
        category_tag: 'Featured',
        status: 'Complete',
        description_head: 'Luxury Bedding',
        description: 'Sleep in comfort and style with this premium bedding set.',
        cost: 199.99,
        progress: 100,
    },
    {
        category: 'Beauty',
        category_tag: 'New Arrival',
        status: 'In Progress',
        description_head: 'Vitamin C Serum',
        description: 'Achieve radiant and youthful skin with this powerful vitamin C serum.',
        cost: 29.99,
        progress: 75,
    },
];

