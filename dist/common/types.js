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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistResponse = exports.RecipeMatchingResponse = exports.RecipeMatchingInput = exports.SearchResponse = exports.SearchInput = exports.RecipeInfo = exports.DiskInfo = exports.UserInfo = exports.Message = exports.LoginResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoginResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'your_access_token_here' }),
    __metadata("design:type", String)
], LoginResponse.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Logged in successfully' }),
    __metadata("design:type", String)
], LoginResponse.prototype, "message", void 0);
exports.LoginResponse = LoginResponse;
class Message {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'your_message' }),
    __metadata("design:type", String)
], Message.prototype, "message", void 0);
exports.Message = Message;
class UserInfo {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john_doe' }),
    __metadata("design:type", String)
], UserInfo.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    __metadata("design:type", String)
], UserInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'johndoe@example.com' }),
    __metadata("design:type", String)
], UserInfo.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1990-01-01' }),
    __metadata("design:type", Date)
], UserInfo.prototype, "dob", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0123456789' }),
    __metadata("design:type", String)
], UserInfo.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['1', '2'] }),
    __metadata("design:type", Array)
], UserInfo.prototype, "wish_list", void 0);
exports.UserInfo = UserInfo;
class DiskInfo {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], DiskInfo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Spicy Beef Stir-Fry' }),
    __metadata("design:type", String)
], DiskInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Beef', 'Bell Peppers', 'Onions', 'Garlic', 'Soy Sauce'],
    }),
    __metadata("design:type", Array)
], DiskInfo.prototype, "recipes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'A delicious and spicy beef stir-fry with colorful bell peppers and onions.',
    }),
    __metadata("design:type", String)
], DiskInfo.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'href_to_image' }),
    __metadata("design:type", String)
], DiskInfo.prototype, "href", void 0);
exports.DiskInfo = DiskInfo;
class RecipeInfo {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], RecipeInfo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Meat' }),
    __metadata("design:type", String)
], RecipeInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'href_to_image' }),
    __metadata("design:type", String)
], RecipeInfo.prototype, "href", void 0);
exports.RecipeInfo = RecipeInfo;
class SearchInput {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Beef',
    }),
    __metadata("design:type", String)
], SearchInput.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Bell Peppers', 'Beef'],
    }),
    __metadata("design:type", Array)
], SearchInput.prototype, "filter", void 0);
exports.SearchInput = SearchInput;
class SearchResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                id: '1',
                name: 'Spicy Beef Stir-Fry',
                recipes: ['Beef', 'Bell Peppers', 'Onions', 'Garlic', 'Soy Sauce'],
                description: 'A delicious and spicy beef stir-fry with colorful bell peppers and onions.',
                href: '',
            },
            {
                id: '2',
                name: 'Vegetarian Pasta Primavera',
                recipes: ['Pasta', 'Vegetables', 'Tomatoes', 'Garlic', 'Olive Oil'],
                description: 'A light and flavorful pasta dish loaded with fresh vegetables and olive oil.',
                href: '',
            },
        ],
    }),
    __metadata("design:type", Array)
], SearchResponse.prototype, "diskList", void 0);
exports.SearchResponse = SearchResponse;
class RecipeMatchingInput {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Beef', 'Bell Peppers'],
    }),
    __metadata("design:type", Array)
], RecipeMatchingInput.prototype, "recipes", void 0);
exports.RecipeMatchingInput = RecipeMatchingInput;
class RecipeMatchingResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '1',
            name: 'Spicy Beef Stir-Fry',
            recipes: ['Beef', 'Bell Peppers', 'Onions', 'Garlic', 'Soy Sauce'],
            description: 'A delicious and spicy beef stir-fry with colorful bell peppers and onions.',
            href: '',
        },
    }),
    __metadata("design:type", DiskInfo)
], RecipeMatchingResponse.prototype, "diskInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 100,
    }),
    __metadata("design:type", Number)
], RecipeMatchingResponse.prototype, "matchingScore", void 0);
exports.RecipeMatchingResponse = RecipeMatchingResponse;
class WishlistResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['1', '2'],
    }),
    __metadata("design:type", Array)
], WishlistResponse.prototype, "wishlist", void 0);
exports.WishlistResponse = WishlistResponse;
//# sourceMappingURL=types.js.map