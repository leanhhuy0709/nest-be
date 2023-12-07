import { Injectable } from '@nestjs/common';
import { getDiskData, getRecipeData, getUserData } from './data/app.data';
import {
  DiskInfo,
  LoginResponse,
  Message,
  RecipeInfo,
  RecipeMatchingResponse,
  UserInfo,
  WishlistResponse,
} from './common/types';
import { randomInt } from 'crypto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AppService {
  constructor(private readonly jwtService: JwtService) {}
  postLogin(username: string, password: string): LoginResponse {
    const userData = getUserData();
    for (let i = 0; i < userData.length; i++) {
      if (
        userData[i].username === username &&
        userData[i].password === password
      ) {
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

  postLogout(): Message {
    return { message: 'Logout successful' };
  }

  getUserInfo(token: string): UserInfo | Message {
    const userData = getUserData() as UserInfo[];
    const payload = this.jwtService.decode(token) as {
      username: string;
    };
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].username === payload.username) return userData[i];
    }
    return { message: 'User not found!' };
  }

  getUserList(token: string): UserInfo[] | Message {
    const userData = getUserData() as UserInfo[];
    const payload = this.jwtService.decode(token) as {
      username: string;
    };
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].username === payload.username) return userData;
    }
    return { message: 'You do not have access!' };
  }

  getDiskInfo(id: string): DiskInfo | Message {
    const diskData = getDiskData();

    for (let i = 0; i < diskData.length; i++) {
      if (diskData[i].id === id) return diskData[i];
    }
    return { message: 'Disk item not found!' };
  }

  postDiskSearch(keyword: string, filter: string[]): DiskInfo[] {
    const diskData = getDiskData();
    const result: DiskInfo[] = [];
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  postRecipeRecognition(href: string): RecipeInfo[] {
    const recipeData = getRecipeData();
    const maxRecipeNumber = 10 < recipeData.length ? 10 : recipeData.length;
    const rdNumber = randomInt(maxRecipeNumber);
    const temp = [];
    for (let i = 0; i < rdNumber; i++) {
      let rd = randomInt(recipeData.length);
      while (temp.indexOf(rd) != -1) {
        rd = randomInt(recipeData.length);
      }
      temp.push(rd);
    }
    const result: RecipeInfo[] = [];
    for (let i = 0; i < temp.length; i++) {
      result.push(recipeData[temp[i]]);
    }
    return result;
  }

  getRecipeInfo(id: string): RecipeInfo | Message {
    const recipeData = getRecipeData();

    for (let i = 0; i < recipeData.length; i++) {
      if (recipeData[i].id === id) return recipeData[i];
    }
    return { message: 'Recipe item not found!' };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUserWishlist(token: string): WishlistResponse | Message {
    const userData = getUserData() as UserInfo[];
    const payload = this.jwtService.decode(token) as {
      username: string;
    };
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].username === payload.username)
        return {
          wishlist: userData[i].wish_list,
        };
    }

    return { message: 'User not found!' };
  }

  postDiskRecipeMatching(recipeNames: string[]): RecipeMatchingResponse[] {
    const diskData = getDiskData() as DiskInfo[];
    const result: RecipeMatchingResponse[] = [];
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
}
