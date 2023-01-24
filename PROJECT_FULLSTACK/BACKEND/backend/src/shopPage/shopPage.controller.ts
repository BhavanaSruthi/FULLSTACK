import { Controller, Get, Post ,Body,Delete} from '@nestjs/common';
import { ShopPageService } from './shopPage.service';
import { Request} from  "@nestjs/common";
import { Query} from  "@nestjs/common";
import { ProductDto } from '../product.dto';


@Controller()
export class ShopPageController {
  constructor(private readonly appService: ShopPageService) {}
  @Get("/shopPageEvents")
 async  getShopPageEvents(@Request() req, @Query() query): Promise<any> {
  for (const key in query) {
    console.log(key, query[key]); 
    if(key=="id"){
      return await this.appService.getShopPageEventsById(query[key]);
    }
    if(key=="collection"){
      return await this.appService.getShopPageEventsByCollection(query[key]);
    }
    if(key=="category"){
      return await this.appService.getShopPageEventsByCategory(query[key]);
    }
  }
  // if(query.filterString=='category'){
  //   console.log(query.filterString);
  //   return await this.appService.getShopPageEventsByCategory(query.filterString);
  // }
  // if(query.filterString=='collection'){
  //   return await this.appService.getShopPageEventsByCollection(query.filterString);
  // }
  // if(query.filterString=='color'){
  //   return await this.appService.getShopPageEventsByColor(query.filterString);
  // }
    return  await this.appService.getShopPageEvents();
  }
  @Post("/shopPageEvents")
  async postShopPageEvents(@Body() product: ProductDto){
 // async  postShopPageEvents(@Request() req, @Query() query): Promise<any> {
    console.log(product);
    return  await this.appService.postShopPageEvents(product);

  }
  @Delete("/shopPageEvents")
  async  DeleteShopPageEvent(@Request() req, @Query() query): Promise<any> {
      for (const key in query) {
        console.log(key, query[key]); 
        if(key=="id"){
          return await this.appService.DeleteShopPageEvent(query[key]);
        }
  }
  }
}
