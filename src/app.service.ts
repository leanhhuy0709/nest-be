import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world! This is a test code!';
  }

  postLogin(
    username: string,
    password: string,
  ): {
    accessToken: string;
  } {
    return {
      accessToken: username + password,
    };
  }

  postLogout(): {
    message: string;
  } {
    return { message: 'Logout successful' };
  }

  getUserInfo(): any {
    return { name: 'your_name', dob: 'dob', gender: 'gender' };
  }

  getUserWishlist(): any {
    return [
      {
        name: 'food_name',
        description: 'description',
        recipe: 'recipe',
      },
    ];
  }

  getDiskInfo(id: string): any {
    return {
      name: 'food_name',
      description: 'description',
      recipe: 'recipe',
    };
  }

  postDiskRecipeMatching(payload: any): any {
    return [
      {
        id: 'string',
        name: 'string',
        matchingScore: 0,
      },
    ];
  }

  postDiskSearch(payload: any): any {
    return [
      {
        name: 'food_name',
        description: 'description',
        recipe: 'recipe',
      },
    ];
  }

  postRecipeRecognition(payload: any): any {
    return ['recipe1', 'recipe2'];
  }

  getRecipeInfo(payload: any): any {
    return 'recipe_name';
  }
}
