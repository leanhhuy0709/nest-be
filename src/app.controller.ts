import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiQuery, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

import {
  LoginResponse,
  UserInfo,
  Message,
  DiskInfo,
  RecipeInfo,
  SearchInput,
  SearchResponse,
  RecipeMatchingInput,
  RecipeMatchingResponse,
  WishlistResponse,
} from './common/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/user/login')
  @ApiTags('User')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string', example: 'john_doe' },
        password: { type: 'string', example: '123456' },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully logged in',
    type: LoginResponse,
  })
  @ApiResponse({
    status: 201,
    description: 'Successfully logged in',
    type: LoginResponse,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  postLogin(
    @Body() body: { username: string; password: string },
  ): LoginResponse {
    return this.appService.postLogin(body.username, body.password);
  }

  @Post('/user/logout')
  @ApiTags('User')
  @ApiResponse({
    status: 200,
    description: 'Logout successful',
    type: Message,
  })
  postLogout(): Message {
    return this.appService.postLogout();
  }

  @Get('/user/info')
  @ApiTags('User')
  @ApiResponse({
    status: 200,
    description: 'User information retrieved successfully',
    type: UserInfo,
  })
  @ApiQuery({
    name: 'token',
    required: true,
    description: 'Your access token',
  })
  getUserInfo(@Query('token') token: string): UserInfo | Message {
    return this.appService.getUserInfo(token);
  }

  @Get('/user/user_list')
  @ApiTags('User')
  @ApiResponse({
    status: 200,
    description: 'Users information retrieved successfully',
    type: [UserInfo],
  })
  @ApiQuery({
    name: 'token',
    required: true,
    description: 'Your access token',
  })
  getUserList(@Query('token') token: string): UserInfo[] | Message {
    return this.appService.getUserList(token);
  }

  @Get('/disk/disk')
  @ApiTags('Disk')
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'ID of the disk',
  })
  @ApiResponse({
    status: 200,
    description: 'Disk information retrieved successfully',
    type: DiskInfo,
  })
  getDiskInfo(@Query('id') id: string): DiskInfo | Message {
    return this.appService.getDiskInfo(id);
  }

  @Post('/disk/search')
  @ApiTags('Disk')
  @ApiResponse({
    status: 200,
    description: 'Search disk item successfully',
    type: SearchResponse,
  })
  postDiskSearch(@Body() payload: SearchInput): DiskInfo[] {
    // Implement logic to perform search based on the request payload
    return this.appService.postDiskSearch(payload.keyword, payload.filter);
  }

  @Post('/recipe/recognition')
  @ApiTags('Recipe')
  @ApiResponse({
    status: 200,
    description: 'Recipe recognition successfully',
    type: [RecipeInfo],
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        href: { type: 'string', example: 'http://your_image_link.com' },
      },
    },
  })
  postRecipeRecognition(
    @Body() requestPayload: { href: string },
  ): RecipeInfo[] {
    // Implement logic to perform recipe recognition based on the request payload
    return this.appService.postRecipeRecognition(requestPayload.href);
  }

  @Get('/recipe/recipe')
  @ApiTags('Recipe')
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'ID of the recipe',
  })
  @ApiResponse({
    status: 200,
    description: 'Recipe information retrieved successfully',
    type: RecipeInfo,
  })
  getRecipeInfo(@Query('id') id: string): RecipeInfo | Message {
    return this.appService.getRecipeInfo(id);
  }

  @Get('/user/wishlist')
  @ApiTags('User')
  @ApiQuery({
    name: 'token',
    required: true,
    description: 'Your access token',
  })
  @ApiResponse({
    status: 200,
    description: 'User wishlist (disk list) retrieved successfully',
    type: WishlistResponse,
  })
  getUserWishlist(@Query('token') token: string): WishlistResponse | Message {
    // Implement logic to retrieve user wishlist
    return this.appService.getUserWishlist(token);
  }

  @Post('/disk/recipe-matching')
  @ApiTags('Disk')
  @ApiResponse({
    status: 200,
    description: 'Recipe matching successful',
    type: [RecipeMatchingResponse],
  })
  postDiskRecipeMatching(
    @Body() requestPayload: RecipeMatchingInput,
  ): RecipeMatchingResponse[] {
    return this.appService.postDiskRecipeMatching(requestPayload.recipes);
  }
}
