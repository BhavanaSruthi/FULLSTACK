import { HomePageService } from './homePage.service';
export declare class HomePageController {
    private readonly appService;
    constructor(appService: HomePageService);
    getHomePageEvents(req: any, query: any): Promise<any>;
}
