export declare class ShopPageService {
    getShopPageEvents(): Promise<any>;
    getShopPageEventsByCategory(category: string): Promise<any>;
    getShopPageEventsByCollection(collection: string): Promise<any>;
    getShopPageEventsByColor(color: string): Promise<any>;
    getShopPageEventsById(id: number): Promise<any>;
    DeleteShopPageEvent(id: number): Promise<any>;
    postShopPageEvents(product: any): Promise<any>;
}
