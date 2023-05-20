/*
Write an efficient algorithm that searches for a value in an m x n matrix.
This matrix has the following properties:
    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

### Example
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true


Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false

]
*/

"use strict";

const getNumber = (matrix, idx) => {
    let row = Math.floor(idx / matrix[0].length);
    let column = Math.floor(idx % matrix[0].length);
        
    return matrix[row][column];
};

var searchMatrix = function(matrix, target) {
    if (matrix === null || matrix.length === 0)  {
        return false;
    }

    let left = 0;
    let right = matrix.length * matrix[0].length - 1;
    
    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2); 
        let number = getNumber(matrix, middle);
        
        if (number === target) {
            return true; 
        }
        
        if (number > target) {
            right = middle - 1; 
        } else {
            left = middle + 1; 
        }
    }
    
    return false;
};

searchMatrix([[1,3,5,7],[10,11,20,20],[23,30,34,50]], 20);