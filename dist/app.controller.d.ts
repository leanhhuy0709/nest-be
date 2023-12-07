import { AppService } from './app.service';
import { LoginResponse, UserInfo, Message, DiskInfo, RecipeInfo, SearchInput, RecipeMatchingInput, RecipeMatchingResponse, WishlistResponse } from './common/types';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    postLogin(body: {
        username: string;
        password: string;
    }): LoginResponse;
    postLogout(): Message;
    getUserInfo(token: string): UserInfo | Message;
    getUserList(token: string): UserInfo[] | Message;
    getDiskInfo(id: string): DiskInfo | Message;
    postDiskSearch(payload: SearchInput): DiskInfo[];
    postRecipeRecognition(requestPayload: {
        href: string;
    }): RecipeInfo[];
    getRecipeInfo(id: string): RecipeInfo | Message;
    getUserWishlist(token: string): WishlistResponse | Message;
    postDiskRecipeMatching(requestPayload: RecipeMatchingInput): RecipeMatchingResponse[];
}
