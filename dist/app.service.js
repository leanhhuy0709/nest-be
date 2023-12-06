"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello world! This is a test code!';
    }
    postLogin(username, password) {
        return {
            accessToken: username + password,
        };
    }
    postLogout() {
        return { message: 'Logout successful' };
    }
    getUserInfo() {
        return { name: 'your_name', dob: 'dob', gender: 'gender' };
    }
    getUserWishlist() {
        return [
            {
                name: 'food_name',
                description: 'description',
                recipe: 'recipe',
            },
        ];
    }
    getDiskInfo(id) {
        return {
            name: 'food_name',
            description: 'description',
            recipe: 'recipe',
        };
    }
    postDiskRecipeMatching(payload) {
        return [
            {
                id: 'string',
                name: 'string',
                matchingScore: 0,
            },
        ];
    }
    postDiskSearch(payload) {
        return [
            {
                name: 'food_name',
                description: 'description',
                recipe: 'recipe',
            },
        ];
    }
    postRecipeRecognition(payload) {
        return ['recipe1', 'recipe2'];
    }
    getRecipeInfo(payload) {
        return 'recipe_name';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map