"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopPageController = void 0;
const common_1 = require("@nestjs/common");
const shopPage_service_1 = require("./shopPage.service");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const product_dto_1 = require("../product.dto");
let ShopPageController = class ShopPageController {
    constructor(appService) {
        this.appService = appService;
    }
    async getShopPageEvents(req, query) {
        for (const key in query) {
            console.log(key, query[key]);
            if (key == "id") {
                return await this.appService.getShopPageEventsById(query[key]);
            }
            if (key == "collection") {
                return await this.appService.getShopPageEventsByCollection(query[key]);
            }
            if (key == "category") {
                return await this.appService.getShopPageEventsByCategory(query[key]);
            }
        }
        return await this.appService.getShopPageEvents();
    }
    async postShopPageEvents(product) {
        console.log(product);
        return await this.appService.postShopPageEvents(product);
    }
    async DeleteShopPageEvent(req, query) {
        for (const key in query) {
            console.log(key, query[key]);
            if (key == "id") {
                return await this.appService.DeleteShopPageEvent(query[key]);
            }
        }
    }
};
__decorate([
    (0, common_1.Get)("/shopPageEvents"),
    __param(0, (0, common_2.Request)()),
    __param(1, (0, common_3.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShopPageController.prototype, "getShopPageEvents", null);
__decorate([
    (0, common_1.Post)("/shopPageEvents"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ShopPageController.prototype, "postShopPageEvents", null);
__decorate([
    (0, common_1.Delete)("/shopPageEvents"),
    __param(0, (0, common_2.Request)()),
    __param(1, (0, common_3.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShopPageController.prototype, "DeleteShopPageEvent", null);
ShopPageController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [shopPage_service_1.ShopPageService])
], ShopPageController);
exports.ShopPageController = ShopPageController;
//# sourceMappingURL=shopPage.controller.js.map