import { ShopPageService } from './shopPage.service';
import { ProductDto } from '../product.dto';
export declare class ShopPageController {
    private readonly appService;
    constructor(appService: ShopPageService);
    getShopPageEvents(req: any, query: any): Promise<any>;
    postShopPageEvents(product: ProductDto): Promise<any>;
    DeleteShopPageEvent(req: any, query: any): Promise<any>;
}
