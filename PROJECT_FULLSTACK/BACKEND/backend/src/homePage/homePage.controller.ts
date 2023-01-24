import { Controller, Get } from '@nestjs/common';
import { HomePageService } from './homePage.service';
import { Request} from  "@nestjs/common";
import { Query} from  "@nestjs/common";


@Controller()
export class HomePageController {
  constructor(private readonly appService: HomePageService) {}

  @Get("/homePageEvents")
  async getHomePageEvents(@Request() req, @Query() query): Promise<any>{
    let response=await this.appService.getHomePageEvents();
    return response;
  }
}
