export declare class AppService {
    getHello(): string;
    postLogin(username: string, password: string): {
        accessToken: string;
    };
    postLogout(): {
        message: string;
    };
    getUserInfo(): string;
    getUserWishlist(): string;
    getDiskInfo(id: string): string;
    postDiskRecipeMatching(payload: any): string;
    postDiskSearch(payload: any): string;
    postRecipeRecognition(payload: any): string;
    getRecipeInfo(payload: any): string;
}
