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
    const solution = [];
    
    nums.sort((a,b) => a-b);
    
    for (let left = 0; left < nums.length - 2; ++left) {
       
        if (left > 0 && nums[left] === nums[left-1]) continue;
        
        if (nums[left] + nums[nums.length-1]*2 < 0)  continue;
        
        if (nums[left] * 3 > 0) break;
        
        let middle = left + 1; 
        let right = nums.length - 1 ;
        
        while (middle < right) {
            if (nums[left] + nums[middle] + nums[right] > 0) {
                while(nums[right] === nums[right-1] ) right--;
                right--;
            } else if (nums[left] + nums[middle] + nums[right] < 0) {
                while(nums[middle] === nums[middle+1]) middle++;
                middle++;
            } else {
                solution.push( [nums[left], nums[middle], nums[right]] ); 
                
                // move either middle or right to get a different combination
                
                while(nums[middle] === nums[middle+1]) middle++;
                middle++;
                
                while(nums[right] === nums[right-1] ) right--;
                right--;
            }
        }  
    }
     
    return solution;
};

threeSum([-1, 0, 1, 2, -1, -4]).forEach(a => console.log(a.toString()));
