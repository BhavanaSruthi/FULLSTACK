import { Injectable } from '@nestjs/common';
// import * as dotenv from 'dotenv';
// dotenv.config();

const { Client } = require('pg');

@Injectable()
export class HomePageService {
  getHello(): string {
    return 'Hello World!';
  }
  async getHomePageEvents(): Promise<any>{
    let homePageData=[];
    const client = new Client({
      connectionString:'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
      ssl: {
        rejectUnauthorized: false
      }
    });
    
    client.connect();
    
    const {rows} = await client.query('SELECT  * FROM  public.homePage_data');
    homePageData=rows;
    return homePageData;
  }
  

}
