/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

### Example
11110
11010
11000
00000 -> 1

11000
11000
00100
00011 -> 3

### Review:

*/
"use strict";

const WATER = '0';
const LAND = '1';
const VISITED_LAND = '#';
const DIRECTIONS = [[-1, 0],[1, 0],[0, -1],[0, 1]]; 

var numIslands = function(grid) {
    let islandCount = 0;
    
    if (grid.length === 0 || grid[0].length === 0) {
        return islandCount;
    }

    for (let i = 0;  i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            
            if (grid[i][j] === LAND) {
                islandCount++;
            
                visit(grid, i, j);
            }
        }
    }
     
    return islandCount;
};

var visit = (grid, x, y) => {
    grid[x][y] = VISITED_LAND;
    
    for (let direction of DIRECTIONS) {
        const nextX = x + direction[0];
        const nextY = y + direction[1];
    
        if (nextX >=0 && nextX < grid.length && nextY >= 0 && nextY < grid[0].length && grid[nextX][nextY] === LAND) {
            grid[nextX][nextY] = VISITED_LAND;
            visit(grid, nextX, nextY);
        }
    }
};

