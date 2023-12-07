"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecipeData = exports.getDiskData = exports.getUserData = void 0;
const fs = require("fs");
const rawData = fs.readFileSync('data/data.json', 'utf-8');
const jsonData = JSON.parse(rawData);
function getUserData() {
    return jsonData['users'];
}
exports.getUserData = getUserData;
function getDiskData() {
    return jsonData['disks'];
}
exports.getDiskData = getDiskData;
function getRecipeData() {
    return jsonData['recipes'];
}
exports.getRecipeData = getRecipeData;
//# sourceMappingURL=app.data.js.map