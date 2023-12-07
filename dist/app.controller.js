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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("./common/types");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    postLogin(body) {
        return this.appService.postLogin(body.username, body.password);
    }
    postLogout() {
        return this.appService.postLogout();
    }
    getUserInfo(token) {
        return this.appService.getUserInfo(token);
    }
    getUserList(token) {
        return this.appService.getUserList(token);
    }
    getDiskInfo(id) {
        return this.appService.getDiskInfo(id);
    }
    postDiskSearch(payload) {
        return this.appService.postDiskSearch(payload.keyword, payload.filter);
    }
    postRecipeRecognition(requestPayload) {
        return this.appService.postRecipeRecognition(requestPayload.href);
    }
    getRecipeInfo(id) {
        return this.appService.getRecipeInfo(id);
    }
    getUserWishlist(token) {
        return this.appService.getUserWishlist(token);
    }
    postDiskRecipeMatching(requestPayload) {
        return this.appService.postDiskRecipeMatching(requestPayload.recipes);
    }
};
__decorate([
    (0, common_1.Post)('/user/login'),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                username: { type: 'string', example: 'john_doe' },
                password: { type: 'string', example: '123456' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully logged in',
        type: types_1.LoginResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Successfully logged in',
        type: types_1.LoginResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", types_1.LoginResponse)
], AppController.prototype, "postLogin", null);
__decorate([
    (0, common_1.Post)('/user/logout'),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Logout successful',
        type: types_1.Message,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", types_1.Message)
], AppController.prototype, "postLogout", null);
__decorate([
    (0, common_1.Get)('/user/info'),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User information retrieved successfully',
        type: types_1.UserInfo,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'token',
        required: true,
        description: 'Your access token',
    }),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getUserInfo", null);
__decorate([
    (0, common_1.Get)('/user/user_list'),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Users information retrieved successfully',
        type: [types_1.UserInfo],
    }),
    (0, swagger_1.ApiQuery)({
        name: 'token',
        required: true,
        description: 'Your access token',
    }),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getUserList", null);
__decorate([
    (0, common_1.Get)('/disk/disk'),
    (0, swagger_1.ApiTags)('Disk'),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: true,
        description: 'ID of the disk',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Disk information retrieved successfully',
        type: types_1.DiskInfo,
    }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getDiskInfo", null);
__decorate([
    (0, common_1.Post)('/disk/search'),
    (0, swagger_1.ApiTags)('Disk'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Search disk item successfully',
        type: types_1.SearchResponse,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.SearchInput]),
    __metadata("design:returntype", Array)
], AppController.prototype, "postDiskSearch", null);
__decorate([
    (0, common_1.Post)('/recipe/recognition'),
    (0, swagger_1.ApiTags)('Recipe'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Recipe recognition successfully',
        type: [types_1.RecipeInfo],
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                href: { type: 'string', example: 'http://your_image_link.com' },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], AppController.prototype, "postRecipeRecognition", null);
__decorate([
    (0, common_1.Get)('/recipe/recipe'),
    (0, swagger_1.ApiTags)('Recipe'),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: true,
        description: 'ID of the recipe',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Recipe information retrieved successfully',
        type: types_1.RecipeInfo,
    }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getRecipeInfo", null);
__decorate([
    (0, common_1.Get)('/user/wishlist'),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiQuery)({
        name: 'token',
        required: true,
        description: 'Your access token',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User wishlist (disk list) retrieved successfully',
        type: types_1.WishlistResponse,
    }),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getUserWishlist", null);
__decorate([
    (0, common_1.Post)('/disk/recipe-matching'),
    (0, swagger_1.ApiTags)('Disk'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Recipe matching successful',
        type: [types_1.RecipeMatchingResponse],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.RecipeMatchingInput]),
    __metadata("design:returntype", Array)
], AppController.prototype, "postDiskRecipeMatching", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map