/**
 * @param {number[]} A
 * @return {number[]}
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