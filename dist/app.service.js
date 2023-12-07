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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const app_data_1 = require("./data/app.data");
const crypto_1 = require("crypto");
const jwt_1 = require("@nestjs/jwt");
let AppService = class AppService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    postLogin(username, password) {
        const userData = (0, app_data_1.getUserData)();
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].username === username &&
                userData[i].password === password) {
                const payload = { username };
                const token = this.jwtService.sign(payload);
                return {
                    token,
                    message: 'Logged in successfully',
                };
            }
        }
        return {
            token: '',
            message: 'Your username or password is incorrect!',
        };
    }
    postLogout() {
        return { message: 'Logout successful' };
    }
    getUserInfo(token) {
        const userData = (0, app_data_1.getUserData)();
        const payload = this.jwtService.decode(token);
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].username === payload.username)
                return userData[i];
        }
        return { message: 'User not found!' };
    }
    getUserList(token) {
        const userData = (0, app_data_1.getUserData)();
        const payload = this.jwtService.decode(token);
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].username === payload.username)
                return userData;
        }
        return { message: 'You do not have access!' };
    }
    getDiskInfo(id) {
        const diskData = (0, app_data_1.getDiskData)();
        for (let i = 0; i < diskData.length; i++) {
            if (diskData[i].id === id)
                return diskData[i];
        }
        return { message: 'Disk item not found!' };
    }
    postDiskSearch(keyword, filter) {
        const diskData = (0, app_data_1.getDiskData)();
        const result = [];
        for (let i = 0; i < diskData.length; i++) {
            if (diskData[i].name.includes(keyword)) {
                for (let j = 0; j < filter.length; j++) {
                    if (diskData[i].recipes.indexOf(filter[j]) == -1) {
                        break;
                    }
                    if (j === filter.length - 1) {
                        result.push(diskData[i]);
                    }
                }
            }
        }
        return result;
    }
    postRecipeRecognition(href) {
        const recipeData = (0, app_data_1.getRecipeData)();
        const maxRecipeNumber = 10 < recipeData.length ? 10 : recipeData.length;
        const rdNumber = (0, crypto_1.randomInt)(maxRecipeNumber);
        const temp = [];
        for (let i = 0; i < rdNumber; i++) {
            let rd = (0, crypto_1.randomInt)(recipeData.length);
            while (temp.indexOf(rd) != -1) {
                rd = (0, crypto_1.randomInt)(recipeData.length);
            }
            temp.push(rd);
        }
        const result = [];
        for (let i = 0; i < temp.length; i++) {
            result.push(recipeData[temp[i]]);
        }
        return result;
    }
    getRecipeInfo(id) {
        const recipeData = (0, app_data_1.getRecipeData)();
        for (let i = 0; i < recipeData.length; i++) {
            if (recipeData[i].id === id)
                return recipeData[i];
        }
        return { message: 'Recipe item not found!' };
    }
    getUserWishlist(token) {
        const userData = (0, app_data_1.getUserData)();
        const payload = this.jwtService.decode(token);
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].username === payload.username)
                return {
                    wishlist: userData[i].wish_list,
                };
        }
        return { message: 'User not found!' };
    }
    postDiskRecipeMatching(recipeNames) {
        const diskData = (0, app_data_1.getDiskData)();
        const result = [];
        for (let i = 0; i < diskData.length; i++) {
            let matchingScore = 0;
            for (let j = 0; j < recipeNames.length; j++) {
                if (diskData[i].recipes.indexOf(recipeNames[j]) != -1) {
                    matchingScore++;
                }
            }
            matchingScore = Math.round((matchingScore * 100) / recipeNames.length);
            if (matchingScore > 0)
                result.push({
                    diskInfo: diskData[i],
                    matchingScore,
                });
        }
        return result;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map