import { $fetch } from "ofetch";
import { CoffeeApiClient } from "./CoffeeApi.interface";
import { CoffeeApiEndpoints } from "./CoffeeApiUrls.interface";
import { CoffeeShop, MenuItem} from "../../coffee/Coffee.interface";

/**
 * @name CoffeeApiModel
 * @description
 */

export class CoffeeApiModel implements CoffeeApiClient {
    private readonly urls!: CoffeeApiEndpoints
    constructor(urls: CoffeeApiEndpoints) {
        this.urls = urls

    }

    createMenuItem(shopId: number): Promise<CoffeeShop> {
        return new Promise<CoffeeShop[]>((resolve) => {
            const url = this.urls.createMenuItem
        })
    }

    createShop(shop): Promise<> {
        return Promise.resolve(undefined);
    }

    deleteMenuItem(shopId: number, itemId: number): Promise<void> {
        return Promise.resolve(undefined);
    }

    deleteShop(id: number): Promise<void> {
        return Promise.resolve(undefined);
    }

    getMenu(shopId: number): Promise<[]> {
        return Promise.resolve([]);
    }

    getShop(id: number): Promise<> {
        return Promise.resolve(undefined);
    }

    getShops(): Promise<[]> {
        return Promise.resolve([]);
    }

    updateMenuItem(shopId: number, itemId: number, item): Promise<> {
        return Promise.resolve(undefined);
    }

    updateShop(id: number, shop): Promise<> {
        return Promise.resolve(undefined);
    }

}