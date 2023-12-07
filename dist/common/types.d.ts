export declare class LoginResponse {
    token: string;
    message: string;
}
export declare class Message {
    message: string;
}
export declare class UserInfo {
    username: string;
    name: string;
    email: string;
    dob: Date;
    phone_number: string;
    wish_list: string[];
}
export declare class DiskInfo {
    id: string;
    name: string;
    recipes: string[];
    description: string;
    href: string;
}
export declare class RecipeInfo {
    id: string;
    name: string;
    href: string;
}
export declare class SearchInput {
    keyword: string;
    filter: string[];
}
export declare class SearchResponse {
    diskList: DiskInfo[];
}
export declare class RecipeMatchingInput {
    recipes: string[];
}
export declare class RecipeMatchingResponse {
    diskInfo: DiskInfo;
    matchingScore: number;
}
export declare class WishlistResponse {
    wishlist: string[];
}
