/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ?
Find all unique triplets in the array which gives the sum of zero.

The solution set must not contain duplicate triplets.

### Example
[-1, 0, 1, 2, -1, -4]
A solution set is:
[  [-1, 0, 1],
   [-1, -1, 2] ]
   
*/

var threeSum = function(nums) {
    const solutions = [];
    
    nums.sort((a,b)=>a-b);
    
    for (let left = 0; left < nums.length - 2; ++left) {
        if (nums[left] + nums[left+1] + nums[left+2] > 0) {
            break;
        }
        
        if (left > 0 && nums[left] === nums[left-1]) {
            continue;
        }
        
        let middle = left + 1;
        let right = nums.length - 1;
        
        while (middle < right) {
            let sum = nums[left] + nums[middle] + nums[right];

            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                middle++;
            } else {
                solutions.push([nums[left], nums[middle], nums[right]]);  
               
                while (nums[middle] === nums[middle+1] && right + 1 > middle) middle++;
                middle++;
                
                while (nums[right] === nums[right-1] && right + 1 > middle) right--;
                right--;
            }
        }
    }
    
    return solutions;
};

threeSum([-1, 0, 1, 2, -1, -4]).forEach(a => console.log(a.toString()));
