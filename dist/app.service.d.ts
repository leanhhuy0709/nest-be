export declare class AppService {
    getHello(): string;
    postLogin(username: string, password: string): {
        accessToken: string;
    };
    postLogout(): {
        message: string;
    };
    getUserInfo(): any;
    getUserWishlist(): any;
    getDiskInfo(id: string): any;
    postDiskRecipeMatching(payload: any): any;
    postDiskSearch(payload: any): any;
    postRecipeRecognition(payload: any): any;
    getRecipeInfo(payload: any): any;
}
