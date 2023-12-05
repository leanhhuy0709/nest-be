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
      accessToken: 'thisIsToken',
    };
  }

  postLogout(): {
    message: string;
  } {
    return { message: 'Logout successful' };
  }

  getUserInfo(): string {
    return 'Testing API';
  }

  getUserWishlist(): string {
    return 'Testing API';
  }

  getDiskInfo(id: string): string {
    return 'Testing API';
  }

  postDiskRecipeMatching(payload: any): string {
    return 'Testing API';
  }

  postDiskSearch(payload: any): string {
    return 'Testing API';
  }

  postRecipeRecognition(payload: any): string {
    return 'Testing API';
  }

  getRecipeInfo(payload: any): string {
    return 'Testing API';
  }
}
