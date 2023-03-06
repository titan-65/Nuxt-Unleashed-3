export interface CoffeeApiEndpoints {
    getShops: string;
    getShop: (id: number) => string;
    createShop: string;
    updateShop: (id: number) => string;
    deleteShop: (id: number) => string;
    getMenu: (shopId: number) => string;
    createMenuItem: (shopId: number) => string;
    updateMenuItem: (shopId: number, itemId: number) => string;
    deleteMenuItem: (shopId: number, itemId: number) => string;
}
