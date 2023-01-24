import { Module } from '@nestjs/common';
import { HomePageController } from './homePage.controller';
import { HomePageService } from './homePage.service';

@Module({
  controllers: [HomePageController],
  providers: [HomePageService],
  exports: [HomePageService]
})
export class HomePageModule {}