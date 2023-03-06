import { CoffeeShop, MenuItem } from './CoffeeApi.model';

export interface CoffeeApiClient {
    getShops: () => Promise<CoffeeShop[]>;
    getShop: (id: number) => Promise<CoffeeShop>;
    createShop: (shop: CoffeeShop) => Promise<CoffeeShop>;
    updateShop: (id: number, shop: CoffeeShop) => Promise<CoffeeShop>;
    deleteShop: (id: number) => Promise<void>;
    getMenu: (shopId: number) => Promise<MenuItem[]>;
    createMenuItem: (shopId: number, item: MenuItem) => Promise<MenuItem>;
    updateMenuItem: (shopId: number, itemId: number, item: MenuItem) => Promise<MenuItem>;
    deleteMenuItem: (shopId: number, itemId: number) => Promise<void>;
}
