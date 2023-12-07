import { DiskInfo, LoginResponse, Message, RecipeInfo, RecipeMatchingResponse, UserInfo, WishlistResponse } from './common/types';
import { JwtService } from '@nestjs/jwt';
export declare class AppService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    postLogin(username: string, password: string): LoginResponse;
    postLogout(): Message;
    getUserInfo(token: string): UserInfo | Message;
    getUserList(token: string): UserInfo[] | Message;
    getDiskInfo(id: string): DiskInfo | Message;
    postDiskSearch(keyword: string, filter: string[]): DiskInfo[];
    postRecipeRecognition(href: string): RecipeInfo[];
    getRecipeInfo(id: string): RecipeInfo | Message;
    getUserWishlist(token: string): WishlistResponse | Message;
    postDiskRecipeMatching(recipeNames: string[]): RecipeMatchingResponse[];
}
