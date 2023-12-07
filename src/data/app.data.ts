import * as fs from 'fs';
import { DiskInfo, RecipeInfo } from 'src/common/types';
const rawData = fs.readFileSync('data/data.json', 'utf-8');
const jsonData = JSON.parse(rawData);

export function getUserData(): any {
  return jsonData['users'];
}

export function getDiskData(): DiskInfo[] {
  return jsonData['disks'];
}

export function getRecipeData(): RecipeInfo[] {
  return jsonData['recipes'];
}
