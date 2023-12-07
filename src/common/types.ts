import { ApiProperty } from '@nestjs/swagger';

export class LoginResponse {
  @ApiProperty({ example: 'your_access_token_here' })
  token: string;
  @ApiProperty({ example: 'Logged in successfully' })
  message: string;
}

export class Message {
  @ApiProperty({ example: 'your_message' })
  message: string;
}

export class UserInfo {
  @ApiProperty({ example: 'john_doe' })
  username: string;
  @ApiProperty({ example: 'John Doe' })
  name: string;
  @ApiProperty({ example: 'johndoe@example.com' })
  email: string;
  @ApiProperty({ example: '1990-01-01' })
  dob: Date;
  @ApiProperty({ example: '0123456789' })
  phone_number: string;
  @ApiProperty({ example: ['1', '2'] })
  wish_list: string[];
}

export class DiskInfo {
  @ApiProperty({ example: '1' })
  id: string;
  @ApiProperty({ example: 'Spicy Beef Stir-Fry' })
  name: string;
  @ApiProperty({
    example: ['Beef', 'Bell Peppers', 'Onions', 'Garlic', 'Soy Sauce'],
  })
  recipes: string[];
  @ApiProperty({
    example:
      'A delicious and spicy beef stir-fry with colorful bell peppers and onions.',
  })
  description: string;
  @ApiProperty({ example: 'href_to_image' })
  href: string;
}

export class RecipeInfo {
  @ApiProperty({ example: '1' })
  id: string;
  @ApiProperty({ example: 'Meat' })
  name: string;
  @ApiProperty({ example: 'href_to_image' })
  href: string;
}

export class SearchInput {
  // Define properties for the search response
  @ApiProperty({
    example: 'Beef',
  })
  keyword: string;
  @ApiProperty({
    example: ['Bell Peppers', 'Beef'],
  })
  filter: string[];
}

export class SearchResponse {
  // Define properties for the search response
  @ApiProperty({
    example: [
      {
        id: '1',
        name: 'Spicy Beef Stir-Fry',
        recipes: ['Beef', 'Bell Peppers', 'Onions', 'Garlic', 'Soy Sauce'],
        description:
          'A delicious and spicy beef stir-fry with colorful bell peppers and onions.',
        href: '',
      },
      {
        id: '2',
        name: 'Vegetarian Pasta Primavera',
        recipes: ['Pasta', 'Vegetables', 'Tomatoes', 'Garlic', 'Olive Oil'],
        description:
          'A light and flavorful pasta dish loaded with fresh vegetables and olive oil.',
        href: '',
      },
    ],
  })
  diskList: DiskInfo[];
}

export class RecipeMatchingInput {
  @ApiProperty({
    example: ['Beef', 'Bell Peppers'],
  })
  recipes: string[];
}

export class RecipeMatchingResponse {
  @ApiProperty({
    example: {
      id: '1',
      name: 'Spicy Beef Stir-Fry',
      recipes: ['Beef', 'Bell Peppers', 'Onions', 'Garlic', 'Soy Sauce'],
      description:
        'A delicious and spicy beef stir-fry with colorful bell peppers and onions.',
      href: '',
    },
  })
  diskInfo: DiskInfo;
  @ApiProperty({
    example: 100,
  })
  matchingScore: number;
}

export class WishlistResponse {
  @ApiProperty({
    example: ['1', '2'],
  })
  wishlist: string[];
}
