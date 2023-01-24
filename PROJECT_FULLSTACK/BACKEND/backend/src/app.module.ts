import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomePageModule } from './homePage/homePage.module';
import {ShopPageModule} from './shopPage/shopPage.module';

@Module({
  imports: [HomePageModule,ShopPageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
