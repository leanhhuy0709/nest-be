import { AppService } from './app.service';
declare class UserInfo {
    payload: string;
}
declare class RecipeMatchingInput {
    recipes: string[];
}
declare class SearchInput {
    payload: string;
}
declare class RecipeRecognitionInput {
    imageHref: string;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    postLogin(username: string, password: string): {
        accessToken: string;
    };
    postLogout(): {
        message: string;
    };
    updateUserInfo(token: string, requestPayload: UserInfo): any;
    getUserInfo(token: string): any;
    getUserWishlist(token: string): any;
    getDiskInfo(id: string): any;
    postDiskRecipeMatching(requestPayload: RecipeMatchingInput): any;
    postDiskSearch(requestPayload: SearchInput): any;
    postRecipeRecognition(requestPayload: RecipeRecognitionInput): any;
    getRecipeInfo(id: string): any;
}
export {};
