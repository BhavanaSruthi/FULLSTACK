"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopPageService = void 0;
const common_1 = require("@nestjs/common");
const { Client, http } = require('pg');
const shopPageData = [];
let ShopPageService = class ShopPageService {
    async getShopPageEvents() {
        let shopPageData = [];
        const client = new Client({
            connectionString: 'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
            ssl: {
                rejectUnauthorized: false,
            },
        });
        client.connect();
        const { rows } = await client.query('SELECT  * FROM  public.shopPage_data');
        shopPageData = rows;
        return shopPageData;
    }
    async getShopPageEventsByCategory(category) {
        console.log("fetching data by Category");
        let shopPageData = [];
        const client = new Client({
            connectionString: 'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
            ssl: {
                rejectUnauthorized: false,
            },
        });
        client.connect();
        const { rows } = await client.query(`SELECT  * FROM  public.shopPage_data where category ='${category}'`);
        shopPageData = rows;
        return shopPageData;
    }
    async getShopPageEventsByCollection(collection) {
        console.log("fetching data by Collection");
        let shopPageData = [];
        const client = new Client({
            connectionString: 'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
            ssl: {
                rejectUnauthorized: false,
            },
        });
        client.connect();
        const { rows } = await client.query(`SELECT  * FROM  public.shopPage_data where name= '${collection}'`);
        shopPageData = rows;
        return shopPageData;
    }
    async getShopPageEventsByColor(color) {
        console.log("fetching data by Color");
        let shopPageData = [];
        const client = new Client({
            connectionString: 'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
            ssl: {
                rejectUnauthorized: false,
            },
        });
        client.connect();
        const { rows } = await client.query(`'SELECT  * FROM  public.shopPage_data where category  ='${color}'`);
        shopPageData = rows;
        return shopPageData;
    }
    async getShopPageEventsById(id) {
        console.log("fetching data by Id");
        let shopPageData = [];
        const client = new Client({
            connectionString: 'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
            ssl: {
                rejectUnauthorized: false,
            },
        });
        client.connect();
        const { rows } = await client.query(`SELECT  * FROM  public.shopPage_data where id = ${id}`);
        shopPageData = rows;
        console.log(shopPageData);
        return shopPageData;
    }
    async DeleteShopPageEvent(id) {
        console.log("Deleting data by Id");
        let shopPageData = [];
        const client = new Client({
            connectionString: 'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
            ssl: {
                rejectUnauthorized: false,
            },
        });
        client.connect();
        const { rows } = await client.query(`DELETE  FROM  public.shopPage_data where id = ${id}`);
    }
    async postShopPageEvents(product) {
        console.log(product.id);
        let shopPageData = [];
        const client = new Client({
            connectionString: 'postgres://azqiskuvaobxgo:73f3969740f15697fd2f474dc4151bd95087a4d5db99e5cc7413b7f47da161a8@ec2-44-195-100-240.compute-1.amazonaws.com:5432/db8ec9v9kpfga8',
            ssl: {
                rejectUnauthorized: false,
            },
        });
        client.connect();
        console.log(`INSERT INTO  public.shopPage_data VALUES ((${product.id},'${product.name}','${product.category}',${product.rating},${product.price},'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_2.jpg?itok=BtUavNed','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_1.jpg?itok=09jyQSsc','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_7.jpg?itok=0WsFBK9k','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_1_0.jpg?itok=svmxcuYt','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_2_0.jpg?itok=qGMK09GJ','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_7_0.jpg?itok=1ZhBaJL6','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat a nesciunt voluptas esse modi neque, possimus eum officia labore cum exercitationem, vero ex, similique vel delectus commodi expedita magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat a nesciunt voluptas esse modi neque, possimus eum officia labore cum exercitationem, vero ex, similique vel delectus commodi expedita magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit')`);
        const { rows } = await client.query(`INSERT INTO  public.shopPage_data VALUES (${product.id},'${product.name}','${product.category}',${product.rating},${product.price},'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_2.jpg?itok=BtUavNed','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_1.jpg?itok=09jyQSsc','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/flexform_perry_7.jpg?itok=0WsFBK9k','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_1_0.jpg?itok=svmxcuYt','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_2_0.jpg?itok=qGMK09GJ','https://www.flexform.it/sites/default/files/styles/photogallery-slideshow-image/public/images/photo_album/twins_7_0.jpg?itok=1ZhBaJL6','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat a nesciunt voluptas esse modi neque, possimus eum officia labore cum exercitationem, vero ex, similique vel delectus commodi expedita magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat a nesciunt voluptas esse modi neque, possimus eum officia labore cum exercitationem, vero ex, similique vel delectus commodi expedita magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit')`);
        shopPageData = rows;
        console.log("shopPageData", shopPageData);
        return shopPageData;
    }
};
ShopPageService = __decorate([
    (0, common_1.Injectable)()
], ShopPageService);
exports.ShopPageService = ShopPageService;
//# sourceMappingURL=shopPage.service.js.map