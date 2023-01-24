import { Module } from '@nestjs/common';
import { ShopPageController } from './shopPage.controller';
import { ShopPageService } from './shopPage.service';

@Module({
  controllers: [ShopPageController],
  providers: [ShopPageService],
  exports: [ShopPageService]
})
export class ShopPageModule {}