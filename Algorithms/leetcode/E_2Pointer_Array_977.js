/*
Given an array of integers A sorted in non-decreasing order,
return an array of the squares of each number, also in sorted non-decreasing order.

1 <= A.length <= 10000
-10000 <= A[i] <= 10000

### Example
[-4,-1,0,3,10] -> [0,1,9,16,100]
[-7,-3,2,3,11] -> [4,9,9,49,121]

### Review:

*/

var sortedSquares = function(A) {
    const sortedSquares = [];  
    
    let left = 0;
    let right = A.length - 1;
    
    for (let i = A.length - 1; i >= 0 && left <= right; --i) {
        if (Math.abs(A[left]) < Math.abs(A[right])) {
            sortedSquares[i] = A[right] * A[right];
            right--;
        } else {
            sortedSquares[i] = A[left] * A[left];
            left++;
        }
    }
    
    return sortedSquares; 
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));