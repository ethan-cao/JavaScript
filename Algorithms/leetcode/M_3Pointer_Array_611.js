/*
Given an array consists of non-negative integers,
count the number of triplets chosen from the array that can make triangles
if we take them as side lengths of a triangle.

The length of the given array won't exceed 1000.
The integers in the given array are in the range of [0, 1000].

### Example
[2,2,3,4] -> 3
Explanation:
Valid combinations are:
2,3,4 (using the first 2)
2,2,3
2,3,4 (using the second 2)

*/

// 460ms
var triangleNumber = function(nums) {
    let count = 0; 
    
    nums.sort((a, b) => a-b) ; 

    const isValid = (a, b, c) => ( a+b>c && a+c>b && b+c>a );
    
    for (let i = 0; i < nums.length-2; ++i) {
        
        for (let j = i+1; j < nums.length-1; ++j) {
            for (let k = j+1; k < nums.length; ++k) {
                if (isValid(nums[i], nums[j], nums[k])) {
                    count++;
                }
            }
        }
    }

    return count;         
};

// 76ms
var triangleNumber1 = function(nums) {
    let count = 0;
    
    nums.sort((a,b)=> a-b);
    
    for (let right = nums.length; right > 1; --right) {
        let middle = right - 1;
        let left = 0;
        
        while (left < middle) {
            if (nums[left] + nums[middle] > nums[right]) {
                count += middle - left;
                middle--;
            } else {
                left++; 
            }
        }
    }
        
    return count; 
}


//
var triangleNumber2 = function(nums) {
}