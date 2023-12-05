import { Body, Controller, Get, Post, Query, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiQuery, ApiResponse, ApiProperty, ApiTags } from '@nestjs/swagger';

class LoginResponse {
  @ApiProperty({ example: 'your_access_token_here' })
  accessToken: string;
}

class Message {
  @ApiProperty({ example: 'Successful' })
  message: string;
}

class UserInfo {
  @ApiProperty({
    example: { name: 'your_name', dob: 'dob', gender: 'gender' },
  })
  payload: string;
}

class WishlistResponse {
  // Define properties for the wishlist response (food list)
  @ApiProperty({
    examples: [
      {
        name: 'food_name',
        description: 'description',
        recipe: 'recipe',
      },
    ],
  })
  payload: string;
}

class DiskInfoResponse {
  // Define properties for the disk information response
  @ApiProperty({
    examples: {
      name: 'food_name',
      description: 'description',
      recipe: 'recipe',
    },
  })
  payload: string;
}

class RecipeMatchingInput {
  // Define properties for the recipe matching response
  @ApiProperty({
    example: [
      {
        id: 'food_id_1',
      },
      {
        id: 'food_id_2',
      },
    ],
  })
  recipes: string[];
}

class RecipeMatchingResponse {
  // Define properties for the recipe matching response
  @ApiProperty({
    example: [
      {
        id: 'string',
        name: 'string',
        matchingScore: 0,
      },
    ],
  })
  disks: string[];
}

class SearchInput {
  // Define properties for the search response
  @ApiProperty({
    example: { keyword: 'your_keyword', filter: ['rice', 'meat'] },
  })
  payload: string;
}

class SearchResponse {
  // Define properties for the search response
  @ApiProperty({
    example: [
      {
        name: 'food_name',
        description: 'description',
        recipe: 'recipe',
      },
    ],
  })
  foodList: DiskInfoResponse[];
}

class RecipeRecognitionInput {
  // Define properties for the recipe recognition response
  @ApiProperty({ example: 'your_image_href' })
  imageHref: string;
}

class RecipeRecognitionResponse {
  // Define properties for the recipe recognition response
  @ApiProperty({ example: ['recipe1', 'recipe2'] })
  recipeList: string[];
}

class RecipeIdResponse {
  // Define properties for the recipe ID response
  @ApiProperty({ example: 'recipe_name' })
  recipe: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/user/login')
  @ApiTags('User')
  @ApiQuery({
    name: 'username',
    required: true,
    description: 'Username for login',
  })
  @ApiQuery({
    name: 'password',
    required: true,
    description: 'Password for login',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully logged in',
    type: LoginResponse,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  postLogin(
    @Query('username') username: string,
    @Query('password') password: string,
  ): { accessToken: string } {
    return this.appService.postLogin(username, password);
  }

  @Post('/user/logout')
  @ApiTags('User')
  @ApiResponse({
    status: 200,
    description: 'Logout successful',
    type: Message,
  })
  postLogout(): {
    message: string;
  } {
    return this.appService.postLogout();
  }

  @Put('/user/info')
  @ApiTags('User')
  @ApiResponse({
    status: 200,
    description: 'Update user information successfully',
    type: Message,
  })
  updateUserInfo(@Body() requestPayload: UserInfo): any {
    // Implement logic to retrieve user information
    return this.appService.getUserInfo();
  }

  @Get('/user/info')
  @ApiTags('User')
  @ApiResponse({
    status: 200,
    description: 'User information retrieved successfully',
    type: UserInfo,
  })
  getUserInfo(): any {
    // Implement logic to retrieve user information
    return this.appService.getUserInfo();
  }

  @Get('/user/wishlist')
  @ApiTags('User')
  @ApiResponse({
    status: 200,
    description: 'User wishlist (food list) retrieved successfully',
    type: WishlistResponse,
  })
  getUserWishlist(): any {
    // Implement logic to retrieve user wishlist
    return this.appService.getUserWishlist();
  }

  @Get('/disk/:id')
  @ApiTags('Disk')
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'ID of the disk',
  })
  @ApiResponse({
    status: 200,
    description: 'Disk information retrieved successfully',
    type: DiskInfoResponse,
  })
  getDiskInfo(@Query('id') id: string): any {
    // Implement logic to retrieve disk information based on the provided ID
    return this.appService.getDiskInfo(id);
  }

  @Post('/disk/recipe-matching')
  @ApiTags('Disk')
  @ApiResponse({
    status: 200,
    description: 'Recipe matching successful',
    type: RecipeMatchingResponse,
  })
  postDiskRecipeMatching(@Body() requestPayload: RecipeMatchingInput): any {
    // Implement logic to perform recipe matching based on the request payload
    return this.appService.postDiskRecipeMatching(requestPayload);
  }

  @Post('/disk/search')
  @ApiTags('Disk')
  @ApiResponse({
    status: 200,
    description: 'Search successful',
    type: SearchResponse,
  })
  postDiskSearch(@Body() requestPayload: SearchInput): any {
    // Implement logic to perform search based on the request payload
    return this.appService.postDiskSearch(requestPayload);
  }

  @Post('/recipe/recognition')
  @ApiTags('Recipe')
  @ApiResponse({
    status: 200,
    description: 'Recipe recognition successful',
    type: RecipeRecognitionResponse,
  })
  postRecipeRecognition(@Body() requestPayload: RecipeRecognitionInput): any {
    // Implement logic to perform recipe recognition based on the request payload
    return this.appService.postRecipeRecognition(requestPayload);
  }

  @Get('/recipe/:id')
  @ApiTags('Recipe')
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'ID of the recipe',
  })
  @ApiResponse({
    status: 200,
    description: 'Recipe information retrieved successfully',
    type: RecipeIdResponse,
  })
  getRecipeInfo(@Query('id') id: string): any {
    // Implement logic to retrieve recipe information based on the provided ID
    return this.appService.getRecipeInfo(id);
  }
}
