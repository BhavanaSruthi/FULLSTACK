import { Injectable } from '@nestjs/common';
import { Console } from 'console';
const { Client ,http} = require('pg');
// import * as dotenv from 'dotenv';
// dotenv.config();
const shopPageData = [];

@Injectable()
export class ShopPageService {
  async getShopPageEvents(): Promise<any> {
    let shopPageData=[];
    const client = new Client({
      connectionString:'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
      ssl: {
        rejectUnauthorized: false,
      },
    });
    client.connect();
    const {rows} = await client.query('SELECT  * FROM  public.shopPage_data');
    shopPageData=rows;
    return shopPageData;
  }
 async getShopPageEventsByCategory(category:string): Promise<any> {
  console.log("fetching data by Category");
  let shopPageData=[];
    const client = new Client({
      connectionString:'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
      ssl: {
        rejectUnauthorized: false,
      },
    });
    client.connect();
    const {rows} = await client.query(`SELECT  * FROM  public.shopPage_data where category ='${category}'`);
    shopPageData=rows;
    return shopPageData;
  }
  async getShopPageEventsByCollection(collection:string): Promise<any> {
    console.log("fetching data by Collection");
    let shopPageData=[];
      const client = new Client({
        connectionString:'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
        ssl: {
          rejectUnauthorized: false,
        },
      });
      client.connect();
      const {rows} = await client.query(`SELECT  * FROM  public.shopPage_data where name= '${collection}'`);
      shopPageData=rows;
      return shopPageData;
    }
    async getShopPageEventsByColor(color:string): Promise<any> {
      console.log("fetching data by Color");

      let shopPageData=[];
        const client = new Client({
          connectionString:'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
          ssl: {
            rejectUnauthorized: false,
          },
        });
        client.connect();
        const {rows} = await client.query(`'SELECT  * FROM  public.shopPage_data where category  ='${color}'`);
        shopPageData=rows;
        return shopPageData;
      }
      async getShopPageEventsById(id:number): Promise<any> {
        console.log("fetching data by Id");
        let shopPageData=[];
          const client = new Client({
            connectionString:'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
            ssl: {
              rejectUnauthorized: false,
            },
          });
          client.connect();
          const {rows} = await client.query(`SELECT  * FROM  public.shopPage_data where id = ${id}`);
          shopPageData=rows;
          console.log(shopPageData);
          return shopPageData;
        }
        async DeleteShopPageEvent(id:number): Promise<any> {
        console.log("Deleting data by Id");
        let shopPageData=[];
          const client = new Client({
            connectionString:'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
            ssl: {
              rejectUnauthorized: false,
            },
          });
          client.connect();
          const {rows} = await client.query(`DELETE  FROM  public.shopPage_data where id = ${id}`);
          // shopPageData=rows;
          // console.log(shopPageData);
          // return shopPageData;
        }
        async postShopPageEvents(product): Promise<any> {
          console.log(product.id);
          let shopPageData=[];
          const client = new Client({
            connectionString:'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
            ssl: {
              rejectUnauthorized: false,
            },
          });
          client.connect();
            // return  http.post('http://localhost:3200/ShopPageEvents', {
            //   id:product.id,
            //   name: product.name,
            //   category:product.category,
            //   rating:product.rating,
            //   price:product.price,
            // });
             console.log(`INSERT INTO  public.shopPage_data VALUES ((${product.id},'${product.name}','${product.category}',${product.rating},${product.price},'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_2.jpg?itok=BtUavNed','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_1.jpg?itok=09jyQSsc','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_7.jpg?itok=0WsFBK9k','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_1_0.jpg?itok=svmxcuYt','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_2_0.jpg?itok=qGMK09GJ','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_7_0.jpg?itok=1ZhBaJL6','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat a nesciunt voluptas esse modi neque, possimus eum officia labore cum exercitationem, vero ex, similique vel delectus commodi expedita magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat a nesciunt voluptas esse modi neque, possimus eum officia labore cum exercitationem, vero ex, similique vel delectus commodi expedita magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit')`);
            const {rows} = await client.query(`INSERT INTO  public.shopPage_data VALUES (${product.id},'${product.name}','${product.category}',${product.rating},${product.price},'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_2.jpg?itok=BtUavNed','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_1.jpg?itok=09jyQSsc','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_7.jpg?itok=0WsFBK9k','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_1_0.jpg?itok=svmxcuYt','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_2_0.jpg?itok=qGMK09GJ','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_7_0.jpg?itok=1ZhBaJL6','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat a nesciunt voluptas esse modi neque, possimus eum officia labore cum exercitationem, vero ex, similique vel delectus commodi expedita magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat a nesciunt voluptas esse modi neque, possimus eum officia labore cum exercitationem, vero ex, similique vel delectus commodi expedita magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit')`);
            shopPageData=rows;
            console.log("shopPageData",shopPageData);
            return shopPageData;
          }
        }

