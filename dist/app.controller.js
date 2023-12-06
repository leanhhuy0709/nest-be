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
class LoginResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'your_access_token_here' }),
    __metadata("design:type", String)
], LoginResponse.prototype, "accessToken", void 0);
class Message {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Successful' }),
    __metadata("design:type", String)
], Message.prototype, "message", void 0);
class UserInfo {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: { name: 'your_name', dob: 'dob', gender: 'gender' },
    }),
    __metadata("design:type", String)
], UserInfo.prototype, "payload", void 0);
class WishlistResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        examples: [
            {
                name: 'food_name',
                description: 'description',
                recipe: 'recipe',
            },
        ],
    }),
    __metadata("design:type", String)
], WishlistResponse.prototype, "payload", void 0);
class DiskInfoResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        examples: {
            name: 'food_name',
            description: 'description',
            recipe: 'recipe',
        },
    }),
    __metadata("design:type", String)
], DiskInfoResponse.prototype, "payload", void 0);
class RecipeMatchingInput {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                id: 'food_id_1',
            },
            {
                id: 'food_id_2',
            },
        ],
    }),
    __metadata("design:type", Array)
], RecipeMatchingInput.prototype, "recipes", void 0);
class RecipeMatchingResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                id: 'string',
                name: 'string',
                matchingScore: 0,
            },
        ],
    }),
    __metadata("design:type", Array)
], RecipeMatchingResponse.prototype, "disks", void 0);
class SearchInput {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: { keyword: 'your_keyword', filter: ['rice', 'meat'] },
    }),
    __metadata("design:type", String)
], SearchInput.prototype, "payload", void 0);
class SearchResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                name: 'food_name',
                description: 'description',
                recipe: 'recipe',
            },
        ],
    }),
    __metadata("design:type", Array)
], SearchResponse.prototype, "foodList", void 0);
class RecipeRecognitionInput {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'your_image_href' }),
    __metadata("design:type", String)
], RecipeRecognitionInput.prototype, "imageHref", void 0);
class RecipeRecognitionResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['recipe1', 'recipe2'] }),
    __metadata("design:type", Array)
], RecipeRecognitionResponse.prototype, "recipeList", void 0);
class RecipeIdResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'recipe_name' }),
    __metadata("design:type", String)
], RecipeIdResponse.prototype, "recipe", void 0);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    postLogin(username, password) {
        return this.appService.postLogin(username, password);
    }
    postLogout() {
        return this.appService.postLogout();
    }
    updateUserInfo(token, requestPayload) {
        return this.appService.getUserInfo();
    }
    getUserInfo(token) {
        return this.appService.getUserInfo();
    }
    getUserWishlist(token) {
        return this.appService.getUserWishlist();
    }
    getDiskInfo(id) {
        return this.appService.getDiskInfo(id);
    }
    postDiskRecipeMatching(requestPayload) {
        return this.appService.postDiskRecipeMatching(requestPayload);
    }
    postDiskSearch(requestPayload) {
        return this.appService.postDiskSearch(requestPayload);
    }
    postRecipeRecognition(requestPayload) {
        return this.appService.postRecipeRecognition(requestPayload);
    }
    getRecipeInfo(id) {
        return this.appService.getRecipeInfo(id);
    }
};
__decorate([
    (0, common_1.Post)('/user/login'),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiQuery)({
        name: 'username',
        required: true,
        description: 'Username for login',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'password',
        required: true,
        description: 'Password for login',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully logged in',
        type: LoginResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Query)('username')),
    __param(1, (0, common_1.Query)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "postLogin", null);
__decorate([
    (0, common_1.Post)('/user/logout'),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Logout successful',
        type: Message,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "postLogout", null);
__decorate([
    (0, common_1.Put)('/user/info'),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Update user information successfully',
        type: Message,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'accessToken',
        required: true,
        description: 'Token',
    }),
    __param(0, (0, common_1.Query)('accessToken')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UserInfo]),
    __metadata("design:returntype", Object)
], AppController.prototype, "updateUserInfo", null);
__decorate([
    (0, common_1.Get)('/user/info'),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User information retrieved successfully',
        type: UserInfo,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'accessToken',
        required: true,
        description: 'Token',
    }),
    __param(0, (0, common_1.Query)('accessToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getUserInfo", null);
__decorate([
    (0, common_1.Get)('/user/wishlist'),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiQuery)({
        name: 'accessToken',
        required: true,
        description: 'Token',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User wishlist (food list) retrieved successfully',
        type: WishlistResponse,
    }),
    __param(0, (0, common_1.Query)('accessToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getUserWishlist", null);
__decorate([
    (0, common_1.Get)('/disk/:id'),
    (0, swagger_1.ApiTags)('Disk'),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: true,
        description: 'ID of the disk',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Disk information retrieved successfully',
        type: DiskInfoResponse,
    }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getDiskInfo", null);
__decorate([
    (0, common_1.Post)('/disk/recipe-matching'),
    (0, swagger_1.ApiTags)('Disk'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Recipe matching successful',
        type: RecipeMatchingResponse,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RecipeMatchingInput]),
    __metadata("design:returntype", Object)
], AppController.prototype, "postDiskRecipeMatching", null);
__decorate([
    (0, common_1.Post)('/disk/search'),
    (0, swagger_1.ApiTags)('Disk'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Search successful',
        type: SearchResponse,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SearchInput]),
    __metadata("design:returntype", Object)
], AppController.prototype, "postDiskSearch", null);
__decorate([
    (0, common_1.Post)('/recipe/recognition'),
    (0, swagger_1.ApiTags)('Recipe'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Recipe recognition successful',
        type: RecipeRecognitionResponse,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RecipeRecognitionInput]),
    __metadata("design:returntype", Object)
], AppController.prototype, "postRecipeRecognition", null);
__decorate([
    (0, common_1.Get)('/recipe/:id'),
    (0, swagger_1.ApiTags)('Recipe'),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: true,
        description: 'ID of the recipe',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Recipe information retrieved successfully',
        type: RecipeIdResponse,
    }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getRecipeInfo", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map